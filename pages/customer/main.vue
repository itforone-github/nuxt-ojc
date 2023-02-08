<template>
    <div>
      <main-header></main-header>
      <div class="headerWrap">        
          <p class="title">업체명 님!</p>
          <p class="subTitle">
              배송 현황을 확인하세요. 
              <span class="yellow">></span>
          </p>
      </div>
      <v-container>
          <p class="status ing">현재</p>
          
          <ul class="listWrap">
              <li class="list">
                  <div>
                      <p style="margin-bottom: 10px;">                          
                          <span class="deliveryStatus ing">배송예정</span>
                          <span class="date">10.15(토) 13~15시</span>
                      </p>
                      <p>
                        <span class="productName">OJC 18S ECO 인쇄관 외</span>
                      </p>
                      <p class="bottomBox">
                          <span class="blue">배송 담당자</span>
                          <span class="info">김철수 (010-0000-0000)</span>
                      </p>
                  </div>
                  <div class="bundle">
                    <p class="delayText">차량지연</p>
                    <v-btn class="btnMap">
                        <nuxt-link :to="'./status'">
                            <v-icon class="iconMap">mdi-map-marker-radius</v-icon>
                        </nuxt-link>
                    </v-btn>

                    <v-btn class="btnReceipt">
                        <nuxt-link :to="{path:'../certifView', query:{id:1, type:'customer'}}">
                            <v-icon class="iconReceipt">mdi-receipt-text</v-icon>
                        </nuxt-link>
                    </v-btn>
                  </div>
              </li>
          </ul>
  
          <p class="status end">완료건</p>
          <ul class="listWrap end">
              <li class="mainDate">22.10.14(금)</li>
              <li class="list">
                  <div>
                      <p>
                          <span class="productName">OJC 18S ECO 인쇄관 외</span>
                          <span class="deliveryStatus end">배송완료</span>                    
                      </p>
                      <p class="bottomBox">
                          <span class="blue">배송 담당자</span>
                          <span class="info">김철수 (010-0000-0000)</span>
                      </p>
                  </div>
                  <v-btn class="btnReceipt">
                      <nuxt-link :to="{path:'../certifView', query:{id:1, type:'customer'}}">
                          ><v-icon class="iconReceipt">mdi-receipt-text</v-icon>
                      </nuxt-link>
                  </v-btn>
              </li>
              <li class="list">
                  <div>
                      <p>
                          <span class="productName">OJC 18S ECO 인쇄관 외</span>
                          <span class="deliveryStatus end">배송완료</span>                    
                      </p>
                      <p class="bottomBox">
                          <span class="blue">배송 담당자</span>
                          <span class="info">김철수 (010-0000-0000)</span>
                      </p>
                  </div>
                  <v-btn class="btnReceipt">
                      <nuxt-link :to="{path:'../certifView', query:{id:1, type:'customer'}}">
                          ><v-icon class="iconReceipt">mdi-receipt-text</v-icon>
                      </nuxt-link>
                  </v-btn>
              </li>
              <li class="mainDate">22.10.13(목)</li>
              <li class="list">
                  <div>
                      <p>
                          <span class="productName">OJC 18S ECO 인쇄관 외</span>
                          <span class="deliveryStatus cancel">배송취소</span>                    
                      </p>
                      <p class="bottomBox">
                          <span class="blue">배송 담당자</span>
                          <span class="info">김철수 (010-0000-0000)</span>
                      </p>
                  </div>                
                  <v-btn class="btnReceipt">
                      <nuxt-link :to="{path:'../certifView', query:{id:1, type:'customer'}}">
                          ><v-icon class="iconReceipt">mdi-receipt-text</v-icon>
                      </nuxt-link>
                  </v-btn>
              </li>
          </ul>
      </v-container>
    </div>
  </template>
  
  <script>
  import MainHeader from '../../components/header/MainHeader.vue'
  export default {      
    components: { MainHeader },
    head(){
          return{
              title : 'ojc - 기사님 메인화면'
          }
      },
      methods:{     
      }
  }
  </script>
  
  <style scoped>
      .headerWrap{
          width: 100%;
          height: 160px;
          background: url(/_nuxt/assets/images/bg.png) top center no-repeat;
          background-size: cover;
          padding-top: 70px;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
      }
  
      .headerWrap .title{
          color: #fff;
          font-weight: bold;
          font-size: 21px;
          margin-bottom: 10px;
          text-align: center;
      }
      .headerWrap .subTitle{
          color: #fff;
          text-align: center;
      }
      .headerWrap .yellow{
          color: #BFCE18;
          margin-left: 8px;
          font-size: 18px;           
      }
              
      .status{
          font-size: 1.2em;
          font-weight: 800;
          color: #9A9A9A;
          border-bottom: 1px solid #ececec;
          padding: 15px 0;     
          margin-top: 15px;   
      }
  
      .mainDate{
          font-size: 0.8em;
          font-weight: 800;
          color: #000;
          border-bottom: 1px solid #ececec;
          padding-bottom: 10px;
          padding-top: 10px;
          list-style: none;
      }
  
      .status.end{        
          border-bottom: 0;        
      }
      .status.ing{
          color: #4B82C3;
      }

      .bundle{
        margin: 0 0 0 auto;
      }      
      .delayText{
        background: #ff0000;
        color: #fff;
        font-size: 0.65em;        
        text-align: center;
        width: 45px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        margin: 0 0 10px auto;
      }
  
      .listWrap{
          
      }
  
      .list{        
          padding: 20px 0;
          border-bottom: 1px solid  #ececec;
          display: flex;
          align-items: center;
      }
  
      .bottomBox{
          font-size: 0.85em;
          margin-top: 8px;
      }

      .btnMap{
          display: inline-block;    
          border-radius: 500px;
          width: 40px;
          min-width: 40px !important;        
          height: 40px !important;
          box-shadow: 0px 3px 4px 0px #edebeb;
          border: none;
          font-size: 12px;
          border: 1px solid #4B82C3; 
          color: #4B82C3;        
          margin: 0 2px 0 auto;
      }
  
      .iconMap{
          font-size: 18px;
          color: #4B82C3;
      }  
  

      .btnReceipt{
          display: inline-block;    
          border-radius: 500px;
          width: 40px;
          min-width: 40px !important;        
          height: 40px !important;
          box-shadow: 0px 3px 4px 0px #edebeb;
          border: none;
          font-size: 12px;
          background: #fff;
          color: #AEAEAE;                  
      }

      .listWrap.end .btnReceipt{
        margin: 0 0 0 auto;
      }
  
      .btnReceipt.ing{
          background: #FFF;
          color: #BFCE18;
          border: 1px solid #BFCE18;
      }
  
      .iconReceipt{
          font-size: 18px;
          color: #AEAEAE;
      }    
  
      .iconReceipt.ing{
          color: #BFCE18;
      }   
      .productName{
          font-weight: bold;
          font-size: 0.9em;
      }
      .deliveryStatus{
          margin-left: 5px;
          padding: 3px;
          font-size: 0.65em;
          font-weight: 700;        
          color: #fff;
          background: #B8B8B8;
      }
  
      .deliveryStatus.ing{
          background: #BFCE18;
      }
      
      .deliveryStatus.cancel{
          background: #f5f5f5;
          color: #B7B7B7;
      }
  
      .date{
          margin-left: 5px;
          font-size: 0.75em;
          font-weight: 700;
      }
      .blue{
          font-size: 0.85em;
          font-weight: 800;
          color: #4B82C3;
      }
      .info{
          font-size: 0.85em;
          font-weight: 800;
          color: #1A1818;
      }
  </style>