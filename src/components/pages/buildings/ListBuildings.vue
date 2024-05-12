<script setup>
import PageComponent from '@/components/pageParts/PageComponent.vue';
import CardItem from '@/components/cardItem.vue';
import * as companyService from '@/services/companyService.ts';
import { onMounted, ref } from 'vue';

const items = ref([]);

onMounted(async () => {
    items.value = await companyService.load();
});

</script>

<template>
    <PageComponent title="Empresas">

        <template #page-header>
            <div class="actions">
                <RouterLink :to="'/companies/create'" class="btn btn-primary">
                    Criar Empresa
                </RouterLink>
            </div>
        </template>
        <CardItem v-for="item in items" :key="item?.id" :item="item" relation="companies"/>
    </PageComponent>
</template>

<style scoped>

</style>