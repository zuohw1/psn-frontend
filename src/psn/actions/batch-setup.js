export function setModeShow(modal, formEdit) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      modal, formEdit,
    },
  };
}
export function isAlertShow(showAlert) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      showAlert,
    },
  };
}
export function updateLeftCardTree(leftCardTree) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      leftCardTree,
    },
  };
}
export function setPrimaryBusinessData(primaryBusinessData) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      primaryBusinessData,
    },
  };
}
export function isAddprofModalShow(addProfModal) {
  return {
    type: 'batchSetup/stateWillUpdate',
    payload: {
      addProfModal,
    },
  };
}
