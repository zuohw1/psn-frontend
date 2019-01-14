import React from 'react';
import {
  Table, Pagination, Button, Input, Modal,
} from 'antd';
import Model from './card';
import AddProfDivision from './modify';

export default (props) => {
  const {
    tableData,
    search,
    actions,
    form,
    modal,
    addProfModal,
    isPrimaryShow,
    primaryBusinessData,
    leftCardTree,
    showAlert,
  } = props;
  const data = tableData.records;
  const {
    listTable, setModeShow, isAlertShow, isAddprofModalShow,
  } = actions;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const onChange = (pageSize, pageNumber) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };
  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };
  const { current, total, size } = tableData;
  // 新增
  const onClickAdd = () => {
    setModeShow(true, true);
  };
  const onCancel = (e) => {
    e.preventDefault();
    form.resetFields();
    setModeShow(false);
  };
  const handleOk = () => {
    setModeShow(false);
  };
  // 查询
  const onClickView = () => {
  };
  // 保存
  const handleSave = () => {
  };

  // 修改
  const onClickEdit = () => {
    isAddprofModalShow(true);
  };
  const addProfModalCancel = () => {
    isAlertShow(false);
    isAddprofModalShow(false);
  };
  // 删除
  const onClickDelete = () => {
  };
  // 重置
  const handleReset = () => {
    form.resetFields();
  };
  // 导出
  const handleExport = () => {
  };
  /* 列表字段 */
  const tableCols = [{
    title: '序号',
    dataIndex: 'number',
    key: 'number',
    align: 'center',
    width: 50,
  }, {
    title: '通知类型',
    dataIndex: 'notice',
    key: 'notice',
    align: 'center',
    width: 130,
  }, {
    title: '邮箱',
    dataIndex: 'mailbox',
    key: 'mailbox',
    align: 'center',
    width: 140,
  }, {
    title: '员工编码',
    dataIndex: 'Code',
    key: 'Code',
    align: 'center',
    width: 150,
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 90,
  }, {
    title: '组织',
    dataIndex: 'organization',
    key: 'organization',
    align: 'center',
    width: 200,
  },
  {
    title: '系统名称',
    dataIndex: 'system',
    key: 'system',
    align: 'center',
    width: 150,
  }, {
    title: '办理手续',
    dataIndex: 'handle',
    key: 'handle',
    align: 'center',
    width: 150,
    render: () => (
      <Input />
    ),
  }, {
    title: '审批范围',
    dataIndex: 'Range',
    key: 'Range',
    align: 'center',
    width: 150,
  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    return children;
  }
  return (
    <div>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={onClickView}
      >
        查询
      </Button>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={handleSave}
      >
        保存
      </Button>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={onClickEdit}
      >
        修改
      </Button>
      <Modal
        maskClosable={false}
        destroyOnClose
        width={600}
        title="通知单节点新增和修改"
        visible={addProfModal}
        onCancel={addProfModalCancel}
        footer={null}
      >
        <AddProfDivision
          isPrimaryShow={isPrimaryShow}
          actions={actions}
          leftCardTree={leftCardTree}
          primaryBusinessData={primaryBusinessData}
          showAlert={showAlert}
        />
      </Modal>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={onClickAdd}
      >
        新增
      </Button>
      <Modal
        title="通知单节点新增和修改"
        visible={modal}
        onOk={handleOk}
        onCancel={onCancel}
        maskClosable={false}
        destroyOnClose
        width={600}
        footer={null}
      >
        <Model
          isPrimaryShow={isPrimaryShow}
          actions={actions}
          leftCardTree={leftCardTree}
          primaryBusinessData={primaryBusinessData}
          showAlert={showAlert}
        />
      </Modal>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={onClickDelete}
      >
        删除
      </Button>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={handleReset}
      >
        重置
      </Button>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={handleExport}
      >
        导出
      </Button>
      <Table
        columns={getFields()}
        dataSource={data}
        bordered
        size="small"
        rowSelection={rowSelection}
        pagination={false}
        scroll={{ y: document.body.scrollHeight - 460 }}
      />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        showTotal={tota => `共${tota}条`}
        showSizeChanger
        style={{ marginTop: 10, float: 'right' }}
      />
    </div>
  );
};
