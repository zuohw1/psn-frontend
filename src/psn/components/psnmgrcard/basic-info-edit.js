/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Form, Input, Select, DatePicker, InputNumber,
} from 'antd';

export default ({ form, templateData, detailRecord }) => {
  const { getFieldDecorator } = form;

  const { Option } = Select;

  const onSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log('--------------', values);
      }
    });
  };

  const buildFormItem = (item) => {
    const rules = [];
    if (item.nullFlag) {
      rules.push({ required: true, message: `${item.showName}不能为空！` });
    }
    if (item.itemType === 'Input') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item.itemkey), rules })(
        <Input style={{ width: '80%' }} />,
      ));
    } else if (item.itemType === 'Select') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item.itemkey) })(
        <Select placeholder="请选择" style={{ width: '80%' }} allowClear />,
      ));
    } else if (item.itemType === 'DatePicker#Date') {
      return (getFieldDecorator(item.itemkey)(
        <DatePicker style={{ width: '80%' }} format="YYYY-MM-DD" />,
      ));
    } else if (item.itemType === 'Input#Number') {
      return (getFieldDecorator(item.itemkey, { initialValue: getColumnVal(item.itemkey) })(
        <InputNumber min={item.min} max={item.max} style={{ width: '80%' }} />,
      ));
    }
  };

  // const replaceUnderLine = (val) => {
  //   const arr = val.split('');
  //   const index = arr.indexOf('_');
  //   arr.splice(index, 2, arr[index + 1].toUpperCase());
  //   return arr.join('');
  // };

  const getColumnVal = (itemKey) => {
    let ret = '';
    for (let i = 0; i < detailRecord.length; i += 1) {
      const item = detailRecord[i];
      if (item.itemKey === itemKey) {
        ret = item.value;
        break;
      }
    }
    return ret;
  };


  const buildBasicInfoEditForm = () => {
    const formAry = [];
    if (templateData && templateData.length > 0) {
      for (let i = 0; i < templateData.length; i += 1) {
        const item = templateData[i];
        formAry.push(
          <tr key={(i + 10)}>
            <td>&nbsp;&nbsp;<b>{item.showName}:</b></td>
            <td style={{ paddingLeft: '20px' }}>
              {getColumnVal(item.itemkey)}
            </td>
            <td style={{ paddingLeft: '20px' }}>
              <Form.Item>
                {
                    buildFormItem(item)
                  }
              </Form.Item>
            </td>
          </tr>,
        );
      }
    }
    return formAry;
  };

  // const buildBasicInfoEditForm = () => {
  //   let formStr = '';
  //   if (templateData && templateData.length > 0) {
  //     for (let i = 0; i < templateData.length; i += 1) {
  //       const item = templateData[i];
  //       formStr += `<tr>
  //           <td>&nbsp;&nbsp;<b>${item.showName}:</b></td>
  //           <td>
  //             &nbsp;&nbsp;${detailRecord[item.itemKey]}
  //           </td>`;
  //       formStr += '<td>';
  //       if (item.itemType === 'Input') {
  //         formStr += `<Form.Item>
  //             {
  //                 getFieldDecorator(${item.itemkey})(
  //                   <Input style={{ width: '80%', marginLeft: '20px' }} />,
  //                 )}
  //           </Form.Item>`;
  //       } else if (item.itemType === 'Select') {
  //         formStr += `<Form.Item>
  //             {
  //                 getFieldDecorator(${item.itemkey},{ initialValue: '' })(
  //                 <Select placeholder="请选择" allowClear>
  //                 </Select>,
  //                 )}
  //           </Form.Item>`;
  //       }
  //       formStr += '</td></tr>';
  //     }
  //   }
  //   return formStr;
  // };
  return (
    <React.Fragment>
      <Form
        style={{ padding: 10 }}
        onSubmit={onSubmit}
      >
        <table width="100%" style={{ border: '#e8e8e8' }} border="1" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr height="40px">
              <td width="25%"><b>&nbsp;&nbsp;栏目名称</b></td>
              <td width="30%"><b>&nbsp;&nbsp;修改前内容</b></td>
              <td width="45%"><b>&nbsp;&nbsp;修改后内容</b></td>
            </tr>
            <tr>
              <td><b>&nbsp;&nbsp;操作</b></td>
              <td colSpan={2}>
                <Form.Item>
                  {getFieldDecorator('opt', { initialValue: 'corrections' })(
                    <Select style={{ width: '80%', marginLeft: '20px' }}>
                      <Option value="corrections" key="corrections">更正</Option>
                      <Option value="update" key="update">更新</Option>
                    </Select>,
                  )}
                </Form.Item>
              </td>
            </tr>
            {buildBasicInfoEditForm()}

          </tbody>
        </table>
      </Form>
    </React.Fragment>
  );
};
