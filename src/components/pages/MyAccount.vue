<template>
    <div class="Inicio">
      <h1>Bem-vindo!</h1>
      <h2>Informações da sua conta.</h2>
  
      <div class="perfil">
        <img :src="caminhoParaFotoPerfil" alt="Foto do Perfil" class="foto-perfil">
        <h3>{{ user?.name ?? user?.nome ?? 'NOME DO USUÁRIO' }}</h3>
      </div>
  
      <div class="Events">
        <h2>{{ userInfo.meusEventos }}</h2>
        <section class="destaques">
        <div class="destaques-container">
          <div class="destaque" v-for="(destaque, index) in destaques" :key="index">
            <div class="image-container">
              <img class="image" :src="destaque.thumbnail" alt="{{ destaque.titulo }}">
            </div>
            <div class="destaque-content">
              <h3 class="destaque-title">{{ destaque.name }}</h3>
              <div class="details d-flex flex-wrap gap-1">
                <span class="d-flex gap-1 align-items-center">
                  <div class="icon">
                    <icon class="fas fa-dollar" />
                  </div>
                  <span> R$ {{ destaque.value_event }}</span>
                </span>
                <span class="d-flex gap-1 align-items-center">
                  <div class="icon">
                    <icon class="fas fa-users" />
                  </div>
                  <span> {{ destaque.participants ?? 0}}</span>
                </span>
                <span class="d-flex gap-1 align-items-center" title="Inicia em">
                  <div class="icon">
                    <i class="fa-solid fa-hourglass-start"></i>
                  </div>
                  <span> {{ destaque.start_in }}</span>
                </span>
                <span class="d-flex gap-1 align-items-center" title="Finaliza em">
                  <div class="icon">
                    <i class="fa-solid fa-hourglass-end"></i>
                  </div>
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
    </div>
  </template>
  
  <script>
  import { loadMyEvents } from '@/services/eventsService.ts';
  import * as app from '@/stores/app-store.js';

  export default {
    data() {
      return {
        destaques: [],
        userInfo: {
          nomeCompleto: 'Nome Completo do Usuário',
          nomeUsuario: 'username',
          descricao: 'Espaço para uma breve descrição sobre o usuário.',
          meusEventos: 'Meus Eventos',
        },
        user : app.app().get() ?? {},
        caminhoParaFotoPerfil: 'https://static.vecteezy.com/ti/vetor-gratis/p3/11186876-simbolo-de-foto-de-perfil-masculino-vetor.jpg'
      };
    },
    mounted() {
      loadMyEvents().then((response) => {
        this.destaques = response ?? []
      });
    }
  };
  </script>
  
  <style scoped>
  .perfil {
    text-align: center;
  }
  
  .foto-perfil {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: center;
    object-fit: cover;
  }
  
  .Events {
    text-align: center;
  }
  
  .evento-button {
    background-color: #008000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    margin: 5px;
    cursor: pointer; 
    transition: background-color 0.3s ease;
  }
  
  .evento-button:hover {
    background-color: #023502;
  }

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

    h3{
      margin: 0 0;
    }
  </style>
  