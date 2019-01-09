import React, { Component } from 'react';
import {
  Table,
  Select,
  Input,
  Button, Modal,
  /* Layout, Modal, */
} from 'antd';
import { Link } from 'dva/router';
import Query from './query';


const { Option } = Select;
const respList = [];

class EmptyAttach extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onClickDelete = (key) => {
    console.log(key);
  };

  // onClickAdd = () => {
  // };

  apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };

  // 列表字段
  /* 列表信息 */

  render() {
    const { visible } = this.state;
    // const { respRange } = this.props;
    const tableCols = [
      {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
        align: 'center',
        width: 150,
        render: () => (
          <Input onClick={this.showModal} />
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
              respList.map(this.apply)
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
            <a href=" javascript:;" onClick={() => this.onClickDelete(records.key)}>删除</a>
          </span>
        ),
      },
    ];

    const data = [
      {
        department: '',
        name: '',
        contact: '',
        address: '',
        handle: '',
        Whether: '',
        Remarks: '',
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
          dataSource={data}
          pagination={false}
          size="middle"
          bordered
          scroll={{ y: document.body.scrollHeight - 160 }}
        />
        <Button
          style={{ margin: '10px 420px 5px 550px', align: 'center' }}
          type="primary"
          onClick={this.onClickAdd}
        >
          新增人员
        </Button>
        <Button htmlType="submit" style={{ margin: '10px 10px 5px 525px' }}>提交</Button>
        <Button type="primary"><Link to="/psn/SettingNotice">返回</Link></Button>
        <Modal
          width={800}
          title="通知设置人员查询"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Query />
        </Modal>
      </div>
    );
  }
}
export default EmptyAttach;
