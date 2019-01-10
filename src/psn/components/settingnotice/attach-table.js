import React from 'react';
import {
  Table,
  Select,
  Input,
  Button, Modal,
  /* Layout, Modal, */
} from 'antd';
// import PropTypes from 'prop-types';
// import { Link } from 'dva/router';
import Query from './query';
// import OrgExportCondition from "./org-export-condition";


const { Option } = Select;
const respList = [];

const EmptyAttach = (state) => {
  // console.log('444state', state);

  // const { setAddPeople } = actions;
  // const { setAddPeople } = props;
  // class EmptyAttach extends Component {
  //   state = {
  //     visible: false,
  //   };

  const { addPeople } = state;
  const showModal = () => {
    // const { visible } = state;
    // setState({
    //   visible: !visible,
    // });
  };

  const handleOk = () => {
    // console.log(e);
    // setState({
    //   visible: false,
    // });
  };

  const handleCancel = () => {
    // console.log(e);
    // setState({
    //   visible: false,
    // });
  };

  const onClickDelete = (records) => {
    // console.log(posKey);
    // const dataDel = [...data];
    // const dataNew = dataDel.filter((item) => {
    //   return item.count !== records.count;
    // });
    const { actions, count } = state;
    const { setCount, setAddPeople } = actions;
    // const datanew = {
    //   total: 0,
    //   size: 0,
    //   current: 1,
    //   records: dataNew,
    // };
    // setAddPeople(datanew);
    setAddPeople(addPeople.filter(item => item.count !== records.count));
    setCount(count - 1);
  };
  // const data = addPeople.records;

  const handleReset = () => {
  };

  const onClickAdd = () => {
    const addPeople23 = [...addPeople];
    const { actions, count } = state;
    const { setAddPeople, setCount } = actions;
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
    // console.log('datanew', datanew);
    setAddPeople(datanew);
    setCount(count + 1);
  };

  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  // 列表字段
  /* 列表信息 */

  // render() {
  const { visible } = state;
  // const { addPeople } = props;

  // console.log('addPeople9999', addPeople);
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

    // const data = [
    //   {
    //     department: '',
    //     name: '',
    //     contact: '',
    //     address: '',
    //     handle: '',
    //     Whether: '',
    //     Remarks: '',
    //   },
    // ];

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
      <Button htmlType="submit" style={{ margin: '10px 10px 5px 525px' }}>提交</Button>
      <Button htmlType="button" onClick={handleReset} style={{ margin: '10px' }}>暂存</Button>
      <Modal
        width={800}
        title="通知设置人员查询"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Query />
      </Modal>
    </div>
  );
  // }
};
// EmptyAttach.propTypes = {
//   setAddPeople: PropTypes.func.isRequired,
// };

export default EmptyAttach;
