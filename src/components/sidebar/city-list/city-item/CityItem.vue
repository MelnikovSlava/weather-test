<template>
  <div :class="[{'city-item-active': isActive},'city-item']">
    <p class="city-name">{{city.data.name}}</p>
    <p class="close" @click.stop="deleteItem">&#10006;</p>
  </div>
</template>

<script>
export default {
  props: {
    city: Object,
    isActive: Boolean,
    deleteItem: Function
  }
};
</script>

<style scoped lang="less">
@import "../../../../styles/variables.less";

.city-item {
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: @project-color-item;
  padding-left: 10px;
  margin-bottom: 5px;
  border-radius: @project-item-radius;

  &:hover {
    background-color: darken(@project-color-item, 5);
  }
}

.city-name {
  margin: 0;
}

.close {
  margin-right: 10px;
  opacity: 0.2;

  &:hover {
    opacity: 1;
    color: red;
  }
}

.city-item-active {
  background-color: darken(@project-color-item, 14);
}
</style>