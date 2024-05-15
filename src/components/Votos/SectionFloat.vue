<script setup lang="ts">


const hidden = (e?: PointerEvent) => {
        const target = e.target as HTMLElement
        if (e && target.tagName === "SECTION") {
            target.style.display = "none"
        } else {
            target.style.display = "grid"
        }
    }


</script>

<template>
      <section class="absolute bg-black bg-opacity-30 w-full h-full z-50 grid place-content-center top-0 left-0 cursor-pointer" @click="(e) => hidden(e)">
        <slot></slot>
      </section>
</template>