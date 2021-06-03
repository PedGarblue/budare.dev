<template>
  <div class="progress-circle" :class="[percentage > 50 ? 'over50' : '']">
    <div class="progress-count">
      <span>{{ percentage }}%</span>
    </div>
    <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div
        class="value-bar"
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

<style scoped>
.progress-circle {
  --width: 6em;
  --height: 6em;
  font-size: 1.2em;
  margin: auto;
  position: relative; /* so that children can be absolutely positioned */
  padding: 0;
  width: var(--width);
  height: var(--height);
  background-color: hsl(28, 40%, 92%);
  border-radius: 50%;
  line-height: 5em;
  transition-duration: 0.2s;
  cursor: pointer;
}

.progress-circle:after {
  border: none;
  position: absolute;
  top: calc(var(--height) * 0.06);
  left: calc(var(--width) * 0.06);
  text-align: center;
  display: block;
  border-radius: 50%;
  width: calc(var(--width) * 0.88);
  height: calc(var(--height) * 0.88);
  background-color: hsl(0, 0%, 100%);
  content: ' ';
  transition-duration: 0.2s;
}
.progress-circle:hover {
  --width: 6.5em;
  --height: 6.5em;
  font-size: 1.25em;
}
/* Text inside the control */
.progress-count {
  position: absolute;
  line-height: 5em;
  width: var(--width);
  height: var(--height);
  text-align: center;
  display: flex;
  align-items: center;
  color: hsl(185, 19%, 40%);
  z-index: 2;
  transition-duration: 0.2s;
}

.progress-count span {
  margin: auto;
  font-size: 1.2em;
  user-select: none;
}

.left-half-clipper {
  /* a round circle */
  border-radius: 50%;
  width: var(--width);
  height: var(--height);
  position: absolute; /* needed for clipping */
  clip: rect(
    0,
    var(--height),
    var(--width),
    calc(var(--width) / 2)
  ); /* clips the whole left half*/
  transition-duration: 0.2s;
}
/* when p>50, don't clip left half*/
.progress-circle.over50 .left-half-clipper {
  clip: rect(auto, auto, auto, auto);
}
.value-bar {
  /*This is an overlayed square, that is made round with the border radius,
   then it is cut to display only the left half, then rotated clockwise
   to escape the outer clipping path.*/
  position: absolute; /*needed for clipping*/
  clip: rect(0, calc(var(--height) / 2), var(--width), 0);
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  border: 0.45em solid hsl(226, 64%, 63%); /*The border is 0.35 but making it larger removes visual artifacts */
  /*background-color: #4D642D;*/ /* for debug */
  box-sizing: border-box;
  transition-duration: 0.2s;
}
/* Progress bar filling the whole right half for values above 50% */
.progress-circle.over50 .first50-bar {
  /*Progress bar for the first 50%, filling the whole right half*/
  position: absolute; /*needed for clipping*/
  clip: rect(0, var(--height), var(--width), calc(var(--width) / 2));
  background-color: hsl(226, 64%, 63%);
  border-radius: 50%;
  width: var(--width);
  height: var(--height);
  transition-duration: 0.2s;
}
.progress-circle:not(.over50) .first50-bar {
  display: none;
}
</style>
