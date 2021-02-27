fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries => {
    const Countries_Div = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = "country";
                
        const countryInfo = `
            <h3 class="countryName">${country.name}</h3>
            <p class="capital">${country.capital}</p>
            <button onclick="displayCountriesDetails('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        Countries_Div.appendChild(countryDiv);
    })
}

const displayCountriesDetails = name => {
    const url = (`https://restcountries.eu/rest/v2/name/${name}`)
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country => {
    console.log(country);
    const countryDiv =document.getElementById("countryDetails");
    countryDiv.innerHTML  = `
        <h1>${country.name}</h1>
        <p>Population:${country.population}</p>
        <p>Area:${country.area}</p>
        <img src='${country.flag}'>${country.population}</p>
    `;
}