<template>
  <div class="skill flex-column">
    <div class="progress">
      <ProgressCircle :percentage="percentage" />
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="time">
      {{ time }}
    </div>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
import ProgressCircle from './progress-circle';

export default {
  name: 'Skill',
  components: {
    ProgressCircle,
  },
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.skill {
  text-align: center;
  margin: 0 auto;
  width: 20em;
}
.progress {
  width: 9em;
  height: 9em;
}
.title {
  font-weight: bold;
}
.time {
  font-size: 0.85em;
  font-weight: lighter;
  color: #8a8888;
}
.desc {
  font-size: 0.87em;
  margin-top: 0.5rem;
}
</style>
