<script setup>
import { defineProps } from 'vue';

defineProps({
    label: {
        type: String,
        default: null
    }
})
</script>

<template>
    <div class="d-flex input-container gap-1">
        <label>{{ label }}</label>
        <slot></slot>
    </div>
</template>

<style>
.input-container {
    flex-direction: column;
    align-items: start;
    min-width: 150px;
    max-width: 250px;
    flex-grow: 1;
}

.input-container select,
.input-container textarea,
.input-container input{
    width: 100%;
}

.input-container .readonly{
    opacity: 0.7;
    background-color: #efeff2;
    color: #5a5a5a;
}
</style>