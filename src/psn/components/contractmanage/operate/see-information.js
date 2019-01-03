/* eslint-disable max-len */
import React from 'react';
import {
  Form, Row, Input, Col, Select, DatePicker,
} from 'antd';

const FormItem = Form.Item;
class SeeInformation extends React.Component {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    /* 查询字段 */
    const queryCols = [{
      itemName: '员工编号', itemType: 'String', itemKey: 'EmployeeNumber', required: false,
    }, {
      itemName: '姓名', itemType: 'String', itemKey: 'Name', required: false,
    }, {
      itemName: '合同编号', itemType: 'String', itemKey: 'ContractNumber', required: false,
    }, {
      itemName: '合同类型', itemType: 'Select', itemKey: 'ContractType', required: false,
    }, {
      itemName: '合同状态', itemType: 'Select', itemKey: 'ContractStatus', required: false,
    }, {
      itemName: '特殊说明', itemType: 'String', itemKey: 'SpecialInstructions', required: false,
    }, {
      itemName: '签订日期', itemType: 'Data', itemKey: 'SignData', required: false,
    }, {
      itemName: '终止日期', itemType: 'Data', itemKey: 'TerminationData', required: false,
    }, {
      itemName: '生效日期', itemType: 'Data', itemKey: 'EffectiveDate', required: false,
    }, {
      itemName: '失效日期', itemType: 'Data', itemKey: 'ExpirationDate', required: false,
    }, {
      itemName: '合同期限', itemType: 'String', itemKey: 'ContractPeriod', required: false,
    }, {
      itemName: '期限单位', itemType: 'Select', itemKey: 'LimitUnit', required: false,
    }, {
      itemName: '扩展次数', itemType: 'String', itemKey: 'ExtensionTimes', required: false,
    }, {
      itemName: '扩展期限', itemType: 'String', itemKey: 'ExtensionPeriod', required: false,
    }, {
      itemName: '扩展期单位', itemType: 'String', itemKey: 'ExtensionCompany', required: false,
    }, {
      itemName: '签署日期', itemType: 'String', itemKey: 'SigningDate', required: false,
    }, {
      itemName: '预计到期日', itemType: 'Data', itemKey: 'ExpectedMaturity', required: false,
    }, {
      itemName: '试用期到期日', itemType: 'Data', itemKey: 'ProbationaryPeriod', required: false,
    }, {
      itemName: '试用期限', itemType: 'String', itemKey: 'Period', required: false,
    }, {
      itemName: '试用期限单位', itemType: 'Select', itemKey: 'limit', required: false,
    }, {
      itemName: '发生的相关费用', itemType: 'Select', itemKey: 'RelevantCosts ', required: false,
    }, {
      itemName: '发生的相关费用币种', itemType: 'Select', itemKey: 'CostCurrency', required: false,
    }, {
      itemName: '甲方主体', itemType: 'Select', itemKey: 'Party', required: false,
    }, {
      itemName: '担任岗位', itemType: 'Select', itemKey: 'Post', required: false,
    }, {
      itemName: '工作工时制', itemType: 'Select', itemKey: 'limit', required: false,
    }];
    function getFields() {
      const children = [];
      for (let i = 0; i < queryCols.length; i += 1) {
        if (queryCols[i].itemType === 'String') {
          children.push(
            <Col span={12} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 8 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                  }],
                })(
                  <Input style={{ width: 220 }} disabled />,
                )}
              </FormItem>
            </Col>,
          );
        } else if (queryCols[i].itemType === 'Select') {
          children.push(
            <Col span={12} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 8 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                  }],
                })(
                  <Select style={{ width: 220 }} disabled />,
                )}
              </FormItem>
            </Col>,
          );
        } else if (queryCols[i].itemType === 'Data') {
          children.push(
            <Col span={12} key={i} style={{ display: 'block' }}>
              <FormItem label={queryCols[i].itemName} labelCol={{ span: 8 }}>
                {getFieldDecorator(queryCols[i].itemKey, {
                  rules: [{
                    required: queryCols[i].required,
                  }],
                })(
                  <DatePicker style={{ width: 220 }} disabled />,
                )}
              </FormItem>
            </Col>,
          );
        }
      }
      return children;
    }
    return (
      <div>
        <Form
          className="ant-advanced-search-form"
          style={{ padding: 10 }}
          layout="inline"
        >
          <Row gutter={24}>{getFields()}</Row>
        </Form>
      </div>
    );
  }
}

const WrappedSeeForm = Form.create()(SeeInformation);
export default WrappedSeeForm;
