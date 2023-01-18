<template>
  <div class="loading loading-text f-50 font-extrabold text-center m-[0_-0.3em]">
    <span d-inline-block anim-delay-1>L</span>
    <span d-inline-block anim-delay-2>O</span>
    <span d-inline-block anim-delay-3>A</span>
    <span d-inline-block anim-delay-4>D</span>
    <span d-inline-block anim-delay-5>I</span>
    <span d-inline-block anim-delay-6>N</span>
    <span d-inline-block anim-delay-7>G</span>
    <span d-inline-block anim-delay-8>.</span>
    <span d-inline-block anim-delay-9>.</span>
  </div>
</template>

<style lang="scss" scoped>
.loading-text span{
  animation: loading01 1.4s infinite alternate;
}

@keyframes loading01 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
