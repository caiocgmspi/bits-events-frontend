export const load = async () => {
    return [
        {
            name: 'Juazeiro Eventos 2024',
            description: 'Uma descriçao qualquer aqui para popular o tamanho de texto!',
            create_at: new Date().toLocaleDateString(),
            start_in: new Date().toLocaleDateString(),
            end_in: new Date().toLocaleDateString(),
            participants: '7 de 10',
            id: 5,
        },
        {
            name: 'Bits Digitais 2024',
            description: 'Uma descriçao qualquer aqui para popular o tamanho de texto!',
            create_at: new Date().toLocaleDateString(),
            start_in: new Date().toLocaleDateString(),
            end_in: new Date().toLocaleDateString(),
            participants: '7 de 10',
            id: 2,
        }
    ]
}

export const fetch = async (id) => {
    return (await load())?.filter((a) => a.id == id)[0] ?? {};
}

export const create = async (form) => {

}

export const update = async (id, form) => {

}

export const remove = async (id) => {

}