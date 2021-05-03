<template>
  <font-awesome-icon v-if="hasFontAwesomeArray" :icon="icon" />
  <span v-else class="icon" :class="`icon-${icon}`"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String, Array],
      required: true,
    },
  },
  computed: {
    hasFontAwesomeArray() {
      return this.icon instanceof Array;
    },
  },
};
</script>

<style scoped>
.icon-background {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
.icon {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  width: 1em;
  line-height: 1em;
}
.icon:before {
  content: '\00a0';
}
.icon-en {
  background-image: url(../../assets/flags/us.svg);
}
.icon-es {
  background-image: url(../../assets/flags/es.svg);
}
.icon-mongodb {
  background-image: url(../../assets/brands/mongodb.svg);
}
.icon-mysql {
  background-image: url(../../assets/brands/mysql.svg);
}
</style>
