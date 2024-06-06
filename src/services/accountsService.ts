import { api } from "@/api";

export const load = async () => {

    return await api.get('pessoas/');

    return [
        {
            name: 'Caio Graco',
            email: 'caio@email.com',
            estado: 'CE',
            cidade: 'Russas',
            telefone: '(88) 99999-9991',
            data_nascimento: '1998-10-23',
            create_at: new Date().toLocaleDateString(),
            id: 3,
        },
        {
            name: 'Caíque Gabriel',
            email: 'caique@email.com',
            estado: 'CE',
            cidade: 'Russas',
            telefone: '(88) 99999-9992',
            data_nascimento: '1998-10-23',
            create_at: new Date().toLocaleDateString(),
            id: 5,
        },
        {
            name: 'Cleiton Gustavo',
            email: 'cleiton@email.com',
            estado: 'CE',
            cidade: 'Russas',
            telefone: '(88) 99999-9993',
            data_nascimento: '1998-10-23',
            create_at: new Date().toLocaleDateString(),
            id: 2,
        }
    ]
}

export const login = async (form) => {
    return await api.post('pessoas/login/', form);
}

export const fetchId = async (id) => {
    return await api.get('pessoas/' + id);
}

export const create = async (form) => {
    return await api.post('pessoas/', form);
}

export const update = async (id, form) => {
    return await api.put(`pessoas/${id}`, form);
}

export const remove = async (id) => {
    return await api.delete(`pessoas/${id}`);
}