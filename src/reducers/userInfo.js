const updateUserInfo = (state, action) => {

  if (state === undefined) {
    return {
      isLogged: false
    }
  }

  switch (action.type) {

    case 'LOG_OUT':
      return {
        isLogged: false
      }

    case 'LOG_IN':
      return {
        isLogged: true
      }

    default:
      return state.user
  }
}

export default updateUserInfo;