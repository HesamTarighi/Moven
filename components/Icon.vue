<template>
    <img :src="`https://img.icons8.com/${iconType}/${iconColor}/${iconSize}/${iconName}`" />
</template>

<script setup>
    const props = defineProps({
        iconType: { default: 'ios' },
        iconColor: { default: '#000000' },
        iconSize: { default: 'xl' },
        iconName: { default: '' },
    })
</script>
