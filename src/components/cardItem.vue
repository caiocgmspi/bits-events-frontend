<script setup>
import { defineProps } from 'vue';

defineProps({
    item: {
        type: {},
        default: (() => {})
    },
    relation : {
        type: String,
        default: ""
    }
})
</script>

<template>
    <div class="card-item">
        <div class="card-header">
            <h4>
                {{ item.name }}
            </h4>
        </div>
        <div class="card-content d-flex flex-column">
            <div class="details">
                <!-- Start -->
                <span v-if="item.created_at">
                    <span>
                        Criado em:
                        <span>
                            {{ item.created_at }}
                        </span>
                    </span>
                </span>
                <!-- Start -->
                <span v-if="item.start_in">
                    <span>
                        Inicia em:
                        <span>
                            {{ item.start_in }}
                        </span>
                    </span>
                </span>
                <!-- End -->
                <span v-if="item.end_in">
                    <span>
                        Finaliza em:
                        <span>
                            {{ item.end_in }}
                        </span>
                    </span>
                </span>
                <!-- End -->
                <span v-if="item.participants">
                    <span>
                        Participantes:
                        <span>
                            {{ item.participants }}
                        </span>
                    </span>
                </span>
            </div>
            <p v-if="item.description">
                {{ item.description }}
            </p>
            <!-- Actions -->
            <router-link :to="`/${relation}/${item.id}/details`" class="go ml-auto">
                Detalhes do evento
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.card-item {
    padding: 1rem 1rem;
    border-radius: 0.4rem;
    text-align: left;
    margin-bottom: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.card-item h4,
.card-item p {
    margin: 0 0;
}

.card-item h4 {
    font-size: 1.25rem;
}

.card-item p {
    font-size: 1.1rem;
}

.card-item h4 {
    margin-bottom: 0.5rem;
}

.details {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
}

.details  span {
    padding: 0.1rem 0.2rem;
    background-color: var(--bg-template-ice);
    border-radius: 0.4rem;
    font-weight: bold;
}

.details > span span {
    font-weight: normal;
}

.go {
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 0.4rem;
    cursor: pointer;
}

.go:hover {
    padding: 0.5rem 1rem;
    background-color: var(--primary-color-hover);
    color: #fff;
    border-radius: 0.4rem;
}
</style>