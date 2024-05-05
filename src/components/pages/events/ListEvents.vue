<template>
    <PageComponent title="Eventos">
        <div class="actions">
            <RouterLink :to="'/events/create'" class="btn btn-primary" style="float: right; margin-top: 50px;">
                Criar Evento
            </RouterLink>
        </div>

        <CardItem v-for="item in load()" :key="item?.id" :item="item" relation="events"/>
    </PageComponent>
</template>

<script setup>
import CardItem from '@/components/cardItem.vue';
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { load } from '@/services/eventsService.ts';
</script>

<style scoped>
</style>
