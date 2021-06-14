<template>
  <section id="blurb">
    <div class="blurb">
      <div class="blurb__photo">
        <img :src="aboutme.picture" />
      </div>
      <div class="blurb__desc desc">
        <div class="desc__name">{{ aboutme.name }}</div>
        <div class="desc__workname">{{ t('workname') }}</div>
        <social-links />
      </div>
      <div class="blurb__contact contact">
        <a
          :href="contact.telegram"
          class="contact__link"
          rel="noreferrer noopener"
        >
          {{ t('contact_me') }}
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import SocialLinks from './SocialLinks.vue';
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';

export default {
  name: 'Blurb',
  components: {
    SocialLinks,
  },
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
.blurb {
  @include container;
  @include flex;

  margin-top: $medium;
  padding-top: $extra-big;
  padding-bottom: $big;
  background-color: $background-primary;
  border: 0.2rem solid $background-terciary;
  border-radius: $small;

  &__photo {
    @include flex;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: $medium;
    justify-content: center;

    img {
      width: 11rem;
      height: 11rem;
      border-radius: 50%;
    }
  }

  &__desc,
  .desc {
    @include flex(column);

    justify-content: center;
    text-align: center;
    color: $text-primary;
    height: 7rem;
    margin: auto;

    &__name {
      font-size: $medium * 1.1;
      font-weight: bold;
    }

    &__workname {
      font-size: $medium * 0.87;
    }
  }

  &__contact {
    display: none;
  }
}

@media screen and (min-width: $breakpoint-big) {
  .blurb {
    padding: $big;
    box-shadow: 0.1em 0.1em $small $text-terciary;

    &__photo {
      margin: unset;
      justify-content: left;
    }

    &__desc,
    .desc {
      margin: 0 $big;
      align-items: start;
    }

    &__contact {
      display: flex;
      padding: 0 $medium;
      margin-left: auto;
      background-color: $background-secondary;
      border: 0.15rem solid;
      border-radius: $small;
      color: $text-primary;
    }
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
