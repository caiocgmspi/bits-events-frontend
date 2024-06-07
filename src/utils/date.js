export const toTime = (value) => {
    return new Date(value).toLocaleDateString() + " às " + new Date(value).toLocaleTimeString();
}