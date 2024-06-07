<template>
    <div id="page-event">
      <!-- Thumbnail -->
      <div class="event-thumbnail">
        <img :src="event?.thumbnail" />
      </div>

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
        <button class="btn bt-primary"  v-if="user?.id" @click="showParticipants">
          Ver Participantes
        </button>
      </div>

      <div class="event-data">

        <h2 class="Titulo">
          Detalhes do evento
          <span class="hightlight">
            {{ event?.name }}
          </span>
        </h2>

        <p class="descricao">
          Descrição: {{ event?.description }}
        </p>
  
        <div class="participants d-flex align-items-center" title="Participantes do evento">
          <div class="icon">
            <icon class="fas fa-users" />
          </div>
          <span>{{ event?.participants ?? 0 }}</span>
        </div>
  
        <div class="participants d-flex align-items-center" title="Criado em">
          <div class="icon">
            <icon class="fas fa-calendar" />
          </div>
          <span>{{ toTime(event?.create_at) ?? 0 }}</span>
        </div>

        <div class="participants d-flex align-items-center" title="Início do evento">
          <div class="icon">
            <i class="fa-solid fa-hourglass-start"></i>
          </div>
          <span>{{ toTime(event?.start_in) ?? 0 }}</span>
        </div>

        <div class="participants d-flex align-items-center" title="Fim do evento">
          <div class="icon">
            <i class="fa-solid fa-hourglass-end"></i>
          </div>
          <span>{{ toTime(event?.end_in) ?? 0 }}</span>
        </div>
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
      </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchParticipantes, fetchId, subscribe, unsubscribe, unsubscribeById } from '@/services/eventsService.ts';
  import ModalComponent from '@/components/modals/ModalComponent.vue';
  import {toTime} from '@/utils/date.js';
  import { app } from '@/stores/app-store';

  const event = ref(null);
  const user = ref({});

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
      user.value = app().get() ?? {};
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
  #page-event{
    position: relative;
  }

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
    max-width: 650px;
    font-size: 1.15rem;
    background-color: #fafafa;
    border-left: 4px solid var(--primary-color);
    margin-bottom: 0.7rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0.8rem;
    border-radius: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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

  .event-thumbnail{
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: calc(100% + 2rem);
    height: 380px;
    background-color: #c0e4c0;
    z-index: 1;
  }

  .event-thumbnail img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .event-data{
    position: relative;
    z-index: 2;
    margin-top: 100px;
    padding: 20px 0 50px 0;
    border-radius: 1rem;
    background-color: #fafafacb;
    backdrop-filter: blur(3px);
    max-width: 750px;
    margin-left: auto;
    margin-right: auto
  }

  .actions{
    position: relative;
    z-index: 2;
  }
  </style>
  