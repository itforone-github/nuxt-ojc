<template>
    <div class="atuhWrap">
        <img class="logo" src="../assets/images/logo_w.svg">
        <img class="logoCopy" src="../assets/images/logo_copy_w.svg">

        <p class="title">운송 관리 시스템</p>

        <!-- class="tabWrap"  -->
        <v-tabs    
            id="tabWrap"
            grow 
            background-color="#ffffff4f"            
            active-class="activeTab"
            v-model="activeTab"            
        >
            <v-tab>배송기사</v-tab>
            <v-tab>고객사</v-tab>
        </v-tabs>
        
        <v-tabs-items id="tabItemsWrap" v-model="activeTab">
            <v-tab-item clsas="tabItem">
                <v-form
                    ref="form"
                    style="width: 100%;"
                    v-model="valid1"
                    @submit.prevent="onSubmitDelivery"
                >
                    <v-text-field
                    v-model="code"
                    class="textBox"
                    placeholder="고유코드"
                    type="text"   
                    background-color="#fff"
                    outlined
                    required
                    />
                    <v-text-field
                    v-model="phoneNumber"
                    class="textBox"
                    placeholder="핸드폰 번호"
                    type="number"          
                    background-color="#fff"    
                    outlined
                    required
                    />                    
                </v-form>
                <v-btn class="btnSubmit">
                    <nuxt-link to="/delivery/main" class="link">조회</nuxt-link>
                </v-btn>
            </v-tab-item>

            <v-tab-item>
                <v-form
                    ref="form"
                    style="width: 100%;"
                    v-model="valid1"
                    @submit.prevent="onSubmitDelivery"
                >
                    <v-text-field
                    v-model="loginId"
                    class="textBox"
                    placeholder="ID"
                    type="text"   
                    background-color="#fff"
                    outlined
                    required
                    />
                    <v-text-field
                    v-model="loginPwd"
                    class="textBox"
                    placeholder="●●●●"
                    type="password"          
                    background-color="#fff"    
                    outlined
                    required
                    />
                </v-form>
                <v-btn class="btnSubmit">
                    <nuxt-link to="/customer/main" class="link">로그인</nuxt-link>
                </v-btn>
                <nuxt-link to="/signup" class="btnJoin">
                    아직 회원이 아니신가요?
                </nuxt-link>
            </v-tab-item>
        </v-tabs-items>        
    </div>
</template>

<script>
export default {
    data(){
        return{
            valid1: false,
            code : '',
            phoneNumber : '',
            loginId: '',
            loginPwd: '',
            activeTab: 0
        }
    },
    head(){
        return{
            title : 'ojc - 로그인'
        }
    },
    methods:{
        async onSubmitDelivery(){

        }
    }
}
</script>

<style scoped>
.atuhWrap{
    width: 100%;
    height: 100vh;
    padding: 0 30px;
    overflow-y: hidden;
    overflow-x: hidden;    
    background: url(../assets/images/bg.png) center center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.logo{
    margin-bottom: 25px;
}
.logoCopy{
    width: 150px;
    margin-bottom: 15px;
}

#tabWrap{
    flex: unset;
    margin-bottom: 50px;    
}

.activeTab{
    background: #ffffff4f;
    color: #fff;
    font-weight: bold;
}

#tabItemsWrap{
    width: 100%;
    background: unset;
}

.tabItem{
    width: 100%;
    background: unset;
    margin-top: 20px;
}

.title{
    color: #fff;
    font-weight: bold;
    margin-bottom: 40px;
}

.textBox{
    width: 100%;
    height: 65px;
}

.btnSubmit{
    background: #BFCE18 !important;
    width: 100%;
    color: #fff;
    border-radius: 0px;
    border: 0px;
    font-size: 1.15em;
    font-weight: bold;
    margin: 5px 0;
    height: 50px !important;
}

.link{
    text-decoration: none;
    color: #fff;   
}
.btnJoin{
    text-align: center;
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: #fff;
    text-decoration: blink;
}
 
</style>