<script setup>
import { ref, onMounted } from 'vue';

const menus = ref([]);
const currentUser = (
    {
        role: 'admin'   
    }
)
const loadMenus = () => {
    let auxMenus = [
        {
            path: '/companies/',
            name: 'Empresas',
            role: ['admin']
        },
        {
            path: '/accounts/',
            name: 'Usuários',
            role: ['admin']
        },
        {
            path: '/events/',
            name: 'Eventos',
            role: ['admin']
        },
        {
            path: '/events/',
            name: 'Meus Eventos',
            role: ['empresa', 'usuario']
        },
        {
            path: '/my-account',
            name: 'Minha Conta',
            role: ['empresa', 'usuario', 'admin']
        }
    ];

    auxMenus = auxMenus?.filter((menu) => menu?.role?.includes(currentUser?.role));

    menus.value = auxMenus;
}

onMounted(() => {
    loadMenus();
});
</script>

<template>
    <div id="app-header">
        <div class="header-logo">
            <img alt="Vue logo" src="@/assets/logo.png">
        </div>
        <!-- Header Menus -->
        <div class="header-menus mr-auto ml-auto">
            <ul class="menu d-flex flex-wrap gap-2">
                <li v-for="menu in menus" :key="menu?.path" class="menu-item">
                    <RouterLink :to="menu?.path">
                        {{ menu?.name }}
                    </RouterLink>
                </li>
            </ul>
        </div>
         <!-- Header User -->
         <div class="header-user">
            <div class="user-photo">
                <img src="" />
            </div>
            <!-- Sair -->
            <ul class="menu d-flex flex-wrap gap-2">
                <li class="menu-item">
                    <RouterLink :to="'/login'">
                        Sair
                    </RouterLink>
                </li>
            </ul>
         </div>
    </div>
</template>

<style scoped>
#app-header{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: var(--bg-template);
    padding: 1rem 1rem;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-logo{
    height: 100%;
    
}

.header-logo img{
    width: auto;
    max-width: 100%;
    height: 100%;
}

.header-user {
    display: flex;
    flex-direction: row;
    margin: auto 0;
}

.header-user .user-photo{
    width: 45px;
    height: 45px;
    margin: auto 0 auto 1rem;
    border-radius: 100%;
    background-color: var(--bg-template-ice);
}
</style>