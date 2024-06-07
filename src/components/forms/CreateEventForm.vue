<script setup>
import { onMounted, ref, defineProps } from 'vue';
import InputContainer from './InputContainer.vue';
import { estados } from '@/utils/brazilStates.js';
import * as companyService from '@/services/companyService.ts';
import { create as createEvent } from '@/services/eventsService.ts';

const form = ref({
    created_at: new Date().toJSON()
});
const companys = ref([]);
const props = defineProps({
    readonly : {
        default: false,
        required: false
    },
    data: {
        type: Object,
        default: (() => {})
    }
});

onMounted(() => {
    form.value = props.data ?? form.value;

    companyService.load().then((data) => {
        companys.value = data;
    })
});

const create = () => {
    form.value.payed_event = form.value.value_event > 0;
    createEvent(form.value);
}

</script>

<template>
    <div class="criar-evento form">
        <form class="d-flex flex-column gap-4">
            <div class="d-flex gap-2 mb-2">
                <InputContainer label="Empresa do evento">
                    <select @change="(e) => form.company_id = e.target.value">
                        <option value="0">Escolha uma empresa</option>
                        <option 
                            v-for="company in companys" 
                            :key="`comp_${company?.id}`" 
                            :value="company?.id">
                            {{ company?.name }}
                        </option>
                    </select>
                </InputContainer>
            </div>
            <div class="d-flex gap-2">
                <!-- Nome -->
                <InputContainer label="Nome do Evento">
                    <input 
                        type="text"
                        name="name"
                        :value="form['name']"
                        @input="(e) => form['name'] = e.target.value"
                        placeholder="Nome do Evento"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Tipo do Evento -->
                <InputContainer label="Tipo do Evento">
                    <input 
                        type="text"
                        name="name"
                        :value="form['name']"
                        @input="(e) => form['name'] = e.target.value"
                        placeholder="Tipo do Evento"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Tipo do Evento -->
                <InputContainer label="Número de Parcipantes">
                    <input 
                        type="number"
                        name="number"
                        :value="form['number']"
                        @input="(e) => form['number'] = e.target.value"
                        placeholder="Número de Parcipantes"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                
                <!-- Telefone Responsável -->
                <InputContainer label="Telefone / Celular do Responsável">
                    <input 
                        type="telephone"
                        name="telefone"
                        placeholder="(88) 99999-9999"
                        :value="form['phone']"
                        @input="(e) => form['phone'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
            </div>
            <div class="d-flex gap-2">
                <!-- Estado -->
                <InputContainer label="Estado do Evento">
                    <select
                        name="estado"
                        @change="(e) => form['estado'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                        :value="form['estado']"
                    >
                    <option>Selecione um estado</option>
                    <option 
                        v-for="estado, index in estados"
                        :value="estado.sigla"
                        :key="index"
                    >
                        {{ estado.nome }}
                    </option>
                    </select>
                </InputContainer>
                <!-- Cidade -->
                <InputContainer label="Cidade">
                    <input 
                        type="text"
                        name="cidade"
                        :value="form['cidade']"
                        @input="(e) => form['cidade'] = e.target.value"
                        placeholder="ex: Fortaleza"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                
                <InputContainer label="Duração do Evento (horas)">
                    <input 
                        type="number"
                        name="duration"
                        :value="form['duration']"
                        @input="(e) => form['duration'] = e.target.value"
                        placeholder="Duração do Evento"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
            </div>
            <div class="d-flex gap-2">
                <InputContainer label="Data de Início do Evento">
                    <input 
                        type="datetime-local"
                        name="starts_in"
                        :value="form['starts_in']"
                        @input="(e) => form['starts_in'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <InputContainer label="Data de Encerramento do Evento">
                    <input 
                        type="datetime-local"
                        name="end_in"
                        :value="form['end_in']"
                        @input="(e) => form['end_in'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <InputContainer label="Valor do Evento">
                    <input 
                        type="number"
                        name="value_event"
                        :value="form['value_event'] ?? 0"
                        min="0"
                        step="0.1"
                        @input="(e) => form['value_event'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
            </div>
            <div class="d-flex gap-2">
                <InputContainer label="Descrição">
                    <textarea 
                        name="description"
                        placeholder="Uma descrição do evento"
                        :value="form['description']"
                        @input="(e) => form['description'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
            </div>
            <!-- Submeter -->
            <div class="ml-auto">
                <button 
                    class="btn btn-primary" 
                    type="button"
                    @click="create"
                >
                <template v-if="form?.id">
                    Editar evento
                </template>
                <template v-if="!form?.id">
                    Criar evento
                </template>
                </button>
            </div>
        </form>
    </div>
</template>

<style>

</style>