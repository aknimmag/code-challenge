// api url
const api_url =
	"https://615485ee2473940017efaed3.mockapi.io/assessment";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
    console.log(data);
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table


