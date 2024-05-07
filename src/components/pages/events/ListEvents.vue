<template>
    <PageComponent title="Eventos">
        <div class="actions">
            <RouterLink :to="'/events/create'" class="btn btn-primary" style="float: right; margin-top: 50px;">
                Criar Evento
            </RouterLink>
        </div>

        <CardItem v-for="item in data" :key="item?.id" :item="item" relation="events"/>
    </PageComponent>
</template>

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
        <CardItem v-for="item in load()" :key="item?.id" :item="item" relation="events"/>
    </PageComponent>
</template>

<style scoped>

</style>