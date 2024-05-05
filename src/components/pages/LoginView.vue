<script setup>

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
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Senha" />
                  </div>
                  <!-- Actions -->
                  <div class="login-actions d-flex flex-column gap-2">
                        <RouterLink class="btn btn-primary" to="/events/">
                              Login
                        </RouterLink>
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