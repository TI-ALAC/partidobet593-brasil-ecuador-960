const URI = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=bet593&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=10325972";
// const URI2 = "https://sb2frontend-altenar2.biahosted.com/api/widget/GetEventDetails?culture=es-ES&timezoneOffset=300&integration=ecuabet&deviceType=1&numFormat=en-GB&countryCode=PE&eventId=9582294";

var content = document.getElementById('contenido');

async function init() {
  getUser();
  content.style.display = "block";
}

init();
async function getUser(){

  const resp = await axios.get(URI);
  // // const resp2 = await axios.get(URI2);
  console.log(resp.data.odds[0])
  console.log(resp.data.odds[1])
  console.log(resp.data.odds[2])
  // const xmlData = resp.data.doc[0].data.match.result;
  // const xmlData2 = resp2.data;

  document.getElementById('title1').innerHTML = resp.data.odds[0].price.toFixed(2);
  document.getElementById('title2').innerHTML = resp.data.odds[1].price.toFixed(2);
  document.getElementById('title3').innerHTML = resp.data.odds[2].price.toFixed(2);
  // if (xmlData) {
    
  //   document.getElementById('title1').innerHTML = 0;
  //   document.getElementById('title2').innerHTML = 0;
  //   // document.getElementById('title3').innerHTML = xmlData2.liveTime;
  // }
}