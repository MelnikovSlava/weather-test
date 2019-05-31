<template>
  <section class="add-city">
    <input
      type="text"
      class="add-city-input"
      :disabled="isLoading"
      v-if="isShowInput"
      v-model="message"
      @blur="showInput(false)"
      @keydown.enter="sendMsg"
      ref="input"
    >
    <button v-else class="btn-add-city" @click="showInput(true)">+ Add city</button>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      message: "",
      isShowInput: false,
      isLoading: false,
      error: false
    };
  },

  methods: {
    showInput(isShow) {
      this.isShowInput = isShow;

      if (isShow) {
        setTimeout(() => this.$refs.input.focus(), 0);
      }
    },
    sendMsg(e) {
      const msg = e.target.value;

      if (msg !== "") {
        this.$store
          .dispatch("fetchCityWeather", msg)
          .then(result => {
            this.isShowInput = false;
            this.message = "";
          })
          .catch(error => {
            this.message = "";
            alert("Not found!");
          });
      } else {
        alert("Input city!");
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../../styles/variables.less";

.btn-add-city {
  border: 1px solid gray;
  cursor: pointer;
  opacity: 0.5;
  background-color: @project-color-btn;
  font-family: inherit;

  &:hover {
    opacity: 1;
  }
}

.add-city-input {
  background-color: white;
  border: 1px solid gray;
  padding-left: 10px;

  &:focus {
    border: 1px solid lightseagreen;
  }
}

.btn-add-city,
.add-city-input {
  outline: none;
  border-radius: @project-item-radius;
  width: 100%;
  height: 36px;
}
</style>