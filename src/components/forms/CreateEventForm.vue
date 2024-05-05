<script setup>
import { onMounted, ref, defineProps } from 'vue';
import InputContainer from './InputContainer.vue';
import { estados } from '@/utils/brazilStates.js';

const form = ref({});
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
    form.value = props.data ?? {};
});

</script>

<template>
    <div class="criar-evento form">
        <form class="d-flex flex-column gap-4">
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
                        :value="form['telefone']"
                        @input="(e) => form['telefone'] = e.target.value"
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
            </div>
            <!-- Submeter -->
            <div class="ml-auto">
                <button 
                    class="btn btn-primary" 
                    type="submit"
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