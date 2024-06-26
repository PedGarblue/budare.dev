<template>
  <div class="home relative">
    <div class="relative z-10">
      <SectionBlurb />
      <MainNav />
      <section-separator />
      <SectionExperience />
      <section-separator />
      <SectionSkills />
      <section-separator />
      <MainFooter />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, provide, ref } from 'vue';
import MainFooter from '@/components/MainFooter.vue';
import MainNav from '@/components/MainNav.vue';
import SectionBlurb from '@/components/SectionBlurb.vue';
import SectionExperience from '@/components/SectionExperience.vue';
import SectionProjects from '@/components/SectionProjects.vue';
import SectionSkills from '@/components/SectionSkills.vue';
import SectionSeparator from '@/components/SectionSeparator.vue';

export default {
  name: 'PageHome',
  components: {
    MainNav,
    MainFooter,
    SectionBlurb,
    SectionExperience,
    SectionProjects,
    SectionSkills,
    SectionSeparator,
  },
  setup() {
    // props
    const inMove = ref(false);
    const activeSection = ref(0);
    const offsets = ref([]);
    const touchStartY = ref(0);
    const started = ref(true);

    const touchWhitelist = ['BUTTON', 'A'];

    const calculateSectionOffsets = () => {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      let _offsets = [];

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        _offsets.push(sectionOffset);
      }

      offsets.value = _offsets;
    };

    const handleMouseWheel = e => {
      if (e.wheelDelta < 30 && !inMove.value) {
        moveUp();
      } else if (e.wheelDelta > 30 && !inMove.value) {
        moveDown();
      }

      e.preventDefault();
      return false;
    };

    const handleMouseWheelDOM = e => {
      if (e.detail > 0 && !inMove.value) {
        moveUp();
      } else if (e.detail < 0 && !inMove.value) {
        moveDown();
      }

      return false;
    };

    const moveDown = () => {
      if (!started.value) return false;
      inMove.value = true;
      activeSection.value--;

      if (activeSection.value < 0) activeSection.value = 0;

      scrollToSection(activeSection.value, true);
    };

    const moveUp = () => {
      if (!started.value) return false;
      inMove.value = true;
      activeSection.value++;

      if (activeSection.value > offsets.value.length - 1)
        activeSection.value = offsets.value.length - 1;

      scrollToSection(activeSection.value, true);
    };

    const scrollToSection = (id, force = false) => {
      if (inMove.value && !force) return false;

      activeSection.value = id;
      inMove.value = true;

      let sectionElem = document.getElementsByTagName('section')[id];

      sectionElem.scrollIntoView({ behavior: 'smooth', block: 'end' });

      setTimeout(() => {
        inMove.value = false;
      }, 400);
    };

    const shouldScroll = e => {
      return touchWhitelist.includes(e.target.tagName);
    };

    const touchStart = e => {
      // if is touching a button or link, cancel process
      if (shouldScroll(e)) return false;
      e.preventDefault();

      touchStartY.value = e.touches[0].clientY;
    };

    const touchMove = e => {
      if (shouldScroll(e)) return false;
      if (inMove.value) return false;
      e.preventDefault();

      const currentY = e.touches[0].clientY;

      if (touchStartY.value < currentY) {
        moveDown();
      } else {
        moveUp();
      }

      touchStartY.value = 0;
      return false;
    };

    // hooks
    onMounted(() => {
      calculateSectionOffsets();

      window.addEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener('mousewheel', handleMouseWheel, {
        passive: false,
      }); // Other browsers

      window.addEventListener('touchstart', touchStart, {
        passive: false,
      }); // mobile devices
      window.addEventListener('touchmove', touchMove, { passive: false }); // mobile devices

      // if url has hash, scroll to that section
      if (window.location.hash) {
        let hash = window.location.hash.replace('#', '');
        let sectionIndex = offsets.value.indexOf(document.getElementById(hash).offsetTop);

        if (sectionIndex > -1) {
          scrollToSection(sectionIndex, true);
        }
      }
    });

    onUnmounted(() => {
      window.removeEventListener('mousewheel', handleMouseWheel, {
        passive: false,
      }); // Other browsers
      window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox

      window.removeEventListener('touchstart', touchStart); // mobile devices
      window.removeEventListener('touchmove', touchMove); // mobile devices
    });
  
    provide('activeSection', activeSection);
    provide('scrollToSection', scrollToSection);
  },
};
</script>

<style lang="postcss" scoped>
.home {
  @apply bg-gradient-to-b from-gray-800 to-blue-900;
}
</style>
