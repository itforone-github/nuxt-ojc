<template>
    <div data-app>
      <v-container class="header">
          <div class="logo">
                <nuxt-link :to="{ path: '/delivery/main'}" replace>
                    <img :src="require('@/assets/images/logo_g.svg')"/>
                </nuxt-link>
          </div>
          <div class="title">
            {{title}}
          </div>
          <div class="menu">
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
        };
      },
      mounted() {        
      },

      methods: {        
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
      background:#f5f5f5;
      z-index: 1;
    }  
  
    .logo{
        width: 25%;
    }

    .logo img{
        width: 100%;
        max-width: 65px;
    }    
    
    .title{
        width: 50%;
        text-align: center;
        color: #74748B;
        font-weight: bold;
    }
    .menu{
        width: 25%;    
        display: flex;
        justify-content: flex-end;
    }
  
    .iconNav{
        color: #74748B !important;
    }   
  </style>