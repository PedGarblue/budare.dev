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

<style lang="postcss" scoped>
.progress-circle {
  position: relative; /* so that children can be absolutely positioned */
  margin: auto;
  padding: 0;
  width: 6rem; /* Equivalent to $width */
  height: 6rem; /* Equivalent to $height */
  background-color: hsl(28, 40%, 92%);
  border-radius: 50%;
  font-size: 1.2rem; /* Equivalent to 1.2em */
  line-height: 5rem; /* Equivalent to 5em */
  transition-duration: 0.2s;
  cursor: pointer;

  &:after {
    position: absolute;
    top: 6%; /* Equivalent to $height * 0.06 */
    left: 6%; /* Equivalent to $width * 0.06 */
    display: block;
    width: 88%; /* Equivalent to $width * 0.88 */
    height: 88%; /* Equivalent to $height * 0.88 */
    border: none;
    border-radius: 50%;
    background-color: hsl(0, 0%, 100%);
    text-align: center;
    content: ' ';
    transition-duration: 0.2s;
  }

  &:hover {
    transform: scale(1.05);
    font-size: 1.25rem; /* Equivalent to 1.25em */
  }

  /* Text inside the control */
  &__count {
    @apply flex;
    position: absolute;
    width: 6rem; /* Equivalent to $width */
    height: 6rem; /* Equivalent to $height */
    line-height: 5rem; /* Equivalent to 5em */
    text-align: center;
    color: hsl(185, 19%, 40%);
    z-index: 2;
    transition-duration: 0.2s;
  }

  &__count span {
    margin: auto;
    font-size: 1.2rem; /* Equivalent to 1.2em */
    user-select: none;
  }

  &__clipper {
    /* a round circle */
    position: absolute; /* needed for clipping */
    width: 6rem; /* Equivalent to $width */
    height: 6rem; /* Equivalent to $height */
    border-radius: 50%;
    clip: rect(0, 6rem, 6rem, 3rem); /* clips the whole left half*/
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
      width: 6rem; /* Equivalent to $width */
      height: 6rem; /* Equivalent to $height */
      border-radius: 50%;
      border: 0.45rem solid hsl(226, 64%, 63%); /*The border is 0.35 but making it larger removes visual artifacts */
      clip: rect(0, 3rem, 6rem, 0);
      box-sizing: border-box;
      transition-duration: 0.2s;
    }
  }

  &--over50 &__bar {
    &:first-child {
      /*Progress bar for the first 50%, filling the whole right half*/
      display: block;
      position: absolute; /*needed for clipping*/
      clip: rect(0, 6rem, 6rem, 3rem);
      background-color: hsl(226, 64%, 63%);
      border-radius: 50%;
      width: 6rem; /* Equivalent to $width */
      height: 6rem; /* Equivalent to $height */
      transition-duration: 0.2s;
    }
  }
}
</style>
