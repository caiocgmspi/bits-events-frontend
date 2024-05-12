<script setup>
import CardItem from '@/components/cardItem.vue';
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { load } from '@/services/eventsService.ts';
import { onMounted, ref } from 'vue';

let data = ref();

onMounted(async () => {
    data.value = await load();
})
</script>
<template>
    <PageComponent title="Eventos">

        <template #page-header>
            <div class="actions">
                <RouterLink :to="'/events/create'" class="btn btn-primary">
                    Criar Evento
                </RouterLink>
            </div>
        </template>

       <CardItem v-for="item in data" :key="item?.id" :item="item" relation="events"/>
    </PageComponent>
</template>

<style scoped>
</style>
