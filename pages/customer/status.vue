<template>
    <div data-app>
        <status-header></status-header>
        <kakao-map></kakao-map>

        <div class="btnSheet" @click="sheet = !sheet">
            <v-icon class="btnUp">mdi-arrow-up</v-icon>
        </div>
        <div id="mapnoti">
            <p class="elip"><strong>[차량지연안내]</strong> 최대한 빠르게 배송할 수 있도록 하겠습니다.</p>
        </div>
        <v-bottom-sheet v-model="sheet">
            <div class="bottomSheet">
                <v-sheet>
                    <div class="btnCloseWrap">
                        <v-btn class="btnClose" text @click="sheet = !sheet">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </div>
                    
                    <div class="line"></div>                    
                    <div class="box">
                        <p class="title date">일자</p>
                        <p class="content date">2023년 01월 11일</p>
                    </div>
                    <div class="line"></div>

                    <div class="list">						
                        <div class="comments">
                        <p class="pin1"><span>현재 위치 (23.01.12 10:38)</span><br>울산 남구 신정도 391</p>
                        <p class="pin2"><span>배송 위치</span><br>울산광역시 남구 화합로102번길 3</p>
                        </div>
                    </div>

                    <div class="line"></div>
                    <div class="box">
                        <p class="title">배송 물품</p>
                        <p class="content">물품명</p>
                    </div>
                    <div class="box">
                        <p class="title">배송 수량</p>
                        <p class="content">0개</p>
                    </div>
                    <div class="box">
                        <p class="title">배송 담당자</p>
                        <p class="content">
                            김철수(010-0000-0000)
                            <span class="btnCallWrap">
                                <v-icon class="btnCall">mdi-phone</v-icon>
                            </span>
                        </p>
                    </div>
                    <div class="line"></div>
                </v-sheet>
            </div>
        </v-bottom-sheet>        
    </div>
</template>

<script>
import statusHeader from '@/components/header/statusHeader.vue';
import KakaoMap from '@/components/customer/KakaoMap.vue';

export default {
  components: { statusHeader, KakaoMap },
    name: 'VUEStatus',

    data() {
        return {
            sheet: false,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>    
    .btnSheet{
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: 100;
        opacity: 0.8;
        background: #4B82C3;
        text-align: center;        
        padding: 5px;
    }

    .btnUp{
        color: #fff !important;
    }

    .bottomSheet{

    }

    .btnCloseWrap{
        width: 100%;
        height: 25px;
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .btnClose{
        
    }

    .line{
        width: 90%;
        height: 1px;
        background: #eee;        
        margin: 20px auto 0 auto;
    }

    .box{
        display: flex;
        margin-top: 20px;
        padding: 0 20px;
    }

    .box .title{
        display: flex;
        width: 20%;
        color: #4B82C3;
        font-weight: bold;
        font-size: 0.8em;
        align-items: center; 
    }

    .box .title.date{        
        width: 50%;
        font-size: 1.2em;
    }

    .box .content{        
        width: 80%;
        display: flex;
        font-size: 0.8em;
        color: #1A1818;
        align-items: center;
        justify-content: flex-end;
    }

    .box .content.date{   
        width: 50%;
        font-size: 1.2em;
        font-weight: bold;
        letter-spacing: -0.5px;
    }

    .list{
        min-height: 0px;
        margin: 20px 20px 0 20px;
    }

    #mapnoti {    position: absolute;    z-index: 50;    width: calc( 100% - 40px );    height: 50px;    bottom: 45px;    left: 50%;    padding: 10px 20px;    box-shadow: 0px 0px 10px 0px #edebeb;    background: #C30003; border: #ff0000 2px solid;    transform: translateX(-50%);     display: flex;
    justify-content: center; align-items: center;}
    #mapnoti p {color:#fff; font-size: 0.8em;}
    #mapnoti::before {    background:url(@/assets/images/mapnoti.svg) no-repeat 0px 0px;    content: "";    display: inline-block;   height: 25px;    width: 27px;
        top: -15px;    position: absolute;    background-size: cover;    left: 10px;}

    .comments { margin: 10px auto 10px 10px; padding: 0 10px 0 20px; border-left: 1px dotted #ccc}
    .comments p {  line-height: 1.5;  padding: 10px;  position: relative;font-weight: 800; }
    .comments p span {  font-size: 0.8em;color:#4B82C3;font-weight: 500; }
    .comments p:before {  content: "";  display: block;  width: 19px;  height: 19px;  border-radius: 50%;  background-color: #4B82C3;  border: 3px solid #e0f7fa;
    position: absolute;  top: 15px;  left: -30px}
    .comments p.pin2:before { width: 15px;  height: 15px;  left: -28.5px;  top: 20px; background-color: #ffffff;  border: 2px solid #6E6E6E }

    .elip {  width: 100%;  white-space: nowrap;  overflow: hidden;  text-overflow: ellipsis;  /* 말줄임 적용 */}
    .btnCallWrap{
        background: #4B82C3;
        border-radius: 50px;        
        width: 36px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
    }

    .btnCall{
        color: #fff;
        font-size: 14px;
    }
</style>