<template>
    <div class="home">
      <section class="hero">
        <div class="hero-container">
          <h1 class="title hero-titulo">{{ tituloHero }}</h1>
          <p class="description hero-subtitulo">{{ subtituloHero }}</p>
        </div>
      </section>
  
      <section class="sobre">
        <div class="sobre-container">
          <h2 class="title">Sobre Nós</h2>
          <p class="description">Somos uma empresa dedicada ao setor de Eventos, participe de eventos e crie o seu conosco.</p>
        </div>
      </section>
  
      <section class="destaques">
        <h2 class="title">Destaques</h2>
        <div class="destaques-container">
          <div class="destaque" v-for="(destaque, index) in destaques" :key="index">
            <div class="image-container">
              <img class="image" :src="destaque.thumbnail" alt="{{ destaque.titulo }}">
            </div>
            <div class="destaque-content">
              <h3 class="destaque-title">{{ destaque.name }}</h3>
              <div class="details d-flex flex-wrap gap-1">
                <span >
                  Valor: 
                  <span> R$ {{ destaque.value_event }}</span>
                </span>
                <span>
                  Participantes: 
                  <span> {{ destaque.participantCount ?? 0}}</span>
                </span>
                <span>
                  Inicia em: 
                  <span> {{ destaque.start_in }}</span>
                </span>
                <span>
                  Termina em: 
                  <span> {{ destaque.end_in }}</span>
                </span>
              </div>
              <p class="mb-2">
                {{ destaque.description }}
              </p>
              <RouterLink class="btn btn-primary mt-2" :to="`/events/${destaque?.id}/details`">
                  Ver Mais
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { load } from '@/services/eventsService.ts';

  export default {
    data() {
      return {
        tituloHero: "Bem-vindo ao Bits Eventos",
        subtituloHero: "Seu local para participar e criar eventos incrivéis.",
        destaques: []
      };
    },
    mounted() {
      load().then((response) => {
        this.destaques = response ?? []
      });
    }
  };
  </script>
  
  <style scoped>
    .destaques {
      display: block;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 0.4rem;
      padding: 1rem
    }

    .destaques h2{
      margin: 0 0
    }

    .destaques .destaques-container{
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      overflow: auto;
    }

    .destaque{
      width: 280px;
      background-color: #fafafa;
      padding: 0 0;
      border-radius: 0.4rem;
      overflow: hidden;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .destaque .destaque-content{
      display: flex;
      flex-direction: column;
      padding: 0.25rem 0.5rem;
    }

    .destaque .destaque-content p{
      background-color: #f1f6f8;
      padding: 0.5rem;
      border-radius: 0.4rem;
    }

    .destaque .destaque-title{
      padding: 0.2rem 0;
      margin: 0 0;
    }
    
    .image-container {
        width: 100%;
        height: 180px;
        overflow: hidden;
    }

    .image-container .image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s
    }

    .image:hover {
        transform:scale(1.1);
        transition: 0.5s
    }

    .title {
      margin-bottom: 0;
      padding-bottom: 0.5rem;
    }

    .description {
      padding-top: 0;
      margin-top: 0
    }

    .details{
      display: flex;
      flex-direction: column;
      margin-top: 0.55rem
    }

    .details span {
      display: inline-block;
      font-size: 0.9rem;
      line-height: 0.95rem
    }

    section{
      margin-bottom: 1.75rem;
      min-width: 250px
    }
 </style>
  