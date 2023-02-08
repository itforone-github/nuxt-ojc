<template>
  <div data-app>
    <v-container 
      class="header"
      :class="active"
    >
        <div class="logo" @click="goBack()">
            <img :src="require('@/assets/images/logo_w.svg')"/>
        </div>
        <div class="title">
          {{ title }}
        </div>
        <div class="menu">
          <div v-if="title">
            <v-icon class="btnBack" @click="goBack()">mdi-chevron-left</v-icon>
          </div>
          <v-app-bar-nav-icon class="iconNav"></v-app-bar-nav-icon>
        </div>
    </v-container>
  </div>
</template>

<script>
  export default{
    props: {
      title: {
        type : String
      }
    },
    data() {
      return {
        active: '',
      };
    },
    mounted() {
      document.addEventListener("scroll", this.scroll);
    },
    beforeDestroy() {
      document.removeEventListener("scroll", this.scroll);
    },
    methods: {
      scroll() {
        if (window.scrollY > 100) {
          this.active = 'active';
        } else {
          this.active = '';
        }
      },

      goBack(){    
          let urlArr = window.location.href.split('/');

          if(urlArr[4] == 'main'){
            location.reload();
          }else{
            window.history.go(-1); 
          }
      }
    },
  }
</script>

<style scoped>
  .header{
    display: flex;
    width: 100%;
    position: fixed;
    height: 65px;
    align-items: center;
  }

  .header.active{
    background: #cdcdcd;
  }

  .title{
    width:60%;
    font-size: 1em;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
  .logo{
    width: 20%;    
  }

  .logo img{
    width: 100%;
    max-width: 55px;
  }
  .menu{
    width: 20%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .btnBack{
    color: #fff;
    font-size: 20px;
    display: block;
  }
  .iconNav{
    color:#fff !important;
  }
</style>