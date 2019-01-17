import React from 'react';
import {
  Table, Pagination, Button, Input, Modal,
} from 'antd';
import Model from './card';
import WrappedModify from './modify';
// import WrappedQuery from './query';
import config from '../../../env.config';

// const { Option } = Select;
// const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const data = ['jack', 'lucy', 'disabled', 'Yiminghe'];
export default class MainTable extends React.Component {
  render() {
    const {
      dataRecord,
      search,
      actions,
      form,
      modal,
      addProfModal,
      isPrimaryShow,
      primaryBusinessData,
      leftCardTree,
      showAlert,
      recordNum,
      // formEdit,
      // refModal,
      // refSelectData,
      record,
    } = this.props;
    console.log(record);
    const {
      listTable,
      setModeShow,
      isAlertShow,
      isNewModalShow,
      isAddprofModalShow,
      updateTable,
      getRecord,
    } = actions;
    // const sort = [];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log('selectedRows: ', selectedRows[0]);
        getRecord(selectedRows);
      },
    };
    const onChange = (pageSize, pageNumber) => {
      const searchF = { ...search, pageSize, pageNumber };
      listTable(searchF);
    };
    const onChangePageSize = (current, size) => {
      const searchF = { ...search, pageSize: size, pageNumber: current };
      listTable(searchF);
    };
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
    // const onCancel2 = () => {
    //   isAlertShow(false);
    //   setQuery(false);
    // };
    // const handleOkl = () => {
    //   setQuery(false);
    // };
    // 保存
    const handleSave = () => {
      const newData = [...dataRecord];
      console.log(newData);
    };
    // 修改
    const onClickEdit = () => {
      console.log(record);
      if (record.length === 0) {
        alert('请选择修改内容!');
      } else if (record.length > 1) {
        alert('修改内容只能选择一个!');
      } else {
        isAddprofModalShow(true);
      }
    };
    const addProfModalCancel = () => {
      isAlertShow(false);
      isAddprofModalShow(false);
    };
    // 删除
    const onClickDelete = () => {
      console.log(record);
      console.log(record[0]);
      const newRecord = record[0];
      updateTable(dataRecord.filter(item => item.key !== newRecord.key));
      console.log(dataRecord);
      // deleteSortList(sortList);
      // if (sortList.length > 0) {
      //   listTable(loginName, respId, rangeId, current, recordNum);
      // }
      // setAddPeople(data.filter(item => item.count !== records.count));
      // setCount(count - 1);
    };
    // 重置
    const handleReset = () => {
      form.resetFields();
    };
    // 导出
    const handleExport = () => {
      form.validateFields((err, values) => {
        if (!err) {
          // const recordNum = 10;
          const currentPageNum = 1;
          const select = { ...values, recordNum, currentPageNum };
          let expUrl = `${config.api}/posElement/export?1=1`;
          if (select.sequence && select.sequence !== '') {
            expUrl += `&sequence=${select.sequence}`;
          }
          if (select.respName && select.respName !== '') {
            expUrl += `&respName=${select.respName}`;
          }
          if (select.cRespName && select.cRespName !== '') {
            expUrl += `&cRespName=${select.cRespName}`;
          }
          window.open(expUrl, '_self');
        }
      });
    };
    /* 列表字段 */
    const tableCols = [{
      title: '序号',
      dataIndex: 'key',
      key: 'key',
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
        {/* <Modal */}
        {/* title="查询" */}
        {/* visible={addProfQuery} */}
        {/* onOk={handleOkl} */}
        {/* onCancel={onCancel2} */}
        {/* maskClosable={false} */}
        {/* destroyOnClose */}
        {/* width={1000} */}
        {/* footer={null} */}
        {/* > */}
        {/* <WrappedQuery */}
        {/* isPrimaryShow={isPrimaryShow} */}
        {/* actions={actions} */}
        {/* leftCardTree={leftCardTree} */}
        {/* primaryBusinessData={primaryBusinessData} */}
        {/* showAlert={showAlert} */}
        {/* {...state} */}
        {/* /> */}
        {/* </Modal> */}
        <Button
          type="primary"
          style={{ margin: '5px' }}
          onClick={handleSave}
        >保存
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
          width={700}
          title="通知单节点新增和修改"
          visible={addProfModal}
          onCancel={addProfModalCancel}
          footer={null}
        >
          <WrappedModify
            isPrimaryShow={isPrimaryShow}
            actions={actions}
            leftCardTree={leftCardTree}
            primaryBusinessData={primaryBusinessData}
            showAlert={showAlert}
            record={record}
            dataRecord={dataRecord}
            isAddprofModalShow={isAddprofModalShow}
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
          width={700}
          footer={null}
        >
          <Model
            isPrimaryShow={isPrimaryShow}
            actions={actions}
            leftCardTree={leftCardTree}
            primaryBusinessData={primaryBusinessData}
            showAlert={showAlert}
            record={record}
            dataRecord={dataRecord}
            isNewModalShowone={isNewModalShow}
            updateTable={updateTable}
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
          dataSource={dataRecord}
          bordered
          size="small"
          rowSelection={rowSelection}
          pagination={false}
          scroll={{ y: document.body.scrollHeight - 460 }}
        />

        <Pagination
          showQuickJumper
          onChange={onChange}
          onShowSizeChange={onChangePageSize}
          showTotal={tota => `共${tota}条`}
          showSizeChanger
          style={{ marginTop: 10, float: 'right' }}
        />
      </div>
    );
  }
}
