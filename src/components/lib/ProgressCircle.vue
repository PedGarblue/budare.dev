<template>
  <div
    class="progress-circle"
    :class="[percentage > 50 ? 'progress-circle--over50' : '']"
  >
    <div class="progress-circle__count">
      <span>{{ percentage }}%</span>
    </div>
    <div class="progress-circle__clipper">
      <div class="progress-circle__bar"></div>
      <div
        class="progress-circle__bar"
        :style="{ transform: `rotate(${rotationDegrees}deg)` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressCircle',
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    rotationDegrees() {
      return 360 * (this.percentage / 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@use 'sass:math';

.progress-circle {
  $width: 6em;
  $height: 6em;

  position: relative; /* so that children can be absolutely positioned */
  margin: auto;
  padding: 0;
  width: $width;
  height: $height;
  background-color: hsl(28, 40%, 92%);
  border-radius: 50%;
  font-size: 1.2em;
  line-height: 5em;
  transition-duration: 0.2s;
  cursor: pointer;

  &:after {
    position: absolute;
    top: $height * 0.06;
    left: $width * 0.06;
    display: block;
    width: $width * 0.88;
    height: $height * 0.88;
    border: none;
    border-radius: 50%;
    background-color: hsl(0, 0%, 100%);
    text-align: center;
    content: ' ';
    transition-duration: 0.2s;
  }

  &:hover {
    transform: scale(1.05);
    font-size: 1.25em;
  }
  /* Text inside the control */
  &__count {
    @include flex;

    position: absolute;
    width: $width;
    height: $height;
    line-height: 5em;
    text-align: center;
    color: hsl(185, 19%, 40%);
    z-index: 2;
    transition-duration: 0.2s;
  }

  &__count span {
    margin: auto;
    font-size: 1.2em;
    user-select: none;
  }

  &__clipper {
    /* a round circle */
    position: absolute; /* needed for clipping */
    width: $width;
    height: $height;
    border-radius: 50%;
    clip: rect(
      0,
      $height,
      $width,
      math.div($width, 2)
    ); /* clips the whole left half*/
    transition-duration: 0.2s;
  }

  /* when percentage > 50, don't clip left half*/
  &--over50 &__clipper {
    clip: rect(auto, auto, auto, auto);
  }

  &__bar {
    &:first-child {
      display: none;
    }

    &:nth-child(2) {
      /*This is an overlayed square, that is made round with the border radius,
       then it is cut to display only the left half, then rotated clockwise
       to escape the outer clipping path.*/
      position: absolute; /*needed for clipping*/
      width: $width;
      height: $height;
      border-radius: 50%;
      border: 0.45em solid hsl(226, 64%, 63%); /*The border is 0.35 but making it larger removes visual artifacts */
      clip: rect(0, math.div($height, 2), $width, 0);
      box-sizing: border-box;
      transition-duration: 0.2s;
    }
  }

  &--over50 &__bar {
    &:first-child {
      /*Progress bar for the first 50%, filling the whole right half*/
      display: block;
      position: absolute; /*needed for clipping*/
      clip: rect(0, $height, $width, math.div($width, 2));
      background-color: hsl(226, 64%, 63%);
      border-radius: 50%;
      width: $width;
      height: $height;
      transition-duration: 0.2s;
    }
  }
}
</style>
