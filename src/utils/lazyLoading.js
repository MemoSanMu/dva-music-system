import dynamic from 'dva/dynamic';
import App from '@'
// const homePage = dynamic({
//   app,
//   // models: () => [
//   //   import('./models/users'),
//   // ],
//   component: () => import('@/containers'),
// })

/**
 * @name: lazyLoading
 * @test: test font
 * @msg: 路由/组件 懒加载
 * @param {*} component
 * @return {*}
 */
const lazyLoading = (component) => dynamic({ App, component})

const Header = lazyLoading(() => import('@/components/Header') )
const Footer = lazyLoading(() => import('@/components/Footer') )

export { lazyLoading, Header, Footer }