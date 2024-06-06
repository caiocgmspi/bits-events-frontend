<template>
    <div class="Events">
      <div class="actions d-flex gap-2">
        <!-- Se inscrever -->
        <button 
          class="ml-auto btn btn-secondary" 
          :class="{'btn-danger' : changeInscricao}" 
          @click="inscrito = !inscrito"
          >
          <template v-if="!changeInscricao">
            Se Inscrever
          </template>
          <template v-else>
            Remover Inscrição
          </template>
        </button>
        <!-- Ver participantes do evento -->
        <button class="btn bt-primary"  @click="showParticipants">
          Ver Participantes
        </button>
      </div>
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
        Participantes do evento: {{ event?.participantCount }}
      </p>
  
      <p class="create_at">
        Criado em: {{ event?.created_at }}
      </p>
  
      <p class="date">
        Início do evento: {{ event?.starts_in }}
      </p>
  
      <p class="date-end">
        Data do fim: {{ event?.end_in }}
      </p>
    </div>

    <!-- Modal De confirmação de Inscrição -->
    <ModalComponent
      v-if="changeInscricao != inscrito"
      :confirm="eventSubscribe"
      :cancel="() => inscrito = changeInscricao"
      :title="inscrito ? 'Deseja se Inscrever ?' : 'Deseja remover Inscrição ?'"
    >
    </ModalComponent>

    <!-- Mostrar Inscritos -->
    <ModalComponent
      v-if="showParticipantsFlag"
      :confirm="() => showParticipantsFlag = false"
      :cancel="() => showParticipantsFlag = false"
      :title="'Participantes do Evento'"
    >
    <div class="participants-items d-flex flex-column">
      <div class="participant" v-for="participant in participants" :key="participant.id">
        <span>
          Nome: {{ participant?.user_nome }}
        </span>
        <span>
          Inscrito em: {{ participant?.created_at }}
        </span>
        <button @click="() => unsubscribeUser(participant?.id)" class="btn btn-danger">
          Remover Inscrição
        </button>
      </div>
    </div>
    </ModalComponent>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchParticipantes, fetchId, subscribe, unsubscribe, unsubscribeById } from '@/services/eventsService.ts';
  import ModalComponent from '@/components/modals/ModalComponent.vue';
  
  const event = ref(null);

  let inscrito = ref(false);
  let changeInscricao = ref(false);
  let showParticipantsFlag = ref(false);
  let participants = ref([]);

  const eventSubscribe = async () => {
    let status = false;

    if (inscrito.value) {
      status = await unsubscribe();
    } else {
      status = await subscribe();
    }

    changeInscricao.value = status;
  }

  onMounted(async () => {
      const id = useRoute().params?.id;
      event.value = await fetchId(id);
      await loadParticipantes(id);
  });

  const showParticipants = () => {
    showParticipantsFlag.value = true;
  }

  const loadParticipantes = async(id) => {
    participants.value = (await fetchParticipantes(id))?.participants ?? [];
  }

  const unsubscribeUser = async (id) => {
    await unsubscribeById(id);
    await loadParticipantes();
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
    text-align: center;
    padding: 10px;
    margin-left: 400px;
    margin-right: 400px;
    border-radius: 6px;
  }

  .participants-items .participant{
    background-color: #fafafa;
    padding: 0.4rem 0.4rem;
    border-radius: 0.4rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column !important;
    align-items: start;
  }

  .participants-items .participant .btn{
    font-size: 0.7rem;
    padding: 0.3rem 0.3rem !important;
    margin-left: auto;
  }
  </style>
  