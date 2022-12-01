const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    /* console.log("submitted!!"); */
    /* console.dir(form); */
    /* console.log(form.elements.searchTvShowName.value) */

    const searchTerm = form.elements.searchTvShowName.value;

    /* 
    //it can done by another method provide by axios
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`) 
    //you can set query sting by params below
    //const config={params:{q:searchTerm,isFunny:yes}};
    */
    const config = { params: { q: searchTerm } };

    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    /* console.log(res.data[0].show.image.medium); */
    seeShowImage(res.data);
    form.elements.searchTvShowName.value = "";

})

const seeShowImage = (images) => {
    for (result of images) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);

        }

    }
}