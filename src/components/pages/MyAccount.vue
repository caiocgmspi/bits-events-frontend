<template>
    <div class="Inicio">
      <h1>Bem-vindo!</h1>
      <h2>Acesse as informações da sua conta.</h2>
  
      <div class="perfil">
        <img :src="caminhoParaFotoPerfil" alt="Foto do Perfil" class="foto-perfil">
        <h3>{{ userInfo.nomeCompleto }}</h3>
        <p>{{ userInfo.nomeUsuario }}</p>
        <p>{{ userInfo.descricao }}</p>
      </div>
  
      <div class="Events">
        <h2>{{ userInfo.meusEventos }}</h2>
        <button class="evento-button">{{ userInfo.evento01 }}</button>
        <button class="evento-button">{{ userInfo.evento02 }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInfo: {
          nomeCompleto: 'Nome Completo do Usuário',
          nomeUsuario: 'username',
          descricao: 'Espaço para uma breve descrição sobre o usuário.',
          meusEventos: 'Eventos',
          evento01: 'Nome do Evento 01',
          evento02: 'Nome do Evento 02'
        },
        caminhoParaFotoPerfil: 'https://static.vecteezy.com/ti/vetor-gratis/p3/11186876-simbolo-de-foto-de-perfil-masculino-vetor.jpg'
      };
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
  </style>
  