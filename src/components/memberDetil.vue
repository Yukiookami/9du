<template>
  <div class="detil">
    <div class="back">
      <back></back>
    </div>
    <img class="hito" :src="img" alt="">
    <div class="text">
      <div>
        <span class="font-b">{{name}}</span>&nbsp;&nbsp;
        <span class="font-e font-s">{{pinyin}}</span>
      </div>
      <span class="font-e font-b font-en">{{en}}</span><br>
      <span class="font-s">{{ch}}</span>
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import back from './back'
export default {
  name: 'memberDetil',
  data () {
    return {
      name: '',
      pinyin: '',
      en: '',
      ch: '',
      img: '',
      content: ''
    }
  },
  mounted: function () {
    this.$http({
      method: 'get',
      url: 'http://47.107.163.62:8089/designer/getDesignerInfo?id=' + this.$route.params.id
    }).then((res) => {
      var resJ = res.data.data
      this.name = resJ.name
      this.pinyin = resJ.nameEnglish
      this.en = resJ.positionEnglish
      this.ch = resJ.position
      this.content = resJ.introduction.replace(/\n/g, '<br/>')
      this.img = resJ.img
    })
  },
  components: {
    back
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
  color: #6c7279;
  font-family: SimHei;
}

.detil {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 10% auto 6%;
  width: 60%;
}

.back {
  position: fixed;
  top: 7rem;
  right: 3rem;
}

.hito {
  width: 20vw;
  height: 20vw;
}

.text {
  width: 50%;
}

.font-e {
  font-family: Arial, Helvetica, sans-serif;
}

.font-b {
  font-size: 1.3rem;
}

.font-s {
  font-size: .9rem;
}

.font-en {
  line-height: 3rem;
}

.content {
  margin: 1rem 0 0;
  line-height: 1.5rem;
}

@media screen and (max-width: 1550px) {
  .detil {
    width: 70%;
  }

  .hito {
    width: 30vw;
    height: 30vw;
  }
}

@media screen and (max-width: 1350px) {
  .detil {
    width: 80%;
  }

  .hito {
    width: 35vw;
    height: 35vw;
  }
}

@media screen and (max-width: 1100px) {
  .detil {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }

  .hito {
    width: auto;
    margin-bottom: 2rem;
  }

  .text {
    width: auto;
  }

  .back {
    top: 6rem;
    right: 1rem;
  }
}

@media screen and (max-width: 580px) {
   .hito {
    margin-top: 3rem;
  }

  .back {
    top: 4rem;
    right: 0;
  }
}
</style>
