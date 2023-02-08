<template>  
    <div>        
        <div class="backWrap" @click="goBack()">
            <v-icon class="btnBack">mdi-arrow-left</v-icon>
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
    .backWrap{
        position: absolute;
        top: 10px;
        left: 10px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #eee;
        z-index: 100;
        padding: 5px;
    }

    .btnBack{
        color: #4B82C3 !important;
    }
</style>