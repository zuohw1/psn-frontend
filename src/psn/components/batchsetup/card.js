import React from 'react';
import {
  Form, Input, Button, Alert, Modal, Select,
} from 'antd';
import First from './first-window';
import Notice from './first-notice';


const FormItem = Form.Item;

class EmptyAttach extends React.Component {
  state = {
    visible: false,
    Records: [],
    Range: '',
    rowRecords: '',
    count: 6,
    notices: '',
  };

  // 第一個彈窗
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      visible: false,
    });
  };
  // 第二个弹窗

  showModal2 = () => {
    this.setState({
      notice: true,
    });
  };


  handleCancel2 = (e) => {
    e.preventDefault();
    this.setState({
      notice: false,
    });
  };

  rowRecord(records) {
    this.setState({
      rowRecords: records,
    });
  }

  show(records) {
    this.setState({
      Records: records,
    });
  }

  render() {
    const respList = [];
    const respRange = [
      { id: '0', title: '部门综合处' },
      { id: '1', title: '信息化接口人' },
      { id: '2', title: '人力核心' },
      { id: '3', title: '主数据' },
      { id: '4', title: '云门户' },
      { id: '5', title: '各个系统' }];
    if (respList.length === 0) {
      for (let i = 0; i < respRange.length; i += 1) {
        const respV = {
          id: respRange[i].id,
          title: respRange[i].title,
        };
        respList.push(respV);
      }
    }
    const formItemLayout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const { Option } = Select;
    const apply = (item) => {
      return (<Option value={item.id} key={item.id}> {item.title} </Option>);
    };
    const {
      visible, Records, notice, Range, rowRecords, count, notices,
    } = this.state;
    const {
      isNewModalShowone, updateTable, dataRecord,
    } = this.props;


    let add = '';
    const handleOk = () => {
      for (let i = 0; i < Records.length; i += 1) {
        add += Records[i].id;
      }
      this.setState({
        Range: add,
        visible: false,
      });
    };

    const handleOk2 = () => {
      this.setState({
        notice: false,
      });
    };

    let valueOne = '';
    const onChangeOne = (e) => {
      const values = e.target.value;
      valueOne = values;
    };
    let valueTwo = '';
    const onChangeTwo = (e) => {
      const values = e.target.value;
      valueTwo = values;
    };

    const handleTreeSelect = (selectedKeys, info) => {
      console.log(info);
      const titleType = info.props.children[1];
      console.log(titleType);
      this.setState({
        notices: titleType,
      });
    };
    const addProfModalOk = () => {
      isNewModalShowone(false);
      const newData = {
        key: count,
        mailbox: valueOne,
        name: rowRecords,
        system: valueTwo,
        Range,
        notice: notices,
        Code: '0003889',
        organization: '中国联通总部-信息化事业部-综合管理处',
      };
      this.setState({
        count: count + 1,
      });
      updateTable([...dataRecord, newData]);
    };
    return (
      <div className="addProfDivision">
        <Alert style={this.showAlert ? { display: 'block' } : { display: 'none' }} message="已有该分组，请重新添加！" type="warning" showIcon />
        <ul className="addProfList">
          <li>
            <FormItem
              {...formItemLayout}
              label="通知类型"
              help=""
            >
              <span className="conditionContainerItem4">
                <Select
                  placeholder="请选择"
                  allowClear
                  style={{
                    width: 300,
                  }}
                  onSelect={handleTreeSelect}
                >
                  {
                    respList.map(apply)
                  }
                </Select>
              </span>
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="通知人员"
              help=""
            >
              <Input
                style={{
                  width: 300,
                }}
                onClick={this.showModal2}
                value={rowRecords}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="通知范围"
              help=""
            >

              <Input
                style={{
                  width: 300,
                }}
                onClick={this.showModal}
                value={`${Range}`}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="邮箱"
              help=""
            >

              <Input
                style={{
                  width: 300,
                }}
                onChange={e => onChangeOne(e)}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="系统名称"
              help=""
            >

              <Input
                style={{
                  width: 300,
                }}
                onChange={e => onChangeTwo(e)}
              />
            </FormItem>
          </li>
        </ul>
        <Button htmlType="button" type="primary" onClick={addProfModalOk}>
          保存
        </Button>
        <Modal
          width={800}
          title=" "
          visible={visible}
          onOk={handleOk}
          onCancel={this.handleCancel}
        >
          <First getMsg={this.show.bind(this)} />
        </Modal>
        <Modal
          width={800}
          title="查找审批人"
          visible={notice}
          onOk={handleOk2}
          onCancel={this.handleCancel2}
        >
          <Notice
            getRecordMsg={this.rowRecord.bind(this)}
          />
        </Modal>
      </div>
    );
  }
}

export default EmptyAttach;
