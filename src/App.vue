<template>
  <div id="app">
    <HeaderApp v-if="base !== 'login'"/>
    <MainApp />
    <FooterApp v-if="base !== 'login'"/>
  </div>
</template>

<script>
import MainApp from './components/MainApp.vue'
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
import { ref } from 'vue';
import router from './router';

export default {
  name: 'App',
  components: {
    MainApp,
    HeaderApp,
    FooterApp
  },
  data() {

    router.afterEach(() => {
      this.detectRoute()
    });

    return  {
      base : ref(null)
    }
  },
  methods: {
    detectRoute: function() {
      let baseAux = document?.location.href?.split('/');
      this.base = baseAux[baseAux?.length - 1];
    }
  },
  mounted: function(){
    this.detectRoute()
  }
}
</script>

<style>

  @import './assets/styles.css';

*{
  box-sizing: border-box;
  /* box-shadow: 1px 1px 1px red, -1px -1px 1px green; */
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#app span,
#app p {
  color: #2c3e50;
}
</style>
