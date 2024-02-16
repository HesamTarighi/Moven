<template>
    <section class="w-full flex justify-center">
        <div class="w-2xl space-y-16 py-4 max-2xl:w-xl max-xl:w-lg max-lg:w-full max-lg:px-12 max-md:space-y-8 max-sm:px-6">
            <h2 class="text-5xl font-gilroy-bold max-2xl:text-4xl max-lg:text-3xl max-sm:text-2xl"> {{ title }} </h2>
            <slot />
        </div>
    </section>
</template>

<script setup>
    const props = defineProps([
        'title'
    ])
</script>
