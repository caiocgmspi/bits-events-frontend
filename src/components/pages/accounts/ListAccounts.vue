<script setup>
import CardItem from '@/components/cardItem.vue';
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { load } from '@/services/accountsService.ts';

</script>

<template>
    <PageComponent title="Usuários">
        <CardItem v-for="item in load()" :key="item?.id" :item="item" relation="accounts"/>
    </PageComponent>
</template>

<style scoped>

</style>