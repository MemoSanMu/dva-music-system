import Cookies from 'js-cookie'

/**
 * @name: getCookies
 * @test: test font
 * @msg: 获取cookie
 * @param {*} key
 * @return {*}
 */
const getCookies = (key) => Cookies.get(key) && JSON.parse(Cookies.get(key))

/**
 * @name: transformation
 * @test: test font
 * @msg: 转换数字为对应的值
 * @param {*} value 对应的值
 * @param {*} num 可传进行装换的单位数 列 1000 10000 一千 一万
 * @return {*}
 */
const transformation = (value, num) => (value && (value / num).toFixed()) || ''

/**
 * @name: handleIconFont
 * @test: test font 
 * @msg: handle iconfong classname
 * @param {*} iconName
 * @return {*}
 */
const handleIconFont = (iconName) => `icon iconfont icon-${iconName}`

/**
 * @name: handleZeroFilling
 * @test: test font
 * @msg: 处理补零
 * @param {*} num
 * @return {*}
 */
const handleZeroFilling = (num) => num < 10 ? `0${num}` : num

const handleBackPage = ({ history: { goBack } }) =>  goBack()

export { getCookies, transformation, handleIconFont, handleZeroFilling, handleBackPage }