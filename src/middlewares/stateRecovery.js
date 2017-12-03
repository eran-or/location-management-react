export default store => next => action => {
  const { type } = action
  if (type === 'INIT') {
    const state = JSON.parse(localStorage.getItem('ABRACADABRA_RECOVER_STATE') || '{}')
    if (state) {
      store.dispatch({
        type: 'RESET',
        payload: state
      })
    }
  } else {
    next(action)
    const state = store.getState();
    localStorage.setItem('ABRACADABRA_RECOVER_STATE', JSON.stringify(state));
  }
}