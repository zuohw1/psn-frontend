import React from 'react';
import {
  Table,
  Modal,
  Pagination,
  Button,
  Divider,
} from 'antd';
import Modall from './alertmessage/index';

const { confirm } = Modal;

/* table size统一设置为small 固定表头，
   scroll={{ y: document.body.scrollHeight - 460 }}
   460为其他控件宽度之和
*/
export default ({
  tableData,
  actions,
  search,
  addPeople,
  loading,
}) => {
  const {
    deleteRecord,
    listTable,
    redirectDetail,
  } = actions;

  console.log(addPeople);
  // const onClickAdd = () => {
  //   //   setModeShow(true, true);
  //   // };
  // const onClickEdit = () => {
  //   getRecord(true, true);
  // };
  const onClickCopy = () => {
  };
  const onClickDelete = (key) => {
    data.filter(item => item.key !== key);
    confirm({
      title: '确定要删除本条记录吗?',
      onOk() {
        deleteRecord(key);
      },
    });
  };

  const data = tableData.records;
  const onClickAdd = () => {
    redirectDetail('/psn/settingNotice/OrgExportCondition', { name: 'main-table' });
  };
  const onClickEdit = () => {
    redirectDetail('settingNotice/psnExportConditionr');
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
    dataIndex: 'ATTRIBUTE8',
    key: 'ATTRIBUTE8',
    align: 'center',
    width: 200,
  }, {
    title: '业务类型',
    dataIndex: 'ATTRIBUTE9',
    key: 'ATTRIBUTE9',
    align: 'center',
    width: 200,
  }, {
    title: '状态',
    dataIndex: 'DOC_VERIFIER',
    key: 'DOC_VERIFIER',
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
    </div>
  );
};
