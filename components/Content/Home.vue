<template>
  <div
    id="home"
    class="poster text-white pt-[4rem] px-[1rem] w-full min-h-[100vh] font-sans text-textPrimary bg-transparent flex flex-col-reverse gap-[5rem] justify-evenly md:flex-row md:items-center"
  >
    <div
      class="absolute w-full min-h-[100vh] top-0 left-0 bg-black bg-opacity-70"
    />
    <section class="z-50 flex flex-col gap-2 w-[20rem]">
      <div ref="titleContainerRef" class="overflow-hidden w-[600px]">
        <div
          v-for="(line, index) in titleLines"
          :key="index"
          class="font-extrabold text-[16px] xs:text-[24px] md:text-[20px] lg:text-2xl"
          id="titleLine"
        >
          {{ line }}
        </div>
      </div>
      <div ref="textContainerRef" class="overflow-hidden w-[700px]">
        <div
          v-for="(line, index) in textLines"
          :key="index"
          class="font-medium text-[15px] xs:text-[22px] md:text-[18px] lg:text-lg"
          id="textLine"
        >
          {{ line }}
        </div>
      </div>

      <button
        @click="
          () => {
            router.push('/#about');
          }
        "
        class="w-fit text-white group border-2 py-2 px-6 flex gap-2 items-center my-2 hover:bg-pink-600 hover:border-pink-600 hover:rounded-sm"
      >
        About Us
        <span class="group-hover:rotate-90 duration-300">
          <img class="w-4" src="/new/images/icons/arrow.png" />
        </span>
      </button>
    </section>
    <section class="z-50 flex flex-col items-center md:w-[50%]">
      <img
        id="serviceIcon"
        class="w-[40vw] h-auto xm:w-[35vw] sm:w-[30vw] md:w-[25vw] lg:w-[16vw]"
        src="/new/images/icons/truck.png"
      />
      <div class="flex flex-row gap-10">
        <img
          id="serviceIcon"
          class="w-[35vw] h-auto xs:w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[12vw]"
          src="/new/images/icons/shopify.png"
        />
        <img
          id="serviceIcon"
          class="w-[35vw] h-auto xs:w-[30vw] sm:w-[25vw] md:w-[20vw] lg:w-[12vw]"
          src="/new/images/icons/healthcare.png"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useTextSlpitter } from "~/utility/helperFunction";
const { $gsap } = useNuxtApp();
const router = useRouter();

const data = {
  titleData: "Powering Innovation Across Industries",
  textData:
    "Delivering expertise in IT solutions, Amazon services, truck dispatching, Shopify development, and healthcare technology.",
};

const titleContainerRef = ref<HTMLElement | null>(null);
const titleLines = ref<string[]>([]);
const textContainerRef = ref<HTMLElement | null>(null);
const textLines = ref<string[]>([]);

onMounted(async () => {
  const titleContainer: any = titleContainerRef.value;
  const textContainer: any = textContainerRef.value;
  titleLines.value = useTextSlpitter(titleContainer, data.titleData, 25);
  textLines.value = useTextSlpitter(textContainer, data.textData, 14);

  await nextTick();

  $gsap.from("#titleLine", {
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#textLine", {
    delay: 0.5,
    opacity: 0,
    x: -50,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#dot", {
    delay: 0.7,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#serviceIcon", {
    delay: 1,
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#button", {
    delay: 0.7,
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "power2.out",
  });
  $gsap.from("#waves", {
    delay: 1.5,
    x: "-120px",
    stagger: 0.6,
    duration: 2,
    ease: "power2.out",
  });
});
</script>

<style scoped>
.poster {
  background-image: url("/new/images/truckDispatching.jpg");
  background-size: cover;
}
</style>
