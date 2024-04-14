<script setup>
import CardItem from '@/components/cardItem.vue';
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { load } from '@/services/eventsService.ts';
</script>

<template>
    <PageComponent title="Eventos">
        <CardItem v-for="item in load()" :key="item?.id" :item="item" relation="events"/>
    </PageComponent>
</template>

<style scoped>

</style>