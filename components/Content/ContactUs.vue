<template>
  <div
    id="contact"
    class="w-full text-white py-[8rem] px-[3rem] min-h-[100vh] bg-bgPrimary flex gap-[5rem] flex-col justify-between items-center font-sans"
  >
    <div
      class="grid gap-[3rem] grid-cols-1 place-items-baseline md:grid-cols-3 lg:grid-cols-4"
    >
      <div class="flex flex-col items-start gap-3">
        <p class="font-extrabold text-xl flex gap-2">
          MIGHTY WAY SOLUTION
          <img class="w-[40px]" src="/new/images/icons/logo.jpg" />
        </p>
        <p class="font-bold w-[10rem]">Address</p>
        <div class="flex flex-row gap-3">
          <a
            target="_blank"
            href="https://www.instagram.com/mightywaysol/"
            class="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center"
          >
            <img class="w-[20px]" src="/new/images/icons/instagram.png" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/mightywaysol/"
            class="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center"
          >
            <img class="w-[20px]" src="/new/images/icons/facebook.png" />
          </a>
          <!-- <div
            class="w-[45px] h-[45px] bg-white rounded-full flex justify-center items-center"
          >
            <img class="w-[20px]" src="/new/images/icons/twitter.png" />
          </div> -->
        </div>
      </div>
      <div class="relative flex flex-col items-start">
        <div
          id="dotFooter"
          class="absolute bg-pink-600 top-[-1rem] left-[-1rem] w-[40px] h-[40px] rounded-full bg-buttonPrimary"
        />
        <p class="z-[1] flex flex-col font-extrabold text-xl">Company</p>
        <div>
          <p
            @click="
              () => {
                router.push('/#about');
              }
            "
            class="font-bold text-lg"
          >
            About Us
          </p>
        </div>
      </div>
      <div class="relative flex flex-col gap-4">
        <p class="flex flex-col font-extrabold text-xl">Policy</p>
        <div
          id="dotFooter"
          class="absolute bg-pink-600 bottom-[-0.4rem] left-[-2rem] w-[60px] h-[60px] rounded-full bg-buttonPrimary"
        />
        <div class="z-[100]">
          <p class="font-bold text-lg">FAQ</p>
          <p class="font-bold text-lg">Privacy</p>
          <p class="font-bold text-lg">Shipping</p>
        </div>
      </div>
      <div class="relative flex flex-col gap-4">
        <p class="flex flex-col font-extrabold text-xl z-[1]">Get In Touch</p>
        <div
          id="dotFooter"
          class="absolute bg-pink-600 top-[-2rem] right-[-1rem] w-[65px] h-[65px] rounded-full bg-buttonPrimary"
        />
        <div>
          <p class="font-bold text-lg">Phone Number</p>
          <p class="font-bold text-lg">email</p>
        </div>
      </div>
    </div>
    <p
      class="w-full pt-5 text-center border-t-2 border-pink-600 font-bold text-sm"
    >
      MIGHTY WAY SOLUTION LLC. ALL RIGHT RESERVED.
    </p>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $scrollTrigger } = useNuxtApp();
const router = useRouter();
onMounted(() => {
  const scrollTriggerInstanceCU = $scrollTrigger.create({
    trigger: "#contact",
    start: "top+=20% bottom",
    onEnter: () => {
      $gsap.from("#dotFooter", {
        delay: 0.5,
        opacity: 0,
        scale: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
      });
    },
  });
  onBeforeUnmount(() => {
    scrollTriggerInstanceCU.kill();
  });
});
</script>
