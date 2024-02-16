<template>
    <div>
        <!-- sunny -->
        <Icon iconType="material-rounded" iconName="sun" iconSize="18" iconColor="101010" v-if="type == 'sunny'" />
        <!-- rainy -->
        <Icon iconType="material-rounded" iconName="rain" iconSize="20" iconColor="101010" v-if="type == 'rainy'" />
        <!-- cloudy -->
        <Icon iconType="material-rounded" iconName="partly-cloudy-day" iconSize="20" iconColor="101010" v-if="type == 'cloudy'" />
        <!-- clean air -->
        <Icon iconType="material-rounded" iconName="air-quality" iconSize="20" iconColor="101010" v-if="type == 'clean-air'" />
    </div>
</template>

<script setup>
    const props = defineProps([
        'type'
    ])
</script>
