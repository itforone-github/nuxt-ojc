<template>
    <div>
        <normal-header :title="'인수증 발급'"></normal-header>
        <v-container class="container">
            <div class="box">
                <p class="title date">일자</p>
                <p class="content date">2023년 01월 11일</p>
            </div>

            <div class="cardBox">
                <div class="cardBoxWrap blank">
                    <p class="title">상호</p>
                    <p class="content">업체명</p>
                </div>
            </div>

            <div class="cardBox">
                <div class="cardBoxWrap blank">
                    <p class="title">납품장소</p>
                    <p class="content">울산광역시 남구 화합로 102번길 3</p>
                </div>
                <div class="cardBoxWrap">
                    <p class="title">담당자</p>
                    <p class="content">김홍돌</p>
                </div>
                <div class="cardBoxWrap">
                    <p class="title">연락처</p>
                    <p class="content">010-0000-0000</p>
                </div>
                <div class="cardBoxWrap">
                    <p class="title">배송물품</p>
                    <p class="content">OJC 18S ECO 인쇄관</p>
                </div>
                <div class="cardBoxWrap">
                    <p class="title">배송수량</p>
                    <p class="content">1,400개</p>
                </div>
            </div>

            <p class="signTitle">인수자 서명</p>
            <div class="signPad">
            </div>
            <v-btn class="btnClear">전체 지우기</v-btn>
            <v-btn class="btnSumbmit">배송 완료</v-btn>
        </v-container>
    </div>
</template>

<script>
import NormalHeader from '../../components/header/normalHeader.vue';

export default {
    components: { NormalHeader },
    name: 'VUECertiSign',

    head(){
        return{
            title : 'ojc - 인수증 발급'
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
};
</script>

<style scoped>
    .container{
        background: #fbfbfb;
        padding-top: 90px;
    }
    .box{
       display: flex;
    }

    .box .title{   
        display: flex;
        width: 50%;
        color: #4B82C3;
        font-weight: bold;
        font-size: 1.2em;
        align-items: center;
        padding-left: 10px;
    }

    .box .content{    
        width: 50%;
        display: flex;
        font-size: 1.2em;
        font-weight: bold;
        letter-spacing: -0.5px;
        color: #1A1818;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px; 
    }

    .cardBox{
        padding: 18px 20px;
        box-shadow: 0px 0px 10px 0px #edebeb;
        margin-top: 20px;
    }
    .cardBoxWrap{
        display: flex;
        margin-top: 20px;
    }

    .cardBoxWrap.blank{
        margin-top: 0px;
    }
    .cardBoxWrap .title{
        color: #6F6F6F;
        width: 50%;
        display: flex;
        align-items: center;
        font-size: 0.8em;
        font-weight: bold;
    }
    .cardBoxWrap .content{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #6F6F6F;
        font-size: 0.8em;
    }

    .signTitle{
        font-size: 0.8em;
        font-weight: 800;
        color: #4B82C3;
        margin: 15px 0;
        padding-left: 6px;
    }

    .signPad{
        width: 100%;
        height: 250px;
        margin-bottom: 10px;
        border: 2px solid #e7e7e7;
    }

    .btnClear{
        background: #fff !important;
        width: 100%;
        color: #000;
        border: 1px solid #cbcbcb;
        font-size: 0.8em;
        letter-spacing: -0.5px;
    }

    .btnSumbmit{
        background: #BFCE18 !important;
        width: 100%;
        color: #fff;
        margin-top: 25px;
        font-size: 0.8em
    }

</style>