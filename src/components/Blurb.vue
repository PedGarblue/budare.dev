<template>
  <section id="blurb">
    <div class="blurb">
      <div class="blurb__photo">
        <img :src="aboutme.picture" />
      </div>
      <div class="blurb__desc desc">
        <div class="desc__name">{{ t('name') }}</div>
        <div class="desc__workname">{{ t('workname') }}</div>
        <social-links />
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

<style lang="postcss">
#blurb {
  @apply
    flex
    flex-col
    justify-center
    items-center
    pb-0
    bg-gradient-to-b
    from-gray-800
    to-blue-900
  ;

  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 28vh;
}

.blurb {
}

.blurb__contact {
  @apply flex ml-auto;
}

.desc {
  @apply
    flex
    flex-col
    justify-center
    text-center
    m-auto
    gap-2
    xl:items-start
    xl:mx-16
  ;
}

.desc__name {
  @apply font-bold text-5xl tracking-wide;
}
.desc__workname {
  @apply text-xl;
}

</style>

<style lang="scss" scoped>
.blurb {
  @include container;
  @include flex;

  margin-top: $medium;
  padding-top: $extra-big-space;

  &__photo {
    @include flex;

    margin-left: auto;
    margin-right: auto;
    margin-bottom: $medium-space;
    justify-content: center;

    img {
      width: 11rem;
      height: 11rem;
      border-radius: 50%;
    }
  }
}

@media screen and (min-width: $big-viewport) {
  .blurb {
    padding: $big-space;

    &__photo {
      margin: unset;
      justify-content: left;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "name": "Pedro García",
    "workname": "Web Application Developer",
    "contact_me": "Contact me"
  },
  "es": {
    "name": "Pedro García",
    "workname": "Desarrollador Web Full Stack",
    "contact_me": "Contáctame",
  }
}
</i18n>
