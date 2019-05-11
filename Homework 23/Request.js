async function getGoods(url) {
    let req = await fetch(url)
        .then(response => response.json());
    return req;
};
export { getGoods };