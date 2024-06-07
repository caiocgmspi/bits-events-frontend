<script setup>

import  { defineProps } from 'vue';

defineProps({
    title: {
        required: true,
        default: null
    },
    confirm: {
        required: false,
        default: () => {}
    },
    cancel: {
        required: false,
        default: () => {}
    }
})
</script>

<template>
    <div class="window">
        <div class="modal">
            <div class="modal-header">
                <h3>
                    {{ title }}
                </h3>
            </div>
            <div class="modal-content">
                <p>
                    <slot></slot>
                </p>
            </div>
            <div class="d-flex modal-footer gap-2">
                <!-- Cancelar -->
                <button 
                    class="btn btn-cancel ml-auto" 
                    @click="cancel"
                >
                    Cancelar
                </button>
                <!-- Confirm -->
                <button 
                    class="btn btn-primary" 
                    @click="confirm"
                >
                    Continuar
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.window{
    position: absolute;
    top: -1rem;
    left: -2rem;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    z-index: 999;
}

.modal{
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.4rem;
}

h2{
    margin: 0 0;
    padding: 0 0
}

.modal-content{
    padding: 1rem 0rem;
    min-height: 80px;
}

.modal-footer{
    margin-top: 1.4rem;
}
</style>