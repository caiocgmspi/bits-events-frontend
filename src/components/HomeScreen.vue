<template>
    <div class="home">
      <section class="hero">
        <div class="hero-container">
          <h1 class="hero-titulo">{{ tituloHero }}</h1>
          <p class="hero-subtitulo">{{ subtituloHero }}</p>
  
        </div>
      </section>
  
      <section class="sobre">
        <div class="sobre-container">
          <h2>Sobre Nós</h2>
          <p>Somos uma empresa dedicada ao setor de Eventos.</p>
        </div>
      </section>
  
      <section class="destaques">
        <div class="destaques-container">
          <h2>Destaques</h2>
  
          <div class="destaque" v-for="(destaque, index) in destaques" :key="index">
            <img class="image" :src="destaque.imagem" alt="{{ destaque.titulo }}">
            <h3>{{ destaque.titulo }}</h3>
            <p>{{ destaque.descricao }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tituloHero: "Bem-vindo ao Bits Eventos",
        subtituloHero: "Seu local para participar e criar eventos incrivéis.",
        destaques: [
          {
            imagem: "https://race.com/wp-content/uploads/2023/07/how-to-be-a-professional-gamer-3-1000x510.webp",
            titulo: "Evento principal Homepage",
            descricao: "Descrição breve do evento principal da homepage."
          },
        ]
      };
    },
  };
  </script>
  
  <style scoped>
.image {
    width: 300px;
    transition: 0.5s
}

.image:hover {
    transform:scale(1.1);
    transition: 0.5s
}
 </style>
  