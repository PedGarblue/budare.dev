<template>
  <div class="skill">
    <div class="skill__progress">
      <ProgressCircle :percentage="percentage" />
    </div>
    <div class="skill__title">
      {{ title }}
    </div>
    <div class="skill__time">
      {{ time }}
    </div>
    <div class="skill__desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import ProgressCircle from './lib/ProgressCircle';

export default {
  name: 'Skill',
  components: {
    ProgressCircle,
  },
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      locale,
    };
  },
  computed: {
    percentage() {
      return this.skill.percentage;
    },
    title() {
      return this.skill.title[this.locale];
    },
    time() {
      return this.skill.time[this.locale];
    },
    desc() {
      return this.skill.desc[this.locale];
    },
  },
};
</script>

<style lang="scss" scoped>
.skill {
  @include flex(column);

  text-align: center;
  margin: 0 auto;
  width: 20em;

  &__progress {
    @include flex;

    width: 9em;
    height: 9em;
    margin-bottom: $medium-space;
  }

  &__title {
    font-weight: bold;
  }

  &__time {
    font-size: $small-font-size;
    font-weight: lighter;
    color: $terciary-font-color;
  }

  &__desc {
    font-size: $small-font-size;
    margin-top: $small-space;
  }
}
</style>
