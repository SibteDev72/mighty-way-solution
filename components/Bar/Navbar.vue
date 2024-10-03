<template>
  <div
    class="px-[2.5rem] bg-bgPrimary text-gray-300 shadow-md shadow-pink-600 fixed z-[100] top-0 left-0 w-full h-[4rem] flex flex-row justify-between items-center"
  >
    <NuxtLink to="/#home" class="flex gap-4 flex-row">
      <p class="font-sans font-extrabold text-lg">MIGHTY WAY SOLUTION</p>
      <img
        class="w-[30px] h-auto"
        src="/new/images/icons/logo.jpg"
        alt="logo_here"
      />
    </NuxtLink>
    <div class="flex-1 flex justify-center"></div>
    <div
      class="hidden capitalize font-sans font-semibold md:flex flex-row gap-[1.2rem] lg:gap-[1.5rem] xl:gap-[2rem] 2xl:gap-[2rem] 3xl:gap-[2rem]"
    >
      <div v-for="link in navLinks" :key="link.id" id="navLinks">
        <NuxtLink
          :to="{ path: '/', hash: link.hash }"
          :class="
            activeLink == link.title && 'inline border-b-4 border-pink-600 pb-1'
          "
        >
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-row gap-3 justify-center items-center">
      <div
        @click="
          () => {
            navStatus = !navStatus;
          }
        "
        class="z-[300] relative cursor-pointer md:hidden"
      >
        <div
          :class="`absolute left-0 top-[0px] bg-white w-[1.4rem] h-[0.15rem] transition-all duration-300 ease-in-out ${
            !!navStatus && 'rotate-[45deg]'
          }`"
        />
        <div
          :class="`absolute left-0 top-[0px] bg-white w-[1.4rem] h-[0.15rem] transition-all duration-300 ease-in-out ${
            !!navStatus && 'rotate-[-45deg]'
          }`"
        />
        <div
          :class="`absolute left-0 top-[-5px] bg-white w-[1.4rem] h-[0.15rem] ${
            !!navStatus && 'hidden'
          }`"
        />
        <div
          :class="`absolute left-0 top-[5px] bg-white w-[1.4rem] h-[0.15rem] ${
            !!navStatus && 'hidden'
          }`"
        />
      </div>
      <div
        :class="`capitalize py-12 flex flex-col gap-4 items-start pl-6 absolute z-[200] right-0 top-0 w-[50vw] h-screen bg-bgPrimary md:hidden transition-all duration-300 ease-in-out ${
          !!navStatus ? 'translate-x-0' : 'translate-x-[50vw]'
        }`"
      >
        <div v-for="link in navLinks" :key="link.id">
          <NuxtLink
            :to="{ path: '/', hash: link.hash }"
            @click="
              () => {
                navStatus = !navStatus;
              }
            "
            :class="`text-lg ${
              activeLink === link.title &&
              'inline border-b-4 border-pink-600 pb-1'
            }`"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { navLinks } from "~/constants/data";
import { useActiveLink } from "~/utility/helperFunction";

const { $gsap } = useNuxtApp();
const activeLink = ref<string>("");
const navStatus = ref<boolean>(false);

onMounted(() => {
  $gsap.fromTo(
    "#navLinks",
    { opacity: 0, y: -20 },
    {
      delay: 0.5,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    }
  );
  activeLink.value = "home";
  const handleScroll = () => {
    activeLink.value = useActiveLink(navLinks, window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
});
</script>
