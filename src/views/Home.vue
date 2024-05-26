<template>
  <div class="home">
    <div class="relative z-10">
      <Blurb />
      <Nav />
      <section-separator />
      <About />
      <section-separator />
      <Projects />
      <section-separator />
      <Skills />
      <section-separator />
      <Footer />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Blurb from '@/components/Blurb';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import SectionSeparator from '@/components/SectionSeparator';

export default {
  name: 'Home',
  components: {
    Blurb,
    Nav,
    About,
    Projects,
    Skills,
    Footer,
    SectionSeparator
  },
  setup() {
    // props
    const inMove = ref(false);
    const activeSection = ref(0);
    const offsets = ref([]);
    const touchStartY = ref(0);
    const started = ref(true);

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

    const touchStart = e => {
      e.preventDefault();

      touchStartY.value = e.touches[0].clientY;
    };

    const touchMove = e => {
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
    });

    onUnmounted(() => {
      window.removeEventListener('mousewheel', handleMouseWheel, {
        passive: false,
      }); // Other browsers
      window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM); // Mozilla Firefox

      window.removeEventListener('touchstart', touchStart); // mobile devices
      window.removeEventListener('touchmove', touchMove); // mobile devices
    });
  },
};
</script>

<style lang="postcss" scoped>
.home {
  @apply bg-gradient-to-b from-gray-800 to-blue-900;
}
</style>
