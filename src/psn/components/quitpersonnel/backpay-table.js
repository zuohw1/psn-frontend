import React, { Component, Fragment } from 'react';
import {
  DatePicker, Button, Form, Input, Card, Upload, Col, Icon,
} from 'antd';
import '../assets/styles/quit-personnel.less';

const FormItem = Form.Item;

class StaffDimission extends Component {
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
    const formItemLayout = {
      labelCol: {
        span: 12,
      },
      wrapperCol: {
        span: 12,
      },
    };
    const handleReset = () => {
      form.resetFields();
    };
    return (
      <Card title="补薪信息维护">
        <Fragment>
          <Form onSubmit={this.handleSubmit}>
            <div className="active">
              <div className="active_main">
                <div className="active_main_cont active_main_cont-staff">
                  <div className="active_main_cont_left">
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="栏目名称"
                    >
                      {getFieldDecorator('userName')(
                        <span>修改前内容</span>,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="员工编号"
                    >
                      {getFieldDecorator('userName')(
                        <Input disabled style={{ width: 220 }} />,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="姓名"
                    >
                      {getFieldDecorator('idnumber')(
                        <Input disabled style={{ width: 220 }} />,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="最终处理日期"
                    >
                      {getFieldDecorator('workunit')(
                        <DatePicker disabled style={{ width: 220 }} />,
                      )}
                    </FormItem>
                  </div>
                  <div className="active_main_cont_right">
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label=""
                    >
                      {getFieldDecorator('employtype')(
                        <span>修改后内容</span>,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label=""
                    >
                      {getFieldDecorator('employtype')(
                        <Input style={{ display: 'none' }} />,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label=""
                    >
                      {getFieldDecorator('employtype')(
                        <Input style={{ display: 'none' }} />,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label=""
                    >
                      {getFieldDecorator('sdf', {
                        rules: [{ required: true, whitespace: true }],
                      })(
                        <DatePicker style={{ width: 220 }} />,
                      )}
                    </FormItem>
                  </div>
                </div>
                <div className="active_main_cont active_main_cont-registbottom">
                  <FormItem
                    help=""
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    label="附件"
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
                </div>
              </div>
            </div>
            <Col span={24} style={{ textAlign: 'center', marginTop: 15 }}>
              <Button htmlType="submit" style={{ marginRight: 10 }} type="primary">提交</Button>
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
