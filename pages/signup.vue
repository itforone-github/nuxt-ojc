<template>    
    <v-container data-app>
        <join-header></join-header>        
        <v-form
            ref="form"
            id="formWrap"
            v-model="valid"
            @submit.prevent="onSubmitDelivery"
        >            
        <v-text-field
                v-model="id"
                class="box"
                placeholder="아이디"
                label="아이디"
                type="text"          
                background-color="#f5f5f5"   
                outlined
                required        
                hide-details        
            />
            <v-text-field
                v-model="password"
                class="box"
                placeholder="비밀번호"
                label="비밀번호"
                type="password"          
                background-color="#f5f5f5"   
                outlined
                required                
            />
            <v-text-field
                v-model="passwordCheck"
                class="box"
                placeholder="비밀번호 확인"
                label="비밀번호 확인"
                type="password"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <v-text-field
                v-model="companyName"
                class="box"
                placeholder="회사명"
                label="회사명"
                type="text"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <v-text-field
                v-model="companyTel"
                class="box"
                placeholder="대표번호"
                label="대표번호"
                type="number"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <v-text-field
                v-model="companyNumber"
                class="box"
                placeholder="사업자등록번호"
                label="사업자등록번호"
                type="number"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <v-text-field
                v-model="email"
                class="box"
                placeholder="이메일"
                label="이메일"
                type="email"    
                background-color="#f5f5f5"   
                outlined
                required         
            />            
            <div class="box">
                <v-text-field
                    v-model="address"
                    class="box addr"
                    placeholder="기본주소"
                    label="기본주소"
                    type="text"    
                    background-color="#f5f5f5"   
                    outlined
                    required
                    readonly
                />
                <v-btn class="btnAddr">우편번호</v-btn>          
            </div>  
            <v-text-field
                v-model="addressDetail"
                class="box"
                placeholder="상세주소"
                label="상세주소"
                type="text"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <v-text-field
                v-model="name"
                class="box"
                placeholder="담당자 성함"
                label="담당자 성함"
                type="text"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <v-text-field
                v-model="tel"
                class="box"
                placeholder="담당자 전화번호"
                label="담당자 전화번호"
                type="text"    
                background-color="#f5f5f5"   
                outlined
                required         
            />
            <div class="box centerBox">
                <div class="agreeBox">
                    <span class="left">이용약관</span>
                    <span class="right" @click="openDialog(1)">전문보기</span>
                </div>
                <v-checkbox
                    v-model="agree1"
                    color="#BFCE18"
                    class="checkBox"
                    value="1"
                ></v-checkbox>
            </div>
            <div class="box centerBox">
                <div class="agreeBox">
                    <span class="left">개인정보처리방침</span>
                    <span class="right" @click="openDialog(2)">전문보기</span>
                </div>
                <v-checkbox
                    v-model="agree2"
                    color="#BFCE18"
                    class="checkBox"
                    value="1"
                ></v-checkbox>
            </div>
            <v-btn class="box btnSubmit">완료하기</v-btn>
        </v-form>        
        <terms-conditions 
            :dialog="dialog1"
            :closeDialog="closeDialog">
        </terms-conditions>

        <privacy-policy
            :dialog="dialog2"
            :closeDialog="closeDialog">
        >
        </privacy-policy>
    </v-container>
</template>



<script>
import joinHeader from '../components/header/JoinHeader.vue';
import TermsConditions from '../components/dialog/TermsConditions.vue';
import PrivacyPolicy from '../components/dialog/PrivacyPolicy.vue';

export default {
    head(){
        return{
            title : 'ojc - 회원가입'
        }
    },
    data(){
        return{
            valid: false,
            id : '',
            password : '',
            passwordCheck : '',
            companyName : '',
            companyTel : '',
            companyNumber : '',
            email : '',
            address : '',
            addressDetail : '',
            name : '',
            tel : '',
            dialog1 : false,
            dialog2 : false,
            agree1 : '',
            agree2 : ''
        }
    },
    methods:{
        openDialog(mode){
            if(mode == 1){
                this.dialog1 = true;
            }else{
                this.dialog2 = true;
            }
        },
        closeDialog(mode){            
            if(mode == 1){
                this.dialog1 = false;
                this.agree1 = '1';
            }else{
                this.dialog2 = false;
                this.agree2 = '1';
            }
        }
    },
    components: { joinHeader, TermsConditions, PrivacyPolicy },
}

</script>

<style scoped>
    #formWrap{
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .box{
        width: 90%;        
        height: 68px;
    }    

    .centerBox{
        display: flex;
        align-items: center;
        margin-bottom: 16px;
    }
    
    .addr{
        width: calc(100% - 105px);
        display: inline-block;
        margin-right: 10px;
    }

    .btnAddr{
        color: #fff;
        background: #BFCE18 !important;
        height: 55px !important;
        width: 90px;
        font-size: 1.1em;
        letter-spacing: -0.5px;
        margin-top: -4px;
    }    

    .agreeBox{
        width: calc(100% - 50px);
        height: 100%;
        line-height: 66px;
        background-color: #f5f5f5;
        display: inline-block;
    }
    .agreeBox .left{
        float: left;
        padding-left: 15px;
    }
    .agreeBox .right{
        float: right;
        padding-right: 15px;
        color: gray;
        font-size: 13px;
    }

    .checkBox{
        display: inline-block;        
        margin-left: 18px;
    }

    .btnSubmit{
        color: #fff;
        background: #BFCE18 !important;
        height: 55px !important;                
        font-size: 1.1em;
        letter-spacing: -0.5px;
        margin-top: -4px;
    }
</style>