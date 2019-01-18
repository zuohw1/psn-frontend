import React from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Select,
} from 'antd';

import SearchTable from '../../../components/search-table';


const FormItem = Form.Item;
const { Option } = Select;

export default (props) => {
  const {
    form,
    actions,
    expand,
    tableData,
    refModal,
    refSelectData,
    search,
  } = props;
  const { getFieldDecorator } = form;
  const { listTable, setToggle, updateOrgRefModelShow } = actions;

  /* 组织参照部分 */
  // const onOrgRefOk = () => {
  //   form.setFieldsValue({
  //     org_id: `${refSelectData.orgId}`,
  //     orgName: `${refSelectData.orgName}`,
  //   });
  //   updateOrgRefModelShow(false);
  // };

  // const onOrgRefCancel = (e) => {
  //   //   e.preventDefault();
  //   //   updateOrgRefModelShow(false);
  //   // };

  const onOrgRefClick = () => {
    updateOrgRefModelShow(true);
  };

  const orgRefUrl = 'empMgr/queryOrgListByName?';

  // const rowSelection = {
  //   columnWidth: '30px',
  //   type: 'radio',
  // };

  const orgRefColumns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
    width: 120,
  }, {
    title: '组织',
    dataIndex: 'orgName',
    key: 'orgName',
    align: 'left',
    width: 400,
  }];

  const orgRefCodes = [{ code: 'org_id', refcode: 'orgId' }, { code: 'orgName', refcode: 'orgName' }];
  /* 组织参照部分end */
  const handleSearch = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        const pageSize = tableData.size;
        const pageNumber = 1;
        const select = { ...values, pageSize, pageNumber };
        listTable(select);
      }
    });
  };

  const handleReset = () => {
    form.resetFields();
  };

  const toggle = () => {
    setToggle(!expand);
  };

  const apply = (item) => {
    return (<Option value={item.title} key={item.id}> {item.title} </Option>);
  };


  const queryItems = [
    {
      itemName: '员工编号', itemKey: 'employeeNumber', itemType: 'String', required: false,
    },
    {
      itemName: '员工姓名', itemKey: 'fullName', itemType: 'String', required: false,
    },
    {
      itemName: '组织', itemKey: 'orgName', itemType: 'RefTable', required: false,
    },
    {
      itemName: '用工类型',
      itemKey: 'userPersonType',
      itemType: 'Select',
      required: false,
      list: [{ id: '0', title: '正式' }, { id: '1', title: '其他从业' }, { id: '2', title: '离退休人员' }, { id: '3', title: '离职人员' }],
    }];

  let collapse = null;
  if (queryItems.length > 3) {
    collapse = (
      <a style={{ marginLeft: 8, fontSize: 14 }} onClick={toggle}>
        更多 <Icon type={expand ? 'up' : 'down'} />
      </a>
    );
  }

  function getFields() {
    const count = expand ? queryItems.length : 3;
    const children = [];
    for (let i = 0; i < queryItems.length; i += 1) {
      if (queryItems[i].itemType === 'String') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryItems[i].itemName}>
              {getFieldDecorator(queryItems[i].itemKey, {
                rules: [{
                  required: queryItems[i].required,
                  message: '不能为空!',
                }],
                initialValue: search[queryItems[i].itemKey],
              })(
                <Input placeholder="请输入" />,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryItems[i].itemType === 'Select') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryItems[i].itemName}>
              {getFieldDecorator(queryItems[i].itemKey,
                { initialValue: search[queryItems[i].itemKey] })(
                  <Select placeholder="请选择" allowClear>
                    {
                    queryItems[i].list.map(apply)
                  }
                  </Select>,
              )}
            </FormItem>
          </Col>,
        );
      } else if (queryItems[i].itemType === 'RefTable') {
        children.push(
          <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
            <FormItem label={queryItems[i].itemName}>
              {getFieldDecorator(queryItems[i].itemKey,
                { initialValue: search[queryItems[i].itemKey] })(
                  <Input.Search style={{ width: '100%' }} placeholder="请选择组织" onSearch={onOrgRefClick} autoComplete="off" />,
              )}
            </FormItem>,
            <FormItem>
              {getFieldDecorator('org_id', { initialValue: search.org_id })(
                <Input type="hidden" />,
              )}
            </FormItem>,
          </Col>,
        );
      }
    }

    if (expand) {
      for (let i = 0; i < 7 - count; i += 1) {
        children.push(
          <Col span={6} key={count + i} style={{ display: 'block' }} />,
        );
      }
    }
    children.push(
      <Col span={6} key={count + 3} style={{ textAlign: 'right', marginTop: 5 }}>
        <Button htmlType="submit">查询</Button>
        <Button style={{ marginLeft: 8 }} onClick={handleReset}>
          重置
        </Button>
        {collapse}
      </Col>,
    );
    return children;
  }

  return (
    <React.Fragment>
      <Form
        className="ant-advanced-search-form"
        onSubmit={handleSearch}
        style={{ padding: 10 }}
        layout="inline"
      >
        <Row gutter={24}>{getFields()}</Row>
      </Form>
      <SearchTable
        refModal={refModal}
        setRefModeShow={updateOrgRefModelShow}
        parentForm={form}
        refUrl={orgRefUrl}
        columns={orgRefColumns}
        placeholder="请输入组织名称"
        refSelectData={refSelectData}
        refCodes={orgRefCodes}
      />
    </React.Fragment>
  );
};
