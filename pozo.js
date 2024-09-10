const URI = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=bet593&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=9740525";
// const URI2 = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=ecuabet&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=9582294";

var content = document.getElementById('contenido');

async function init() {
  getUser();
}

init();
async function getUser(){

  const resp = await axios.get(URI);
  console.log(resp.data.odds[0])
  console.log(resp.data.odds[1])
  console.log(resp.data.odds[2])

  document.getElementById('title1').innerHTML = resp.data.odds[0].price.toFixed(2);
  document.getElementById('title2').innerHTML = resp.data.odds[1].price.toFixed(2);
  document.getElementById('title3').innerHTML = resp.data.odds[2].price.toFixed(2);
}