const ELMNT = {
    $FORM: $('#SearchCountries'),
    $
    $ALL: $('#allCountries'),

}

const linkall = "https://restcountries.eu/rest/v2/all"
start();

function start() {
    addEventListener();
    // callToAllCountries();

}
function addEventListener() {
    ELMNT.$FORM.on("submit", function (event) {
        event.preventDefault();
        const input = event.target.contr.value;
        SendingRequest(input, CreateLine)
    });
}
function SendingRequest(countrie, cret,) {
    const LINK = `https://restcountries.eu/rest/v2/name/${countrie}`

    $.get(LINK, function (data) {
        if (data !== null) {
            console.log(data);
            cret(data)
        } else {
            console.log("rhhhe");
        }
    })

}

function CreateLine(contries) {
    const contener = document.getElementById('table');
    for (let i = 0; i < contries.length; i++) {

        contener.innerHTML += CreateContrie(contries[i]);

    }

}

function CreateContrie(contrie) {

    return `

    `
}
function getBorder(borders) {
    let allBorder = ""
    borders.mep(i => {
        allBorder += (i + ' ,');
    });
    return allBorder
}
function CreateLine(contries) {
    const contener = $('.resulstAndPopulation');
    for (let i = 0; i < contries.length; i++) {


    }

}
`
<div>total countries result: </div>
<div>total countries population: </div>
<div>averag population: </div>
`