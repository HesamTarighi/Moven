<template>
    <main class="space-y-24 pb-16 max-sm:space-y-8 max-md:space-y-12 max-lg:space-y-16">
        <IndexHero />
        <IndexSearch />
        <IndexRecommended />
        <IndexResidence/>
        <IndexBlog/>
    </main>
</template>

<script setup>
    definePageMeta({
        layout: 'index'
    })
</script>
