<template>
    <div>
        <normal-header :title="'인수증 확인'"></normal-header>
        
        <v-container class="body">
         <v-container class="certifiWrap">
            <div class="box">
                <p class="title date">일자</p>
                <p class="content date">2023년 01월 11일</p>
            </div>

            <div class="box">
                <p class="title">상호</p>
                <p class="content">업체명</p>
            </div>

            <div class="line"></div>

            <div class="box">
                <p class="title">남풉장소</p>
                <p class="content">울산광역시 남구 화합로 102번길 3</p>
            </div>

            <div class="box">
                <p class="title">담당자</p>
                <p class="content">홍길동</p>
            </div>

            <div class="box">
                <p class="title">연락처</p>
                <p class="content">010-0000-000</p>
            </div>

            <div class="box">
                <p class="title">배송물품</p>
                <p class="content">OJC 18S ECO 인쇄관</p>
            </div>

            <div class="box">
                <p class="title">배송 수량</p>
                <p class="content">1,440개</p>
            </div>

            <div class="line"></div>

            <div class="box">
                <p class="title">인수자서명</p>
                <p class="content"></p>
            </div>
            <div class="box">
                <img class="signImg" :src="require('@/assets/images/sign.png')"/>
            </div>
            
            <template v-if="$route.query.type == 'customer'">
                <div class="box">
                    <p class="title">배송 담당자</p>
                    <p class="content">김철수(010-0000-0000)</p>
                </div>
                <div class="box">
                    <p class="title">배송 완료일시</p>
                    <p class="content">23.01.12 09:03:54</p>
                </div>
            </template>
         </v-container>
      </v-container>
    </div>
</template>

<script>
import NormalHeader from '../components/header/normalHeader.vue';

export default {
    components: { NormalHeader },
    props: {
      type: {
        type : String,
        required: true,
      },
    },
    head(){
        return{
            title : 'ojc - 영수증 확인'
        }
    },
    data() {
        return {
            
        };
    },
};
</script>

<style scoped>
    .body{
        background: #f5f5f5;        
        padding-top: 85px;
    }    
    
    .certifiWrap{
        position: relative;
        background : #fff !important;
    }
    .certifiWrap::before{
        background: url(../assets/images/donebg.svg) no-repeat 0px 0px;
        content: "";
        display: inline-block;
        height: 8px;
        width: calc( 100% - 1px);
        top: -8px;
        position: absolute;
        background-size: cover;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .box{
        display: flex;
        margin-top: 20px;
    }

    .line{
        width: 100%;
        height: 1px;
        background: #eee;
        margin-top: 20px;
    }

    .box .title{
        display: flex;
        width: 50%;
        color: #4B82C3;
        font-weight: bold;
        font-size: 0.8em;
        align-items: center; 
    }

    .box .title.date{        
        font-size: 1.2em;
    }

    .box .content{        
        width: 50%;
        display: flex;
        font-size: 0.8em;
        color: #1A1818;
        align-items: center;
        justify-content: flex-end;
    }

    .box .content.date{   
        font-size: 1.2em;
        font-weight: bold;
        letter-spacing: -0.5px;
    }

    .signImg{
        width: 100%;
    }

</style>