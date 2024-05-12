export const load = async () => {
    return [
        {
            name: 'Enterprise',
            description: 'Uma descriçao qualquer aqui para popular o tamanho de texto!',
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
            description: 'La la la la la'
        }
    ]
}

export const fetch = async (id) => {
    return (await load()).filter((a) => a.id == id)[0] ?? {};
}

export const create = async (form) => {

}

export const update = async (id, form) => {

}

export const remove = async (id) => {

}