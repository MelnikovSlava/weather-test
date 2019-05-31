<template>
  <div id="app">
    <Sidebar/>
    <WeatherMain/>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import WeatherMain from "./components/weather-main/WeatherMain.vue";
import { getPosition } from "./utils/helpers";

export default {
  components: {
    Sidebar,
    WeatherMain
  },

  mounted: function() {
    // get current city (default)
    getPosition
      .then(result => {
        this.$store.dispatch("fetchCityWeather", {
          lat: result.latitude,
          lon: result.longitude
        });
      })
      .catch(error => {
        this.$store.dispatch("fetchCityWeather", "Moscow");
        console.error(error);
      });
  }
};
</script>

<style lang="less">
@import "./styles/index.less";

#app {
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>