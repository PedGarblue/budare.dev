<template>
  <section class="blurb">
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
              href="https://github.com/PedGarblue"
              rel="noreferrer noopener"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              class="contact-icon"
              href="https://www.linkedin.com/in/pedro-garcia-621a3a145/"
              rel="noreferrer noopener"
            >
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a
              class="contact-icon"
              href="https://t.me/pedgarcia"
              rel="noreferrer noopener"
            >
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </a>
          </div>
        </div>
        <div class="flex contact-me-button">
          <router-link
            to="/contact"
            class="contact-link text-medium padding-m-left padding-s-right"
          >
            Contact me
          </router-link>
          <a
            class="contact-link flex padding-s-right padding-s-left text-medium"
            href="https://t.me/pedgarcia"
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
export default {
  name: "Blurb"
};
</script>

<style scoped>
.blurb {
  background-color: #ccdbff;
}
.container {
  background-color: #397e9f;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  .blurb {
    padding: 2rem 0;
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
  }
}
</style>
