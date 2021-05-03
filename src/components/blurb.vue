<template>
  <section id="blurb">
    <div class="container">
      <div class="flex">
        <div class="photo">
          <img :src="aboutme.picture" />
        </div>
        <div class="desc">
          <div class="text-big text-bold">{{ aboutme.name }}</div>
          <div class="workname">{{ $t('blurb.workname') }}</div>
          <div class="flex text-big">
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
            {{ $t('blurb.Contact_me') }}&nbsp;&nbsp;
            <font-awesome-icon :icon="['fab', 'telegram']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutme from '@/data/aboutme';
import contact from '@/data/contact';

export default {
  name: 'Blurb',
  data() {
    return {
      contact,
      aboutme,
    };
  },
};
</script>

<style scoped>
.blurb {
  background-color: #ccdbff;
}
.container {
  background-color: #397e9f;
  padding-top: 4rem;
  padding-bottom: 2rem;
  margin-top: 1rem;
}
.photo {
  display: flex;
  margin: auto;
}
img {
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
}
.contact-icon {
  color: white;
}
.desc {
  text-align: center;
  padding: 0 1rem;
  color: white;
  height: 7rem;
  margin: auto;
}
.workname {
  font-size: 0.87rem;
}
.contact-me-button {
  display: none;
}

@media screen and (min-width: 800px) {
  #blurb {
    padding: 2rem 0;
  }
  .container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    box-shadow: 0.1em 0.1em 0.3em;
  }
  .photo {
    margin: unset;
  }
  .desc {
    margin: unset;
    text-align: left;
  }
  .contact-me-button {
    display: flex;
    margin-left: auto;
    background-color: #397e9f;
    border: 0.15rem solid;
    border-radius: 0.35rem;
    color: white;
  }
  .contact-link {
    color: white;
  }
}
</style>
