async function loadData() {
  const url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQTD8mBr_86sDT3zVpt7cvpiUqxU10EXuDXejpUNR4PKR9xTHDY15f-jSyeqrpNdTvULU2YAxCBbrm7/pub?output=tsv";
  let data = ''
  xmlhttp=new XMLHttpRequest();

  xmlhttp.onreadystatechange = async function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status==200){
      // document.getElementById("display").innerHTML = xmlhttp.responseText;
      data = await xmlhttp.responseText
      buildDom(data)
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);
  // console.log(data)
  return data
}

async function buildDom(data){
  rows = data.split('\n')
  cells = rows.map((d) => {
    return d.split('\t')
  })
  selects = ''
  all = ''
  markup = ''
  cells.forEach((d,i,arr) => {
    if (i == 0) return 
    let url = d[0]
    let title = d[1]
    let date = d[3]
    let selected = d[4]
    let block = `
    <li><a href="${url}"> ${title} <span class='inlineDate'> ${date}</span> </a></li>
    `
    
    if (selected == 1){
      selects += block
    } else {
      all += block
    }
  })

  markup = `
  <div id="extra-work"></div>
	<h3>Selects</h3>
  <ul>${selects}</ul>
  <h3 class="latestWork">Latest</h3>
  <ul>${all}</ul>
  `
  // console.log(markup)
  // console.log(document.getElementById('extra-work-container'))
  document.getElementById('extra-work-container').innerHTML = markup
  // data.forEach((d,i,arr) => console.log(d,i,arr))
}

// import {handlebars} from './handlebars-v4.0.5.js'
// console.log(handlebars)
// const Handlebars = require("handlebars");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));



loadData()

// console.log('wtf')
  // portfolio()
// let data = loadData()
// buildDom()

