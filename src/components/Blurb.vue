<template>
  <section id="blurb">
    <div class="container">
      <div class="flex">
        <div class="photo">
          <img :src="aboutme.picture" />
        </div>
        <div class="desc">
          <div class="text-big text-bold">{{ aboutme.name }}</div>
          <div class="workname">{{ t('workname') }}</div>
          <div class="social">
            <a
              class="contact-icon"
              :href="contact.github"
              rel="noreferrer noopener"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              class="contact-icon"
              :href="contact.linkedin"
              rel="noreferrer noopener"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a
              class="contact-icon"
              :href="contact.telegram"
              rel="noreferrer noopener"
            >
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </a>
          </div>
        </div>
        <div class="flex contact-me-button">
          <a
            class="contact-link flex padding-m-right padding-m-left text-medium"
            :href="contact.telegram"
            rel="noreferrer noopener"
          >
            {{ t('contact_me') }}&nbsp;&nbsp;
            <font-awesome-icon :icon="['fab', 'telegram']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';

export default {
  name: 'Blurb',
  setup() {
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      t,
      contact,
      aboutme,
    };
  },
};
</script>

<style scoped>
#blurb {
  background-color: var(--background-primary);
  background-image: url(https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?crop=entropy&cs=srgb&dl=pexels-markus-spiske-965345.jpg&fit=crop&fm=jpg&h=835&w=1280);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 1rem;
}
.container {
  background-color: var(--background-primary);
  padding-top: 3rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
  border: 0.2rem solid var(--background-terciary);
  border-radius: 0.3rem;
}
.photo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
img {
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
}
.contact-link {
  color: var(--text-primary);
}
.desc {
  text-align: center;
  padding: 0 1rem;
  color: var(--text-primary);
  height: 7rem;
  margin: auto;
}
.workname {
  font-size: 0.87rem;
}
.social {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.contact-me-button {
  display: none;
}

@media screen and (min-width: 800px) {
  .container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    box-shadow: 0.1em 0.1em 0.3em var(--text-terciary);
  }
  .photo {
    margin: unset;
  }
  .desc {
    margin: unset;
    text-align: left;
  }
  .social {
    margin-top: 0;
  }
  .contact-me-button {
    display: flex;
    margin-left: auto;
    background-color: var(--background-secondary);
    border: 0.15rem solid;
    border-radius: 0.35rem;
    color: var(--text-primary);
  }
}
</style>

<i18n>
{
  "en": {
    "workname": "Web Application Developer",
    "contact_me": "Contact me"
  },
  "es": {
    "workname": "Desarrollador Web Full Stack",
    "contact_me": "Contáctame",
  }
}
</i18n>
