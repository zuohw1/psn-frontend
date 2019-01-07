import React, { Fragment } from 'react';
import {
  Button,
  Card, Col, DatePicker, Form, Input, Select,
} from 'antd';
import '../assets/styles/contract-manage.less';
import { Link } from 'dva/router';

const FormItem = Form.Item;
const { Option } = Select;

class Search extends React.Component {
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
    const contractStatus = [
      '合同变更主体',
      '新签',
      '续签',
      '上市改签',
    ];
    const Company = [
      '月数',
      '年',
      '周数',
    ];
    const party = [
      '中国联通有限公司北京分公司',
      '中国联合网络通信有限公司北京分公司',
      '北京五湖四海北京分公司',
    ];
    const work = [
      '标准工时',
      '综合计算工时',
      '不定时工时',
    ];
    const contractType = [
      '劳动合同-有固定期限',
      '临时服务协议',
      '岗位聘用协议',
      '内退协议',
      '待岗协议',
      '教育培训协议',
      '保密协议',
    ];
    const period = [
      '人民币元',
      '加拿大元',
      '普拉',
      '白俄罗斯卢布',
      '克朗',
      '德国朗布',
    ];
    const post = [
      '营销',
      '通信管理',
      '业务',
      '管理',
      '技术',
      '通信生产与经营',
    ];
    const handleReset = () => {
      form.resetFields();
    };
    return (
      <Card title="合同信息" bordered={false} bodyStyle={{ padding: '20px 5px' }}>
        <Fragment>
          <Form onSubmit={this.handleSubmit}>
            <div className="contract">
              <div className="contract_main">
                <div className="contract_main_cont contract_main_cont-staff">
                  <div className="contract_main_cont_left">
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="合同编号"
                    >{getFieldDecorator('contractNumber', {
                      rules: [{ required: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="合同状态"
                    >
                      {getFieldDecorator('contractStatus', {
                        rules: [{ required: true, whitespace: true }],
                      })(
                        <Select placeholder="请选择" style={{ width: 220 }}>
                          {contractStatus.map(ele => <Option value={ele}>{ele}</Option>)}
                        </Select>,
                      )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="签订日期"
                    >{getFieldDecorator('SignData', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="生效日期"
                    >{getFieldDecorator('effData', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <DatePicker style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="合同期限"
                    >{getFieldDecorator('ContractPeriod', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="扩展次数"
                    >{getFieldDecorator('time', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="扩展期单位"
                    >{getFieldDecorator('Company', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {Company.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="预计到期日"
                    >{getFieldDecorator('Estimate', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <DatePicker style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="试用期限单位"
                    >{getFieldDecorator('trial', {
                      rules: [{ whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {Company.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="发生的相关费用"
                    >{getFieldDecorator('Relevant', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="甲方主体"
                    >{getFieldDecorator('party', {
                      rules: [{ whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {party.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="工作工时制"
                    >{getFieldDecorator('work', {
                      rules: [{ whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {work.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                  </div>
                  <div className="contract_main_cont_right">
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="合同类型"
                    >{getFieldDecorator('contractType', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {contractType.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="特殊说明"
                    >{getFieldDecorator('special', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="终止到期日"
                    >{getFieldDecorator('endData', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="失效期日"
                    >{getFieldDecorator('Expiration', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="期限单位"
                    >{getFieldDecorator('status', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {Company.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="扩展期限"
                    >{getFieldDecorator('extend', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="签署日期"
                    >{getFieldDecorator('SignData', {
                      rules: [{ required: true, whitespace: true }],
                    })(
                      <DatePicker style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="试用期限"
                    >{getFieldDecorator('Probationary', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="试用期到期日"
                    >{getFieldDecorator('period', {
                      rules: [{ whitespace: true }],
                    })(
                      <Input style={{ width: 220 }} />,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="发生的相关费用币种"
                    >{getFieldDecorator('period', {
                      rules: [{ whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {period.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label="担任岗位"
                    >{getFieldDecorator('post', {
                      rules: [{ whitespace: true }],
                    })(
                      <Select placeholder="请选择" style={{ width: 220 }}>
                        {post.map(ele => <Option value={ele}>{ele}</Option>)}
                      </Select>,
                    )}
                    </FormItem>
                    <FormItem
                      help=""
                      {...formItemLayout}
                      label=""
                    >
                      {getFieldDecorator('post', {
                        rules: [{ whitespace: true }],
                      })(
                        <Input style={{ display: 'none' }} />,
                      )}
                    </FormItem>
                  </div>
                </div>
              </div>
            </div>
            <Col span={24} style={{ textAlign: 'center', marginTop: 15 }}>
              <Button htmlType="submit" style={{ marginRight: 10 }} type="primary">提交</Button>
              <Button htmlType="button" onClick={handleReset} style={{ marginRight: 10 }}>重置</Button>
              <Button htmlType="button"><Link to="/psn/contractManage">返回</Link></Button>
            </Col>
          </Form>
        </Fragment>
      </Card>
    );
  }
}
const WrappedSearchForm = Form.create()(Search);
export default WrappedSearchForm;
