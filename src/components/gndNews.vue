<template>
  <div>
    <section class="class-button-sec">
      <class-button v-on:changeType='changeType' :className='item.name' :index='index'
      v-for="(item, index) in newClass" :changeTypeNum='changeTypeNumL'
      :key="index"></class-button>
    </section>
    <div class="pro-box">
      <pro-box v-for="(item, index) in expList" :key="index"
      :proImg='item.img' :proTitle='item.name' :id='item.id'
      :date='item.newsTime'></pro-box>
    </div>
  </div>
</template>

<script>
import classButton from './classButton'
import proBox from './newsItem'
export default {
  data () {
    return {
      newClass: [],
      expList: [],
      changeTypeNum: 0,
      changeTypeNumL: 0
    }
  },
  mounted () {
    // 默认获取新闻动态
    this.$http.get('http://47.107.163.62:8089/news/getNewsInfoByTypeId?typeid=1')
      .then((res) => {
        this.expList = res.data.data
      })
    // 新闻类型
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/news/getNewsTypeInfo'
    }).then((res) => {
      this.newClass = res.data.data
    })
  },
  methods: {
    changeType: function (type) {
      // 更改新闻类型按钮样式
      this.changeTypeNum = type
      sessionStorage.setItem('changeTypeNum', this.changeTypeNum)
      this.changeTypeNumL = parseInt(sessionStorage.getItem('changeTypeNum'))
      // 获得当前类型新闻
      this.$http.get('http://47.107.163.62:8089/news/getNewsInfoByTypeId?typeid=' + (type + 1))
        .then((res) => {
          this.expList = res.data.data
        })
    }
  },
  components: {
    classButton,
    proBox
  }
}
</script>

<style scoped>
.class-button-sec {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin: 10rem auto 2rem;
  width: 75%;
}

.pro-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  margin: 0 auto;
  width: 68%;
}
</style>
