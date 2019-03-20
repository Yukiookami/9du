<template>
<div>
  <div class="pro-text-box">
    <h2 class="font">{{expTitle}}</h2>
    <span>{{expTitleS}}</span>
  </div>
  <div class="pro-box">
    <expertise-box v-for="(item, expIndex) in expList" :key="expIndex"
    :expImg='item.img' :expTitle='item.name' :id='item.id'></expertise-box>
  </div>
</div>
</template>

<script>
import expertiseBox from './expertiseBox'

export default {
  data () {
    return {
      expTitle: 'Our Expertise',
      expTitleS: '我 们 的 专 长',
      expList: []
    }
  },
  mounted () {
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/expertise/getExpertiseInfo'
    }).then((res) => {
      this.expList = res.data.data
    })
  },
  components: {
    expertiseBox
  }
}
</script>

<style scoped>
.pro-text-box {
  text-align: center;
  width: 90%;
  padding: 5rem 5% 0;
}

.font {
  font-family: Arial Black;
  font-size: 1.5rem;
}

.pro-text-box p {
  color: #6c7279;
  line-height: 2rem;
}

.pro-text-box span {
  display: block;
  margin-bottom: 1rem;
  color: #6c7279;
  font-family: SimHei;
}

.pro-text-box {
  padding: 5rem 5% 0;
  margin: 6% auto 0;
}

.pro-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto 5rem;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  width: 75%;
  line-height: 0;
}
</style>
