import React from 'react';
import {
  Card, Popover, Button, Checkbox, Row, Col, Input,
} from 'antd';
import '../assets/styles/select-condition.less';

const CheckboxGroup = Checkbox.Group;

const conditionList = [
  {
    itemname: '性别',
    itemkey: 'sex',
    children: [
      { itemname: '男性', itemkey: 'sex_1' },
      { itemname: '女姓', itemkey: 'sex_2' },
    ],
  },
  {
    itemname: '民族',
    itemkey: 'nation',
    children: [
      { itemname: '阿昌族', itemkey: 'nation_1' },
      { itemname: '白族', itemkey: 'nation_2' },
      { itemname: '布朗族', itemkey: 'nation_3' },
      { itemname: '保安族', itemkey: 'nation_4' },
      { itemname: '布依族', itemkey: 'nation_5' },
      { itemname: '朝鲜族', itemkey: 'nation_6' },
      { itemname: '傣族', itemkey: 'nation_7' },
      { itemname: '德昂族', itemkey: 'nation_8' },
      { itemname: '侗族', itemkey: 'nation_9' },
      { itemname: '独龙族', itemkey: 'nation_10' },
      { itemname: '达斡尔族', itemkey: 'nation_11' },
      { itemname: '东乡族', itemkey: 'nation_12' },
      { itemname: '鄂温克族', itemkey: 'nation_13' },
      { itemname: '京族', itemkey: 'nation_14' },
      { itemname: '仡佬族', itemkey: 'nation_15' },
      { itemname: '高山族', itemkey: 'nation_16' },
      { itemname: '汉族', itemkey: 'nation_17' },
      { itemname: '哈尼族', itemkey: 'nation_18' },
      { itemname: '回族', itemkey: 'nation_19' },
      { itemname: '赫哲族', itemkey: 'nation_20' },
      { itemname: '基诺族', itemkey: 'nation_21' },
      { itemname: '景颇族', itemkey: 'nation_22' },
      { itemname: '柯尔克孜族', itemkey: 'nation_23' },
      { itemname: '哈萨克族', itemkey: 'nation_24' },
      { itemname: '珞巴族', itemkey: 'nation_25' },
    ],
  },
  {
    itemname: '政治面貌',
    itemkey: 'politics',
    children: [
      { itemname: '中国共产党党员', itemkey: 'politics_1' },
      { itemname: '中国共产党预备党员', itemkey: 'politics_2' },
      { itemname: '中国共产主义青年团团员', itemkey: 'politics_3' },
      { itemname: '中国国民党革命委员会会员', itemkey: 'politics_4' },
      { itemname: '中国民主同盟盟员', itemkey: 'politics_5' },
      { itemname: '中国民主建国会会员', itemkey: 'politics_6' },
      { itemname: '中国民主促进会会员', itemkey: 'politics_7' },
      { itemname: '中国农工民主党党员', itemkey: 'politics_8' },
      { itemname: '中国致公党党员', itemkey: 'politics_9' },
      { itemname: '九三学社社成员', itemkey: 'politics_10' },
      { itemname: '台湾民主自治同盟盟员', itemkey: 'politics_11' },
      { itemname: '无党派民主人士', itemkey: 'politics_12' },
      { itemname: '群众', itemkey: 'politics_13' },
    ],
  },
  {
    itemname: '最高学历',
    itemkey: 'education',
    children: [
      { itemname: '博士研究生', itemkey: 'education_1' },
      { itemname: '硕士研究生', itemkey: 'education_2' },
      { itemname: '大学本科', itemkey: 'education_3' },
      { itemname: '大学普通班', itemkey: 'education_4' },
      { itemname: '大学专科', itemkey: 'education_5' },
      { itemname: '中专', itemkey: 'education_6' },
      { itemname: '职业高中', itemkey: 'education_7' },
      { itemname: '高中', itemkey: 'education_8' },
      { itemname: '技工学校', itemkey: 'education_9' },
      { itemname: '初中及以下', itemkey: 'education_10' },
      { itemname: '无', itemkey: 'education_11' },
      { itemname: '地方党校研究生', itemkey: 'education_12' },
      { itemname: '中央党校研究生', itemkey: 'education_13' },
    ],

  },
  {
    itemname: '最高学位',
    itemkey: 'degree',
    children: [
      { itemname: '博士后', itemkey: 'degree_1' },
      { itemname: '博士', itemkey: 'degree_2' },
      { itemname: '硕士', itemkey: 'degree_3' },
      { itemname: '双学士', itemkey: 'degree_4' },
      { itemname: '学士', itemkey: 'degree_5' },
      { itemname: '无', itemkey: 'degree_6' },
    ],
  },
  {
    itemname: '户口类型',
    itemkey: 'accounttype',
    children: [
      { itemname: '非农业户口', itemkey: 'accounttype_1' },
      { itemname: '本地农业户口', itemkey: 'accounttype_2' },
      { itemname: '外地农业户口', itemkey: 'accounttype_3' },
      { itemname: '外地非农业户口', itemkey: 'accounttype_4' },
      { itemname: '非农业集体户口', itemkey: 'accounttype_5' },
      { itemname: '本地非农业户口（常驻）', itemkey: 'accounttype_6' },
      { itemname: '本地非农业户口（临时）', itemkey: 'accounttype_7' },
      { itemname: '其他', itemkey: 'accounttype_8' },
    ],
  },
  {
    itemname: '员工状态',
    itemkey: 'staffstate',
    children: [
      { itemname: '正式-在岗-一般在岗人员', itemkey: 'staffstate_1' },
      { itemname: '正式-不在岗-退出岗位', itemkey: 'staffstate_2' },
      { itemname: '正式-在岗-借调人员', itemkey: 'staffstate_3' },
      { itemname: '正式-在岗-到外单位交流人员', itemkey: 'staffstate_4' },
      { itemname: '正式-在岗-派驻外单位人员', itemkey: 'staffstate_5' },
      { itemname: '正式-在岗-境外交流人员', itemkey: 'staffstate_6' },
      { itemname: '正式-在岗-人员派遣', itemkey: 'staffstate_7' },
      { itemname: '正式-在岗-到外单位挂职锻炼人员', itemkey: 'staffstate_8' },
      { itemname: '正式-在岗-系统内部交流人员', itemkey: 'staffstate_9' },
      { itemname: '正式-不在岗-内退人员', itemkey: 'staffstate_10' },
      { itemname: '正式-不在岗-长期病假人员', itemkey: 'staffstate_11' },
      { itemname: '正式-不在岗-脱产学习人员', itemkey: 'staffstate_12' },
      { itemname: '正式-不在岗-待岗人员', itemkey: 'staffstate_13' },
      { itemname: '正式-不在岗-其他人员', itemkey: 'staffstate_14' },
      { itemname: '其他从业-聘用工-1年以内', itemkey: 'staffstate_15' },
      { itemname: '其他从业-劳务派遣', itemkey: 'staffstate_16' },
      { itemname: '乡话-不在岗-内退人员', itemkey: 'staffstate_17' },
      { itemname: '正式-不在岗-退休或离休人员', itemkey: 'staffstate_18' },
      { itemname: '非员工-遗属人员', itemkey: 'staffstate_19' },
    ],
  },
  {
    itemname: '户口所在地',
    itemkey: 'accountlocation',
    children: [
      { itemname: '北京市', itemkey: 'accountlocation_1' },
      { itemname: '天津市', itemkey: 'accountlocation_2' },
      { itemname: '河北省', itemkey: 'accountlocation_3' },
      { itemname: '山西省', itemkey: 'accountlocation_4' },
      { itemname: '内蒙古自治区', itemkey: 'accountlocation_5' },
      { itemname: '辽宁省', itemkey: 'accountlocation_6' },
      { itemname: '吉林省', itemkey: 'accountlocation_7' },
      { itemname: '黑龙江省', itemkey: 'accountlocation_8' },
      { itemname: '上海市', itemkey: 'accountlocation_9' },
      { itemname: '江苏省', itemkey: 'accountlocation_11' },
      { itemname: '浙江省', itemkey: 'accountlocation_12' },
      { itemname: '安徽省', itemkey: 'accountlocation_13' },
      { itemname: '福建省', itemkey: 'accountlocation_14' },
      { itemname: '江西省', itemkey: 'accountlocation_15' },
      { itemname: '山东省', itemkey: 'accountlocation_16' },
      { itemname: '河南省', itemkey: 'accountlocation_17' },
      { itemname: '湖北省', itemkey: 'accountlocation_18' },
      { itemname: '湖南省', itemkey: 'accountlocation_19' },
    ],
  },
  {
    itemname: '加入本企业途径',
    itemkey: 'enterpriseapproach',
    children: [
      { itemname: '调入', itemkey: 'enterpriseapproach_1' },
      { itemname: '社会招聘', itemkey: 'enterpriseapproach_2' },
      { itemname: '校园招聘', itemkey: 'enterpriseapproach_3' },
      { itemname: '复转军人', itemkey: 'enterpriseapproach_4' },
      { itemname: '毕业生分配', itemkey: 'enterpriseapproach_5' },
      { itemname: '通过劳务派遣公司招用', itemkey: 'enterpriseapproach_6' },
      { itemname: '招工', itemkey: 'enterpriseapproach_7' },
      { itemname: '其他', itemkey: 'enterpriseapproach_8' },
    ],
  },
  {
    itemname: '分配类别',
    itemkey: 'Category',
    children: [
      { itemname: '集团总部部门（中心）正职', itemkey: 'Category_1' },
      { itemname: '一般人员', itemkey: 'Category_2' },
      { itemname: '集团总部部门（中心）处室正职', itemkey: 'Category_3' },
      { itemname: '集团总部部门（中心）处室副职', itemkey: 'Category_4' },
      { itemname: '省分公司正职', itemkey: 'Category_5' },
      { itemname: '省分公司副职', itemkey: 'Category_6' },
      { itemname: '省分本部部门（中心）正职', itemkey: 'Category_7' },
      { itemname: '省分本部部门（中心）副职', itemkey: 'Category_8' },
      { itemname: '地市分公司正职', itemkey: 'Category_9' },
      { itemname: '地市分公司副职', itemkey: 'Category_10' },
      { itemname: '地市本部部门（中心）正职', itemkey: 'Category_11' },
      { itemname: '地市本部部门（中心）副职', itemkey: 'Category_12' },
      { itemname: '区县级分公司正职', itemkey: 'Category_13' },
      { itemname: '区县级分公司副职', itemkey: 'Category_14' },
      { itemname: '公司领导', itemkey: 'Category_15' },
      { itemname: '集团总部部门（中心）副职', itemkey: 'Category_16' },
    ],
  },
  {
    itemname: '毕业院校',
    itemkey: 'graduatefrom',
  },
  {
    itemname: '职称',
    itemkey: 'professionaltitle',
    children: [
      { itemname: '正高级', itemkey: 'professionaltitle_1' },
      { itemname: '员级', itemkey: 'professionaltitle_2' },
      { itemname: '副高级', itemkey: 'professionaltitle_3' },
      { itemname: '中级', itemkey: 'professionaltitle_4' },
      { itemname: '初级', itemkey: 'professionaltitle_5' },
    ],
  },
  {
    itemname: '学习形式',
    itemkey: 'learningform',
    children: [
      { itemname: '在职', itemkey: 'learningform_1' },
      { itemname: '全日制教育', itemkey: 'learningform_2' },
    ],
  },
  {
    itemname: '专业',
    itemkey: 'major',
  },
  {
    itemname: '岗位序列',
    itemkey: 'positionsequence ',
    children: [
      { itemname: '销售与客户服务序列...', itemkey: 'positionsequence_1' },
      { itemname: '建设与运维序列...', itemkey: 'positionsequence_2' },
      { itemname: '产品与市场序列...', itemkey: 'positionsequence_3' },
      { itemname: '管理序列...', itemkey: 'positionsequence_4' },
      { itemname: '内部支撑序列...', itemkey: 'posotionsequence_5' },
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
  },
  {
    itemname: '出生日期',
    itemkey: 'birthday',
  },
  {
    itemname: '参加工作日期',
    itemkey: 'employmentdate',
  },
  {
    itemname: '加入本企业日期',
    itemkey: 'joinenterprisedate',
  },
  {
    itemname: '职级',
    itemkey: 'rank',
  },
  {
    itemname: '合同日期',
    itemkey: 'contract date',
  },
];
export default ({ selectedConditions, conditionIsSelect/* , actions */ }) => {
  // const { conditionSelectState/* , updateSelectedConditions */ } = actions;
  const setContent = (item) => {
    const { children, itemname } = item;
    if (children) {
      return (
        <CheckboxGroup onChange={handleChange.bind(this, itemname)} style={{ width: '100%' }}>
          <Row>
            {children.map((ele) => {
              return (
                <Col key={ele.itemkey} span={12}>
                  <Checkbox value={ele.itemname}>
                    {ele.itemname}
                  </Checkbox>
                </Col>
              );
            })}
          </Row>
        </CheckboxGroup>
      );
    } else {
      return <Input />;
    }
  };

  const handleChange = (name, checkedValue) => {
    if (checkedValue.length) {
      const item = conditionList.filter(ele => ele.itemname === name)[0];
      console.log(item);
      selectedConditions.push(item);
      // updateSelectedConditions(item);
    }
    /* if (selectedConditions.length) {
      conditionSelectState(true);
    } else {
      conditionSelectState(false);
    } */
    console.log(selectedConditions);
  };

  return (
    <div>
      <Card
        title={conditionIsSelect ? '提示' : '您选择的条件'}
        bordered={false}
      >
        {conditionIsSelect
          ? <p>当您点击某个条件列表项会显示具体的条件，将会获得更为准确的搜索结果，您最多可以多项选择5个条件。</p>
          : <div>111</div>
        }
      </Card>
      <Card
        className="conditionlist"
        title="条件列表"
        bordered={false}
      >
        {conditionList.map((ele) => {
          return (
            <Popover key={ele.itemkey} placement="rightTop" content={setContent(ele)} trigger="hover">
              <Button>{ele.itemname}</Button>
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
            <Popover key={ele.itemkey} placement="rightTop" content={setContent(ele)} trigger="hover">
              <Button>{ele.itemname}</Button>
            </Popover>
          );
        })}
      </Card>
    </div>
  );
};
