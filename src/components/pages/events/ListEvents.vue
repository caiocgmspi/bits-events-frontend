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
        <CardItem v-for="item in data" :key="item?.id" :item="item" relation="events"/>
    </PageComponent>
</template>

<style scoped>

</style>