import React from 'react';
import {
  Table,
  Modal,
  Pagination,
  Button,
  Divider,
} from 'antd';
import Modall from './alertmessage/index';
import Model from './card';
import OrgExportCondition from './org-export-condition';
import PsnExportCondition from './psn-export-condition';

const { confirm } = Modal;

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default (state) => {
  const {
    tableData,
    actions,
    search,
    // addPeople,
    loading,
    isNAddViewShow,
    isNAddShow,
    // record,
    modal,
    form,
    formEdit,
  } = state;
  const {
    // deleteRecord,
    listTable,
    // redirectDetail,
    setTableDataNew,
    setModeShow,
    // setRecords,
    updateRecord,
    // getRecord,
    setIsNAddViewShow,
    setIsNAddwShow,
    setAddPeople,
  } = actions;

  const onClickCopy = () => {
    setModeShow(true, true);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        /* eslint no-console: 0 */
        updateRecord(values);
        form.resetFields();
      }
    });
  };
  const onCancel = (e) => {
    e.preventDefault();
    form.resetFields();
    setModeShow(false);
  };
  const onCancel1 = (e) => {
    e.preventDefault();
    form.resetFields();
    setIsNAddViewShow(false);
  };
  const onCancel2 = (e) => {
    e.preventDefault();
    form.resetFields();
    setIsNAddwShow(false);
  };

  const onClickDelete = (posKey) => {
    confirm({
      title: '确定要删除本条记录吗?',
      onOk() {
        // deleteRecord(posKey);
        // setRecords();
        const dataDel = [...data];
        const dataNew = dataDel.filter((item) => {
          return item.noticId !== posKey.noticId;
        });
        const tableDataNew1 = {
          total: 0,
          size: 0,
          current: 1,
          records: dataNew,
        };
        setTableDataNew(tableDataNew1);
      },
    });
  };
  const data = tableData.records;
  const onClickAdd = () => {
    setIsNAddViewShow(true);
  };
  const onClickEdit = () => {
    setIsNAddwShow(true);
  };
  const onChange = (pageNumber, pageSize) => {
    const searchF = { ...search, pageSize, pageNumber };
    listTable(searchF);
  };

  const onChangePageSize = (current, size) => {
    const searchF = { ...search, pageSize: size, pageNumber: current };
    listTable(searchF);
  };

  const { current, size, total } = tableData;

  /* 列表字段 */
  const tableCols = [{
    title: '通知单名称',
    dataIndex: 'notice',
    key: 'notice',
    align: 'center',
    width: 200,
  }, {
    title: '业务类型',
    dataIndex: 'business',
    key: 'business',
    align: 'center',
    width: 200,
  }, {
    title: '状态',
    dataIndex: 'state',
    key: 'state',
    align: 'center',
    width: 50,
  }];

  function getFields() {
    const children = [];
    for (let i = 0; i < tableCols.length; i += 1) {
      children.push(tableCols[i]);
    }
    children.push(
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        width: 150,
        render: (text, records) => (
          <span>
            <a href=" javascript:;">{records.ATTRIBUTE12.map(tag => <Modall posName={tag} />)}</a>
            <Divider type="vertical" />
            <a href=" javascript:;" onClick={() => onClickEdit(text, records)}>编辑</a>
            <Divider type="vertical" />
            <a href=" javascript:;" onClick={() => onClickDelete(records)}>删除</a>
          </span>
        ),
      },
    );
    return children;
  }

  return (
    <div>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={onClickAdd}
      >
        新增
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '10px' }}
        onClick={onClickCopy}
      >复制
      </Button>
      <Modal
        title="选择通知单"
        visible={modal}
        onOk={formEdit ? onSubmit : onCancel}
        onCancel={onCancel}
        maskClosable={false}
        destroyOnClose
        width={500}
      >
        <Model />
      </Modal>
      <Table columns={getFields()} loading={loading} dataSource={data} pagination={false} size="small" bordered scroll={{ y: document.body.scrollHeight - 460 }} />
      <Pagination
        showQuickJumper
        current={current}
        total={total}
        pageSize={size}
        onChange={onChange}
        onShowSizeChange={onChangePageSize}
        showTotal={tota => `共 ${tota} 条`}
        showSizeChanger
        style={{ marginTop: 10, marginRight: 20, float: 'right' }}
      />
      <Modal
        title="新增"
        visible={isNAddViewShow}
        onOk={formEdit ? onSubmit : onCancel1}
        onCancel={onCancel1}
        maskClosable={false}
        destroyOnClose
        width={1300}
        height={560}
        footer={null}
      >
        <OrgExportCondition {...state} setAddPeople={setAddPeople} />
      </Modal>
      <Modal
        title="编辑通知单"
        visible={isNAddShow}
        onOk={formEdit ? onSubmit : onCancel2}
        onCancel={onCancel2}
        maskClosable={false}
        destroyOnClose
        width={1300}
        height={560}
        footer={null}
      >
        <PsnExportCondition {...state} setAddPeople={setAddPeople} />
      </Modal>
    </div>
  );
};
