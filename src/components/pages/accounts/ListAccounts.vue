<script setup>
import CardItem from '@/components/cardItem.vue';
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { load } from '@/services/accountsService.ts';
import { onMounted, ref } from 'vue';

const accounts = ref([]);

onMounted(async () => {
    accounts.value = await load();
})

</script>

<template>
    <PageComponent title="Usuários">
        <template #page-header>
            <div class="actions">
                <RouterLink :to="'/accounts/create'" class="btn btn-primary">
                    Criar Usuário
                </RouterLink>
            </div>
        </template>
        <div class="d-flex flex-column">
            <CardItem v-for="item in accounts" :key="item?.id" :item="item" relation="accounts"/>
        </div>
    </PageComponent>
</template>

<style scoped>

</style>