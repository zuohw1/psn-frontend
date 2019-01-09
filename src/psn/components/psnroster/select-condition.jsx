import React from 'react';
import {
  Card, Popover, Button, Checkbox, Row, Col, Input, Tag, message, Icon,
} from 'antd';
import '../assets/styles/select-condition.less';

const CheckboxGroup = Checkbox.Group;
const conditionList = [
  {
    itemname: '性别',
    itemkey: 'sex',
    checked: false,
    children: [
      { itemname: '男性', itemkey: 'sex_1', checked: false },
      { itemname: '女姓', itemkey: 'sex_2', checked: false },
    ],
  },
  {
    itemname: '民族',
    itemkey: 'nation',
    checked: false,
    children: [
      { itemname: '阿昌族', itemkey: 'nation_1', checked: false },
      { itemname: '白族', itemkey: 'nation_2', checked: false },
      { itemname: '布朗族', itemkey: 'nation_3', checked: false },
      { itemname: '保安族', itemkey: 'nation_4', checked: false },
      { itemname: '布依族', itemkey: 'nation_5', checked: false },
      { itemname: '朝鲜族', itemkey: 'nation_6', checked: false },
      { itemname: '傣族', itemkey: 'nation_7', checked: false },
      { itemname: '德昂族', itemkey: 'nation_8', checked: false },
      { itemname: '侗族', itemkey: 'nation_9', checked: false },
      { itemname: '独龙族', itemkey: 'nation_10', checked: false },
      { itemname: '达斡尔族', itemkey: 'nation_11', checked: false },
      { itemname: '东乡族', itemkey: 'nation_12', checked: false },
      { itemname: '鄂温克族', itemkey: 'nation_13', checked: false },
      { itemname: '京族', itemkey: 'nation_14', checked: false },
      { itemname: '仡佬族', itemkey: 'nation_15', checked: false },
      { itemname: '高山族', itemkey: 'nation_16', checked: false },
      { itemname: '汉族', itemkey: 'nation_17', checked: false },
      { itemname: '哈尼族', itemkey: 'nation_18', checked: false },
      { itemname: '回族', itemkey: 'nation_19', checked: false },
      { itemname: '赫哲族', itemkey: 'nation_20', checked: false },
      { itemname: '基诺族', itemkey: 'nation_21', checked: false },
      { itemname: '景颇族', itemkey: 'nation_22', checked: false },
      { itemname: '柯尔克孜族', itemkey: 'nation_23', checked: false },
      { itemname: '哈萨克族', itemkey: 'nation_24', checked: false },
      { itemname: '珞巴族', itemkey: 'nation_25', checked: false },
    ],
  },
  {
    itemname: '政治面貌',
    itemkey: 'politics',
    checked: false,
    children: [
      { itemname: '中国共产党党员', itemkey: 'politics_1', checked: false },
      { itemname: '中国共产党预备党员', itemkey: 'politics_2', checked: false },
      { itemname: '中国共产主义青年团团员', itemkey: 'politics_3', checked: false },
      { itemname: '中国国民党革命委员会会员', itemkey: 'politics_4', checked: false },
      { itemname: '中国民主同盟盟员', itemkey: 'politics_5', checked: false },
      { itemname: '中国民主建国会会员', itemkey: 'politics_6', checked: false },
      { itemname: '中国民主促进会会员', itemkey: 'politics_7', checked: false },
      { itemname: '中国农工民主党党员', itemkey: 'politics_8', checked: false },
      { itemname: '中国致公党党员', itemkey: 'politics_9', checked: false },
      { itemname: '九三学社社成员', itemkey: 'politics_10', checked: false },
      { itemname: '台湾民主自治同盟盟员', itemkey: 'politics_11', checked: false },
      { itemname: '无党派民主人士', itemkey: 'politics_12', checked: false },
      { itemname: '群众', itemkey: 'politics_13', checked: false },
    ],
  },
  {
    itemname: '最高学历',
    itemkey: 'education',
    checked: false,
    children: [
      { itemname: '博士研究生', itemkey: 'education_1', checked: false },
      { itemname: '硕士研究生', itemkey: 'education_2', checked: false },
      { itemname: '大学本科', itemkey: 'education_3', checked: false },
      { itemname: '大学普通班', itemkey: 'education_4', checked: false },
      { itemname: '大学专科', itemkey: 'education_5', checked: false },
      { itemname: '中专', itemkey: 'education_6', checked: false },
      { itemname: '职业高中', itemkey: 'education_7', checked: false },
      { itemname: '高中', itemkey: 'education_8', checked: false },
      { itemname: '技工学校', itemkey: 'education_9', checked: false },
      { itemname: '初中及以下', itemkey: 'education_10', checked: false },
      { itemname: '无', itemkey: 'education_11', checked: false },
      { itemname: '地方党校研究生', itemkey: 'education_12', checked: false },
      { itemname: '中央党校研究生', itemkey: 'education_13', checked: false },
    ],

  },
  {
    itemname: '最高学位',
    itemkey: 'degree',
    checked: false,
    children: [
      { itemname: '博士后', itemkey: 'degree_1', checked: false },
      { itemname: '博士', itemkey: 'degree_2', checked: false },
      { itemname: '硕士', itemkey: 'degree_3', checked: false },
      { itemname: '双学士', itemkey: 'degree_4', checked: false },
      { itemname: '学士', itemkey: 'degree_5', checked: false },
      { itemname: '无', itemkey: 'degree_6', checked: false },
    ],
  },
  {
    itemname: '户口类型',
    itemkey: 'accounttype',
    checked: false,
    children: [
      { itemname: '非农业户口', itemkey: 'accounttype_1', checked: false },
      { itemname: '本地农业户口', itemkey: 'accounttype_2', checked: false },
      { itemname: '外地农业户口', itemkey: 'accounttype_3', checked: false },
      { itemname: '外地非农业户口', itemkey: 'accounttype_4', checked: false },
      { itemname: '非农业集体户口', itemkey: 'accounttype_5', checked: false },
      { itemname: '本地非农业户口（常驻）', itemkey: 'accounttype_6', checked: false },
      { itemname: '本地非农业户口（临时）', itemkey: 'accounttype_7', checked: false },
      { itemname: '其他', itemkey: 'accounttype_8', checked: false },
    ],
  },
  {
    itemname: '员工状态',
    itemkey: 'staffstate',
    checked: false,
    children: [
      { itemname: '正式-在岗-一般在岗人员', itemkey: 'staffstate_1', checked: false },
      { itemname: '正式-不在岗-退出岗位', itemkey: 'staffstate_2', checked: false },
      { itemname: '正式-在岗-借调人员', itemkey: 'staffstate_3', checked: false },
      { itemname: '正式-在岗-到外单位交流人员', itemkey: 'staffstate_4', checked: false },
      { itemname: '正式-在岗-派驻外单位人员', itemkey: 'staffstate_5', checked: false },
      { itemname: '正式-在岗-境外交流人员', itemkey: 'staffstate_6', checked: false },
      { itemname: '正式-在岗-人员派遣', itemkey: 'staffstate_7', checked: false },
      { itemname: '正式-在岗-到外单位挂职锻炼人员', itemkey: 'staffstate_8', checked: false },
      { itemname: '正式-在岗-系统内部交流人员', itemkey: 'staffstate_9', checked: false },
      { itemname: '正式-不在岗-内退人员', itemkey: 'staffstate_10', checked: false },
      { itemname: '正式-不在岗-长期病假人员', itemkey: 'staffstate_11', checked: false },
      { itemname: '正式-不在岗-脱产学习人员', itemkey: 'staffstate_12', checked: false },
      { itemname: '正式-不在岗-待岗人员', itemkey: 'staffstate_13', checked: false },
      { itemname: '正式-不在岗-其他人员', itemkey: 'staffstate_14', checked: false },
      { itemname: '其他从业-聘用工-1年以内', itemkey: 'staffstate_15', checked: false },
      { itemname: '其他从业-劳务派遣', itemkey: 'staffstate_16', checked: false },
      { itemname: '乡话-不在岗-内退人员', itemkey: 'staffstate_17', checked: false },
      { itemname: '正式-不在岗-退休或离休人员', itemkey: 'staffstate_18', checked: false },
      { itemname: '非员工-遗属人员', itemkey: 'staffstate_19', checked: false },
    ],
  },
  {
    itemname: '户口所在地',
    itemkey: 'accountlocation',
    checked: false,
    children: [
      { itemname: '北京市', itemkey: 'accountlocation_1', checked: false },
      { itemname: '天津市', itemkey: 'accountlocation_2', checked: false },
      { itemname: '河北省', itemkey: 'accountlocation_3', checked: false },
      { itemname: '山西省', itemkey: 'accountlocation_4', checked: false },
      { itemname: '内蒙古自治区', itemkey: 'accountlocation_5', checked: false },
      { itemname: '辽宁省', itemkey: 'accountlocation_6', checked: false },
      { itemname: '吉林省', itemkey: 'accountlocation_7', checked: false },
      { itemname: '黑龙江省', itemkey: 'accountlocation_8', checked: false },
      { itemname: '上海市', itemkey: 'accountlocation_9', checked: false },
      { itemname: '江苏省', itemkey: 'accountlocation_11', checked: false },
      { itemname: '浙江省', itemkey: 'accountlocation_12', checked: false },
      { itemname: '安徽省', itemkey: 'accountlocation_13', checked: false },
      { itemname: '福建省', itemkey: 'accountlocation_14', checked: false },
      { itemname: '江西省', itemkey: 'accountlocation_15', checked: false },
      { itemname: '山东省', itemkey: 'accountlocation_16', checked: false },
      { itemname: '河南省', itemkey: 'accountlocation_17', checked: false },
      { itemname: '湖北省', itemkey: 'accountlocation_18', checked: false },
      { itemname: '湖南省', itemkey: 'accountlocation_19', checked: false },
    ],
  },
  {
    itemname: '加入本企业途径',
    itemkey: 'enterpriseapproach',
    checked: false,
    children: [
      { itemname: '调入', itemkey: 'enterpriseapproach_1', checked: false },
      { itemname: '社会招聘', itemkey: 'enterpriseapproach_2', checked: false },
      { itemname: '校园招聘', itemkey: 'enterpriseapproach_3', checked: false },
      { itemname: '复转军人', itemkey: 'enterpriseapproach_4', checked: false },
      { itemname: '毕业生分配', itemkey: 'enterpriseapproach_5', checked: false },
      { itemname: '通过劳务派遣公司招用', itemkey: 'enterpriseapproach_6', checked: false },
      { itemname: '招工', itemkey: 'enterpriseapproach_7', checked: false },
      { itemname: '其他', itemkey: 'enterpriseapproach_8', checked: false },
    ],
  },
  {
    itemname: '分配类别',
    itemkey: 'Category',
    checked: false,
    children: [
      { itemname: '集团总部部门（中心）正职', itemkey: 'Category_1', checked: false },
      { itemname: '一般人员', itemkey: 'Category_2', checked: false },
      { itemname: '集团总部部门（中心）处室正职', itemkey: 'Category_3', checked: false },
      { itemname: '集团总部部门（中心）处室副职', itemkey: 'Category_4', checked: false },
      { itemname: '省分公司正职', itemkey: 'Category_5', checked: false },
      { itemname: '省分公司副职', itemkey: 'Category_6', checked: false },
      { itemname: '省分本部部门（中心）正职', itemkey: 'Category_7', checked: false },
      { itemname: '省分本部部门（中心）副职', itemkey: 'Category_8', checked: false },
      { itemname: '地市分公司正职', itemkey: 'Category_9', checked: false },
      { itemname: '地市分公司副职', itemkey: 'Category_10', checked: false },
      { itemname: '地市本部部门（中心）正职', itemkey: 'Category_11', checked: false },
      { itemname: '地市本部部门（中心）副职', itemkey: 'Category_12', checked: false },
      { itemname: '区县级分公司正职', itemkey: 'Category_13', checked: false },
      { itemname: '区县级分公司副职', itemkey: 'Category_14', checked: false },
      { itemname: '公司领导', itemkey: 'Category_15', checked: false },
      { itemname: '集团总部部门（中心）副职', itemkey: 'Category_16', checked: false },
    ],
  },
  {
    itemname: '毕业院校',
    itemkey: 'graduatefrom',
  },
  {
    itemname: '职称',
    itemkey: 'professionaltitle',
    checked: false,
    children: [
      { itemname: '正高级', itemkey: 'professionaltitle_1', checked: false },
      { itemname: '员级', itemkey: 'professionaltitle_2', checked: false },
      { itemname: '副高级', itemkey: 'professionaltitle_3', checked: false },
      { itemname: '中级', itemkey: 'professionaltitle_4', checked: false },
      { itemname: '初级', itemkey: 'professionaltitle_5', checked: false },
    ],
  },
  {
    itemname: '学习形式',
    itemkey: 'learningform',
    checked: false,
    children: [
      { itemname: '在职', itemkey: 'learningform_1', checked: false },
      { itemname: '全日制教育', itemkey: 'learningform_2', checked: false },
    ],
  },
  {
    itemname: '专业',
    itemkey: 'major',
  },
  {
    itemname: '岗位序列',
    itemkey: 'positionsequence ',
    checked: false,
    children: [
      { itemname: '销售与客户服务序列...', itemkey: 'positionsequence_1', checked: false },
      { itemname: '建设与运维序列...', itemkey: 'positionsequence_2', checked: false },
      { itemname: '产品与市场序列...', itemkey: 'positionsequence_3', checked: false },
      { itemname: '管理序列...', itemkey: 'positionsequence_4', checked: false },
      { itemname: '内部支撑序列...', itemkey: 'posotionsequence_5', checked: false },
    ],
  },
  {
    itemname: '专业技术资格名称',
    itemkey: 'skillname',
  },
  {
    itemname: '其他名称',
    itemkey: 'othername',
  },
  {
    itemname: '其他',
    itemkey: 'other',
  },
];

const otherList = [
  {
    itemname: '年龄',
    itemkey: 'age',
    children: [
      { itemname: '开始:', itemkey: 'begin', itemvalue: '' },
      { itemname: '结束:', itemkey: 'end', itemvalue: '' },
    ],
  },
  {
    itemname: '出生日期',
    itemkey: 'birthday',
    children: [
      { itemname: '开始:', itemkey: 'begin', itemvalue: '' },
      { itemname: '结束:', itemkey: 'end', itemvalue: '' },
    ],
  },
  {
    itemname: '参加工作日期',
    itemkey: 'employmentdate',
    children: [
      { itemname: '开始:', itemkey: 'begin', itemvalue: '' },
      { itemname: '结束:', itemkey: 'end', itemvalue: '' },
    ],
  },
  {
    itemname: '加入本企业日期',
    itemkey: 'joinenterprisedate',
    children: [
      { itemname: '开始:', itemkey: 'begin', itemvalue: '' },
      { itemname: '结束:', itemkey: 'end', itemvalue: '' },
    ],
  },
  {
    itemname: '职级',
    itemkey: 'rank',
    children: [
      { itemname: '开始:', itemkey: 'begin', itemvalue: '' },
      { itemname: '结束:', itemkey: 'end', itemvalue: '' },
    ],
  },
  {
    itemname: '合同日期',
    itemkey: 'contract date',
    children: [
      { itemname: '开始:', itemkey: 'begin', itemvalue: '' },
      { itemname: '结束:', itemkey: 'end', itemvalue: '' },
    ],
  },
];
export default ({
  selectedConditions, actions, currentCheckedValues,
}) => {
  const { updateSelectedConditions, setCurrentCheckedValues } = actions;
  const setContent = (item) => {
    const { children } = item;
    if (children) {
      return (
        <CheckboxGroup
          style={{ width: '100%' }}
          onChange={(checkedValue) => {
            handleChange(checkedValue, item);
          }}
          value={currentCheckedValues}
        >
          <Row>
            {children.map((ele) => {
              return (
                <Col key={ele.itemkey} span={12}>
                  <Checkbox
                    value={ele.itemname}
                  >
                    {ele.itemname}
                  </Checkbox>
                </Col>
              );
            })}
          </Row>
        </CheckboxGroup>
      );
    } else {
      return <Input onBlur={e => getInputValue(e, item)} />;
    }
  };
  const getInputValue = (e, conditionItem) => {
    console.log(777, e.target.value, conditionItem);
    // 获取所有的选择项
    const newSelectedConditions = [...selectedConditions];
    // 获取当前选择项
    const newSelected = { ...conditionItem };
    if (e.target.value === '') {
      deleteSelectedItem(newSelectedConditions, newSelected.itemname);
      updateSelectedConditions(newSelectedConditions);
      return;
    }
    console.log(333, newSelected);
    if (typeof newSelected.children === 'undefined') {
      newSelected.children = [];
    }
    // 设置一个children，放入value，以便删除
    // 再所有选择项中查找，如果有就替换，没有就push（前提是所有项不超过五个）
    newSelected.children.push({ itemname: e.target.value });
    for (let i = 0; i < newSelectedConditions.length; i += 1) {
      if (newSelectedConditions[i].itemname === newSelected.itemname) {
        newSelectedConditions[i] = newSelected;
        updateSelectedConditions(newSelectedConditions);
        return;
      }
    }
    if (newSelectedConditions.length < 5) {
      newSelectedConditions.push(newSelected);
      updateSelectedConditions(newSelectedConditions);
    } else {
      message.config({
        top: 200,
        duration: 2,
        maxCount: 1,
      });
      message.warning('当前选择的条件最多为 5 个');
    }
  };
  const getOtherInputValue = (e, conditionItem) => {
    console.log(e, conditionItem);
  };
  const setConditionContent = (item) => {
    const { children } = item;
    return (
      <Row>
        {children.map((ele) => {
          return (
            <Col span={12}>
              <Tag
                closable
                onClose={
                  (e) => {
                    onClose(e, ele);
                  }}
                key={ele.itemkey}
              >{ele.itemname}
              </Tag>
            </Col>
          );
        })}
      </Row>
    );
  };
  /* 此处重要的是 selectedConditions */
  const handleChange = (checkedValue, conditionItem) => {
    console.log(11111111111111111111, checkedValue);
    const newSelectedConditions = [...selectedConditions];
    // 当前的那一条数据
    const newSelected = { ...conditionItem };
    // 返回一个新数组，里边存有当前被选中的children
    const newSelectedChildren = newSelected.children.filter(
      ele => checkedValue.indexOf(ele.itemname) > -1,
    );
    // 重新设置当前那一条数据
    newSelected.children = newSelectedChildren;
    // 循环遍历所有被选择的数据，如果当前条存在
    for (let i = 0; i < newSelectedConditions.length; i += 1) {
      if (newSelectedConditions[i].itemname === newSelected.itemname) {
        // 重置选中项
        setCurrentCheckedValues(checkedValue);
        // 更新数据
        newSelectedConditions[i] = newSelected;
        // 更新所有选择数据
        updateSelectedConditions(newSelectedConditions);
        return;
      }
    }
    if (newSelectedConditions.length < 5) {
      setCurrentCheckedValues(checkedValue);
      newSelectedConditions.push(newSelected);
      updateSelectedConditions(newSelectedConditions);
    } else {
      message.config({
        top: 200,
        duration: 2,
        maxCount: 1,
      });
      message.warning('当前选择的条件最多为 5 个');
    }
  };
  const onClose = (e, item) => {
    const { itemname } = item;
    // 获取被选中的所有value 值
    const newValues = [...currentCheckedValues];
    // 如果能找到，就直接去掉，找不到就去children中去找然后去掉
    if (typeof item.children === 'undefined') {
      const index = newValues.indexOf(itemname);
      if (index > -1) {
        newValues.splice(index, 1);
      }
    } else {
      const { children } = item;
      children.forEach((ele) => {
        const index = newValues.indexOf(ele.itemname);
        if (index > -1) {
          newValues.splice(index, 1);
        }
      });
    }
    // 设置当前所有的value值
    setCurrentCheckedValues(newValues);
    const newConditions = [...selectedConditions];
    // 根据名字删除。名字相同直接删除，有children属性，但是length为0，也直接删除
    deleteSelectedItem(newConditions, itemname);
    updateSelectedConditions(newConditions);
  };
  const deleteSelectedItem = (node, name) => {
    node.forEach((ele, index) => {
      if (typeof ele.children !== 'undefined') {
        deleteSelectedItem(ele.children, name);
      }
      if (ele.itemname === name || (typeof ele.children !== 'undefined' && ele.children.length === 0)) {
        node.splice(index, 1);
      }
    });
  };
  const handleClear = () => {
    updateSelectedConditions([]);
  };
  const setOtherListContent = (item) => {
    const { children } = item;
    return (
      <div className="inputsBox">
        <Row type="flex" justify="space-around">
          <Col span={2}>从</Col>
          <Col span={10}>
            <Input
              ref={(input) => { children[0].itemvalue = input; }}
              onBlur={e => getOtherInputValue(e, item)}
            />
          </Col>
          <Col span={2}>到</Col>
          <Col span={10}>
            <Input
              ref={(input) => { children[1].itemvalue = input; }}
              onBlur={e => getOtherInputValue(e, item)}
            />
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div>
      <Card
        className="allSelected"
        title={selectedConditions.length ? '您选择的条件' : '提示 :'}
        extra={(
          <div>
            <Button type="primary" style={{ marginRight: 2 }}>确定</Button>
            <Button onClick={handleClear}>清除</Button>
          </div>
)}
        bordered={false}
      >
        {selectedConditions.length
          ? selectedConditions.map((ele, index) => {
            return (
              <Popover key={ele.itemkey} placement="rightTop" content={setConditionContent(ele, index)} trigger="hover">
                <div>
                  <Tag
                    closable
                    onClose={
                      (e) => {
                        onClose(e, ele);
                      }}
                    key={ele.itemkey}
                  >{ele.itemname}
                  </Tag>
                  <Icon type="caret-right" />
                </div>
              </Popover>
            );
          })
          : <p>当您点击某个条件列表项会显示具体的条件，将会获得更为准确的搜索结果，您最多可以多项选择5个条件。</p>
        }
      </Card>
      <Card
        className="conditionlist"
        title="条件列表"
        bordered={false}
      >
        {conditionList.map((ele, index) => {
          return (
            <Popover key={ele.itemkey} placement="rightTop" content={setContent(ele, index)} trigger="hover">
              <div>{ele.itemname} <Icon type="caret-right" /></div>
            </Popover>
          );
        })}
      </Card>
      <Card
        className="othercondition"
        title="其他条件"
        bordered={false}
      >
        {otherList.map((ele) => {
          return (
            <Popover key={ele.itemkey} placement="rightTop" content={setOtherListContent(ele)} trigger="hover">
              <div>{ele.itemname}<Icon type="caret-right" /></div>
            </Popover>
          );
        })}
      </Card>
    </div>
  );
};
