<script setup>
import { onMounted, ref, defineProps } from 'vue';
import InputContainer from './InputContainer.vue';
import { estados } from '@/utils/brazilStates.js';
import { update, create } from '@/services/accountsService.ts';


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

const submit = async () => {
    
    //Editar
    if (form.value?.id) {
        await update(form.value.id, form.value);
    } else { // Criar
        await create(form.value);
    }

    return false;
}
</script>

<template>
    <div class="criar-conta form">
        <form class="d-flex flex-column gap-4" @submit.prevent="submit">
            <div class="d-flex gap-2">
                <!-- Nome -->
                <InputContainer label="Nome">
                    <input 
                        type="text"
                        name="name"
                        :value="form['name']"
                        @input="(e) => form['name'] = e.target.value"
                        placeholder="Nome do usuário"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Email -->
                <InputContainer label="Email">
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email do usuário"
                        :value="form['email']"
                        @input="(e) => form['email'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Data de Nascimento -->
                <InputContainer label="Data de Nascimento">
                    <input 
                        type="date"
                        name="data_nascimento"
                        :value="form['data_nascimento']"
                        @input="(e) => form['data_nascimento'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Telefone -->
                <InputContainer label="Telefone/Celular">
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
                <InputContainer label="Estado">
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
                    Editar Conta
                </template>
                <template v-if="!form?.id">
                    Criar Conta
                </template>
                </button>
            </div>
        </form>
    </div>
</template>

<style>

</style>