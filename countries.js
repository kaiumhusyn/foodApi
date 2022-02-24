const loadCountries = () =>{
     fetch('https://restcountries.com/v2/all')
     .then(res => res.json())
     .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = counties => {
    // for (const country of counties){
    //     console.log(country);
    // }

    const contriesDiv = document.getElementById('countries')
    counties.forEach(country =>{
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
            <h3>${country.name}</h3>
            <h3>${country.capital}</h3>
            <button onclick="loadCountryDetail('${country.name}')">Detail</button>
        `
        // const h3 = document.createElement('h3')
        // h3.innerText = country.name
        // div.appendChild(h3)
        // const p = document.createElement('p')
        // p.innerText = country.capital
        // div.appendChild(p)
        contriesDiv.appendChild(div)
    })
}

const loadCountryDetail = name => {
    console.log(name);
}

const loadCountryByName = name=> {
    const url = `https://restcountries.eu/rest/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data))
}

const displayCountryDetail = country =>{
    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
        <h5>${country.name}</h5>
        <p>${country.population}</p>
        <img src="${country.flag}">
        
    `

}