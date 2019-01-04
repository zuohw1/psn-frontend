import React, { Component, Fragment } from 'react';
import {
  DatePicker, Button, Form, Input, Card, Col, Select, TreeSelect, Tree,
} from 'antd';
import '../assets/styles/survivors-input.less';

const FormItem = Form.Item;
const { Option } = Select;

class Search extends Component {
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

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { TreeNode } = Tree;
    const formItemLayout = {
      labelCol: {
        span: 12,
      },
      wrapperCol: {
        span: 12,
      },
    };
    const treeSelectChange = (value, label, extra) => {
      form.setFieldsValue({
        orgid: `${extra.triggerNode.props.id}`,
      });
    };
    const refUrl = 'org/allData?id=';
    const household = [
      '非农业户口',
      '本地农业户口',
      '外地农业户口',
      '外地非农业户口',
      '非农业集体户口',
      '本地非农业户口（常驻）',
      '本地非农业户口（临时）',
      '其他',
    ];
    const employment = [
      '非员工',
    ];
    const emigrate = [
      '是',
      '否',
    ];
    const gender = [
      '男',
      '女',
    ];
    const registered = [
      '北京市',
      '天津市',
      '河北省',
      '山西省',
      '内蒙古自治区',
      '辽宁省',
      '吉林省',
      '黑龙江省',
      '江苏省',
      '上海市',
    ];
    const employeeStatus = [
      '非员工-60精简人员',
      '非员工-离退遗属',
      '非员工-在职遗属',
      '非员工-内退遗属',
      '非员工-遗属人员',
    ];
    const handleReset = () => {
      form.resetFields();
    };
    const handleSave = () => {
    };
    return (
      <Card title="人员信息" bordered={false} bodyStyle={{ padding: '20px 5px' }}>
        <Fragment>
          <Form onSubmit={this.handleSubmit}>
            <div className="survivors">
              <div className="survivors_main">
                <div className="survivors_main_cont survivors_main_cont-staff">
                  <div className="survivors_main_cont_left">
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="姓名"
                    >
                      {
                        getFieldDecorator('name',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Input style={{ width: 220 }} />,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="身份证号"
                    >
                      {
                        getFieldDecorator('Number',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Input style={{ width: 220 }} />,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="出生日期"
                    >
                      {
                        getFieldDecorator('birthData',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <DatePicker style={{ width: 220 }} />,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="户口类型"
                    >
                      {
                        getFieldDecorator('Household',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Select placeholder="请选择" style={{ width: 220 }}>
                              {household.map(ele => <Option value={ele}>{ele}</Option>)}
                            </Select>,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="有效时间"
                    >
                      {
                        getFieldDecorator('effective',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <DatePicker style={{ width: 220 }} />,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="用工类型"
                    >
                      {
                        getFieldDecorator('type',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Select placeholder="请选择" style={{ width: 220 }}>
                              {employment.map(ele => <Option value={ele}>{ele}</Option>)}
                            </Select>,
                        )
                      }
                    </FormItem>
                  </div>
                  <div className="survivors_main_cont_right">
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="是否移居国外"
                    >
                      {
                        getFieldDecorator('abroad',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Select placeholder="请选择" style={{ width: 220 }}>
                              {emigrate.map(ele => <Option value={ele}>{ele}</Option>)}
                            </Select>,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="性别"
                    >
                      {
                        getFieldDecorator('sex',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Select placeholder="请选择" style={{ width: 220 }}>
                              {gender.map(ele => <Option value={ele}>{ele}</Option>)}
                            </Select>,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="年龄"
                    >
                      {
                        getFieldDecorator('age',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Input style={{ width: 220 }} />,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="户口所在地"
                    >
                      {
                        getFieldDecorator('local',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Select placeholder="请选择" style={{ width: 220 }}>
                              {registered.map(ele => <Option value={ele}>{ele}</Option>)}
                            </Select>,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="组织"
                    >
                      {
                        getFieldDecorator('organization',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <TreeSelect
                              treeId={37838}
                              treeSelectChange={treeSelectChange}
                              placeholder="请选择"
                              allowClear
                              treeDefaultExpandAll
                              style={{ width: 220 }}
                              refUrl={refUrl}
                            >
                              <TreeNode value="parent" title="中国联合网络有限公司" key="0-1">
                                <TreeNode value="parent 1-0" title="中国联通总部管理部门" key="0-1-1">
                                  <TreeNode value="parent 1-1-1" title="中国联通总部-综合部" key="0-1-1-1">
                                    <TreeNode value="leaf1" title="中国联通总部-财务部" key="random" />
                                    <TreeNode value="leaf2" title="中国联通总部-市场部" key="random1" />
                                  </TreeNode>
                                </TreeNode>
                                <TreeNode value="parent 1-1" title="中国联通总部-办公厅" key="random2">
                                  <TreeNode value="sss" title="中国联通总部-办公厅" key="random3" />
                                </TreeNode>
                              </TreeNode>
                            </TreeSelect>,
                        )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="员工状态"
                    >
                      {
                        getFieldDecorator('status',
                          {
                            rules: [{ required: true, whitespace: true }],
                          })(
                            <Select placeholder="请选择" style={{ width: 220 }}>
                              {employeeStatus.map(ele => <Option value={ele}>{ele}</Option>)}
                            </Select>,
                        )
                      }
                    </FormItem>
                  </div>
                </div>
              </div>
            </div>
            <Col span={24} style={{ textAlign: 'center', marginTop: 15 }}>
              <Button htmlType="button" onClick={handleSave} style={{ marginRight: 10 }}>保存</Button>
              <Button htmlType="submit" style={{ marginRight: 10 }} type="primary">提交</Button>
              <Button htmlType="button" onClick={handleReset}>重置</Button>
            </Col>
          </Form>
        </Fragment>
      </Card>
    );
  }
}

const StaffSearchForm = Form.create()(Search);

export default StaffSearchForm;
