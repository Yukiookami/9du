<template>
  <div>
    <div id="footer">
      <div class="foot-box-sec">
        <div class="foot-box foot-co">
          <span class="font-B">Contact us</span>
          <span class="font-c font-B-s">联系我们</span>
        </div>
        <div class="foot-box foot-ads">
          <span class="font-c">{{ads}}</span>
          <span class="font-e">{{adsE}}</span>
        </div>
      </div>
      <div class="foot-box-sec">
        <div class="foot-call font-e">
          <div>
            <span>CALL：</span>
          </div>
          <div>
            <span>{{contPhone1}}</span>
            <span>{{contPhone2}}</span>
          </div>
        </div>
        <div class="foot-box">
          <span class="font-c">商务咨询：<span class="font-e">{{businessEmail}}</span></span>
          <span class="font-c">招聘邮箱：<span class="font-e">{{recruitEmail}}</span></span>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span class="font-c"> © COPYRIGHT  深圳市九度空间室内设计有限公司   版权所有
        <br><br>粤ICP备18143759号-1</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: '',
      adsE: '',
      contPhone1: '',
      contPhone2: '',
      businessEmail: '',
      recruitEmail: ''
    }
  },
  mounted () {
    this.$http({
      mounted: 'get',
      url: 'http://47.107.163.62:8089/company/companyFooterInfo'
    }).then((res) => {
      this.ads = res.data.data.addressChinese
      this.adsE = res.data.data.addressEnglish
      this.contPhone1 = res.data.data.contactNumber1
      this.contPhone2 = res.data.data.contactNumber2
      this.businessEmail = res.data.data.businessEmail
      this.recruitEmail = res.data.data.recruitEmail
    })
  }
}
</script>

<style scoped>
#footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 5rem 10rem;
  margin-top: 4rem;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  background-color: rgba(0, 0, 0, .8);
  color: #FFF;
  font-size: 1rem;
}

.font-B {
  font-size: 1.5rem;
}

.foot-co {
  text-align: center
}

.font-B-s {
  font-size: 1.2rem;
}

.foot-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  line-height: 2rem;
}

.foot-box-sec {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  width: 50%;
}

.foot-call {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  line-height: 2rem;
}

.foot-call :nth-child(2) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.copyright {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
  padding: 1rem 0;
  background-color: rgba(0, 0, 0, .9);
  color: #FFF;
}

.font-c {
  font-family: SimHei;
}

.font-e {
  font-family: FZXiDengXian-Z06S;
}

@media screen and (max-width: 1500px) {
  #footer {
    padding: 5rem 2rem;
  }
}

@media screen and (max-width: 1150px) {
  #footer {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 2rem 2rem;
  }

  .foot-box-sec {
    margin: 0 auto;
    width: 75%;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
}

@media screen and (max-width: 760px) {
  .foot-box-sec {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin: .5rem auto;
    height: 11rem;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 12px;
  }

  .foot-ads {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
}

@media screen and (max-width: 400px) {
  .foot-box-sec {
    height: 13rem;
  }
}
</style>
