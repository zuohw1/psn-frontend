/* 跳转页面 */
export function redirectDetail(pathname, state) {
  return {
    type: 'contractManage/redirect',
    payload: {
      pathname, state,
    },
  };
}
