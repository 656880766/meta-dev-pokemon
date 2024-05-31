export const exo1 = () => {
    const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
    const  response = res => res.json();
    const data = datas => {console.log(datas.results)}

    fetch(url)
        .then(response)
        .then(data)
}