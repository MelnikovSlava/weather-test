<template>
  <div class="cld-container">
    <div class="cld-circle"/>
    <div class="cld-main"/>
    <h2 class="title">Weather</h2>
    <h2 class="title-desc">Now</h2>
  </div>
</template>

<script>
export default {
  name: "Cloud"
};
</script>

<style scoped lang="less">
.cld-container {
  width: 200px;
  position: relative;
  margin: 0 auto 15px;
  height: 120px;
  display: flex;
  justify-content: center;
}

.title {
  top: 44px;
  font-size: 17px;
}

.title-desc {
  font-size: 30px;
  top: 52px;
  text-transform: uppercase;
}

.title,
.title-desc {
  position: absolute;
}

.cloud {
  position: absolute;
  left: 0;
  top: 0;
}

.cld-main {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  .border-radius(40px);
  .background-triple(#feffff, 20%, #ddf1f9, 60%, #a0d8ef, 100%);
  .box-shadow(0 10px 10px -15px #333);
}

.box-shadow(@arguments) {
  box-shadow: @arguments;
}

.border-radius(@arguments) {
  border-radius: @arguments;
}
.background-triple(@c1,@p1,@c2,@p2,@c3,@p3) {
  background: @c1;
  background: -moz-linear-gradient(top, @c1 @p1, @c2 @p2, @c3 @p3);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(@p1, @c1),
    color-stop(@p2, @c2),
    color-stop(@p3, @c3)
  );
  background: -webkit-linear-gradient(top, @c1 @p1, @c2 @p2, @c3 @p3);
  background: -o-linear-gradient(top, @c1 @p1, @c2 @p2, @c3 @p3);
  background: -ms-linear-gradient(top, @c1 @p1, @c2 @p2, @c3 @p3);
  background: linear-gradient(to bottom, @c1 @p1, @c2 @p2, @c3 @p3);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='@c1', endColorstr='@c3',GradientType=0 );
}

.cld-circle {
  .cloud(100px, 10px, 50px);

  &::before {
    .cloud(75px, 0px, 55px);
  }

  &::after {
    .cloud(50px, 20px, -30px);
  }
}

.cloud(@width, @bottom, @left) {
  position: absolute;
  content: "";
  background: #fff;

  width: @width;
  height: @width;

  .border-radius(@width);
  bottom: @bottom;
  left: @left;
}
</style>