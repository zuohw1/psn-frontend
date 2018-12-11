import React, { Component, Fragment } from 'react';
import {
  DatePicker, Button, Form, Icon, Input, Select, Upload, Modal,
} from 'antd';
import '../assets/styles/staffmission.less';
import SelectStaff from './select-staff';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const registReasonNew = [
  '辞职',
  '辞退',
  '劳动合同到期终止',
  '死亡',
  '终止劳务派遣',
  '离职创业',
];
const registDescript = [
  {
    name: '辞职',
    children: [
      '试用期内主动离职',
      '无',
      '转为紧密型业务外包',
      '转为劳务派遣',
    ],
  },
  {
    name: '辞退',
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
    children: [
      '公司主动辞退',
      '员工主动离职',
    ],
  },
  {
    name: '死亡',
    children: ['无'],
  },
  {
    name: '终止劳务派遣',
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
    children: ['无'],
  },
];

class StaffDimission extends Component {
  state = {
    reasons: [],
    visible: false,
  }

  handleResign = (value) => {
    let reasons = [];
    registDescript.forEach((ele) => {
      if (ele.name === value) {
        reasons = ele.children;
      }
    });
    this.setState({ reasons });
  }

  handleSubmit = (e) => {
    const { form } = this.props;
    e.preventDefault();
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        birth: fieldsValue.birth.format('YYYY-MM-DD'),
        departuredate: fieldsValue.departuredate.format('YYYY-MM-DD'),
        datewritten: fieldsValue.datewritten.format('YYYY-MM-DD'),
      };
      console.log('Received values of form: ', values);
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  showModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { reasons, visible } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        span: 12,
      },
      wrapperCol: {
        span: 12,
      },
    };
    const registReason = [
      '辞职',
      '辞退',
      '劳动合同到期终止',
      '死亡',
      '劳务派遣转紧密型业务外包',
      '调遣到外系统',
      '退回劳务派遣公司',
      '其他',
    ];
    const registReasonClass = [
      '工作环境',
      '薪酬待遇',
      '职业发展',
      '其他',
      '个人原因',
      '学习深造',
      '员工关系',
    ];
    return (
      <Fragment>
        <Modal
          width={800}
          title="选择人员"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button onClick={this.handleCancel}><Icon type="close" />关闭</Button>,
            <Button type="primary" onClick={this.handleOk}>
              <Icon type="check" />
              确定
            </Button>,
          ]}
        >
          <SelectStaff />
        </Modal>
        <Form onSubmit={this.handleSubmit}>
          <div className="dimiss">
            <div className="dimiss_head">
              <p>关于 <input type="text" />办离职手续请示</p>
              <p><input type="text" />:</p>
              <p><input type="text" />(工号 <input type="text" /><Icon
                type="search"
                onClick={this.showModal}
              /> )申请办理离职手续，具体情况如下：
              </p>
            </div>
            <div className="dimiss_main">
              <div className="dimiss_main_title">
                <span>人员基本信息</span>
                <Button>查看简历</Button>
              </div>
              <div className="dimiss_main_cont dimiss_main_cont-staff">
                <div className="dimiss_main_cont_left">
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="用户名"
                  >
                    {
                    getFieldDecorator('userName',
                      {
                        rules: [{ required: true, whitespace: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="身份证号"
                  >
                    {
                    getFieldDecorator('idnumber',
                      {
                        rules: [{ required: true, whitespace: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="工作单位"
                  >
                    {
                    getFieldDecorator('workunit',
                      {
                        rules: [{ required: true, whitespace: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>
                </div>
                <div className="dimiss_main_cont_right">
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="出生日期"
                  >
                    {
                    getFieldDecorator('birth',
                      {
                        rules: [{ required: true }],
                      })(
                        <DatePicker />,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="用工类型"
                  >
                    {
                    getFieldDecorator('employtype',
                      {
                        rules: [{ required: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="职务"
                  >
                    {
                    getFieldDecorator('duty',
                      {
                        rules: [{ required: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>

                </div>
              </div>
              <div className="dimiss_main_title">
                <span>离职相关信息</span>
              </div>
              <div className="dimiss_main_cont dimiss_main_cont-registtop">
                <div className="dimiss_main_cont_left">
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="离职日期"
                  >
                    {
                    getFieldDecorator('departuredate',
                      {
                        rules: [{ required: true }],
                      })(
                        <DatePicker />,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="离职原因详细描述"
                  >
                    {getFieldDecorator('registdescript',
                      {
                        rules: [{ required: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="离职原因（新）"
                  >
                    {
                    getFieldDecorator('registreasonnew',
                      {
                        rules: [{ required: true }],
                      })(
                        <Select placeholder="---请选择---" onChange={this.handleResign}>
                          {registReasonNew.map(resign => <Option key={resign}>{resign}</Option>)}
                        </Select>,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="去往单位"
                  >
                    {
                    getFieldDecorator('gotounit',
                      {
                        rules: [{ required: true }],
                      })(
                        <Input />,
                    )
                  }
                  </FormItem>
                </div>
                <div className="dimiss_main_cont_right">
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="离职原因"
                  >
                    {
                    getFieldDecorator('registreason',
                      {
                        rules: [{ required: true }],
                      })(
                        <Select placeholder="---请选择---">
                          {registReason.map(ele => <Option value={ele}>{ele}</Option>)}
                        </Select>,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="离职原因分类"
                  >
                    {getFieldDecorator('registreasontype',
                      {
                        rules: [{ required: true }],
                      })(
                        <Select placeholder="---请输入---">
                          {registReasonClass.map(ele => <Option value={ele}>{ele}</Option>)}
                        </Select>,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="离职原因说明（新）"
                  >
                    {
                    getFieldDecorator('registdescriptnew',
                      {
                        rules: [{ required: true }],
                      })(
                        <Select placeholder="---请选择---" notFoundContent="请选择离职原因">
                          {
                          reasons.map(reason => <Option key={reason}>{reason}</Option>)
                        }
                        </Select>,
                    )
                  }
                  </FormItem>
                  <FormItem
                    hasFeedback
                    help=""
                    {...formItemLayout}
                    label="是否流入到其他运营商"
                  >
                    {getFieldDecorator('operator',
                      {
                        rules: [{ required: true }],
                      })(
                        <Select placeholder="---请输入---">
                          <Option value="是">是</Option>
                          <Option value="否">否</Option>
                        </Select>,
                    )
                  }
                  </FormItem>
                </div>
              </div>
              <div className="dimiss_main_cont dimiss_main_cont-registbottom">
                <FormItem
                  help=""
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                  label="备注"
                >
                  {
                  getFieldDecorator('note')(
                    <TextArea rows={6} />,
                  )
                }
                </FormItem>
                <FormItem
                  help=""
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                  label="正文"
                >
                  {getFieldDecorator('maintext', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                  })(
                    <Upload name="maintext" action="/upload.do">
                      <Button>
                        <Icon type="upload" /> 浏览
                      </Button>
                    </Upload>,
                  )}

                </FormItem>
                <FormItem
                  help=""
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                  label="附件"
                >
                  {getFieldDecorator('attachment', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                  })(
                    <Upload name="attachment" action="/upload.do">
                      <Button>
                        <Icon type="upload" /> 浏览
                      </Button>
                    </Upload>,
                  )}
                </FormItem>
                <FormItem
                  hasFeedback
                  help=""
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 18 }}
                  label="选择通知单"
                >
                  {
                  getFieldDecorator('selectnotice',
                    {
                      rules: [{ required: true }],
                    })(
                      <Select placeholder="---请选择---">
                        <Option value="离职通知">离职通知</Option>
                      </Select>,
                  )
                }
                </FormItem>
                <FormItem
                  hasFeedback
                  help=""
                  labelCol={{ span: 18 }}
                  wrapperCol={{ span: 6 }}
                  label="成文日期"
                >
                  {
                  getFieldDecorator('datewritten',
                    {
                      rules: [{ type: 'object', required: true }],
                    })(
                      <DatePicker />,
                  )
                }
                </FormItem>
              </div>
            </div>
          </div>
          <div className="submitdismiss">
            <Button type="primary" htmlType="submit">提交</Button>
            <Button>打印通知单</Button>
          </div>
        </Form>
      </Fragment>
    );
  }
}

const StaffDimissionForm = Form.create()(StaffDimission);

export default StaffDimissionForm;
