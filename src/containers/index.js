import React, { Component } from "react";
import { Route } from "dva/router";
import { lazyLoading, Header, Footer } from "@/utils/lazyLoading";

const Home = () => import("@/containers/Home");
const MyDetailPage = () => import("@/containers/Home/subPage/My");
const Video = () => import("@/containers/Home/subPage/Video");
const Clouds = () => import("@/containers/Home/subPage/Clouds");
const Account = () => import("@/containers/Home/subPage/Account");
const TopList = () => import("@/containers/Home/subPage/TopList");
const Singer = () => import("@/containers/Home/subPage/Singer");
const TopListDetail = () => import("@/containers/Home/subPage/TopListDetail");

class Index extends Component {
  render() {
    return (
      <main className="container-wraper" id="container-wraper">
        <Header></Header>
        <div className="main-layout">
          <Route exact path="/home" component={lazyLoading(Home)} />
          <Route path="/home/my" component={lazyLoading(MyDetailPage)} />
          <Route path="/home/video" component={lazyLoading(Video)} />
          <Route path="/home/clouds" component={lazyLoading(Clouds)} />
          <Route path="/home/account" component={lazyLoading(Account)} />
          <Route path="/home/topList" component={lazyLoading(TopList)} />
          <Route path="/home/singer" component={lazyLoading(Singer)} />
          <Route path="/home/topListDetail" component={lazyLoading(TopListDetail)} />
        </div>
        <Footer></Footer>
      </main>
    );
  }
}

export default Index;
