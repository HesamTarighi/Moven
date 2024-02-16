<template>
    <div class="border-b border-primary/20 inline-flex items-center justify-between py-4 px-1" :style="`cursor: ${cursor};`">
        <div class="flex items-center">
            <label :for="name" style="cursor: inherit;"> <slot name="label" /> </label>
            <input :value="value" :type="type" :placeholder="placeholder" :id="name" style="cursor: inherit;" class="px-4 placeholder:text-primary">
        </div>
        <label :for="name" style="cursor: inherit;"> <slot name="label2" /> </label>
    </div>
</template>

<script setup>
    defineProps ([
        'name',
        'placeholder',
        'type',
        'cursor',
        'value'
    ])
</script>
