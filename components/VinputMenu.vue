<template>
    <div class="w-[300px] relative" v-click-outside="closeMenu">
        <button class="w-full border border-primary/20 rounded-md px-4 py-2 flex justify-between items-center" v-if="!slots.selectButton">
            <span> Select </span>
            <span> <MdiIcon icon="mdiChevronDown" size="25" :style="'color: #000000;'" /> </span>
        </button>
        <slot name="selectButton" :toggleMenu="toggleMenu" />
        <transition name="slide-fade">
            <div class="w-full h-[200px] bg-base shadow-lg rounded-xl overflow-hidden px-4 py-2 mt-3 absolute z-50" v-if="dropdownMenuOpen">
              <PerfectScrollbar class="h-[190px]">
                <ul class="w-full h-auto divide-y absolute">
                    <li class="w-full py-1" v-for="(item, i) in items" :key="i">
                      <button class="w-full p-2 rounded-md flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary/5" @click="$emit('onSelect', item, closeMenu)"> <slot name="item" :item="item" /> </button>
                    </li>
                </ul>
              </PerfectScrollbar>
            </div>
        </transition>
    </div>
</template>

<style scoped>
  .slide-fade-leave-active {
    transition: all 0.1s linear;
  }
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all 0.1s linear;
  }
  .slide-fade-enter-from {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>

<script setup>
  // data
  const slots = useSlots()
  const dropdownMenuOpen = ref(false)

  // props
  const props = defineProps([
    'items'
  ])

  // functions
  function toggleMenu () {
      dropdownMenuOpen.value = !dropdownMenuOpen.value
  }
  function closeMenu (e) {
      dropdownMenuOpen.value = false
  }
</script>
