import request from '../../utils/request';

export default {
  list(search) {
    let url = `empBasic/queryPsnRoster?pageNumber=${search.pageNumber}&pageSize=${search.pageSize}`;
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
  /* getAttachData(id) {
    return request.get(`orgHeaderBatch/getAttachData?id=${id}`);
  }, */
  getRefData(url, search) {
    let thisUrl = `${url}?pageNumber=${search.pageNumber}&pageSize=${search.pageSize}`;
    if (search.batchCode && search.batchCode !== '') {
      thisUrl += `&batchCode=${search.batchCode}`;
    }
    return request.get(thisUrl);
  },
  getBasicDetailData(personId) {
    let url = 'empBasic/queryPsnBasicInfoById?';
    if (personId && personId !== '') {
      url += `personId=${personId}`;
    }
    return request.get(url);
  },
  getInfoSetDetailData(detailSearch) {
    let url = 'empBasic/queryPsnSubSetInfoById?';
    if (detailSearch.personId && detailSearch.personId !== '') {
      url += `personId=${detailSearch.personId}`;
    }
    if (detailSearch.infoSetType && detailSearch.infoSetType !== '') {
      url += `&infoSetType=${detailSearch.infoSetType}`;
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
