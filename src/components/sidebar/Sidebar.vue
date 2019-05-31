<template>
  <div class="sidebar">
    <Cloud/>
    <p>List of cities:</p>
    <CityList/>
  </div>
</template>

<script>
import CityList from "./city-list/CityList.vue";
import Cloud from "./cloud/Cloud.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Sidebar",

  components: {
    CityList,
    Cloud
  }
};
</script>

<style scoped lang="less">
@import "../../styles/variables.less";

.sidebar {
  width: 400px;
  height: 100vh;
  background-color: @project-color-sidebar;
}
</style>