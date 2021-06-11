<template>
  <section id="blurb">
    <div class="container">
      <div class="flex">
        <div class="photo">
          <img :src="aboutme.picture" />
        </div>
        <div class="desc">
          <div class="text-m text-bold">{{ aboutme.name }}</div>
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
            class="contact-link flex padding-right-m padding-left-m text-medium"
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

<style lang="scss" scoped>
#blurb {
  background-color: $background-primary;
  background-image: url(https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?crop=entropy&cs=srgb&dl=pexels-markus-spiske-965345.jpg&fit=crop&fm=jpg&h=835&w=1280);
  background-repeat: no-repeat;
  background-size: cover;
  padding: $extra-big $medium;
}
.container {
  background-color: $background-primary;
  margin-top: $medium;
  padding-top: $extra-big;
  padding-bottom: $big;
  border: 0.2rem solid $background-terciary;
  border-radius: $small;
}
.photo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $big;
}
img {
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
}
.contact-link {
  color: $text-primary;
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: $text-primary;
  height: 7rem;
  margin: auto;
}
.workname {
  font-size: 0.87rem;
}
.social {
  display: flex;
  align-items: center;
  margin-top: $small;
  font-size: $medium;
}
.contact-me-button {
  display: none;
}

@media screen and (min-width: $breakpoint-big) {
  .container {
    padding-top: $medium;
    padding-bottom: $medium;
    box-shadow: 0.1em 0.1em $small $text-terciary;
  }
  .photo {
    margin: unset;
  }
  .desc {
    margin: 0 $medium;
    text-align: left;
  }
  .social {
    margin-top: 0;
  }
  .contact-me-button {
    display: flex;
    margin-left: auto;
    background-color: $background-secondary;
    border: 0.15rem solid;
    border-radius: $small;
    color: $text-primary;
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
