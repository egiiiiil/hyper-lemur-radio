let arrayOfChanels = [
									132, //P1
									163, //P2
									164, //P3
									213, //P4 Blekinge
									223, //P4 Dalarna
									205, //P4 Gotland
									210, //P4 Gävleborg
									212, //P4 Göteborg
									220, //P4 Halland
									200, //P4 Jämtland
									]

pageSetUp = () => {
	console.log('Yes')
	let main = document.createElement('main')
	
	main.setAttribute("id", "content-container");
	document.body.append(main)
}
pageSetUp()


randomNumber = () => {
	let randomGenerator = arrayOfChanels[Math.floor(Math.random()*arrayOfChanels.length)];
	return randomGenerator
}
randomizeChannel = () => {
	let random = randomNumber()
	let text;
	switch(random) {
		case 132:
			text = 'P1';
			break;
		case 163:
			text = 'P2';
			break;
		case 164:
			text = 'P3';
			break;
		case 213:
			text = 'P4 Blekinge';
			break;
		case 223:
			text = 'P4 Dalarna';
			break;
		case 205:
			text = 'P4 Gotland';
			break;
		case 210:
			text = 'P4 Gävleborg';
			break;
		case 212:
			text = 'P4 Göteborg';
			break;
		case 220:
			text = 'P4 Halland';
			break;
		case 200:
			text = 'P4 Jämtland';
			break;
		default:
			text = 'AAAAA';
	}
	console.log('convert', random);
	return text
}



fetchApi = () => {
	let random = randomNumber()
	fetch(`http://api.sr.se/api/v2/channels/${random}?format=json`) 
		.then(response => response.json()) 
		.then((data) => {
			console.log(data)
			let formated = formatedResponse(data)

			displayRadioInformation(formated)
			styleRadio(formated)
	});
}
fetchApi()
formatedResponse = (data) => {
	let formated = {
		id: 	 data.channel.id,
		name:	 data.channel.name,
		image: data.channel.image,
		audio: data.channel.liveaudio.url,
		color: data.channel.color

	}
	return formated
}
shufflebutton = () => {
	const main = document.getElementById('content-container')
	let button = document.createElement('button')
	let a = "aaaaaa"
	
	button.innerText = 'Shuffle'
	button.addEventListener('click', () => {
		console.log('aaaaa')
		fetchApi()
	})
	return button
}
displayRadioInformation = (content) => {
	const contentContainer = document.querySelector('#content-container')
	const shuffleButton = shufflebutton()
/* 	console.log('display', content.id)
	console.log('display', content.name)
	console.log('display', content.image)
	console.log('display', content.audio) */
	// CONTENT
	contentContainer.innerHTML = `
																<h1>${content.name}</h1>
																<img src="${content.image}">
																<audio controls>
  																<source src="${content.audio}" type="audio/mpeg">
  																Your browser does not support the audio tag.
																</audio>
																`
	contentContainer.appendChild(shuffleButton)
																
}

styleRadio = (content) => {
	const bodyTag = document.getElementsByTagName('body')
	document.body.style.backgroundColor = `#${content.color}`;


}