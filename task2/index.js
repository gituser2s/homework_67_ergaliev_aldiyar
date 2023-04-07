let getData = function(){
    let name = document.getElementById('name')
    let status = document.getElementById('status')
    let species = document.getElementById('race')
    let location = document.getElementById('location')
    let image = document.getElementById('image')
    fetch(url='https://rickandmortyapi.com/api/character/2', data={
        method: 'GET',
    })
        .then((name) => {
            return name.json()
        })
        .then((data) =>{
            name.innerHTML = data.name
            status.innerHTML = data.status
            species.innerHTML = data.species
            location.innerHTML = data.location.name
            image.innerHTML = data.image
        })
}
getData()
