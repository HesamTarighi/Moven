<template>
    <section class="w-full space-y-16 max-md:space-y-8">
        <h2 class="text-4xl text-center font-gilroy-bold max-lg:text-2xl"> {{ title }} </h2>
        <div class="w-full">
            <slot />
        </div>
    </section>
</template>

<script setup>
    const props = defineProps([
        'title'
    ])
</script>
