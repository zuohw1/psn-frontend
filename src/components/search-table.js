import React from 'react';
import {
  Input, Pagination, Table, Row,
} from 'antd';
import request from '../utils/request';

/**
 * 表格参照
 * <SearchTable
 * columns={refColumns}//表格显示字段
 * refUrl={refUrl}//请求url
 * rowSelection={rowSelection}//行属性
 * const rowSelection = {
    type:'radio',//radio、checkbox
    onSelect: (row, selected, selectedRows) => {
      console.log(row);
      refCodes.map((item) => {
        record[item.code] = row[item.refcode];
      });
    },
  }
 * />
 */
class SearchTable extends React.PureComponent {
  state = {
    search: {
      pageNumber: 1,
      pageSize: 10,
    },
    refData: {
      current: 1, pages: 0, records: Array(0), size: 10, total: 0,
    },
  };

  async componentDidMount() {
    const { refUrl } = this.props;
    const { search } = this.state;
    let url = `${refUrl}?pageNumber=${search.pageNumber}&pageSize=${search.pageSize}`;
    if (search.name && search.name !== '') {
      url += `&name=${search.name}`;
    }
    const tableData = await request.get(url);
    const formatTable = this.formatTableData(tableData);
    this.setState({ refData: formatTable });
  }

  formatTableData = (tableData) => {
    const num = tableData.current * 10 - 10;
    const table = tableData.records.map((item, index) => {
      return { ...item, key: index + 1 + num };
    });
    return { ...tableData, records: table };
  };

  onSearch = (value) => {
    const { refUrl } = this.props;
    const { search } = this.state;
    const searchF = { ...search, name: value };
    this.refreshData(refUrl, searchF);
  };

  onChangePage = (pageNumber, pageSize) => {
    const { refUrl } = this.props;
    const { search } = this.state;
    const searchF = { ...search, pageSize, pageNumber };
    this.refreshData(refUrl, searchF);
  };

  onChangePageSize = (current, size) => {
    const { refUrl } = this.props;
    const { search } = this.state;
    const searchF = { ...search, pageSize: size, pageNumber: current };
    this.refreshData(refUrl, searchF);
  };

  refreshData = (refUrl, search) => {
    return new Promise(async (resolve) => {
      let url = `${refUrl}?pageNumber=${search.pageNumber}&pageSize=${search.pageSize}`;
      if (search.name && search.name !== '') {
        url += `&name=${search.name}`;
      }
      const tableData = await request.get(url);
      const formatTable = this.formatTableData(tableData);
      this.setState({ refData: formatTable });
      resolve();
    });
  };

  render() {
    const { columns, rowSelection } = this.props;
    const { refData } = this.state;
    const {
      current, size, total, records,
    } = refData;

    return (
      <div>
        <Input.Search style={{ width: '300px', marginBottom: '5px' }} placeholder="Search" onSearch={this.onSearch} />
        <Row>
          <Table
            columns={columns}
            dataSource={records}
            size="small"
            rowSelection={rowSelection}
          />
          <Pagination
            size="small"
            showQuickJumper
            current={current}
            total={total}
            pageSize={size}
            onChange={this.onChangePage}
            onShowSizeChange={this.onChangePageSize}
            showTotal={tota => `共 ${tota} 条`}
            showSizeChanger
            style={{ marginTop: 10, float: 'right' }}
          />
        </Row>
      </div>
    );
  }
}

export default SearchTable;
