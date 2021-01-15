<template>
  <section class="container">
    <h2>Skills</h2>
    <hr />
    <div>
      <div class="flex skills-list">
        <Skill percentage="100" title="HTML5" time="3 years">
          <font-awesome-icon
            :icon="['fab', 'html5']"
            class="html5 text-extra-big"
          />
        </Skill>
        <Skill percentage="90" title="Javascript (ES5, ES6)" time="3 years">
          <font-awesome-icon :icon="['fab', 'js']" class="js text-extra-big" />
        </Skill>
        <Skill percentage="90" title="CSS3" time="3 years">
          <font-awesome-icon
            :icon="['fab', 'css3']"
            class="css3 text-extra-big padding-s-left"
          />
        </Skill>
        <Skill percentage="100" title="PHP" time="3 years">
          <font-awesome-icon
            :icon="['fab', 'php']"
            class="php text-extra-big"
          />
        </Skill>
        <Skill percentage="90" title="Git" time="3 years">
          <font-awesome-icon
            :icon="['fab', 'git-alt']"
            class="git text-extra-big"
          />
        </Skill>
        <Skill percentage="75" title="NodeJS" time="1 year">
          <font-awesome-icon
            :icon="['fab', 'node-js']"
            class="node text-extra-big"
          />
        </Skill>
        <Skill percentage="50" title="VueJS" time="1 year">
          <font-awesome-icon
            :icon="['fab', 'vuejs']"
            class="vuejs text-extra-big"
          />
        </Skill>
        <Skill percentage="30" title="ReactJS" time="1 year">
          <font-awesome-icon
            :icon="['fab', 'react']"
            class="react text-extra-big"
          />
        </Skill>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from "./skill.vue";

export default {
  name: "Skills",
  components: {
    Skill
  }
};
</script>

<style scoped>
.html5,
.js,
.css3,
.php,
.git,
.node,
.vuejs,
.react {
  width: 100%;
}
.html5 {
  color: #f05525;
}
.js {
  color: #e8e840;
}
.css3 {
  color: #4b4bff;
}
.php {
  color: #615e8c;
}
.git {
  color: #f05525;
}
.node {
  color: #7dbb3e;
}
.vuejs {
  color: #43bb43;
}
.react {
  color: #23dfce;
}
</style>
