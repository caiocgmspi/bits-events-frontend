<script setup>
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { ref, onMounted } from 'vue';
import * as companyService from '@/services/companyService.ts';
import { useRoute } from 'vue-router';

const form = ref({});

onMounted(async () => {
    let id = useRoute().params?.id;
    
    form.value = await companyService.fetch(id);
});

</script>

<template>
    <PageComponent :title="form.name">
        <div v-if="form.id">
            <!-- Eventos -->
            <div class="d-flex flex-column gap-1 justify-start">
                <span>
                    <bold>Eventos:</bold>
                    <span>{{ form.events }}</span>
                </span>
                <!--  CNPJ -->
                <span>
                    <bold>CNPJ/CPF:</bold>
                    <span>{{ form.cnpjoucpf }}</span>
                </span>
                <!--  Email -->
                <span>
                    <bold>Email:</bold>
                    <span>{{ form.email }}</span>
                </span>
                <!--  Telefone -->
                <span>
                    <bold>Telefone:</bold>
                    <span>{{ form.telefone }}</span>
                </span>
                <!--  Telefone -->
                <span>
                    <bold>Endereço:</bold>
                    <span>{{form.cidade}} - {{ form.estado }}</span>
                </span>
            </div>
            <p class="description">
                {{ form.description }}
            </p>
        </div>
    </PageComponent>
</template>

<style scoped>
    bold{
        display: inline-block;
        font-weight: bold;
        width: 200px;
        text-align: left;
    }

    span span{
        display: inline-block;
        width: 200px;
        text-align: right;
    }
</style>