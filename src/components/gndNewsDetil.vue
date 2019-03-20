<template>
  <div class="detil-box">
    <div class="back">
      <back></back>
    </div>
    <div class="content-box" v-html="content"></div>
  </div>
</template>

<script>
import back from './back'

export default {
  data () {
    return {
      content: ''
    }
  },
  mounted: function () {
    this.$http.get('http://47.107.163.62:8089/news/getNewsInfoByid?id=' + this.$route.params.id)
      .then((res) => {
        this.content = res.data.data.details
      })
  },
  components: {
    back
  }
}
</script>

<style scoped>
.detil-box {
  margin: 6rem auto 3rem;
}

.content-box {
  margin: 0 auto;
  width: 75%;
}

.back {
  position: fixed;
  right: 2rem;
}
</style>
