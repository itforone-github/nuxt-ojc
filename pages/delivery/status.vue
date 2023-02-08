<template>
    <div>
        <main-header :title="'배송현황'"></main-header>
        <div class="headerWrap">
            <p class="date">23.01.11(수)</p>
            <p class="title">업체명</p>
        </div>
        <v-container>
            <div class="now">
                <h5>배송 정보</h5>
                <div class="list">
                <div class="txt">
                    <p class="txt1">업체명</p>
                    <p class="txt2">울산광역시 남구 화합로102번길 3</p>
                </div>
                </div>
                <div class="list">
                <table class="" border="0" width="100%">
                        <colgroup>
                            <col width="100px">			  
                            <col width="*">			  
                        </colgroup>
                        <thead>
                        <tr>
                            <th class="">인수 담당자</th>
                            <td class="">
                                김홍돌(010-0000-0000)
                                <a href="tel:000000000">
                                    <span class="btnCallWrap">
                                        <v-icon class="btnCall">mdi-phone</v-icon>
                                    </span>
                                </a>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th class="">배송 물품</th>
                            <td class="">OJC 18S ECO 인쇄관</td>
                        </tr>
                        <tr>
                            <th class="">배송 수량</th>
                            <td class="">1,440개</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="list">
                <h6>긴급 상황 설정</h6>
                    <v-select
                        :items="emergItems"                        
                        dense
                        outlined
                    ></v-select>
                <h6>배송 예정 시간</h6>
                    <v-select
                        :items="timeItems"                        
                        dense
                        outlined
                    ></v-select>
                </div>
            </div>         
        </v-container>
        <div class="fixed">
            <p class="noti">배송 예정 시간 설정시 알림톡이 발송됩니다.</p>
            <button type="button" class="btn-submit">저장하기</button>
        </div>
    </div>
</template>

<script>
import MainHeader from '@/components/header/MainHeader.vue';

export default {
  components: { MainHeader },
    data() {
        return {            
            emergItems: [
                '긴급 상황을 선택하세요',
                '출고 지연',
                '배송 지연',
                '차량 지연'
            ],
            timeItems: [
                '00:00 ~ 02:00',
                '02:00 ~ 04:00',
                '04:00 ~ 06:00',
                '06:00 ~ 08:00',
                '08:00 ~ 10:00',
                '10:00 ~ 12:00',
                '12:00 ~ 14:00',
                '14:00 ~ 16:00',
                '16:00 ~ 18:00',
                '18:00 ~ 20:00',
                '20:00 ~ 22:00',
                '22:00 ~ 24:00'
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
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

    .headerWrap .date{
        font-size: 0.75em;
        font-weight: 700;
        padding: 3px;
        color: #fff;
        background: #BFCE18;
        text-align: center;
        width: 70px;
        margin: 0 auto 5px auto;
    }    

    .list {padding: 10px 0; border-bottom: 1px solid #ececec; min-height: 72px;    justify-content: space-between;}
    .list table tr {height: 25px;}
    .list table th {color:#4B82C3; font-size: 0.8em;  text-align: left;}
    .list table td {color:#1A1818; font-size: 0.8em; }
    a{
        display: inline-block;
    }
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

    .now{
        margin-top: 15px;
    }
    .now h5 {    font-size: 1.0em;    font-weight: 800;    color: #4B82C3;border-bottom: 1px solid #ececec; padding-bottom: 10px}
    p.txt1 {    font-size: 0.9em;    font-weight: 800;    color: #1A1818;}
    p.txt2 { font-size: 0.75em; font-weight: 800; color: #1A1818; margin-top: 10px;}
    p.txt2 span.blue{   color: #4B82C3;}

    .list h6 {    font-size: 0.8em;    font-weight: 800;    color: #4B82C3;padding-bottom: 10px}    

    .fixed { width: 100%; padding: 20px}
    p.noti {
        font-size: 0.7em;
        color: #6F6F6F;
        text-align: center;
        padding-bottom: 10px;
    }    
    .btn-submit {
        background: #BFCE18;
        color: #fff;
        text-align: center;
        padding: 10px;
        width: 100%;
        border: none;
        border-radius: 0;
    }
</style>