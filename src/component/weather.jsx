import React from 'react'

export default async function weather() {
    const cityName = document.getElementById("city").value;

    const url = 'https://open-weather13.p.rapidapi.com/city/' + cityName;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '2781bf6cfbmsh1459af2c280abf0p1e4303jsn64f0e7a89e97',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        var res = result;
    } catch (error) {
        console.error(error);
    }

    var table = '<tr><th>weather</th><th>max temp</th><th>min temp</th></tr>';
    var weather = '';
    weather += "<tr><td>" + res.weather[0].main;
    weather += "</td><td>" + res.main.temp_min;
    weather += "</td><td>" + res.main.temp_max;
    weather += "</td></tr>";
    table += weather;

    document.getElementById("weatherTable").innerHTML = table;

    return (
        null
    )
}
