<script setup>
import { login as accountLogin} from '@/services/accountsService.ts';
import { onMounted, ref, watch } from 'vue';
import * as app from '@/stores/app-store.js';
import router from '@/router';

let form = ref({});
let hasLogged = ref(null);

onMounted(() => {
      let data = app.app().get();
      hasLogged.value = data.token;
})

const login = async () => {
      let data = await accountLogin(form.value);
      
      app.app().set({
            'token' : data.token,
            'user' : data.user
      });
}

watch(hasLogged, (v) => {
      if (v) {
            router.push('/events');
      }
});

</script>

<template>
      <div class="view">
            <!-- Login View -->
            <div class="login-view">
                  <h4>
                        Login
                  </h4>
                  <!-- Forms -->
                  <div class="login-forms d-flex flex-column gap-2">
                        <input @input="(e) => form['email'] = e.target.value" type="email" name="email" placeholder="Email" />
                        <input @input="(e) => form['password'] = e.target.value" type="password" name="password" placeholder="Senha" />
                  </div>
                  <!-- Actions -->
                  <div class="login-actions d-flex flex-column gap-2">
                        <button @click="login" type="button" class="btn btn-primary">
                              Login
                        </button>
                        <RouterLink class="btn btn-secondary" to="/my-account/recovery">
                              Recuperar Conta
                        </RouterLink>
                        <RouterLink class="btn" to="/create-account">
                              Criar Conta
                        </RouterLink>
                  </div>
            </div>
      </div>
</template>

<style scoped>
.view {
      display: flex;
      width: 100vw;
      height: 100vh;
}

.login-view {
      width: 100%;
      padding: 1rem 1rem;
      max-width: 400px;
      border-radius: 0.4rem;
      margin: auto auto;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.login-view h4 {
      font-size: 1.4rem;
      margin: 0 0;
      margin-bottom: 1.5rem
}

.login-actions {
      margin-top: 1.75rem;
}
</style>