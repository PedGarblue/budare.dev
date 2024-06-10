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
import ProgressCircle from './lib/ProgressCircle.vue';

export default {
  name: 'SkillListItemCard',
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

<style lang="postcss" scoped>

.skill {
  @apply flex flex-col;
  text-align: center;
  margin: 0 auto;
  width: 20rem; /* Equivalent to 20em */
}

.skill__progress {
  @apply flex;
  width: 9rem; /* Equivalent to 9em */
  height: 9rem; /* Equivalent to 9em */
  margin-bottom: 0.5rem; /* Equivalent to $medium-space */
}

.skill__title {
  font-weight: bold;
}

.skill__time {
  font-size: 0.85rem; /* Equivalent to $small-font-size */
  font-weight: lighter;
  color: hsl(0, 1%, 54%); /* Equivalent to $terciary-font-color */
}

.skill__desc {
  font-size: 0.85rem; /* Equivalent to $small-font-size */
  margin-top: 0.5rem; /* Equivalent to $small-space */
}
</style>
