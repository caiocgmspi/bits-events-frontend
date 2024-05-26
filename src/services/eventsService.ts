import { api } from "@/api";

export const load = async () => {

    return await api.get('eventos/');

    return [
        {
            name: 'Juazeiro Eventos 2024',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
            create_at: '10/05/2024',
            start_in: '13/05/2024',
            end_in: '17/05/2024',
            participants: '7 de 10',
            id: 5,
        },
        {
            name: 'Bits Digitais 2024',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
            create_at: '01/05/2024',
            start_in: '03/05/2024',
            end_in: '07/05/2024',
            participants: '10 de 20',
            id: 2,
        }
    ]
}

export const subscribe = async (id) => {
    return await api.post('eventos/' + id + '/subscribe', {});
}

export const unsubscribe = async (id) => {
    return await api.post('eventos/' + id + '/unsubscribe', {});
}

export const unsubscribeById = async (id) => {
    return await api.post('participantes/' + id + '/unsubscribe', {});
}

export const fetchParticipantes = async (id) => {
    return await api.get('participantes/' + id);
}

export const fetchId = async (id) => {
    return await api.get('eventos/' + id);
}

export const create = async (form) => {
    return await api.post('eventos/', form);
}

export const update = async (id, form) => {
    return await api.put(`eventos/${id}`, form);
}

export const remove = async (id) => {
    return await api.delete(`eventos/${id}`);
}