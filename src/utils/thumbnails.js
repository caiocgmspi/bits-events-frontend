export const getThumbnail = (index) => {
    index = index ? index[0] : 0;
    index = !index || isNaN(index * 1) ? 0 : index; 
    index = index % 2 > 4 ? 0 : index % 2;

    return [
        'https://media.istockphoto.com/id/974238866/pt/foto/audience-listens-to-the-lecturer-at-the-conference.webp?s=1024x1024&w=is&k=20&c=KhZjesFhFq5yh_k1UbIegctFVh17Q-qwc1XwRk-okNk=',
        'https://media.istockphoto.com/id/1997284086/pt/foto/empty-seats-in-a-conference-hall.webp?s=1024x1024&w=is&k=20&c=YI-TGOIXBgCoS4kRf5X7PbIm20qPA5MlHolLfjiu1vE=',
        'https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/06/11/13/47/planner-7256390_960_720.jpg',
    ][index]
}