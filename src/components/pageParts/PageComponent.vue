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
        <div class="page-header d-flex gap-2">
            <h1>
                {{ title }}
            </h1>
            <div class="ml-auto">
                <slot name="page-header"></slot>
            </div>
        </div>
        <div class="page-content gap-2">
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

.page-header {
    align-items: center;
}

.page-header h1{
    text-align: left;
    padding: 0 0 !important;
}

.page-content {
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
}
</style>