<template>
  <div>
    <slide class="slide" :imgList='imgList' :pos='pos' :title='title' :content='content'></slide>
    <section class="home-text-box">
      <div class="home-text-title">
        <h2>{{homeTitle}}</h2>
        <span>{{homeTitleS}}</span>
      </div>
      <div v-html="homeContent"></div>
    </section>
    <section>
      <div class="team-text-box">
        <h2>{{teamTitle}}</h2>
        <span>{{teamTitleS}}</span>
      </div>
      <div class="team-box">
        <member-box v-for="(item, teamIndex) in teamList" :key="teamIndex" :url='item.id'
        :name='item.name' :member='item.img' :content='item.position'
        :id='item.id' v-if="teamIndex < 15"></member-box>
      </div>
    </section>
    <section>
      <div class="pro-text-box">
        <h2>{{expTitle}}</h2>
        <span>{{expTitleS}}</span>
      </div>
      <div class="pro-box">
        <expertise-box v-for="(item, expIndex) in expList" :key="expIndex"
        :expImg='item.img' :expTitle='item.name' :id='item.id'></expertise-box>
      </div>
    </section>
    <section class="cu-text">
      <h2>{{customersTitle}}</h2>
      <span>{{customersTitleS}}</span>
      <div class="cu-img">
        <img :src="cuImg" alt="">
      </div>
    </section>
    <gnd-map></gnd-map>
  </div>
</template>

<script>
import slide from './slide'
import memberBox from './memberBox'
import gndMap from './gndMap'
import expertiseBox from './expertiseBox'

export default {
  name: 'HelloWorld',
  data () {
    return {
      pos: 1,
      imgList: [],
      homeTitle: 'About Us',
      homeTitleS: '关 于 我 们',
      homeContent: '',
      expTitle: 'Our Expertise',
      expTitleS: '我 们 的 专 长',
      expList: [],
      teamTitle: 'Our Team',
      teamTitleS: '我 们 的 团 队',
      teamList: [],
      customersTitle: 'Our Customers',
      customersTitleS: '我 们 的 客 户',
      cuImg: '',
      title: '设 计 引 领 幸 福 生 活',
      content: 'Design leads a happy life'
    }
  },
  computed: {
    showMember: function () {
      return this.teamList.slice(0, 15)
    }
  },
  mounted: function () {
    // 首页轮播图
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/slide/getSlides'
    }).then((res) => {
      this.imgList = res.data.data
    })
    // 首页关于我们文字
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/company/companyInfo'
    }).then((res) => {
      this.homeContent = res.data.data.introduce.replace(/\n/g, '<br/>')
    })
    // 首页专长
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/expertise/getExpertiseInfo'
    }).then((res) => {
      this.expList = res.data.data
    })
    // 首页成员
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/designer/getDesignerAllPartInfo'
    }).then((res) => {
      this.teamList = res.data.data
    })
    // 首页合作单位
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/company/companyCooperationUnitInfo'
    }).then((res) => {
      this.cuImg = res.data.data.cooperationUnitImg
    })
  },
  components: {
    slide,
    memberBox,
    gndMap,
    expertiseBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 14px;
}

.slide {
  height: 948px;
}

h2 {
  color: #6c7279;
  font-size: 1.5rem;
  margin-bottom: .5rem;
  font-family: Arial Black;
}

.home-text-box {
  margin: 0 auto;
  padding: 5rem 0 2rem;
  width: 75%;
  line-height: 2rem;
  color: #6c7279;
}

.ser-text-box,
.pro-text-box,
.team-text-box,
.cu-text {
  text-align: center;
  width: 90%;
  padding: 5rem 5% 0;
}

.cu-text {
  margin: 0 auto;
  width: 75%;
}

.cu-img img {
  width: 100%;
}

.pro-text-box p,
.team-text-box p {
  color: #6c7279;
  line-height: 2rem;
}

.ser-text-box span,
.pro-text-box span,
.team-text-box span,
.home-text-title span,
.cu-text {
  display: block;
  margin-bottom: 1rem;
  color: #6c7279;
  font-family: SimHei;
  font-size: .7rem;
}

.pro-text-box {
  padding: 5rem 5% 0;
  margin: 0 auto;
}

.team-text-box {
  padding: 3rem 5% 2rem;
  margin: 0 auto;
}

.pro-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 75%;
  line-height: 0;
}

.team-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin: 0 auto;
  width: 75%;
}

.home-text-title {
  text-align: center;
  line-height: 1.5rem;
}

@media screen and (max-width: 890px) {
  .home-text-box {
    padding: 3rem 0 1rem;
  }

  .ser-text-box,
  .pro-text-box,
  .team-text-box,
  .cu-text {
    text-align: center;
    width: 90%;
    padding: 2rem 5% 0;
  }
}
</style>
