/* eslint-disable react/jsx-boolean-value,no-sequences */
import React from 'react';
import {
  Table,
  Modal,
  Pagination,
  Button,
} from 'antd';
import QuerySetting from './query-setting';
import PsnCard from './psn-card';
import SelectCondition from './select-condition';
import '../assets/styles/select-condition.less';

export default ({
  tableData,
  actions,
  search,
  loading, dynamicTableCols, selectConditionModel, querySettingModel, allDisplayItems,
  lastSetQueryItems, psnCardModel, record, detailRecord, infoSetList, conditionIsSelect,
  selectedConditions,
}) => {
  const {
    isQuerySetModeShow,
    isSelectConditionModelShow,
    listTable,
    updateLastSetQueryItems,
    updateDynamicTableCols,
    updateQuerySetItems,
    isPsnCardModelShow,
    getRecord,
  } = actions;
  const onClickView = (_, row) => {
    isPsnCardModelShow(true);
    getRecord(row);
  };

  const onClickAdvancedQuery = () => {
    isSelectConditionModelShow(true);
  };

  const onClickSetQuery = () => {
    isQuerySetModeShow(true);
  };

  const data = tableData.records;

  let tableWidth = document.body.scrollWidth;
  const onItemSetOk = (e) => {
    e.preventDefault();
    // 1.计算dynamicTableCols
    // 2.记录本次选中的条件
    const dynamicCols = [];
    const newCheckedQueryItems = [];
    for (let i = 0; i < allDisplayItems.length; i += 1) {
      if (allDisplayItems[i].isCheck) {
        newCheckedQueryItems.push(allDisplayItems[i].key);
        dynamicCols.push(allDisplayItems[i]);
      }
    }
    updateLastSetQueryItems(newCheckedQueryItems);
    updateDynamicTableCols(dynamicCols);
    isQuerySetModeShow(false);
  };
  const onItemSetCancel = (e) => {
    e.preventDefault();
    // 重置上一次选中的字段
    const newDisplayItems = [];

    for (let i = 0; i < allDisplayItems.length; i += 1) {
      const item = allDisplayItems[i];
      for (let j = 0; j < lastSetQueryItems.length; j += 1) {
        if (item.key === lastSetQueryItems[j]) {
          item.isCheck = true;
          break;
        } else {
          item.isCheck = false;
        }
      }
      newDisplayItems.push(item);
    }
    updateQuerySetItems(newDisplayItems);
    isQuerySetModeShow(false);
  };
  const onPsnCardCancel = (e) => {
    e.preventDefault();
    isPsnCardModelShow(false);
  };

  const onPsnCardOk = (e) => {
    onPsnCardCancel(e);
  };
  const onAdvancedSelectOk = () => {
    isSelectConditionModelShow(false);
  };
  const onAdvancedSelectCancel = () => {
    isSelectConditionModelShow(false);
  };

  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };

  const { current, total, size } = tableData;
  // 固定列
  const tableCols = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 50,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'left',
    width: 250,
  }, {
    title: '姓名',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'left',
    width: 100,
  }, {
    title: '员工编号',
    dataIndex: 'employeeNumber',
    key: 'employeeNumber',
    align: 'left',
    width: 100,
  },
  {
    title: '用工类型',
    dataIndex: 'userPersonType',
    key: 'userPersonType',
    align: 'left',
    width: 100,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
    width: 100,
  }, {
    title: '出生日期',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
    align: 'center',
    width: 100,
  },
  ];

  /**
   *  构建人员列表字段，由固定部分和动态设置部分组成
   * @returns {Array}
   */
  function buildTableCols() {
    const children = [];
    let tempTableWidth = 100;

    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
      tempTableWidth += tableCols[i].width;
    }

    if (dynamicTableCols.length > 0) {
      for (let i = 0; i < dynamicTableCols.length; i += 1) {
        children.push(dynamicTableCols[i]);
        tempTableWidth += dynamicTableCols[i].width;
      }
    }

    children.push(
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        width: 100,
        fixed: 'right',
        render: (text, row) => (
          <span>
            <a href="jacascript:void(0);" onClick={() => onClickView(text, row)}>详情</a>
          </span>
        ),
      },
    );

    tableWidth = tempTableWidth;
    return children;
  }

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <div>
      <Button.Group>
        <Button type="primary" style={{ margin: '10px 0' }} onClick={onClickAdvancedQuery}>高级查询</Button>
        <Button type="primary" style={{ margin: '10px 0' }} onClick={onClickSetQuery}>设置查询</Button>
      </Button.Group>
      &nbsp;&nbsp;
      <Button.Group>
        <Button type="primary" style={{ margin: '10px 0' }}>简历下载</Button>
        <Button type="primary" style={{ margin: '10px 0' }}>导出数据</Button>
      </Button.Group>
      <Table
        rowSelection={rowSelection}
        rowKey="personId"
        columns={buildTableCols()}
        loading={loading}
        dataSource={data}
        pagination={false}
        size="small"
        bordered
        scroll={{ x: tableWidth, y: document.body.clientHeight - 460 }}
      />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        showTotal={tota => `共 ${tota} 条`}
        showSizeChanger
        pageSizeOptions={['10', '50', '100', '200']}
        style={{ marginTop: 10, marginRight: 20, float: 'right' }}
      />
      <Modal
        title="查询项目设置"
        visible={querySettingModel}
        maskClosable={false}
        width={600}
        height={500}
        centered={true}
        onCancel={onItemSetCancel}
        onOk={onItemSetOk}
      >
        <QuerySetting allDisplayItems={allDisplayItems} actions={actions} />
      </Modal>
      <Modal
        className="selectcondition"
        title="选择条件"
        visible={selectConditionModel}
        maskClosable={false}
        width={800}
        centered={true}
        onCancel={onAdvancedSelectCancel}
        onOk={onAdvancedSelectOk}
      >
        <SelectCondition
          selectedConditions={selectedConditions}
          conditionIsSelect={conditionIsSelect}
          actions={actions}
        />
      </Modal>
      <Modal
        title="人员信息"
        visible={psnCardModel}
        maskClosable={false}
        width="95%"
        onCancel={onPsnCardCancel}
        onOk={onPsnCardOk}
        bodyStyle={{ padding: '12px' }}
      >
        <PsnCard
          actions={actions}
          record={record}
          detailRecord={detailRecord}
          infoSetList={infoSetList}
        />
      </Modal>
    </div>
  );
};
