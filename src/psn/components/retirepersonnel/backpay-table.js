import React, { Component, Fragment } from 'react';
import {
  DatePicker,
  Button,
  Form,
  Input, Card,
  Col, Upload, Icon, TreeSelect, Tree, Modal, Select,
} from 'antd';
import RankList from './modellist/rank-list';
import '../assets/styles/backpay.less';


const FormItem = Form.Item;

class StaffDimission extends Component {
  state = {
    visible: false,
    employer: false,
    taxes: false,
    insurance: false,
  };

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
  };

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  showModal = () => {
    const { visible } = this.state;
    this.setState({
      visible: !visible,
    });
  };

  employerModel = () => {
    const { employer } = this.state;
    this.setState({
      employer: !employer,
    });
  };

  taxesModel = () => {
    const { taxes } = this.state;
    this.setState({
      taxes: !taxes,
    });
  };

  insuranceModel = () => {
    const { insurance } = this.state;
    this.setState({
      insurance: !insurance,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
      employer: false,
      taxes: false,
      insurance: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      employer: false,
      taxes: false,
      insurance: false,
    });
  };

  render() {
    const {
      visible, employer, taxes, insurance,
    } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { TreeNode } = Tree;
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 8,
      },
    };
    const treeSelectChange = (value, label, extra) => {
      form.setFieldsValue({
        orgid: `${extra.triggerNode.props.id}`,
      });
    };
    const refUrl = 'org/allData?id=';
    const handleReset = () => {
      form.resetFields();
    };
    return (
      <Card title="补薪信息">
        <Fragment>
          <Form onSubmit={this.handleSubmit}>
            <div className="retire">
              <div className="retire_main">
                <div className="retire_main_cont retire_main_cont-staff">
                  <div className="retire_main_cont_left">
                    <FormItem
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="员工编号"
                    >
                      {getFieldDecorator('staffNumber',
                        {
                          rules: [{ whitespace: true }],
                        })(
                          <Input disabled style={{ width: 220 }} />,
                      )
                }
                    </FormItem>
                    <FormItem
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="姓名"
                    >
                      {getFieldDecorator('userName',
                        {
                          rules: [{ whitespace: true }],
                        })(
                          <Input disabled style={{ width: 220 }} />,
                      )
                }
                    </FormItem>
                    <FormItem
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="分配类别"
                    >
                      {getFieldDecorator('Distribution',
                        {
                          rules: [{ whitespace: true }],
                        })(
                          <Input disabled style={{ width: 220 }} />,
                      )
                      }
                    </FormItem>
                    <FormItem
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="员工类别"
                    >
                      {getFieldDecorator('category',
                        {
                          rules: [{ whitespace: true }],
                        })(
                          <Input disabled style={{ width: 220 }} />,
                      )
                     }
                    </FormItem>
                    <FormItem
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="退休日期"
                    >
                      {getFieldDecorator('Retirement')(
                        <Input disabled style={{ width: 220 }} />,
                      )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="有效日期"
                    >
                      {getFieldDecorator('effectiveData')(
                        <DatePicker style={{ width: 220 }} />,
                      )
                }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="终止日期"
                    >
                      {getFieldDecorator('terminationData',
                        {
                          rules: [{ required: true }],
                        })(
                          <DatePicker style={{ width: 220 }} />,
                      )
                  }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="组织"
                    >
                      {getFieldDecorator('organization',
                        {
                          rules: [{ required: true }],
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
                                <TreeNode value="parent 1-1-1" title="中国联通总部-综合部（董事会办公室）" key="0-1-1-1">
                                  <TreeNode value="leaf1" title="中国联通总部-综合部" key="random" />
                                  <TreeNode value="leaf2" title="中国联通总部-综合部" key="random1" />
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
                      label="工资单"
                    >
                      {getFieldDecorator('duty',
                        {
                          rules: [{ required: true }],
                        })(
                          <Select placeholder="请选择" style={{ width: 220 }} />,
                      )
                  }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="职级薪档"
                    >
                      {getFieldDecorator('duty',
                        {
                          rules: [{ required: true }],
                        })(
                          <div>
                            <Input style={{ width: 220 }} />
                            <Button style={{ marginLeft: 3 }} type="primary" onClick={this.showModal}>选择</Button>
                            <Modal
                              width={800}
                              title="值集选择框"
                              visible={visible}
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                            >
                              <RankList />
                            </Modal>
                          </div>,
                      )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="雇主"
                    >
                      {getFieldDecorator('duty11',
                        {
                          rules: [{ required: true }],
                        })(
                          <div>
                            <Input style={{ width: 220 }} defaultValue="中国联合网络通信集团有限公司" />
                            <Button style={{ marginLeft: 3 }} type="primary" onClick={this.employerModel}>选择</Button>
                            <Modal
                              width={800}
                              title="雇主"
                              visible={employer}
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                            />
                          </div>,
                      )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="纳税地区"
                    >
                      {getFieldDecorator('local',
                        {
                          rules: [{ required: true }],
                        })(
                          <div>
                            <Input style={{ width: 220 }} />
                            <Button style={{ marginLeft: 3 }} type="primary" onClick={this.taxesModel}>选择</Button>
                            <Modal
                              width={800}
                              title="纳税地区"
                              visible={taxes}
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                            />
                          </div>,
                      )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="社会保险/PHF摊缴地区"
                    >
                      {getFieldDecorator('duty11',
                        {
                          rules: [{ required: true }],
                        })(
                          <div>
                            <Input style={{ width: 220 }} />
                            <Button style={{ marginLeft: 3 }} type="primary" onClick={this.insuranceModel}>选择</Button>
                            <Modal
                              width={800}
                              title="社会保险/PHF摊缴地区"
                              visible={insurance}
                              onOk={this.handleOk}
                              onCancel={this.handleCancel}
                            />
                          </div>,
                      )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="薪金基准"
                    >
                      {getFieldDecorator('duty11')(
                        <div>
                          <Input style={{ width: 220 }} defaultValue="中国联通集团员工薪金基准" />
                        </div>,
                      )
                      }
                    </FormItem>
                    <FormItem
                      help=""
                      labelCol={{ span: 6 }}
                      {...formItemLayout}
                      label="附件"
                    >
                      {getFieldDecorator('enclosure', {
                      })(
                        <Upload name="file" action="/upload.do">
                          <Button>
                            <Icon type="upload" />浏览
                          </Button>
                        </Upload>,
                      )}
                    </FormItem>
                  </div>
                </div>
              </div>
            </div>
            <Col span={24} style={{ textAlign: 'center', marginTop: 15 }}>
              <Button htmlType="submit" style={{ marginRight: 10 }}>提交</Button>
              <Button htmlType="button" onClick={handleReset}>重置</Button>
            </Col>
          </Form>
        </Fragment>
      </Card>
    );
  }
}

const StaffDimissionForm = Form.create()(StaffDimission);

export default StaffDimissionForm;
