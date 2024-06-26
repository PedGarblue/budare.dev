<template>
    <PageSection
        class="about"
        name="about"
    >
        <template #section-bg>
            <div class="about-background"
                :style="{
                    background: `linear-gradient(103deg, ${colors[1]} 0%, ${colors[10]} 40%, ${colors[10]} 60%, ${colors[1]} 100%)`
                }"
            />
        </template>
    </PageSection>
</template>

<script setup>
import colormap from 'colormap';
import { useI18n } from 'vue-i18n';
import PageSection from "./PageSection.vue";

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local',
});

const colors = colormap({
  colormap: 'density',
  nshades: 36,
  format: 'rgbaString',
  alpha: 1,
});

console.log(colors[10], colors[20]);

</script>

<style lang="postcss" scoped>
.about {
    @apply py-0 relative;
}
.about-background {
    @apply w-full h-full absolute top-0;
}
</style>

<i18n>
{
  "en": {
    "title": "About me"
  },
  "es": {
    "title": "Sobre mi"
  }
}
</i18n>