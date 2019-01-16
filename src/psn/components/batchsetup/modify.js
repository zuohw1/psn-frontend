import React from 'react';
import {
  Form, Input, Button, Alert, Modal,
} from 'antd';
import First from './first-window';


const FormItem = Form.Item;

class EmptyAttach extends React.Component {
  state = {
    visible: false,
    Records: [],
    // newRecord: {},
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
    const { visible, Records } = this.state;
    const { record } = this.props;

    const newRecord = record[0];

    let add = '';
    const newRecords = Records[0];
    const handleOk = () => {
      if (newRecord.Range && newRecord.Range !== newRecords.id) {
        for (let i = 0; i < Records.length; i += 1) {
          // noinspection JSAnnotator
          add += Records[i].id;
        }
        newRecord.Range = add;
      }
      this.setState({
        visible: false,
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
    const addProfModalOk = () => {
      alert('ddd');
      const newData = {
        Range: add,
        mailbox: valueOne,
        system: valueTwo,
      };
      console.log(newData);
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
                {newRecord.notice}
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
                value={`${newRecord.name}`}
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
                value={`${newRecord.Range}`}
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
                defaultValue={`${newRecord.mailbox}`}
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
                defaultValue={`${newRecord.system}`}
                onChange={e => onChangeTwo(e)}
              />
            </FormItem>
          </li>
          <li>
            <FormItem
              {...formItemLayout}
              label="办理手续"
              help=""
            />
          </li>
        </ul>
        <Button htmlType="button" type="primary" onClick={() => addProfModalOk}>
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
      </div>
    );
  }
}

export default EmptyAttach;
