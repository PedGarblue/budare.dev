<template>
  <div class="skillsList">
    <h3 v-if="title">{{ title }}</h3>
    <div v-for="skillset in items" :key="skillset.id" class="skillset">
      <div class="skillset__name">{{ skillset.name }}</div>
      <div class="skillset__items">
        <component
          :is="actualCardType"
          v-for="skill in skillset.skills"
          :key="skill.title"
          :skill="skill"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkillsListItemBasic from './SkillsListItemBasic.vue';
import SkillsListItemCard from './SkillsListItemCard.vue';

const CARD_ITEM = 'card';
const BASIC_ITEM = 'basic';

export default {
  name: 'SkillsList',
  components: {
    SkillsListItemBasic,
    SkillsListItemCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
    itemType: {
      type: String,
      validate(value) {
        return [CARD_ITEM, BASIC_ITEM].includes(value);
      },
      default() {
        return BASIC_ITEM;
      },
    },
  },
  computed: {
    actualCardType() {
      return `skills-list-item-${this.itemType}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.skillsList {
  text-align: center;
  justify-content: center;
}

.skillset {
  @apply flex items-center justify-center flex-col;
}
.skillset__name {
  flex-basis: 100%;
  font-weight: lighter;
}
.skillset__items {
  @apply flex items-center justify-center flex-row;
}
.skillset__name {
  @apply text-gray-400 md:text-gray-200;
}
</style>
