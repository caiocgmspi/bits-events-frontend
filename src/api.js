/* eslint-disable */
import { app } from "./stores/app-store";

const api_url = "http://localhost:3000";

export const api = {
    get : 
        async (url) => {        
            return await api.fetch(url, {
                method: `GET`
            });
        },
    post : 
        async (url, form) => {
            return await api.fetch(url, {
                method: 'POST',
                body: form
            });
        },
    put: 
        async (url, form) => {
            return await api.fetch(url, {
                method: 'PUT',
                body: form
            });
        },
    delete: 
        async (url) => {
            return await api.fetch(url, {
                method: 'DELETE',
            });
        },
    fetch: async (url, args) => {

        try {
            let init = {
                method: args.method ?? 'GET',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization" : `Bearer ${app().get()?.token}`
                }
            };

            if (args?.method === 'POST' || args?.method === 'PUT') {
                init.body =  args?.body ?? {};
            }

            let data = await ( await fetch(`${api_url}/${url}`, init)).json();

            return data;
        } catch (exc) {
            console.log('<======= Error =====>', exc);
            return {};
        }
    }
};