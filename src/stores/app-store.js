export const app = () => {
    return {
        set: (data) => {
            localStorage.setItem('app', JSON.stringify(data));
        },
        get: () => {
            let data = null;
            try {
                data = JSON.parse(localStorage.getItem('app'));
            } catch (exc) {
                console.log(exc);
            }

            return data ? data: {};
        }
    }
}