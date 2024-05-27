<script setup>
import InputContainer from '@/components/forms/InputContainer.vue';
import PageComponent from '@/components/pageParts/PageComponent.vue';
import { onMounted, ref } from 'vue';
import { estados } from '@/utils/brazilStates.js';

const form = ref({});

onMounted(() => {

});

const submit = (e) => {
    alert()
    console.log(e)
    return false;
}

</script>

<template>
    <PageComponent title="Criar / Editar Empresa">
        <form method="post" class="d-flex flex-column gap-4" @submit.prevent="submit($event)">
            <div class="d-flex gap-2">
                <!-- Nome -->
                <InputContainer label="Razão Social/Nome">
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
                <!-- Nome -->
                <InputContainer label="CNPJ/CPF">
                    <input 
                        type="text"
                        name="cpfoucnpj"
                        :value="form['cpfoucnpj']"
                        @input="(e) => form['cpfoucnpj'] = e.target.value"
                        placeholder="000.000.000-00"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Tipo de Eventos -->
                <InputContainer label="Tipo de Eventos">
                    <input 
                        type="text"
                        name="tipoeventos"
                        :value="form['tipoeventos']"
                        @input="(e) => form['tipoeventos'] = e.target.value"
                        placeholder="ex: E-sports"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Email -->
                <InputContainer label="Email">
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        :value="form['email']"
                        @input="(e) => form['email'] = e.target.value"
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
                        :value="form['telefone']"
                        @input="(e) => form['telefone'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                
            </div>
            <div class="d-flex gap-2">
                <!-- Description -->
                <InputContainer label="Descrição" style="max-width: 100%">
                    <textarea 
                        name="description"
                        :value="form['description']"
                        @input="(e) => form['description'] = e.target.value"
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
            <div class="d-flex flex-column gap-2">
                <!-- Password -->
                <InputContainer label="Senha">
                    <input 
                        type="password"
                        name="password"
                        placeholder="Senha Login"
                        :value="form['password']"
                        @input="(e) => form['password'] = e.target.value"
                        :class="{readonly}"
                        :readonly="readonly"
                    />
                </InputContainer>
                <!-- Confirm -->
                <InputContainer label="Confirmar Senha">
                    <input 
                        type="password_confirm"
                        name="password_confirm"
                        placeholder="Confirmar Senha Login"
                        :value="form['password_confirm']"
                        @input="(e) => form['password_confirm'] = e.target.value"
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
                    Editar Empresa
                </template>
                <template v-if="!form?.id">
                    Criar Empresa
                </template>
                </button>
            </div>
        </form>
    </PageComponent>
</template>

<style scoped>

</style>