/* Initialising typeahead-standalone.js: https://typeahead.digitalfortress.tech/ */
  
typeahead({
    input: document.querySelector('.searchterm'),
    source: {
    prefetch: {
        url: "https://raw.githubusercontent.com/authifyWeb/authifyChat/main/sources/everything.json",
        },
    identifier: 'name',
    transform: (data) => { 
    return data.verifyWith;
    }

},

debounceRemote: 200,
highlight: true,
className: 'typeahead-sgst',
minLength: 3,
preventSubmit: false,
limit:25,
hint: true,
autoSelect: true,
templates: {
    suggestion: (authifyChat) => (
    `<div  class="single-item"  >
    <div class="company_name">${authifyChat.name}</div>
    </div>`
    ),
    
header: () => 'Company Name',
notFound: () => 'Sorry!!!&#x1F61F;, Company details not available in our database <br> Please request it <a href="https://github.com/authifyWeb/Chat-Frontend/issues"> here</a> ',
footer:() => 'Source: <a href="https://github.com/authifyWeb/Chat-Frontend#quick-links"> Github</a>',
},
onSubmit: (e, selectedSuggestion) => {



 
if (selectedSuggestion) {
const myJSON = JSON.stringify(selectedSuggestion);
const outp=JSON.parse(myJSON);
const {name, url, email,supportPage, dataType, twitter} = outp;



document.getElementById("compatible").innerHTML ="";
no_promote.innerHTML="";

/* format to display content back as html
document.getElementById('nitter').innerHTML = '<a href=' + url +' target="_blank" style="color:green">' +  'Twitter   </a>';	

*/

document.getElementById('naam').innerHTML = `<h3 style="color:red";> Company: ${name} </h3>`;
document.getElementById('email').innerHTML = `<p>${email}` +'</p>';
document.getElementById('url').innerHTML = `<a href=${url} target="_blank" >Official Website </a>`;
document.getElementById('support').innerHTML = `<a href=${supportPage} target="_blank" >Customer Support Page</a>`;	
document.getElementById('nitter').innerHTML = `<a href=${twitter} target="_blank" >Twitter Page  </a>`;	
document.getElementById('dataType').innerHTML = `<p> Data Source - "${dataType}" </p>`;








}

}



});	 

