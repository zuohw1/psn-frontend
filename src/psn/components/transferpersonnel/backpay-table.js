import React, { Component, Fragment } from 'react';
import {
  DatePicker, Button, Form, Input, Card, Col, Upload, Icon, TreeSelect, Tree, Modal,
} from 'antd';
import StaffQuery from './staff-query';
import '../assets/styles/personnel.less';


const FormItem = Form.Item;

class StaffDimission extends Component {
  state = {
    visible: false,
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

  render() {
    const { visible } = this.state;
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
    return (
      <Card title="补薪信息">
        <Fragment>
          <Modal
            width={800}
            title="人员"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <StaffQuery />
          </Modal>
          <Form onSubmit={this.handleSubmit}>
            <div className="link">
              <div className="link_main">
                <div className="link_main_cont link_main_cont-staff">
                  <div className="link_main_cont_left">
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
                      label="有效日期"
                    >
                      {getFieldDecorator('effectiveData')(
                        <DatePicker style={{ width: 220 }} />,
                      )
                }
                    </FormItem>
                    <FormItem
                      hasFeedback
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
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="目标组织（创建次要分配组织）"
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
                      hasFeedback
                      help=""
                      {...formItemLayout}
                      label="目标接收人（员工调动前原组织薪酬管理人员）"
                    >
                      {getFieldDecorator('duty',
                        {
                          rules: [{ required: true }],
                        })(
                          <Input style={{ width: 220 }} onClick={this.showModal} />,
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
              <Button htmlType="button">重置</Button>
            </Col>
          </Form>
        </Fragment>
      </Card>
    );
  }
}

const StaffDimissionForm = Form.create()(StaffDimission);

export default StaffDimissionForm;
