/* eslint-disable */
import React from 'react';
import { Layout, Breadcrumb, Input, InputNumber, Form, Upload, Button, Icon, DatePicker, Modal, TreeSelect, } from 'antd';
import '../assets/styles/psn-transpro.less';
import CurrencyTable from './table';
import request from '../../../utils/request';

const { Content } = Layout;
const { TextArea } = Input;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const jobNumberColumns = [{
  title: '员工姓名',
  dataIndex: 'ATTRIBUTE8',
  key: 'ATTRIBUTE8',
  align: 'center',
}, {
  title: '员工编号',
  dataIndex: 'ATTRIBUTE4',
  key: 'ATTRIBUTE4',
  align: 'center',
}, {
  title: '组织',
  dataIndex: 'ATTRIBUTE5',
  key: 'ATTRIBUTE5',
  align: 'center',
}, {
  title: '职务',
  dataIndex: 'ATTRIBUTE6',
  key: 'ATTRIBUTE6',
  align: 'center',
}];
const PsnanizeColumns = [{
  title: '组织',
  dataIndex: 'DOC_CODE',
  key: 'DOC_CODE',
  align: 'left',
}];
const treeData = [{
  title: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    title: 'Child Node1',
    value: '0-0-1',
    key: '0-0-1',
  }, {
    title: 'Child Node2',
    value: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: 'Node2',
  value: '0-1',
  key: '0-1',
}];

const PsnTranspro = (state) => {
	console.log(state);
  	const { getFieldDecorator } = state.form;
  	const { actions } = state;
  	const { getJobNumber, closeJobNumber, getPsnanize, closePsnanize, changeFormatTable, } = actions;
  	const normFile = (e) => {
	  	console.log('Upload event:', e);
	  	if (Array.isArray(e)) {
	    	return e;
	  	}
	  	return e && e.fileList;
	};
  	const onViewJobNumber = () => {
	  	getJobNumber();
	};
	const onJobNumberSubmit = (e) => {
		e.preventDefault();
		console.log(state.code);
		closeJobNumber();
	};
	const cancelViewJobNumber = (e) => {
		e.preventDefault();
		closeJobNumber();
	};
	const onViewPsnanize = () => {
	  	getPsnanize();
	};
	const onPsnanizeSubmit = (e) => {
		e.preventDefault();
		console.log(state.code);
		closePsnanize();
	};
	const cancelPsnanize = (e) => {
		e.preventDefault();
		closePsnanize();
	};
	const onSearch = (value) => {
	    const { PsnanizeUrl, search } = state;
	    const searchF = { ...search, name: value };
	    refreshData(PsnanizeUrl, searchF);
	};
	const refreshData = (refUrl, search) => {
	    return new Promise(async (resolve) => {
	      let url = `${refUrl}?pageNumber=${search.pageNumber}&pageSize=${search.pageSize}`;
	      if (search.name && search.name !== '') {
	        url += `&name=${search.name}`;
	      }
	      const tableData = await request.get(url);
	      const formatTable = formatTableData(tableData);
	      changeFormatTable(formatTable);
	      resolve();
	    });
	};
	const formatTableData = (tableData) => {
	    const num = tableData.current * 10 - 10;
	    const table = tableData.records.map((item, index) => {
	      return { ...item, key: index + 1 + num };
	    });
	    return { ...tableData, records: table };
	};
	const onChange = (value) => {
	    console.log(value);
	}
	return (
	    <div className="Transpro">
		    <Layout>
			    <Modal
			      title="选择人员"
			      onOk={onJobNumberSubmit}
			      onCancel={cancelViewJobNumber}
			      maskClosable={false}
			      destroyOnClose
			      width={800}
			      visible={state.jobNumberModal}
			      centered
			      className="trans_model"
			    >
			    	<div className="trans_modelTop">
			    		<span className="trans_modelTop_1">
							组织：<TreeSelect
						        style={{ width: 158 }}
						        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
						        treeData={treeData}
						        placeholder="Please select"
						        treeDefaultExpandAll
						        onChange={onChange}
						    />
						</span>
						<span className="trans_modelTop_2"><span>员工姓名：</span><Input placeholder="詹姆斯·邦德" /></span>
						<span className="trans_modelTop_3"><span>员工编号：</span><Input placeholder="007" /></span>
						<span className="trans_modelTop_4"><Button type="primary" icon="search">查询</Button></span>
			    	</div>
			      	<CurrencyTable
			          	columns={jobNumberColumns}
			          	refUrl={state.jobNumberUrl}
			          	sta={state}
			        />
			    </Modal>
			    <Modal
			      title="组织"
			      onOk={onPsnanizeSubmit}
			      onCancel={cancelPsnanize}
			      maskClosable={false}
			      destroyOnClose
			      width={760}
			      visible={state.PsnanizeModal}
			      centered
			      className="trans_psnModel"
			    >
			    	<Input.Search style={{ width: 300 }} placeholder="Search" onSearch={onSearch} />
			      	<CurrencyTable
			          	columns={PsnanizeColumns}
			          	refUrl={state.PsnanizeUrl}
			          	sta={state}
			        />
			    </Modal>
			    <Content>
			        <div className="trans_container">
			          <div className="trans_header">
			            中国联合网络通信有限公司<Input className="transInput_1" />省（市）分公司商调函
			          </div>
			          <div className="trans_content">
			            <div className="trans_content_1">
			              <p><Input className="transInput_2" />：</p>
			              <div className="firstlineindent_2">因<Input className="transInput_3" />拟商调<Input className="transInput_4" />（工号<Input className="transInput_5" /><Icon type="search" onClick={onViewJobNumber}/>）到中国联合网络通信有限公司<Input  className="transInput_6" /><Icon type="search"  onClick={onViewPsnanize}/>工作，请贵公司同意，请于<DatePicker className="transDatePicker_1" />日前协助办理以下调离手续。如果不同意，请于收到此函5日内函告。</div>
			              <div className="firstlineindent_3">一、经研究决定，同意接收<Input className="transInput_7" />到<Input className="transInput_8" />工作。如贵单位同意，请通知本人办理调动手续，于<InputNumber min={1} max={10} className="transInputNumber_1" />日到<Input className="transInput_9" />报到。</div>
			              <div className="firstlineindent_4">二、档案请封装好，交本人自带或邮寄我公司。</div>
			            </div>
			            <div className="trans_content_2">
			              <div className="trans_content_2left">备注：</div>
			              <div className="trans_content_2right"><TextArea rows={3} /></div>
			            </div>
			            <div className="trans_content_3">
			              <div className="trans_content_3left">正文：</div>
			              <div className="trans_content_3right">
			                <FormItem
			                  {...formItemLayout}
			                >
			                  {getFieldDecorator('upload', {
			                    valuePropName: 'fileList',
			                    getValueFromEvent: normFile,
			                  })(
			                    <Upload name="logo" action="/upload.do" listType="picture">
			                      <Button>
			                        <Icon type="upload" />浏览
			                      </Button>
			                    </Upload>
			                  )}
			                </FormItem>
			              </div>
			            </div>
			            <div className="trans_content_4">
			              <div className="trans_content_4left">附件：</div>
			              <div className="trans_content_4right">
			                <FormItem
			                  {...formItemLayout}
			                >
			                  {getFieldDecorator('upload', {
			                    valuePropName: 'fileList',
			                    getValueFromEvent3: normFile,
			                  })(
			                    <Upload name="logo" action="/upload.do" listType="picture">
			                      <Button>
			                        <Icon type="upload" />浏览
			                      </Button>
			                    </Upload>
			                  )}
			                </FormItem>
			              </div>
			            </div>
			            <div className="trans_content_5">
			              <span className="lastTime">成交日期：<DatePicker className="transDatePicker_2" /></span>
			            </div>
			            <div className="trans_content_6">
			              <Button type="primary" htmlType="submit">提交</Button>
			            </div>
			          </div>
			        </div>
			    </Content>
		    </Layout>
	    </div>
	  );
	};

export default PsnTranspro;
