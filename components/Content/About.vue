<template>
  <div
    id="about"
    class="w-full min-h-[100vh] flex flex-col items-center justify-center gap-[2rem] font-sans px-[1rem] sm:px-[3rem]"
  >
    <p class="text-3xl text-gray-300 font-extrabold">About Us</p>
    <section
      class="gap-10 flex text-white flex-col justify-center items-center lg:flex-row lg:items-start lg:justify-between"
    >
      <img
        id="poster"
        class="w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]"
        src="/new/images/home-pic-2.png"
      />
      <p id="desc" class="text-xl mt-4">
        Our diverse team thrives on sharing ideas and expertise, creating
        innovative solutions. This collaborative spirit allows us to navigate
        the ever-changing tech landscape with agility.Our approach extends
        beyond our team to our clients. We align our efforts with your vision.
        Together, we create solutions for immediate needs and lay the foundation
        for long-term success.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $scrollTrigger } = useNuxtApp();

onMounted(() => {
  const scrollTriggerInstanceCU = $scrollTrigger.create({
    trigger: "#about",
    start: "top+=20% bottom",
    onEnter: () => {
      $gsap.from("#poster", {
        delay: 0.5,
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power2.out",
      });
      $gsap.from("#desc", {
        delay: 0.5,
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power2.out",
      });
    },
  });
  onBeforeUnmount(() => {
    scrollTriggerInstanceCU.kill();
  });
});
</script>
