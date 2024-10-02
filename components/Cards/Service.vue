<template>
  <div
    ref="cardRef"
    class="text-gray-300 cursor-pointer py-2 capitalize flex flex-col flex-wrap justify-between items-center w-[full] h-fit rounded-xl bg-bgPrimary shadow-lg shadow-pink-600"
  >
    <img
      class="w-[10rem] py-2 sm:w-[11rem] lg:w-[8rem] xl:w-[10rem]"
      :src="`/new/images/icons/${details.icon}`"
    />
    <p class="text-lg font-bold">{{ details.name }}</p>
  </div>
</template>

<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";
import type { serviceInterface } from "~/types/Services";

defineProps<{
  details: serviceInterface;
}>();

const cardRef: any = ref<HTMLElement | null>(null);
onMounted(() => {
  VanillaTilt.init(cardRef.value, { max: 20, speed: 200 });
});
</script>

<style scoped></style>
