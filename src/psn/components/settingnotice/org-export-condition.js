
import React from 'react';
import {
  Layout, Select, Input,
} from 'antd';
import '../assets/styles/org-export-condition.less';
import AttachTable from './attach-table';


const OrgExportCondition = (state) => {
  // const { addPeople } = state;
  // console.log('state5555', state, addPeople);
  const { Content } = Layout;
  const { Option } = Select;
  const respList = [];
  const apply = (item) => {
    return (<Option value={item.id} key={item.id}> {item.title} </Option>);
  };
  const respRange = [
    { id: '0', title: '退休流程' },
    { id: '1', title: '系统内入职（集团总部）' },
    { id: '2', title: '入职流程' },
    { id: '3', title: '理智系统内（集团总部）' },
    { id: '4', title: '离职流程' },
    { id: '5', title: '员工调动' },
    { id: '6', title: '借调交流结束流程' },
    { id: '7', title: '地市兼职借调交流流程' },
    { id: '8', title: '市管兼职借调交流流程' },
    { id: '9', title: '省管兼职借调交流流程' },
    { id: '10', title: '跨地市兼职借调交流流程' },
    { id: '11', title: '跨省兼职借调交流流程' },
    { id: '12', title: '组织变更流程' }];
  if (respList.length === 0) {
    for (let i = 0; i < respRange.length; i += 1) {
      const respV = {
        id: respRange[i].id,
        title: respRange[i].title,
      };
      respList.push(respV);
    }
  }

  const childItem4 = [];
  for (let i = 1; i < 11; i += 1) {
    childItem4.push(<Option key={i.toString()}>{i}</Option>);
  }

  return (
    <div className="OrgExportCondition">
      <Layout>
        <Content>
          <div className="conditionContainer">
            <span className="conditionContainerItem1">通知单名称：</span>
            <span className="conditionContainerItem4">
              <Input
                style={{ width: 300 }}
              />
            </span>
            <span className="conditionContainerItem3">业务类型：</span>
            <span className="conditionContainerItem4">
              <Select
                placeholder="请选择"
                allowClear
                style={{
                  width: 300,
                }}
              >
                {
                      respList.map(apply)
                    }
              </Select>,
            </span>
          </div>
          <AttachTable {...state} />
        </Content>
      </Layout>
    </div>
  );
};
export default OrgExportCondition;

// OrgExportCondition.propTypes = {
//   setAddPeople: PropTypes.func.isRequired,
// };
