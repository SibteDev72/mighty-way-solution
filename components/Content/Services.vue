<template>
  <div
    id="services"
    class="pt-[4rem] w-full min-h-[100vh] font-sans flex gap-[2rem] flex-col items-center"
  >
    <div class="w-[70%]">
      <p class="text-gray-300 font-extrabold text-md text-center md:text-3xl">
        Our Services
      </p>
    </div>
    <div
      class="px-[3rem] w-full grid grid-cols-1 gap-y-[2rem] gap-x-[2rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <CardsService
        v-for="(data, index) in serviceItems"
        :details="data"
        :key="index"
        id="serviceCard"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { serviceItems } from "~/constants/data";
const { $gsap, $scrollTrigger } = useNuxtApp();

onMounted(() => {
  const scrollTriggerInstanceMenu = $scrollTrigger.create({
    trigger: "#services",
    start: "top+=18% bottom",
    onEnter: () => {
      $gsap.from("#serviceCard", {
        delay: 0.5,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: "power2.out",
      });
    },
  });
  onBeforeUnmount(() => {
    scrollTriggerInstanceMenu.kill();
  });
});
</script>

<style scoped></style>
