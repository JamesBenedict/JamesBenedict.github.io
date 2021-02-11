async function portfolio(){
  console.log('ay')
  // let request = await fetch("")
  // let json = await request.json()
  // console.log(request, json)
  // console.log('yo')

  fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQTD8mBr_86sDT3zVpt7cvpiUqxU10EXuDXejpUNR4PKR9xTHDY15f-jSyeqrpNdTvULU2YAxCBbrm7/pub?alt=json')
    .then(response => response)
    .then(data => console.log(data));
}

function loadData() {
  var url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQTD8mBr_86sDT3zVpt7cvpiUqxU10EXuDXejpUNR4PKR9xTHDY15f-jSyeqrpNdTvULU2YAxCBbrm7/pub?output=csv";
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status==200){
      // document.getElementById("display").innerHTML = xmlhttp.responseText;
      console.log(xmlhttp.responseText)
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
}


function t(){
  $.getJSON("http://cors.io/spreadsheets.google.com/feeds/list/2PACX-1vQTD8mBr_86sDT3zVpt7cvpiUqxU10EXuDXejpUNR4PKR9xTHDY15f-jSyeqrpNdTvULU2YAxCBbrm7/od6/public/values?alt=json", function(data) {
  //first row "title" column
  console.log(data.feed.entry[0]);
});

}
// console.log('wtf')
//   portfolio()
//   // loadData()
//   t()
