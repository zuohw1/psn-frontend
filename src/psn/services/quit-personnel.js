import request from '../../utils/request';

export default {
  list(search) {
    let url = `empBasicV1/getPayForEmps?currentPageNum=${search.currentPageNum}&recordNum=${search.recordNum}`;
    if (search.orgName && search.orgName !== '') {
      url += `&orgName=${search.orgName}`;
    }
    if (search.levelType && search.levelType !== '') {
      url += `&levelType=${search.levelType}`;
    }
    if (search.employeeNum && search.employeeNum !== '') {
      url += `&employeeNum=${search.employeeNum}`;
    }
    if (search.employeeName && search.employeeName !== '') {
      url += `&employeeName=${search.employeeName}`;
    }
    return request.get(url);
  },
};
