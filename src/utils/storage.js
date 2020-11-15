const sessionStorage = window.sessionStorage

/**
 * @name: setSessionStorage
 * @test: test font
 * @msg: set
 * @param {*}
 * @return {*}
 */
const  setSessionStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * @name: getSessionStorage
 * @test: test font
 * @msg: get
 * @param {*} key
 * @return {*}
 */
const getSessionStorage = key => {
  return (key && sessionStorage.getItem(key) )? JSON.parse(sessionStorage.getItem(key)) : null
}

/**
 * @name: removeSessionStorage
 * @test: test font
 * @msg: remove
 * @param {*} key
 * @return {*}
 */
const removeSessionStorage = key => {
  sessionStorage.removeItem(key)
}

export { setSessionStorage, getSessionStorage, removeSessionStorage }

