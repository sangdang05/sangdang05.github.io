getCovidWorld();
getSelectCountry();
getCountry();
function getSelectCountry(){
    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
    .then(res => res.json())
    .then(data => {
        const html = data.map(List => {
            const iso2 = List.countryInfo.iso2;
            const country = List.country;
            return `
               <option value="${iso2}">${country}</option>
            `;
        }).join("");
        document.getElementById("list-country").insertAdjacentHTML("afterbegin",html);
    }).catch(error => console.log('Error'));;
}

function getCovidWorld(){
    /*fetch('https://corona.lmao.ninja/v3/covid-19/all')
    .then(res => res.json())
    .then(data => {
        const cases = data.cases;
        const deaths = data.deaths;
        const recovered = data.recovered;
        document.getElementById("total").innerHTML = new Intl.NumberFormat().format(cases) + " " + "Ca nhiễm";
        document.getElementById("total_death").innerHTML = new Intl.NumberFormat().format(deaths) + " " + "Tử vong";
        document.getElementById("total_recovered").innerHTML = new Intl.NumberFormat().format(recovered) + " " +"Hồi phục";
    })*/
}
 
function getCountryById(){
    var e = document.getElementById("list-country");
    var strUser = e.value;
    fetch('https://corona.lmao.ninja/v3/covid-19/historical/' + strUser)
    .then(res => res.json())
    .then(data => {
        let date1 = Object.keys(data.timeline.cases);
        let country = data.country;
        let total = Object.values(data.timeline.cases);
        let deaths = Object.values(data.timeline.deaths);
        let recovered = Object.values(data.timeline.recovered);
        chart(date1, country, total, deaths, recovered);
        console.log(data);
    })
}

function getCountry(){ 
    fetch('https://corona.lmao.ninja/v3/covid-19/historical/VN')
    .then(res => res.json())
    .then(data => {
        let date1 = Object.keys(data.timeline.cases);
        let country = data.country;
        let total = Object.values(data.timeline.cases);
        let deaths = Object.values(data.timeline.deaths);
        let recovered = Object.values(data.timeline.recovered);
        chart(date1, country, total, deaths, recovered);
    })
}



function chart(date, country, total, deaths, recovered){
    var chart1 = Highcharts.chart({
        chart: {
            renderTo: 'container',
            type: 'line'
        },
        title: {
            text: 'Chi tiết tại ' + country
        },
        xAxis: {
            type: 'datetime',
            categories: date
        },
        yAxis: {
            title: {
                text: 'Số ca'
            }
        },
        series: [
            {
                name: 'Ca nhiễm',
                data: total
            }, 
            {
                name: 'Tử vong',
                data: deaths
            },
            {
                name: 'Hồi phục',
                data: recovered
            }         
        ]
    });
}