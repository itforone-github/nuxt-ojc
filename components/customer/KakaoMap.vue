<template>
    <div>
      <div id="map"></div>      
    </div>
  </template>
  
  <script>
  export default {
    name: "KakaoMap",
    data() {
      return {  
              
      };
    },
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap();
      } else {
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8896f5151c8f582627de4389e589ca8b";
        document.head.appendChild(script);
      }
    },
    methods: {
      initMap() {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 5,
        };
  
        this.map = new kakao.maps.Map(container, options);
      }      
    },
  };
  </script>
    
  <style scoped>
  #map {
    width: 100%;
    height: 100vh;
  }
  </style>
  