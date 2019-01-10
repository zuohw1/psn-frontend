import React from 'react';
import {
  Table,
  Select,
  Input,
  Button, Modal,
} from 'antd';
import Query from './query';

const { Option } = Select;
const respList = [];
const { confirm } = Modal;
const EmptyAttach = (state) => {
  const {
    isVisible,
    actions,
    form,
    count,
    addPeople,
  } = state;
  const {
    setVisible,
    setCount,
    setAddPeople,
  } = actions;
  const showModal = () => {
    setVisible(true);
  };
  const handleSubmission = () => {
    confirm({
      title: '确定要提交吗?',
      onOk() {
      },
    });
  };
  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    form.resetFields();
    setVisible(false, true);
  };
  const onClickDelete = (records) => {
    setAddPeople(addPeople.filter(item => item.count !== records.count));
    setCount(count - 1);
  };
  // const handleReset = () => {
  // };
  const onClickAdd = () => {
    const addPeople23 = [...addPeople];
    const datanew = [
      ...addPeople23,
      {
        department: '',
        name: '',
        contact: '',
        address: '',
        handle: '',
        Whether: '',
        Remarks: '',
        count,
      },
    ];
    setAddPeople(datanew);
    setCount(count + 1);
  };
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };
  /* 列表信息 */
  const tableCols = [
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
      align: 'center',
      width: 150,
      render: () => (
        <Input onClick={showModal} />
      ),
    }, {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: 150,
      render: () => (
        <Input />
      ),
    }, {
      title: '联系电话',
      dataIndex: 'contact',
      key: 'contact',
      align: 'center',
      width: 150,
      render: () => (
        <Input />
      ),
    }, {
      title: '办公地址',
      dataIndex: 'address',
      key: 'address',
      align: 'center',
      width: 200,
      render: () => (
        <Input />
      ),
    }, {
      title: '是否打印',
      dataIndex: 'DOC_VERIFIER',
      key: 'DOC_VERIFIER',
      align: 'center',
      width: 100,
      render: () => (
        <Select allowClear style={{ width: 50 }}>
          {
            respList.map(apply)
          }
        </Select>
      ),
    }, {
      title: '备注',
      dataIndex: 'handle',
      key: 'handle',
      align: 'center',
      render: () => (
        <Input />
      ),
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      align: 'center',
      width: 70,
      render: (text, records) => (
        <span>
          <a href=" javascript:;" onClick={() => onClickDelete(records)}>删除</a>
        </span>
      ),
    },
  ];

  const respRange = [
    { id: '0', title: '是' },
    { id: '1', title: '否' },
  ];
  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) {
      const respV = {
        id: respRange[i].id,
        title: respRange[i].title,
      };
      respList.push(respV);
    }
  }
  return (
    <div>
      <Table
        columns={tableCols}
        dataSource={addPeople}
        pagination={false}
        size="middle"
        bordered
        scroll={{ y: document.body.scrollHeight - 160 }}
      />
      <Button
        style={{ margin: '10px 420px 5px 550px', align: 'center' }}
        type="primary"
        onClick={onClickAdd.bind(this)}
      >
        新增人员
      </Button>
      <Button htmlType="submit" onClick={handleSubmission} style={{ margin: '10px 10px 5px 560px' }}>提交</Button>
      <Modal
        width={800}
        title="通知设置人员查询"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Query />
      </Modal>
    </div>
  );
};

export default EmptyAttach;
