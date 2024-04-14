<script setup>
import PageComponent from '@/components/pageParts/PageComponent.vue';
import CardItem from '@/components/cardItem.vue';
import { load } from '@/services/companyService.ts';
</script>

<template>
    <PageComponent title="Empresas">
        <CardItem v-for="item in load()" :key="item?.id" :item="item" relation="companies"/>
    </PageComponent>
</template>

<style scoped>

</style>