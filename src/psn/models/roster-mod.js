import RosterService from '../services/roster-service';

/* 格式化添加修改数据 */
// const formatRecord = (record) => {
//   const format = {
//     ...record,
//     DOC_DATE: record.DOC_DATE.format('YYYY-MM-DD'),
//   };
//   return format;
// };

/* 格式化table数据 */
const formatTableData = (tableData) => {
  const num = tableData.current * tableData.size - tableData.size;
  const table = tableData.records.map((item, index) => {
    const ite = { ...item, key: index + 1 + num };
    return ite;
  });
  const formatTable = { ...tableData, records: table };
  return formatTable;
};

export default {
  namespace: 'psnRoster', // 命名空间
  state: {
    tableData: {
      total: 0,
      size: 10,
      current: 1,
      records: [],
      pages: 0,
    },
    dynamicTableCols: [{
      dataIndex: 'sex',
      key: 'sex',
      title: '性别',
      isCheck: true,
      align: 'center',
      width: 100,
      render: (text) => {
        if (text === 'F') {
          return '女性';
        } else if (text === 'M') {
          return '男性';
        } else {
          return text;
        }
      },
    },
    {
      dataIndex: 'nation', key: 'nation', title: '民族', isCheck: true, align: 'center', width: 100,
    },
    {
      dataIndex: 'politicsLandscapeName', key: 'politicsLandscapeName', title: '政治面貌', isCheck: true, align: 'center', width: 160,
    }], // 人员列表动态列
    querySettingModel: false, // 查询设置框是否显示
    selectConditionModel: false, // 高级查询框是否显示
    checkedQueryItems: [], // 已经设置显示字段
    conditionIsSelect: false, // 是否选择了条件
    selectedConditions: [], // 已经选择的条件
    allDisplayItems: [{
      dataIndex: 'sex',
      key: 'sex',
      title: '性别',
      isCheck: true,
      align: 'center',
      width: 100,
      render: (text) => {
        if (text === 'F') {
          return '女性';
        } else if (text === 'M') {
          return '男性';
        } else {
          return text;
        }
      },
    },
    {
      dataIndex: 'nation', key: 'nation', title: '民族', isCheck: true, align: 'center', width: 100,
    },
    {
      dataIndex: 'politicsLandscapeName', key: 'politicsLandscapeName', title: '政治面貌', isCheck: true, align: 'center', width: 160,
    },
    {
      dataIndex: 'educationExperience', key: 'educationExperience', title: '最高学历', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'degree', key: 'degree', title: '最高学位', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'householdRegisterType', key: 'householdRegisterType', title: '户口类型', isCheck: false, align: 'center', width: 200,
    },
    {
      dataIndex: 'staffCategory', key: 'staffCategory', title: '员工状态', isCheck: false, align: 'center', width: 200,
    },
    {
      dataIndex: 'householdRegisterPlace', key: 'householdRegisterPlace', title: '户口所在地', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'joinCucChannel', key: 'joinCucChannel', title: '加入本企业途径', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'assignmentCategory', key: 'assignmentCategory', title: '分配类别', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'jobName', key: 'jobName', title: '岗位序列', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'qualificationName', key: 'qualificationName', title: '专业技术资格名称', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'qualificationNameOther', key: 'qualificationNameOther', title: '其他名称', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'professionComments', key: 'professionComments', title: '其他', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'joinCucDate', key: 'joinCucDate', title: '加入本企业日期', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'initialJobStartDate', key: 'initialJobStartDate', title: '参加工作日期', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'dateOfBirth', key: 'dateOfBirth', title: '出生日期', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'nationalIdentifier', key: 'nationalIdentifier', title: '身份证号', isCheck: false, align: 'center', width: 180,
    },
    {
      dataIndex: 'gradeName', key: 'gradeName', title: '职级薪档', isCheck: false, align: 'center', width: 100,
    },
    {
      dataIndex: 'peopleGroup', key: 'peopleGroup', title: '人员组', isCheck: false, align: 'center', width: 250,
    }],
    lastSetQueryItems: ['sex', 'nation', 'politicsLandscapeName'],
    modal: false,
    refModal: false,
    refSelectData: [],
    expand: false, // 查询条件是否展开
    formEdit: true,
    record: {},
    search: {
      employeeNumber: '',
      fullName: '',
      org_id: '',
      userPersonType: '',
      pageSize: 10,
      pageNumber: 1,
    },
    detailSearch: {
      personId: '',
      infoSetType: '',
    },
    psnCardModel: false,
    detailRecord: {}, // 基本信息详情
    infoSetList: [], // 子集信息
  },
  reducers: {
    stateWillUpdate(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    * fetch({ payload: { search } }, { call, put }) {
      const tableData = yield call(RosterService.list, search);
      const formatTable = formatTableData(tableData);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          tableData: formatTable,
          record: {},
          search,
        },
      });
    },
    * getRecord({ payload: { record } }, { call, put }) {
      if (record.personId && record.personId !== '') {
        const detailData = yield call(RosterService.getBasicDetailData, record.personId);
        yield put({
          type: 'stateWillUpdate',
          payload: { record, detailRecord: detailData },
        });
      } else {
        yield put({
          type: 'stateWillUpdate',
          payload: { record, detailRecord: {} },
        });
      }
    },
    * queryDetailData({ payload: { detailSearch } }, { call, put }) {
      const detailData = yield call(RosterService.getInfoSetDetailData, detailSearch);
      yield put({
        type: 'stateWillUpdate',
        payload: { infoSetList: detailData },
      });
    },
    * getRefData({ payload: { url, search } }, { call, put }) {
      const tableData = yield call(RosterService.getRefData, url, search);
      const formatTable = formatTableData(tableData);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          refData: formatTable,
        },
      });
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       if (pathname === '/psn/roster') {
  //         dispatch({
  //           type: 'fetch',
  //           payload: { search: { pageNumber: 1, pageSize: 10 } },
  //         });
  //       }
  //     });
  //   },
  // },
};
