import React from 'react';
import {
  Button,
  Table,
} from 'antd';

const onClickAdd = () => {
};
export default () => {
  const tableCols = [{
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    align: 'center',
    width: 200,
  }, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: 80,
  }, {
    title: '联系电话',
    dataIndex: 'contact',
    key: 'contact',
    align: 'center',
    width: 120,
  }, {
    title: '办公地址',
    dataIndex: 'address',
    key: 'address',
    align: 'center',
    width: 150,
  }, {
    title: '办理事项',
    dataIndex: 'handle',
    key: 'handle',
    align: 'center',
    width: 80,
  }, {
    title: '是否打印',
    dataIndex: 'Whether',
    key: 'Whether',
    align: 'center',
    width: 80,
  }, {
    title: '备注',
    dataIndex: 'Remarks',
    key: 'Remarks',
    align: 'center',
    width: 50,
  },
  ];
  /* 列表信息 */
  const data = [{
    department: '中国联通总部-办公厅（党组办公室、董事会办公室）',
    name: '王霞',
    contact: '66259259',
    address: '',
    handle: '2333',
    Whether: '是',
    Remarks: '',
  },
  ];
  return (
    <div>
      <Button
        type="primary"
        style={{ margin: '5px' }}
        onClick={onClickAdd}
      >打印
      </Button>
      <Button
        type="primary"
        onClick={onClickAdd}
      >打印预览
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: '5px' }}
        onClick={onClickAdd}
      >设置
      </Button>
      <Table columns={tableCols} dataSource={data} pagination={false} size="middle" bordered scroll={{ y: document.body.scrollHeight - 160 }} />
    </div>
  );
};
