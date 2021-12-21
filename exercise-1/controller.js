// api url
const api_url =
	'https://615485ee2473940017efaed3.mockapi.io/assessment';

// Defining function
	function getUserInfo() {
		fetch(api_url)
			.then(response => response.json())
			.then(data => {
				displayData(data)
			});
	}

// Function to define innerHTML for HTML unordered list
function displayData(data) {
	console.log('raw data->', data);
    const list = document.getElementById('afUsers');
    const unOrderedData = `<ul> 
                {{#each data}} 
                <li>
                 <div> 
                 <h4> Name: <strong> {{this.name}} </strong> </h4> 
                 <img src={{this.avatar}} alt= 'Image not available'> 
                 <button type=button onclick='clickHandler({{this.id}})'>More info</button>
                 <p id={{this.id}} style = 'display: none'> ID : {{this.id}} is created at {{this.createdAt}} </p>
                 </div>
                 </li>
                 {{/each}} 
                 </ul>`;
    const template = Handlebars.compile(unOrderedData);
    list.innerHTML = template({ data: data });
}

// Click handler
function clickHandler(id) {
    var x = document.getElementById(id);
    if (x.style.display === 'none') { // Click func.
        x.style.display = 'block';
    } else { // Hide
        x.style.display = 'none';
    }
}
