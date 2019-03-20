<template>
  <div @click="goDetil()" class="member-box">
    <router-link to="#">
      <div v-if="name !== '' || content !=='' || member === ' '" class="hide-text">
        <h3>{{name}}</h3>
        <p>{{content}}</p>
      </div>
      <img :src="member" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['name', 'member', 'content', 'id'],
  methods: {
    goDetil: function () {
      if (this.name !== '' && this.content !== '') {
        this.$router.push({
          name: 'memberDetil',
          params: {
            id: this.id
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.member-box {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: .5rem 1% .5rem 0;
  width: 19%;
  background-color: #FFF;
  cursor: pointer;
}

.member-box:last-child {
  margin: .5rem 0 .5rem 1%;
}

.member-box img {
  width: 100%;
}

.member-box h3 {
  font-weight: normal;
  margin-bottom: 0;
}

.member-box p {
  text-align: center;
  color: #fff;
}

.hide-text {
  position: absolute;
  top: 0;
  bottom: 4px;
  left: 0;
  right: 0;
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
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: rgba(0, 0, 0, .4);
  color: #FFF;
  opacity: 0;
}

.hide-text:hover {
  opacity: 1;
}

.hide-text,
.hide-text:hover {
  -webkit-transition: .5s all ease-in-out;
  -o-transition: .5s all ease-in-out;
  transition: .5s all ease-in-out;
}

@media screen and (max-width: 1200px) {
  .member-box {
    width: 24%;
  }
}

@media screen and (max-width: 890px) {
  .member-box {
    width: 32%;
  }
}

@media screen and (max-width: 400px) {
  .member-box {
    width: 49%;
  }
}
</style>
