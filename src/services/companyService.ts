import { api } from "@/api";

export const load = async () => {

    return await api.get('company/');

    return [
        {
            name: 'Enterprise',
            description: 'Uma descrição qualquer aqui para popular o tamanho de texto!',
            create_at: new Date().toLocaleDateString(),
            id: 5,
        },
        {
            create_at: new Date().toLocaleDateString(),
            name: 'Enterprise',
            id: 3,
            events: 5,
            cnpjoucpf: '000.000.000-11',
            cidade: 'Palhano',
            estado: 'Ceára',
            email: 'enterprise@email.com',
            telefone: '88 99999-0000',
            description: 'Lorem ipsum lorem ipsum'
        }
    ]
}

export const fetchId = async (id) => {
    return await api.get('company/' + id);
}

export const create = async (form) => {
    return await api.post('company/', form);
}

export const update = async (id, form) => {
    return await api.put(`company/${id}`, form);
}

export const remove = async (id) => {
    return await api.delete(`company/${id}`);
}