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
    <h2 class="Titulo">
        Detalhes do seu evento
    </h2>

    <h4 class="titulo">
        {{ event?.name }}
    </h4>
    <p class="descricao">
        Descrição: {{ event?.description }}
    </p>

    <p class="participants">
        Participantes do evento: {{ event?.participants }}
    </p>

    <p class="create_at">
        Criado em: {{ event?.create_at }}
    </p>
    

</div>

</template>

<style scoped> 
.descricao {
    color: rgb(247, 247, 247);
    background-color: rgb(6, 122, 31);
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -200%);
    padding: 10px;
}

.participants {
    color: rgb(247, 247, 247);
    background-color: rgb(6, 122, 31);
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    padding: 10px;
}


.titulo {
    color:black;
}

</style>