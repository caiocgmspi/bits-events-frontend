<script setup>
import PageComponent from '@/components/pageParts/PageComponent.vue';
import CreateAccountForm from '@/components/forms/CreateAccountForm.vue';
import { fetch } from '@/services/accountsService.ts';
import { useRoute } from "vue-router";
import { onMounted, ref } from 'vue';

const data = ref({});

onMounted(async () => {
    let id = useRoute().params?.id;

    data.value = await fetch(id);
});

</script>

<template>
    <PageComponent title="Criar/Editar Conta">
        <CreateAccountForm v-if="data.id" :data="data" />
    </PageComponent>
</template>

<style scoped>

</style>