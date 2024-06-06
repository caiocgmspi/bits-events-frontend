import { api } from "@/api";
import { app } from "@/stores/app-store";

export const load = async () => {

    return (await api.get('eventos/'))?.map((a) => {
        a.thumbnail = a.thumbnail ? a.thumbnail : 'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=sph';

        return a;
    });

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

export const loadMyEvents = async () => {
    return (await api.get('eventos/meus-eventos/' + app().get().user?.id))?.map((a) => {
        a.thumbnail = a.thumbnail ? a.thumbnail : 'https://img.freepik.com/fotos-gratis/pessoas-que-participam-de-um-evento-de-alto-protocolo_23-2150951243.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=sph';

        return a;
    });
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