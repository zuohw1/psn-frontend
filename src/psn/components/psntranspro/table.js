/* eslint-disable */
import React from 'react';
import { Pagination, Table } from 'antd';
import request from '../../../utils/request';

class CurrencyTable extends React.PureComponent {
  state = {
    search: {
      pageNumber: 1,
      pageSize: 10,
    },
    refData: [],
    userName: '',
    key: 0,
    code: this.props.sta.code,
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
  };

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
  rowClick=(record, index) =>{
      console.log(record, index);
      console.log(this.state.code);
      this.setState({
        code: record.ATTRIBUTE4
      })
      this.setState({
        userName: record.name
      })
      this.setState({
        key: record.key
      })
      var aLi = document.getElementsByClassName("ant-table-row-level-0");
      for(var i = 0; i < aLi.length; i ++){
        aLi[i].classList.remove("row-selected");
        if(i === index){
          aLi[i].className += ' row-selected';
        }
      }
  };

  render() {
    const { columns, rowSelection } = this.props;
    const { refData } = this.state;
    const {
      current, size, total, records,
    } = refData;
    console.log(this.props)

    return (
      <div>
        <Table
          columns={columns}
          dataSource={records}
          pagination={false}
          size="small"
          rowSelection={rowSelection}
          onRowClick={this.rowClick}
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
      </div>
    );
  }
}

export default CurrencyTable;
