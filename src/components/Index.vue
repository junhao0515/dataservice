<template>
  <div class="index_container">
    <el-carousel trigger="click" height="634px" :autoplay="false">
      <el-carousel-item>
        <img src="../assets/images/slide.jpg" class="carousel_img">
        <div class="bannerInfo">
          <p class="title">积分查询服务</p>
          <p class="info">用户在各个环节均可通过身故信息数据服务系统查询相应人员状态和风险等级情况，为用户后期承保及理赔提供参考。</p>
          <a href="#">READ MORE</a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/slide1.jpg" class="carousel_img">
        <div class="bannerInfo">
          <p class="title">处理结果反馈服务</p>
          <p class="info">用户在各个环节均可通过身故信息数据服务系统查询相应人员状态和风险等级情况，为用户后期承保及理赔提供参考。</p>
          <a href="#">READ MORE</a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/images/slide2.jpg" class="carousel_img">
        <div class="bannerInfo">
          <p class="title">风险信息服务</p>
          <p class="info">用户在各个环节均可通过身故信息数据服务系统查询相应人员状态和风险等级情况，为用户后期承保及理赔提供参考。</p>
          <a href="#">READ MORE</a>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 登录注册-->
    <div class="header_logo">
      <div class="header_logo_box">
        <a href="#" class="logo">
          <img src="../assets/images/top_logo.png" alt="">
        </a>
        <ul class="login_link">
          <li>
            <a href="#">登录</a>
          </li>
          <li>
            <a href="#">注册</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 中部服务区域 -->
    <div class="service">
      <h3>我们的服务</h3>
      <span class="b-line"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.index_container {
  height: 100%;
  width: 100%;
  // 轮播图图片 及 背景色
  .carousel_img {
    height: 634px;
    width: 100%;
    -webkit-filter: grayscale(80%);
  }
  // 轮播图内信息
  .bannerInfo {
    width: 60%;
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    color: #fff;
    .title {
      line-height: 68px;
      text-align: center;
      font-size: 50px;
      color: #14bcff;
    }
    .info {
      width: 60%;
      line-height: 24px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      font-family: '微软雅黑';
      display: block;
      margin: 25px auto;
    }
    a {
      width: 143px;
      height: 40px;
      line-height: 40px;
      display: block;
      text-align: center;
      font-size: 14px;
      color: #fff;
      background-color: #14bcff;
      border-radius: 7px;
      margin: 0 auto;
    }
  }
  // 头部logo图片
  .header_logo {
    width: 100%;
    height: 64px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 200;
    .logo {
      margin-top: 5px;
      float: left;
      img {
        display: block;
        width: 250px;
        height: 34px;
      }
    }
    // 登录、注册按钮
    .header_logo_box {
      max-width: 1200px;
      margin: 0 auto;
      .login_link {
        margin: 0;
        width: 160px;
        float: right;
        margin-top: 25px;
        text-align: center;
        li {
          display: inline-block;
          list-style: none;
          a {
            padding: 0 15px;
            font-size: 15px;
            color: #fff;
          }
        }
      }
    }
  }
  .service {
    h3 {
      display: block;
      width: 100px;
      height: 50px;
      margin: 0 auto;
    }
  }
}
</style>
