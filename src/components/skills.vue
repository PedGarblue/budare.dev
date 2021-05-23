<template>
  <section id="skills">
    <div class="container">
      <h2>
        <font-awesome-icon :icon="['fas', 'code']" />
        {{ $t('skills.title') }}
      </h2>
      <hr />
      <div class="top-skills">
        <h3>{{ $t('skills.top_skills') }}</h3>
        <div class="flex">
          <Skill
            v-for="skill in skills.top"
            :key="skill.id"
            :percentage="skill.percentage"
            :title="skill.title[$i18n.locale]"
            :time="skill.time[$i18n.locale]"
            :desc="skill.desc[$i18n.locale]"
          >
          </Skill>
        </div>
      </div>
      <div class="misc-skills">
        <h3>{{ $t('skills.basic_skills') }}</h3>
        <div
          v-for="skillset in skills.misc"
          :key="skillset.name"
          class="flex skillset"
        >
          <div class="skillset__name">{{ skillset.name }}</div>
          <span
            v-for="skill in skillset.skills"
            class="misc-skill flex"
            :key="skill.title"
          >
            <custom-icon
              v-if="skill.icon"
              :icon="skill.icon"
              class="text-medium"
              :style="skill.style"
            />
            <img
              v-else-if="skill.image"
              :src="skill.image"
              :style="skill.style"
            />
            <span>&nbsp;{{ skill.title }}</span>
          </span>
        </div>
      </div>
      <div class="languages">
        <h3>{{ $t('skills.languages') }}</h3>
        <div class="flex skillset">
          <span
            v-for="language in skills.languages"
            :key="language.title"
            class="flex misc-skill"
          >
            <custom-icon :icon="language.flag" />
            <span>&nbsp;{{ language.title }} - {{ language.level }}&nbsp;</span>
            <a
              v-if="language.certificate"
              :href="language.certificate"
              rel="noreferrer noopener"
            >
              <custom-icon :icon="['fas', 'certificate']" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from './lib/skill.vue';
import CustomIcon from './lib/custom-icon.vue';
import skills from '@/data/skills';

export default {
  name: 'Skills',
  components: {
    Skill,
    CustomIcon,
  },
  data() {
    return {
      skills,
    };
  },
};
</script>

<style scoped>
.top-skills,
.misc-skills,
.languages {
  text-align: center;
  margin-top: 3em;
  margin-bottom: 3em;
  justify-content: center;
}
.misc-skills {
  margin-top: 6em;
}
.skillset {
  justify-content: center;
}
.skillset__name {
  flex-basis: 100%;
  font-weight: lighter;
  color: var(--text-terciary);
}
.misc-skill {
  width: max-content;
  margin: 1em;
  padding: 0.3em 0.8em;
  color: var(--text-secondary);
  background-color: var(--background-terciary);
  box-shadow: 0em 0em 0.2em 0em var(--text-terciary);
  border-radius: 0.3em;
}
</style>
