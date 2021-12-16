fetchApi2ElectricBoogaloo = () => {
	
	fetch(`https://api.sr.se/api/v2/scheduledepisodes?channelid=164&format=json&pagination%20=%20false`) 
		.then(response => response.json()) 
		.then((data) => {
			console.log(data)
			/* let formated = formatedResponse(data)

			displayRadioInformation(formated)
			styleRadio(formated) */
	});
}
fetchApi2ElectricBoogaloo()