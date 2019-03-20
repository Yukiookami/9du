<template>
  <div>
    <div class="back">
      <back></back>
    </div>
    <div class="title-box">
      {{title}}
      <img class="title-back" :src='img'>
    </div>
    <div class="text" v-html="text"></div>
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
import back from './back'

export default {
  data () {
    return {
      title: '',
      text: '',
      aboutTitle: 'Representative Works',
      aboutTitleS: '代 表 作 品',
      expList: [],
      img: ''
    }
  },
  mounted: function () {
    if (typeof this.$route.params.id !== 'undefined') {
      sessionStorage.setItem('queryParam', this.$route.params.id)
    }
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/expertise/getExpertiseAllInfoById?id=' + sessionStorage.getItem('queryParam')
    }).then((res) => {
      var resJ = res.data.data[0]
      this.img = resJ.img
      this.title = resJ.name
      this.text = resJ.introduction.replace(/\n/g, '<br/>')
      this.expList = resJ.list
    })
  },
  components: {
    proBox,
    back
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
  font-family: SimHei;
}

.title-box {
  overflow: hidden;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 8rem auto 2rem;
  color: #FFF;
  font-size: 3rem;
  font-weight: bold;
  width: 75%;
  height: 25rem;
}

.title-back {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
}

.text {
  margin: 0 auto 7rem;
  width: 75%;
  color: #6c7279;
  line-height: 2rem;
}

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
  width: 75%;
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
}

.home-text-title h2 {
  font-size: 1.5rem;
  margin-bottom: .5rem;
}

.font-e {
  font-family: Arial,Helvetica,sans-serif;
}

.back {
  position: fixed;
  top: 7rem;
  right: 3rem;
}

@media screen and (max-width: 1300px) {
  .title-box {
    height: 20rem;
  }
}

@media screen and (max-width: 1000px) {
  .title-box {
    height: 18rem;
  }

  .back {
    top: 6rem;
    right: 1rem;
  }
}

@media screen and (max-width: 820px) {
  .title-box {
    height: 15rem;
  }
}

@media screen and (max-width: 700px) {
  .title-box {
    height: 12rem;
  }
}

@media screen and (max-width: 550px) {
  .title-box {
    font-size: 2rem;
    height: 10rem;
  }

  .back {
    top: 4rem;
    right: 0;
  }
}
</style>
