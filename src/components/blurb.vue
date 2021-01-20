<template>
  <section id="blurb">
    <div class="container">
      <div class="flex">
        <div class="photo">
          <img src="../assets/literallyme.png" />
        </div>
        <div class="desc">
          <div class="text-big text-bold">Pedro García</div>
          <div>Web Application Developer</div>
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
            href="#contact"
            class="contact-link text-medium padding-m-left padding-s-right"
          >
            Contact me
          </a>
          <a
            class="contact-link flex padding-s-right padding-s-left text-medium"
            :href="contact.telegram"
            rel="noreferrer noopener"
          >
            <font-awesome-icon :icon="['fab', 'telegram']" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contact from '@/data/contact';

export default {
  name: 'Blurb',
  data() {
    return {
      contact,
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
    background-color: #fffefe;
    border-radius: 0.35rem;
    box-shadow: 0em 0em 0.2em var(--gray);
  }
}
</style>
