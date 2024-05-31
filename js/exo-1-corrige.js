export const exo1Corrige = () =>{
const url = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
const  response = res => res.json();
const data = datas => {console.log(datas.results)}
const error = err => {
    alert(`une erreur s'est survenue ${err}`);
  
}
fetch(url)
    .then(response, error)
    .then(data, error)
}