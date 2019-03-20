<template>
  <div id="project">
    <div class="home-text-title">
      <h2 class="font-e">{{aboutTitle}}</h2>
      <span>{{aboutTitleS}}</span>
    </div>
    <div class="pro-box">
      <pro-box v-for="(item, index) in expList" :key="index"
      :proImg='item.img' :proTitle='item.name' :id='item.id'></pro-box>
    </div>
  </div>
</template>

<script>
import proBox from './projectItem'

export default {
  data () {
    return {
      aboutTitle: 'Our Works',
      aboutTitleS: '我 们 的 作 品',
      expList: []
    }
  },
  mounted () {
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/project/getProjectIntroduct'
    }).then((res) => {
      this.expList = res.data.data
    })
  },
  components: {
    proBox
  }
}
</script>

<style scoped>
.pro-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin: 0 auto;
  width: 68%;
}

.home-text-title span {
  display: block;
  margin-bottom: 1rem;
  color: #6c7279;
  font-family: SimHei;
}

.home-text-title {
  text-align: center;
  line-height: 1.5rem;
  margin-top: 12rem;
}

.home-text-title h2 {
  margin-bottom: .5rem;
}

.font-e {
  font-family: Arial Black;
  font-size: 1.5rem;
}

@media screen and (max-width: 890px) {
  .home-text-title {
    margin-top: 8rem;
  }
}
</style>
