<template>
  <section id="contact">
    <div class="container">
      <form action="" method="POST">
        <fieldset>
          <h2>Contact</h2>
          <div class="form-field flex">
            <label for="contactName">Name*</label>
            <input type="text" name="contactName" class="form-input" required />
          </div>
          <div class="form-field flex">
            <label for="contactEmail">Email*</label>
            <input
              type="text"
              name="contactEmail"
              class="form-input"
              required
            />
          </div>
          <div class="form-field flex">
            <label for="contactSubject">Subject</label>
            <input type="text" name="contactSubject" class="form-input" />
          </div>
          <div class="form-field flex">
            <label for="contactMessage">Message*</label>
            <textarea
              name="contactMessage"
              class="form-input"
              rows="10"
              required
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
import contact from '@/data/contact';

export default {
  name: 'Contact',
  data() {
    return {
      contact,
    };
  },
};
</script>

<style scoped>
#contact {
  background-color: var(--blue);
  color: var(--white);
}
fieldset {
  border: none;
}
button {
  font-family: inherit;
  border: none;
  padding: 1.2rem 4rem;
  margin-top: 2rem;
  background-color: var(--black);
  color: var(--white);
  font-weight: bold;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}
button:hover {
  background-color: var(--gray);
}
.form-input {
  min-width: 100%;
}

@media screen and (min-width: 400px) {
  button {
    width: auto;
  }
}
</style>
