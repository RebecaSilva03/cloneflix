console.log ('@@@ Version 1')

//api a tvmaze
const API= "https://api.tvmaze.com"

// elememtos del DOM
const rowsContainer = document.getElementById('rowsContainer')
const hero = document.getElementById('hero')
const heroTitle = document.getElementById('HeroTitle')
const heroDesc = document.getElementById('heroDesc')
const heroPlay = document.getElementById('heroPlay')

const init = async () =>{
    const trending = await fetchJSON(`${API}/shows?page=1`)
    renderRow("Tendencias", trending.slice(0, 20))
    console('@@@ trending =>', trending)
}
const fetchJSON = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error ('Error al cargar datos: ', url)
    }
} 
init()