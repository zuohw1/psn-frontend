/* eslint-disable no-return-assign,no-param-reassign */
import React from 'react';
import {
  Row, Col, Tabs, Table,
} from 'antd';
// import moment from 'moment';

/*
 人员花名册卡片
 @autor:zhanggang
 @date：2018-11-16
 */
export default ({
  record, actions, detailRecord, infoSetList,
}) => {
  const { personId } = record;
  //
  const { queryDetailDataByPersonId } = actions;

  // const queryDataByPersonId = (infoSetType) => {
  //   //   queryDetailDataByPersonId({ personId, infoSetType });
  //   //   // queryDataByPersonId;
  //   // };
  const { TabPane } = Tabs;
  const onTabChange = (activeKey) => {
    if (activeKey === 'EMP_BASIC') {
      // doNothing
    } else {
      queryDetailDataByPersonId({ personId, infoSetType: activeKey });
    }
  };

  function buildBasicInfoTable() {
    let tableStr = '';
    for (let i = 1; i <= detailRecord.length; i += 1) {
      const item = detailRecord[(i - 1)];
      if (i % 3 === 1) {
        tableStr += (`<tr width="100%"><td width="15%" style="padding: 2px"><strong>${item.dispName}<strong></td><td width="18%" style="padding: 2px">${item.value}</td>`);
      } else if (i % 3 === 0) {
        tableStr += (`<td width="15%" style="padding: 2px"><strong>${item.dispName}<strong></td><td width="18%" style="padding: 2px">${item.value}</td></tr>`);
      } else {
        tableStr += (`<td width="15%" style="padding: 2px"><strong>${item.dispName}<strong></td><td width="18%" style="padding: 2px">${item.value}</td>`);
      }
    }
    return tableStr;
  }

  const buildEmpEducations = () => {
    return (
      [{
        title: '起始日期',
        dataIndex: 'educatedStartDate',
        key: 'educatedStartDate',
        align: 'center',
        width: 100,
      }, {
        title: '终止日期',
        dataIndex: 'educatedEndDate',
        key: 'educatedEndDate',
        align: 'center',
        width: 100,
      }, {
        title: '学校或学院',
        dataIndex: 'collegeName',
        key: 'collegeName',
        align: 'center',
        width: 200,
      }, {
        title: '专业',
        dataIndex: 'profession',
        key: 'profession',
        align: 'center',
        width: 200,
      },
      {
        title: '学历',
        dataIndex: 'educationExperience',
        key: 'educationExperience',
        align: 'center',
        width: 100,
      }, {
        title: '学位',
        dataIndex: 'degree',
        key: 'degree',
        align: 'center',
        width: 100,
      }, {
        title: '是否最高学历',
        dataIndex: 'educationHighFlag',
        key: 'educationHighFlag',
        align: 'center',
        width: 100,
      },
      ]);
  };

  const buildEmpPreviousJobs = () => {
    return (
      [{
        title: '开始日期',
        dataIndex: 'jobStartDate',
        key: 'jobStartDate',
        align: 'center',
        width: 100,
      }, {
        title: '结束日期',
        dataIndex: 'jobEndDate',
        key: 'jobEndDate',
        align: 'center',
        width: 100,
      }, {
        title: '工作单位',
        dataIndex: 'previousEmployerName',
        key: 'previousEmployerName',
        align: 'center',
        width: 200,
      }, {
        title: '部门',
        dataIndex: 'previousDepartmentName',
        key: 'previousDepartmentName',
        align: 'center',
        width: 200,
      },
      {
        title: '职务',
        dataIndex: 'jobDutyName',
        key: 'jobDutyName',
        align: 'center',
        width: 100,
      }, {
        title: '是否本企业内',
        dataIndex: 'companyInternalFlag',
        key: 'companyInternalFlag',
        align: 'center',
        width: 100,
      }, {
        title: '工作单位所属行业',
        dataIndex: 'workingOfIndustry',
        key: 'workingOfIndustry',
        align: 'center',
        width: 100,
      }, {
        title: '从事事业',
        dataIndex: 'previousProfession',
        key: 'previousProfession',
        align: 'center',
        width: 100,
      },
      ]);
  };

  const buildEmpQualifications = () => {
    return (
      [{
        title: '认定单位',
        dataIndex: 'qualificationAwardedOrg',
        key: 'qualificationAwardedOrg',
        align: 'center',
        width: 250,
      }, {
        title: '认定技术名称',
        dataIndex: 'qualificationAwardedName',
        key: 'qualificationAwardedName',
        align: 'center',
        width: 100,
      }, {
        title: '国家职业资格等级',
        dataIndex: 'gradeAttained',
        key: 'gradeAttained',
        align: 'center',
        width: 200,
      }, {
        title: '是否主要认定',
        dataIndex: 'majorQualificationFlag',
        key: 'majorQualificationFlag',
        align: 'center',
        width: 200,
      }, {
        title: '其他、请注明',
        dataIndex: 'qualificationAwardedComments',
        key: 'qualificationAwardedComments',
        align: 'center',
        width: 100,
      },
      ]);
  };

  const buildEmpTechQualification = () => {
    return (
      [{
        title: '专业技术资格序列',
        dataIndex: 'qualificationCategory',
        key: 'qualificationCategory',
        align: 'center',
        width: 250,
      }, {
        title: '专业技术资格名称',
        dataIndex: 'qualificationName',
        key: 'qualificationName',
        align: 'center',
        width: 250,
      }, {
        title: '取得资格日期',
        dataIndex: 'qualificationStartDate',
        key: 'qualificationStartDate',
        align: 'center',
        width: 150,
      }, {
        title: '取得资格途径',
        dataIndex: 'qualificationChannel',
        key: 'qualificationChannel',
        align: 'center',
        width: 200,
      },
      ]);
  };

  const buildEmpReward = () => {
    return (
      [{
        title: '奖励日期',
        dataIndex: 'approvalDate',
        key: 'approvalDate',
        align: 'center',
        width: 100,
      }, {
        title: '奖励名称',
        dataIndex: 'rewardName',
        key: 'rewardName',
        align: 'center',
        width: 200,
      }, {
        title: '奖励类别',
        dataIndex: 'rewardType',
        key: 'rewardType',
        align: 'center',
        width: 150,
      }, {
        title: '奖励级别',
        dataIndex: 'rewardLevel',
        key: 'rewardLevel',
        align: 'center',
        width: 100,
      }, {
        title: '授权单位',
        dataIndex: 'rewardedOrgName',
        key: 'rewardedOrgName',
        align: 'center',
        width: 250,
      }, {
        title: '奖励金额',
        dataIndex: 'rewardAmount',
        key: 'rewardAmount',
        align: 'center',
        width: 100,
      },
      ]);
  };

  const buildEmpPunishment = () => {
    return (
      [{
        title: '处分名称',
        dataIndex: 'punishmentName',
        key: 'punishmentName',
        align: 'center',
        width: 150,
      }, {
        title: '处分日期',
        dataIndex: 'punishedDate',
        key: 'punishedDate',
        align: 'center',
        width: 100,
      }, {
        title: '处分类别',
        dataIndex: 'punishmentType',
        key: 'punishmentType',
        align: 'left',
        width: 150,
      }, {
        title: '处分原因',
        dataIndex: 'punishedReason',
        key: 'punishedReason',
        align: 'center',
        width: 150,
      }, {
        title: '处分给予单位',
        dataIndex: 'orgOfPunished',
        key: 'orgOfPunished',
        align: 'center',
        width: 200,
      },
      ]);
  };

  const buildEmpTechAppoint = () => {
    return (
      [{
        title: '专业技术资格序列',
        dataIndex: 'appointCategory',
        key: 'appointCategory',
        align: 'center',
        width: 150,
      }, {
        title: '专业技术资格名称',
        dataIndex: 'appointName',
        key: 'appointName',
        align: 'center',
        width: 100,
      }, {
        title: '聘任专业技术资格等级',
        dataIndex: 'appointLevel',
        key: 'appointLevel',
        align: 'left',
        width: 150,
      }, {
        title: '聘任单位',
        dataIndex: 'approvalUnit',
        key: 'approvalUnit',
        align: 'center',
        width: 150,
      }, {
        title: '聘任情况',
        dataIndex: 'appointComments',
        key: 'appointComments',
        align: 'center',
        width: 200,
      },
      ]);
  };

  const buildEmpQualificationsApp = () => {
    return (
      [{
        title: '工种名称',
        dataIndex: 'qualificationAwardedName',
        key: 'qualificationAwardedName',
        align: 'center',
        width: 150,
      }, {
        title: '职业技能等级',
        dataIndex: 'gradeAttained',
        key: 'gradeAttained',
        align: 'center',
        width: 100,
      }, {
        title: '取的证书日期',
        dataIndex: 'qualificationAwardedDate',
        key: 'qualificationAwardedDate',
        align: 'left',
        width: 150,
      }, {
        title: '职业技能到期日',
        dataIndex: 'qualificationEndDate',
        key: 'qualificationEndDate',
        align: 'center',
        width: 150,
      }, {
        title: '证书编号',
        dataIndex: 'qualificationCertificateNum',
        key: 'qualificationCertificateNum',
        align: 'center',
        width: 200,
      },
      ]);
  };

  const buildPoliticsLandscape = () => {
    return (
      [{
        title: '起始日期',
        dataIndex: 'joinStartDate',
        key: 'joinStartDate',
        align: 'center',
        width: 150,
      }, {
        title: '终止日期',
        dataIndex: 'joinEndDate',
        key: 'joinEndDate',
        align: 'center',
        width: 100,
      }, {
        title: '政治面貌',
        dataIndex: 'politicsLandscapeName',
        key: 'politicsLandscapeName',
        align: 'left',
        width: 150,
      }, {
        title: '入党(团)日期',
        dataIndex: 'joinPartyDate',
        key: 'joinPartyDate',
        align: 'center',
        width: 150,
      }, {
        title: '参加党派时所在单位',
        dataIndex: 'orgOfPartisan',
        key: 'orgOfPartisan',
        align: 'center',
        width: 200,
      }, {
        title: '党团内职务',
        dataIndex: 'dutyOfPartisan',
        key: 'dutyOfPartisan',
        align: 'center',
        width: 200,
      },
      ]);
  };

  return (
    <div>
      <Row>
        <Col span={2}><strong>姓名：</strong></Col><Col span={4}>{record.fullName}</Col>
        <Col span={2}><strong>员工编号：</strong></Col><Col span={4}>{record.employeeNumber}</Col>
        <Col span={2}><strong>组织：</strong></Col><Col span={4}>{record.orgName}</Col>
        <Col span={2}><strong>职务：</strong></Col><Col span={4}>{record.jobName}</Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Tabs type="card" onChange={onTabChange}>
            <TabPane tab="基本信息" key="EMP_BASIC">
              <div dangerouslySetInnerHTML={{ __html: `<table width="100%"  style="border:#e8e8e8" border="1" cellspacing="0" cellpadding="0"><tbody>${buildBasicInfoTable()}</tbody></table>` }} />
            </TabPane>
            <TabPane tab="教育经历" key="EMP_EDUCATIONS">
              <Table columns={buildEmpEducations()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="工作经历" key="EMP_PREVIOUS_JOBS">
              <Table columns={buildEmpPreviousJobs()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="职业技能信息" key="EMP_QUALIFICATIONS">
              <Table columns={buildEmpQualifications()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="专业技术资格" key="EMP_TECH_QUALIFICATION">
              <Table columns={buildEmpTechQualification()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="奖励信息" key="EMP_REWARD">
              <Table columns={buildEmpReward()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="处分信息" key="EMP_PUNISHMENT">
              <Table columns={buildEmpPunishment()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="党团政治信息" key="POLITICS_LANDSCAPE">
              <Table columns={buildPoliticsLandscape()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            {/* <TabPane tab="培训信息" key="ehrbase_emp_education">Content of Tab Pane 3</TabPane> */}
            <TabPane tab="员工简历" key="7">Content of Tab Pane 3</TabPane>
            {/* <TabPane tab="薪酬信息" key="8">Content of Tab Pane 3</TabPane> */}
            {/* <TabPane tab="职位信息" key="9">Content of Tab Pane 3</TabPane> */}
            {/* <TabPane tab="合同信息" key="10">Content of Tab Pane 3</TabPane> */}
            <TabPane tab="职业技能鉴定" key="EMP_QUALIFICATIONS_APP">
              <Table columns={buildEmpQualificationsApp()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
            <TabPane tab="专业技术资格聘任" key="EMP_TECH_APPOINT">
              <Table columns={buildEmpTechAppoint()} dataSource={infoSetList} size="small" bordered pagination={false} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};
