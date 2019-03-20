<template>
  <div id="about-box">
    <img src="../assets/about01.jpg" class="banner" alt="">
    <div class="home-text-title">
        <h2>{{homeTitle}}</h2>
        <span>{{homeTitleS}}</span>
      </div>
    <div class="about-referral about-first" v-html="aboutReferralF"></div>
    <div class="about-referralS">
      <h2>{{aboutReferralSTitle}}</h2>
      <div class="about-sec" v-html="aboutReferralS"></div>
    </div>
    <div class="about-referralT">
      <h2>{{aboutReferralTTitle}}</h2>
      <div class="about-sec-t" v-html="aboutReferralT"></div>
    </div>
    <section>
      <div class="team-text-box">
        <h2>{{teamTitle}}</h2>
        <span>{{teamT}}</span>
      </div>
      <div class="team-box">
        <member-box v-for="(item, teamIndex) in teamList" :key="teamIndex" :url='item.id'
        :name='item.name' :member='item.img' :content='item.position' :id='item.id'></member-box>
      </div>
    </section>
    <gnd-map></gnd-map>
  </div>
</template>

<script>
import gndMap from './gndMap'
import memberBox from './memberBox'
import slide from './slide'

export default {
  data () {
    return {
      homeTitle: 'About Us',
      homeTitleS: '关 于 我 们',
      aboutReferralF: '',
      aboutReferralS: '',
      aboutReferralSTitle: '主营业务',
      aboutReferralT: '',
      aboutReferralTTitle: '合 作 单 位',
      teamTitle: 'Our Team',
      teamT: '我 们 的 团 队',
      teamList: []
    }
  },
  mounted () {
    // 关于简介
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/company/companyInfo'
    }).then((res) => {
      this.aboutReferralF = res.data.data.introduce.replace(/\n/g, '<br/>')
    })
    // 主要营业
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/company/companyServiceInfo'
    }).then((res) => {
      this.aboutReferralS = res.data.data.service.replace(/\n/g, '<br/>')
    })
    // 合作单位
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/company/companyCooperationUnitInfo'
    }).then((res) => {
      this.aboutReferralT = res.data.data.cooperativeUnit.replace(/\n/g, '<br/>')
    })
    // 公司成员
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/designer/getDesignerAllPartInfo'
    }).then((res) => {
      this.teamList = res.data.data
    })
  },
  components: {
    slide,
    memberBox,
    gndMap
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
}

.banner {
  width: 100%;
}

.slide {
  height: 500px;
}

.home-text-title {
  margin: 2rem auto 0;
  text-align: center;
  line-height: 1.5rem;
}

h2 {
  color: #6c7279;
  font-size: 1.5rem;
  margin-bottom: .5rem;
  font-family: Arial Black;
}

.home-text-title span {
  display: block;
  margin-bottom: 1rem;
  color: #6c7279;
  font-family: SimHei;
  font-size: .7rem;
}

.about-referral,
.about-referralS,
.about-referralT {
  margin: 0 auto;
  line-height: 2rem;
  color: #6c7279;
}

.about-referral {
  width: 60%;
}

.about-first {
  /* padding-left: 7.5%; */
  margin-top: 1rem;
}

.about-referralS,
.about-referralT {
  margin: 3rem auto;
  width: 60%;
}

/* .about-referralS {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
} */

.about-referralS h2,
.about-referralT h2 {
  /* display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; */
  margin: 2rem 0 .5rem;
  width: 15vw;
  font-size: 14px;
}

.about-sec {
  width: 60vw;
}

.about-sec-t {
  /* padding-left: 15vw; */
  width: 100%;
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

.team-text-box {
  padding: 3rem 5% 2rem;
  margin: 0 auto 2rem;
}

.team-text-box p {
  color: #6c7279;
  line-height: 2rem;
}

.team-text-box {
  text-align: center;
  width: 90%;
  padding: 5rem 5% 0;
}

.team-text-box h2 {
  font-size: 1.5rem;
  color: #6c7279;
}

.team-text-box span {
  font-size: .7rem;
}

@media screen and (max-width: 1265px) {
  .about-referralT h2{
    width: 20vw;
  }

  .about-referral,
  .about-referralS,
  .about-referralT {
    width: 75%;
  }
}

@media screen and (max-width: 930px) {
  .about-referralT h2{
    width: 30vw;
  }
}

@media screen and (max-width: 630px) {
  .about-referralT h2{
    width: 35vw;
  }
}

@media screen and (max-width: 530px) {
  .about-referralT h2{
    width: 40vw;
  }
}

@media screen and (max-width: 450px) {
  .about-referralT h2{
    width: 50vw;
  }
}

@media screen and (max-width: 400px) {
  .about-referralT h2{
    width: 60vw;
  }

  .about-referralS h2 {
    width: 20vw;
  }
}
</style>
