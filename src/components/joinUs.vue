<template>
  <div>
    <div class="join-title">
      <h2 class="font-e">Join Us</h2>
      <span>加 入 我 们</span>
    </div>
    <div class="join-box-sec">
      <join-box v-for="(item,joinIndex) in joinList" :key="joinIndex"
      :joinTitle='item.position' :joinIndex='joinIndex'
      :joinContent='item.recruitmentInfo' :joinTitleE='item.positionEnglish'></join-box>
    </div>
  </div>
</template>

<script>
import joinBox from './joinBox'

export default {
  data () {
    return {
      joinList: []
    }
  },
  mounted () {
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/position/getPositionInfo'
    }).then((res) => {
      for (let i = 0; i < res.data.data.length; i++) {
        res.data.data[i].recruitmentInfo = res.data.data[i].recruitmentInfo.replace(/\n/g, '<br/>')
      }
      this.joinList = res.data.data
    })
  },
  components: {
    joinBox
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
  font-family: SimHei;
}

.join-title {
  width: 10rem;
  margin: 8rem auto 2rem;
  text-align: center;
}

.join-title h2 {
  font-size: 1.5rem;
  margin: 0 0 .5rem 0;
}

.join-title span {
  font-size: .7rem;
}

.join-box-sec {
  margin: 0 auto;
  width: 60%;
  line-height: 1.5rem;
}

.font-e {
  font-family: Arial Black;
}
</style>
