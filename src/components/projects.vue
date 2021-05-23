<template>
  <section id="projects">
    <div class="container">
      <h2>
        <font-awesome-icon :icon="['fas', 'project-diagram']" />
        {{ $t('projects.title') }}
      </h2>
      <hr />
      <div>
        <div
          v-for="project in projects"
          :key="project.name"
          class="flex project"
        >
          <div class="project-desc">
            <div class="text-medium text-bold">
              <a :href="project.demoUrl" rel="noreferrer noopener">
                {{ project.name }}
              </a>
            </div>
            <div>
              {{ project.desc[$i18n.locale] }}
            </div>
            <div class="project-tags">
              <span
                v-for="tag in project.tags"
                :key="tag.title"
                class="project-tag"
              >
                <img
                  v-if="tag.image"
                  class="project-tag-image"
                  :src="tag.image"
                  :style="tag.style"
                />
                <custom-icon
                  v-if="tag.icon"
                  class="project-tag-icon"
                  :icon="tag.icon"
                  :style="tag.style"
                />
                <span class="project-tag-title">{{ tag.title }}</span>
              </span>
            </div>
          </div>
          <a
            class="project-source text-bold"
            :href="project.source"
            rel="noreferrer noopener"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            <span>
              {{ $t('projects.source') }}
            </span>
          </a>
        </div>
      </div>
      <div class="text-center margin-l-top">
        <a class="button" :href="contact.github" rel="noreferrer noopener">
          {{ $t('projects.seemore') }}
          <span class="text-medium">
            <font-awesome-icon :icon="['fab', 'github']" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import CustomIcon from './lib/custom-icon.vue';
import projects from '@/data/projects';
import contact from '@/data/contact';

export default {
  name: 'Projects',
  components: {
    CustomIcon,
  },
  data() {
    return {
      projects,
      contact,
    };
  },
};
</script>

<style scoped>
.project {
  text-align: left;
  flex-wrap: nowrap;
  margin: 0.8rem 0;
}
.project-tags {
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
}
.project-tag {
  display: flex;
  margin-right: 0.3rem;
  padding: 0 0.3rem;
  border: 0.1rem solid var(--text-terciary);
  border-radius: 0.3rem;
  font-size: 0.8em;
  align-items: center;
  cursor: default;
  transition: all 0.1s ease-in;
}
.project-tag:hover {
  border-color: var(--background-terciary);
}
.project-tag-icon {
  margin-right: 0.2rem;
  font-size: 1.2em;
}
.project-source {
  margin-left: auto;
  color: var(--text-primary);
  padding: 0 0.5rem;
  border: 0.1rem solid var(--text-primary);
  border-radius: 50%;
  box-shadow: 0.01em 0.01em 0.2em var(--text-terciary);
  font-size: 1.3em;
}

.project-source span {
  display: none;
}
@media screen and (min-width: 400px) {
  .project-desc {
    margin: 0;
  }
  .project-source {
    background-color: var(--background-secondary);
    padding: 0.3rem 1rem;
    font-size: 1em;
    border-radius: 0.35rem;
  }
  .project-source span {
    display: inline;
    margin-left: 0.5rem;
  }
}
</style>
