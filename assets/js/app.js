window.onload = async () => {
	$body = $("body");
	$body.addClass("loading");
	await getAll();
	await getCountry();
	await getChartGlobal();
	$body.removeClass("loading"); 
}
let base_api = 'https://corona.lmao.ninja/v3/covid-19/';
fetchRequest = async (url) => {
	const response = await fetch(url)
	return response.json()
}
getAll = async ()=>{
	let TotalConfirmed;
	let TotalRecovered;
	let TotalDeaths; 
	await fetchRequest(base_api+'all')
	.then(data => {
		console.log(data);
		TotalConfirmed = Intl.NumberFormat().format(data.cases);
		TotalRecovered = Intl.NumberFormat().format(data.recovered)
		TotalDeaths = Intl.NumberFormat().format(data.deaths)
		let info_case = document.querySelector('.info-case').innerHTML = TotalConfirmed;
		let info_recovery = document.querySelector('.info-recovery').innerHTML = TotalRecovered;
		let info_death = document.querySelector('.info-death').innerHTML = TotalDeaths;
	})
}
getCountry = async ()=>{
	let TotalConfirmed;
	let TotalRecovered;
	let TotalDeaths; 
	await fetchRequest(base_api+'countries')
	.then(data => {
		let table_countries_body = document.querySelector('#table_country_body');
		let casesByCountries = data;
		console.log(casesByCountries)
		for (let i = 0; i < casesByCountries.length; i++) {
			let row = `
			<tr>
			<td class="flag">
			<img src="${casesByCountries[i].countryInfo.flag}"/>
			</td>
			<td class="country">${casesByCountries[i].country.toLocaleString('en-US')}</td>
			<td class="case">${Intl.NumberFormat().format(casesByCountries[i].cases)}</td>
			<td class="recovery">${Intl.NumberFormat().format(casesByCountries[i].recovered)}</td>
			<td class="death">${Intl.NumberFormat().format(casesByCountries[i].deaths)}</td>
			</tr>
			`
			table_countries_body.innerHTML += row
		}
	})
}
getChartGlobal = async ()=>{
	let TotalConfirmed;
	let TotalRecovered;
	let TotalDeaths; 
	await fetchRequest(base_api+'historical/all')
	.then(data => {
		let date = Object.keys(data.cases);
		let total = Object.values(data.cases);
		let deaths = Object.values(data.deaths);
		let recovered = Object.values(data.recovered);
		chart(date, total, deaths, recovered);
	})
}

chart = (date, total, deaths, recovered)=>{
	var options = {
		chart: {
			type: 'line'
		},
		colors: ['#FC0606', '#10A326', '#000'],
		series: [
		{
			name: 'Ca nhiễm',
			data: total
		},
		{
			name: 'Hồi phục',
			data: recovered
		},
		{
			name: 'Tử vong',
			data: deaths
		}
		],
		xaxis: {
			categories: date
		},
		yaxis: {
			labels: {
				formatter: function(val) {
					return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
			},
			title: {
				text: 'Số lượng'
			}
		}
	}

	var chart = new ApexCharts(document.querySelector("#chart-global"), options);

	chart.render();
}


$("#searchInput").keyup(function() {
	var input = document.getElementById("searchInput");
	var filter = input.value.toUpperCase();
	var table = document.getElementById("table_country_body");
	var tr = table.getElementsByTagName("tr");
	for(var i = 0; i < tr.length; i++){
		td=tr[i].getElementsByTagName("td")[1];
		if(td){
			var value = td.textContent||td.innerText;
			if(value.toUpperCase().indexOf(filter) > -1){
				tr[i].style.display = '';
			}
			else {
				tr[i].style.display = 'none';
			}
		}
	}
});
