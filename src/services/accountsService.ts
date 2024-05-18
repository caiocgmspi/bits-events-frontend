export const load = async () => {
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

export const fetchId = async (id) => {
    return (await load())?.filter((a) => a.id == id)[0] ?? {};
}

export const create = async (form) => {

}

export const update = async (id, form) => {

}

export const remove = async (id) => {

}