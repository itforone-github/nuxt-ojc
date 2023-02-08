<template>  
    <div>
        <div id="header">
            <div class="backWrap"  @click="goBack()">
                <v-icon large>mdi-arrow-left</v-icon>
            </div>
            <div class="logo">
                <img class="logoCopy" src="../../assets/images/logo_b.svg">
            </div>
            <div class="title">
                <span class="blue">고객사 </span>
                <span class="black"> 회원가입</span>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){    
            window.history.go(-1);
        }
    }
}
</script>

<style scoped>
    #header{
        display: flex;
        height: 40px;
        position: fixed;
        width: 93%;
        z-index: 1;
    }

    .backWrap{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }

    .logo{
        width: 70px;
    }

    .logoCopy{
        width: 100%;
        height: 100%;
    }

    .title{
        width: calc(100% - 70px);    
        text-align: right;
        line-height: 37px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .title .blue{
        color: #4B82C3;
        font-weight: bold;
        font-size: 1.1em;
        padding-right: 8px;
    }

    .title .black{
        color: black;
        font-weight: bold;
        font-size: 1.1em;
    }
</style>