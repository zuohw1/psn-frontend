import request from '../../utils/request';

export default {
  list(search) {
    let url = `empMgr/queryPsnRoster?pageNumber=${search.pageNumber}&pageSize=${search.pageSize}`;
    if (search.employeeNumber && search.employeeNumber !== '') {
      url += `&employeeNumber=${search.employeeNumber}`;
    }
    if (search.fullName && search.fullName !== '') {
      url += `&fullName=${search.fullName}`;
    }
    if (search.org_id && search.org_id !== '') {
      url += `&org_id=${search.org_id}`;
    }
    if (search.userPersonType && search.userPersonType !== '') {
      url += `&userPersonType=${search.userPersonType}`;
    }
    return request.get(url);
  },
  getBasicDetailData(personId) {
    let url = 'empMgr/queryPsnBasicInfoById?';
    if (personId && personId !== '') {
      url += `personId=${personId}`;
    }
    return request.get(url);
  },
  getPsnBasicDetail(personId) {
    let url = 'empMgr/queryPsnBasicDetailById?';
    if (personId && personId !== '') {
      url += `personId=${personId}`;
    }
    return request.get(url);
  },
  getRefSelectDataByBillType(billtypecode) {
    let url = 'empMgr/queryRefSelectDataByBillType?';
    if (billtypecode && billtypecode !== '') {
      url += `billTypeCode=${billtypecode}`;
    }
    return request.get(url);
  },
  queryJRTJRefData() {
    const url = 'empMgr/queryJRTJRefData';
    return request.get(url);
  },
  getInfoSetDetailData(detailSearch) {
    let url = 'empMgr/queryPsnSubSetInfoById?';
    if (detailSearch.personId && detailSearch.personId !== '') {
      url += `personId=${detailSearch.personId}`;
    }
    if (detailSearch.infoSetType && detailSearch.infoSetType !== '') {
      url += `&infoSetType=${detailSearch.infoSetType}`;
    }
    return request.get(url);
  },
  queryBillTemplateDataByCode(billTypeCode) {
    let url = 'empMgr/queryBilltempletDataByCode?';
    if (billTypeCode && billTypeCode !== '') {
      url += `billTypeCode=${billTypeCode}`;
    }
    return request.get(url);
  },
  update(formData) {
    return request.post('empMgr/update', formData);
  },
  // 根据子集主键查询子集详情
  querySubInfoById(detailSearch1) {
    let url = 'empMgr/queryPsnSubSetDetailInfoById?';
    if (detailSearch1.pk && detailSearch1.pk !== '') {
      url += `pk=${detailSearch1.pk}`;
    }
    if (detailSearch1.infoSetType && detailSearch1.infoSetType !== '') {
      url += `&infoSetType=${detailSearch1.infoSetType}`;
    }
    return request.get(url);
  },
  /*
  add(records) {
    return request.post('orgHeaderBatch/save', records);
  },
  update(records) {
    return request.post('orgHeaderBatch/update', records);
  },
  delete(id) {
    return request.delete(`orgHeaderBatch/delete/${id}`);
  }, */
};
