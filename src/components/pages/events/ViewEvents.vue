<script setup>
// import { onMounted } from 'vue';

let inscrito = ref(true);

const eventSubscribe = () => {
  inscrito.value = !inscrito.value;
}

</script>
<template>
    <div class="Events">
      <button class="btn btn-secondary" :class="{'btn-danger' : inscrito}" @click="eventSubscribe">
        <template v-if="!inscrito">
          Se Inscrever
        </template>
        <template v-else>
          Remover Inscrição
        </template>
      </button>
      <h2 class="Titulo">
        Detalhes do seu evento:
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
  
      <p class="date">
        Início do evento: {{ event?.start_in }}
      </p>
  
      <p class="date-end">
        Data do fim: {{ event?.end_in }}
      </p>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetch } from '@/services/eventsService.ts';
  
  export default {
    setup() {
      const event = ref(null);
  
      onMounted(async () => {
        const id = useRoute().params?.id;
        event.value = await fetch(id);
      });
  
      return { event };
    }
  }
  </script>
  
  <style scoped>
  .Titulo {
    text-align: center;
  }
  
  .titulo {
    color: black;
  }
  
  .descricao,
  .participants,
  .create_at,
  .date,
  .date-end {
    color: rgb(247, 247, 247);
    background-color: rgb(6, 122, 31);
    text-align: center;
    padding: 10px;
    margin-left: 400px;
    margin-right: 400px;
    border-radius: 6px;

  }
  </style>
  