/* 设置是否显示导入弹框 */
export function setImpModalVisiable(impModalVisiable) {
  return {
    type: 'staffEntry/stateWillUpdate',
    payload: {
      impModalVisiable,
    },
  };
}
