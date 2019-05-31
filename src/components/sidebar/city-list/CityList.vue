<template>
  <div class="city-list-wrapper">
    <ul class="city-list">
      <transition-group class="tr-list" name="list" tag="p">
        <li
          class="city-list-item"
          v-for="city in cityList"
          :key="city.id"
          @click="setActiveCity(city.id)"
        >
          <CityItem
            :city="city"
            :isActive="checkIsActive(city.id)"
            :deleteItem="deleteItem(city.id)"
          />
        </li>
      </transition-group>
    </ul>
    <AddItem/>
  </div>
</template>

<script>
import CityItem from "./city-item/CityItem.vue";
import AddItem from "./add-item/AddItem.vue";
import { mapState } from "vuex";

export default {
  components: {
    CityItem,
    AddItem
  },

  computed: {
    ...mapState({
      cityList: state => state.cityList,
      currentCity: state => state.currentCity
    })
  },

  methods: {
    setActiveCity(id) {
      this.$store.commit("setActiveCity", id);
    },
    checkIsActive(id) {
      return id === this.currentCity;
    },
    deleteItem(id) {
      return () => this.$store.commit("deleteCity", id);
    }
  }
};
</script>

<style scoped lang="less">
.tr-list {
  margin: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.city-list-wrapper {
  padding: 0 10px;
}

.city-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.city-list-item {
  list-style: none;
  width: 100%;
}
</style>