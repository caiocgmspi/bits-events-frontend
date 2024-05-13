<template>
    <div class="RecoveryAccount">
      <h2>Recuperação de Conta</h2>
      <form @submit.prevent="enviarPedidoRecuperacao">
        <div class="form-group">
          <label class="email">Email:</label>
          <input type="email" v-model="email">
        </div>
        <div class="form-group">
          <label class="senha">Senha atual:</label>
          <input type="password" v-model="senha">
        </div>
        <div class="form-group">
          <label class="nova-senha">Nova senha:</label>
          <input type="password" v-model="novaSenha">
        </div>
        <div class="form-group">
          <label class="confirmar-senha">Confirmar nova senha:</label>
          <input type="password" v-model="confirmarNovaSenha">
        </div>
        
        <button type="submit" class="submit">Enviar Pedido de Recuperação</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const senha = ref('');
      const novaSenha = ref('');
      const confirmarNovaSenha = ref('');
  
      const enviarPedidoRecuperacao = () => {
        console.log('Pedido de recuperação de conta enviado!');
      };
  
      return {
        email,
        senha,
        novaSenha,
        confirmarNovaSenha,
        enviarPedidoRecuperacao
      };
    }
  };
  </script>
  
  <style scoped>
  .RecoveryAccount {
    text-align: center;
    margin: 20px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  .email,
  .senha,
  .nova-senha,
  .confirmar-senha {
    display: inline-block;
    width: 120px;
  }
  
  .submit {
    background-color: rgb(26, 205, 26);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit:hover {
    background-color: #1a9a1a;
  }
  </style>
  