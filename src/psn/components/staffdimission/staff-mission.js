import React, { Component, Fragment } from 'react';
import './staffmission.less';
import {
  Table, DatePicker, Input, Select, Button, Icon,
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 0 || index === 4 || index === 9 || index === 12 || index === 10 || index === 11) {
    obj.props.colSpan = 0;
  }
  if (index === 13) {
    obj.props.colSpan = 0;
  }
  return obj;
};

export default class StaffDimission extends Component {
  columns = [
    {
      title: (
        <Fragment>
          <ul className="table_name">
            <li>关于<input type="text" />办离职手续请示</li>
            <li><input type="text" />：</li>
            <li><input type="text" />(工号 <input type="text" /><Icon type="search" /> )申请办离职手续，具体情况如下：</li>
          </ul>
        </Fragment>
      ),
      width: '20%',
      colSpan: 4,
      dataIndex: 'col_1',
      render(value, row, index) {
        const obj = {
          children: value,
          props: {
            height: 60,
          },
        };
        if (index === 0) {
          obj.props.colSpan = 3;
        }
        if (index === 4) {
          obj.props.colSpan = 4;
        }
        if (index === 13) {
          obj.props.colSpan = 4;
          return {
            children: value.map((ele) => {
              return (
                <td>
                  {ele.name}
                  {ele.data}
                </td>
              );
            }),
            props: {
              colSpan: 4,
              align: 'right',
            },
          };
        }
        if (index === 9) {
          obj.props.height = 260;
        }
        return obj;
      },
    },
    {
      dataIndex: 'col_2',
      width: '30%',
      colSpan: 0,
      editable: true,
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        if (index === 0 || index === 4 || index === 13) {
          obj.props.colSpan = 0;
        }
        if (index === 1) {
          obj.props.editable = true;
        }
        if (index === 7) {
          return {
            children: (
              <Select style={{ width: 170 }} placeholder="---请选择---" onChange={this.handleResign}>
                {value.map(resign => <Option key={resign}>{resign}</Option>)}
              </Select>
            ),
          };
        }
        if (index === 9) {
          obj.props.colSpan = 3;
        }
        if (index === 10 || index === 11) {
          return {
            children: <Button size="small">{value}</Button>,
            props: {
              colSpan: 3,
              align: 'right',
            },
          };
        }
        if (index === 12) {
          return {
            children: (
              <Select style={{ width: 180 }} placeholder="---请选择---">
                {value.map(resign => <Option key={resign}>{resign}</Option>)}
              </Select>
            ),
            props: {
              colSpan: 3,
            },
          };
        }
        return obj;
      },
    },
    {
      dataIndex: 'col_3',
      width: '20%',
      colSpan: 0,
      render: renderContent,
    },
    {
      dataIndex: 'col_4',
      colSpan: 0,
      width: '30%',
      editable: true,
      render: (value, row, index) => {
        const obj = {
          children: value,
          props: {},
        };
        if (index === 0) {
          return {
            children: <Button>{value}</Button>,
            props: {
              align: 'right',
              colSpan: 1,
            },
          };
        }
        if (index === 4 || index === 9) {
          obj.props.colSpan = 0;
        }
        if (index === 5 || index === 6 || index === 7 || index === 8) {
          return {
            children: (
              <Select placeholder="---请选择---" style={{ width: value.width }} notFoundContent="请选择离职原因">
                {value.children.map((ele) => {
                  return <Option value={ele}>{ele}</Option>;
                })}
              </Select>
            ),
          };
        }
        if (index === 12 || index === 10 || index === 11 || index === 13) {
          obj.props.colSpan = 0;
        }
        return obj;
      },
    },
  ];

  dataSource = [
    {
      key: '1',
      col_1: '人员基本信息',
      col_2: '',
      col_3: '',
      col_4: '查看简历',
    },
    {
      key: '2',
      col_1: '姓名：',
      col_2: '',
      col_3: '出生日期：',
      col_4: '',
    },
    {
      key: '3',
      col_1: '身份证号：',
      col_2: '',
      col_3: '用工类型：',
      col_4: '',
    },
    {
      key: '4',
      col_1: '工作单位：',
      col_2: '',
      col_3: '职务：',
      col_4: '',
    },
    {
      key: '5',
      col_1: '离职相关信息：',
      col_2: '',
      col_3: '离职原因：',
      col_4: '',
    },
    {
      key: '6',
      col_1: '离职日期：',
      col_2: <DatePicker />,
      col_3: '离职原因：',
      col_4: {
        width: 215,
        children: [
          '辞职',
          '辞退',
          '劳动合同到期终止',
          '死亡',
          '劳务派遣转紧密型业务外包',
          '调遣到外系统',
          '退回劳务派遣公司',
          '其他',
        ],
      },
    },
    {
      key: '7',
      col_1: '离职原因详细描述：',
      col_2: '',
      col_3: '离职原因分类：',
      col_4: {
        width: 150,
        children: [
          '工作环境',
          '薪酬待遇',
          '职业发展',
          '其他',
          '个人原因',
          '学习深造',
          '员工关系',
        ],
      },
    },
    {
      key: '8',
      col_1: '离职原因（新）：',
      col_2: [
        '辞职',
        '辞退',
        '劳动合同到期终止',
        '死亡',
        '终止劳务派遣',
        '离职创业',
      ],
      col_3: '离职原因说明（新）：',
      col_4: [],
    },
    {
      key: '9',
      col_1: '去往单位：',
      col_2: '',
      col_3: '是否流入到其他运营商：',
      col_4: {
        width: 150,
        children: ['是', '否'],
      },
    },
    {
      key: '10',
      col_1: '备注：',
      col_2: <TextArea rows={4} style={{ width: '80%', height: 200 }} />,
      col_3: '',
      col_4: '',
    },
    {
      key: '11',
      col_1: '正文：',
      col_2: '浏览',
      col_3: '',
      col_4: '',
    },
    {
      key: '12',
      col_1: '附件：',
      col_2: '浏览',
      col_3: '',
      col_4: '',
    },
    {
      key: '13',
      col_1: '选择通知单：',
      col_2: ['离职通知'],
      col_3: '',
      col_4: '',
    },
    {
      key: '14',
      col_1: [
        { name: '成文日期：' },
        { data: <DatePicker /> },
      ],
      col_2: '',
      col_3: '',
      col_4: '',
    },
  ];

  resignDescribe = [
    {
      name: '辞职',
      width: 170,
      children: [
        '试用期内主动离职',
        '无',
        '转为紧密型业务外包',
        '转为劳务派遣',
      ],
    },
    {
      name: '辞退',
      width: 190,
      children: [
        '考核退出',
        '其他强制退出',
        '试用期期满不胜任退出',
        '违反规章制度退出',
        '医疗期期满不胜任退出',
      ],
    },
    {
      name: '劳动合同到期终止',
      width: 150,
      children: [
        '公司主动辞退',
        '员工主动离职',
      ],
    },
    {
      name: '死亡',
      width: 150,
      children: ['无'],
    },
    {
      name: '终止劳务派遣',
      width: 220,
      children: [
        '劳务派遣转紧密型业务外包',
        '劳务派遣转营业型业务外包',
        '离职',
        '离职创业',
        '死亡',
        '退回劳务派遣公司-考核退出',
        '退回劳务派遣公司-其他',
        '退回劳务派遣公司-违反规章制度退出',
      ],
    },
    {
      name: '离职创业',
      width: 150,
      children: ['无'],
    },
  ];

  state = {
    reasons: {
      width: 150,
      children: [],
    },
  };


  handleResign = (value) => {
    const { reasons } = this.state;
    this.resignDescribe.forEach((ele) => {
      if (ele.name === value) {
        reasons.children = ele.children;
        reasons.width = ele.width;
      }
    });
    this.setState({ reasons });
  };

  render() {
    const { reasons } = this.state;

    const dataSource = this.dataSource.map((data) => {
      if (data.key !== '8') {
        return data;
      }
      return {
        ...data,
        col_4: reasons,
      };
    });
    return (
      <div>
        <Table
          style={{
            backgroundColor: '#fff',
          }}
          columns={this.columns}
          dataSource={dataSource}
          bordered
          pagination={{
            defaultPageSize: 20,
            hideOnSinglePage: true,
          }}
        />
      </div>
    );
  }
}
