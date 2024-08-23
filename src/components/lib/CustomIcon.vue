<template>
  <span v-if="isCustomIcon" class="icon" :class="`icon-${icon}`"></span>
  <component v-else :is="icon" class="icon"></component>
</template>

<script setup lang="ts">
const props = defineProps({
    icon: {
      type: [String, Object],
      required: true,
    },
})

const isCustomIcon = typeof props.icon === 'string';
</script>

<style lang="scss" scoped>
.icon {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  width: 1em;
  line-height: 1em;

  &:before {
    content: '\00a0';
  }

  &-en {
    background-image: url(../../assets/flags/us.svg);
  }

  &-es {
    background-image: url(../../assets/flags/es.svg);
  }

  &-mongodb {
    background-image: url(../../assets/brands/mongodb.svg);
  }

  &-mysql {
    background-image: url(../../assets/brands/mysql.svg);
  }

  &-postgres {
    background-image: url(../../assets/brands/postgres.svg);
  }

  &-laravel {
    background-image: url(../../assets/brands/laravel.svg);
  }

  &-tailwind {
    background-image: url(../../assets/brands/tailwind.svg);
  }

  &-bootstrap {
    background-image: url(../../assets/brands/bootstrap.svg);
  }
}
</style>
