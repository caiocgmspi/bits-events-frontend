<script setup>
import { fetch } from '@/services/eventsService.ts'

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

let event = ref();

onMounted(async () => {
    let id = useRoute().params?.id;
    event.value = await fetch(id);
});

</script>

<template>

<div class="Events">
    <h4 class="titulo">
        {{ event?.name }}
    </h4>
    <p class="descricao">
        {{ event?.description }}
    </p>

</div>

</template>

<style scoped> 
.descricao{
    color: red;
}

.titulo {
    color:black;
}

</style>