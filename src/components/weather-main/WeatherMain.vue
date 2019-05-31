
<template>
  <main class="weather-main">
    <div v-if="currentCity">
      <img class="img" :src="sourceImg">
      <h3 class="city">{{currentCity.data.name}}</h3>
      <h1 class="temp">{{temp}}</h1>
      <p class="description">{{currentCity.data.weather[0].main}}</p>
      <p class="sub-description">{{currentCity.data.weather[0].description}}</p>
    </div>
    <div v-else>
      <VueLoading type="spin" color="lightgray" :size="{ width: '80px', height: '80px' }"/>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { VueLoading } from "vue-loading-template";

export default {
  components: {
    VueLoading
  },

  computed: {
    temp() {
      return this.currentCity.data.main.temp.toFixed(1) + "°";
    },
    sourceImg() {
      return `http://openweathermap.org/img/w/${
        this.currentCity.data.weather[0].icon
      }.png`;
    },
    ...mapState({
      cityList: state => state.cityList,
      currentCity: state => {
        return state.cityList.find(item => item.id === state.currentCity);
      }
    })
  }
};
</script>

<style scoped lang="less">
@import "../../styles/variables.less";

.weather-main {
  width: 100%;
  height: 100vh;
  background-color: @project-color-main;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background-color: @project-color-main-circle;
    opacity: 0.2;
    box-shadow: 0 0 10px 1px black;
  }
}

.img {
  width: 50px;
  height: 50px;
}

.city {
  font-size: 34px;
}

.temp {
  font-size: 145px;
}

.description {
  font-size: 45px;
}

.sub-description {
  text-transform: capitalize;
}

.city,
.temp,
.description {
  margin: 10px;
}
</style>