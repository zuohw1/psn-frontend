import React from 'react';
import {
  Table, Card, Button, Input, DatePicker, Upload, Col, Form, Icon,
} from 'antd';
import '../assets/styles/personnel.less';

const FormItem = Form.Item;
class BackPay extends React.Component {
  render() {
    const {
      loading,
      form,
    } = this.props;
    const { getFieldDecorator } = form;
    /* 列表字段 */
    const tableCols = [{
      title: '栏目名称',
      dataIndex: 'catname',
      key: 'catname',
      align: 'center',
      width: '20%',
      render: (text, record, index) => {
        if (index === 0) {
          return '员工编号';
        } else if (index === 1) {
          return '姓名';
        } else if (index === 2) {
          return '最终处理日期';
        } else if (index === 3) {
          return '附件';
        }
      },
    }, {
      title: '修改前内容',
      dataIndex: 'update',
      key: 'update',
      align: 'center',
      width: '40%',
      render: (text, record, index) => {
        if (index === 0) {
          return (
            <div>
              <Input disabled style={{ width: 258 }} />
            </div>
          );
        } else if (index === 1) {
          return (
            <Input disabled style={{ width: 258 }} />
          );
        } else if (index === 2) {
          return (
            <Input disabled style={{ width: 258 }} />
          );
        }
      },
    }, {
      title: '修改后内容',
      dataIndex: 'message',
      key: 'message',
      align: 'center',
      width: '40%',
      render: (text, record, index) => {
        if (index === 2) {
          return (
            <Form style={{ height: 40 }}>
              <FormItem>
                {getFieldDecorator('departuredate', {
                  rules: [{ required: true }],
                })(
                  <DatePicker style={{ width: 258 }} />,
                )
                }
              </FormItem>
            </Form>
          );
        } else if (index === 3) {
          return (
            <div className="main">
              <div className="upload_main">
                <FormItem
                  help=""
                  labelCol={{ span: 6 }}
                >
                  {getFieldDecorator('maintext', {
                    getValueFromEvent: this.normFile,
                  })(
                    <Upload name="maintext" action="/upload.do">
                      <Button style={{ marginRight: 35 }}>
                        <Icon type="upload" />浏览
                      </Button>
                    </Upload>,
                  )}
                </FormItem>
              </div>
            </div>
          );
        }
      },
    }];

    const attachData = [{
      catname: '员工编号',
    }, {
      catname: '姓名',
    }, {
      catname: '最终处理日期',
    }, {
      catname: '附件',
    }];
    const handleReset = () => {
      form.resetFields();
    };
    function getFields() {
      const children = [];
      for (let i = 0; i < tableCols.length; i += 1) {
        children.push(tableCols[i]);
      }
      return children;
    }
    return (
      <div>
        <Card title="补薪信息维护">
          <Table
            columns={getFields()}
            dataSource={attachData}
            loading={loading}
            pagination={false}
            size="small"
            bordered
            scroll={{ y: document.body.scrollHeight - 460 }}
            style={{ marginTop: 10 }}
          />
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button htmlType="submit" style={{ margin: '10px' }}>提交</Button>
            <Button htmlType="button" style={{ margin: 'auto' }} onClick={handleReset}>重置</Button>
          </Col>
        </Card>
      </div>
    );
  }
}
export default BackPay;
