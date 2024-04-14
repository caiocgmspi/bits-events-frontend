<script setup>

import {defineProps} from 'vue';

defineProps({
    title: {
        type: String,
        default: 'Title'
    }
});
</script>

<template>
    <div class="page">
        <div class="page-header">
            <h1>
                {{ title }}
            </h1>
        </div>
        <div class="page-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.page{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.75rem 0.75em;
}

.page-header h1{
    text-align: left;
    padding: 0 0 !important;
}

.page-content {
    margin-top: 1rem;
}
</style>