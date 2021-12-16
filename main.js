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
	let left = document.createElement('div')
	let main = document.createElement('main')
	let right = document.createElement('div')
	
	left.setAttribute("id", "left-container");
	main.setAttribute("id", "content-container");
	right.setAttribute("id", "right-container");

	document.body.appendChild(left)
	document.body.append(main)
	document.body.appendChild(right)
}
pageSetUp()


randomNumber = () => {
	let randomGenerator = arrayOfChanels[Math.floor(Math.random()*arrayOfChanels.length)];
	return randomGenerator
}




fetchApi = () => {
	let random = randomNumber()
	fetch(`http://api.sr.se/api/v2/channels/${random}?format=json`) 
		.then(response => response.json()) 
		.then((data) => {
			let formated = formatedResponse(data)
			displayRadioInformation(formated)
			styleRadio(formated)
	});
	fetch(`https://api.sr.se/api/v2/scheduledepisodes?channelid=${random}&format=json&pagination=false`) 
		.then(response => response.json()) 
		.then((show) => {
			showLastAndNext(show)
	});
}
fetchApi()

timeNow = () => {
	let now = new Date();
	now = now.getTime()
	return now
} 


showLastAndNext = (show) => {
	checkForTime = timeNow()
	let leftDiv = document.querySelector('#left-container')
	let rightDiv = document.querySelector('#right-container')

	

	lastShowArray = []
	nextShowArray = []
	for(i = 0; i < show.schedule.length; i++) {

		
		let endtimeutc = show.schedule[i].endtimeutc
		let starttimeutc = show.schedule[i].starttimeutc


		let endShowDate = endtimeutc.replace(/[^0-9]/g, "")
		let endShowDateAsNum = parseInt(endShowDate)
		let endShowDateAsDate = new Date(endShowDateAsNum);

		let startShowDate = starttimeutc.replace(/[^0-9]/g, "")
		let startShowDateAsNum = parseInt(startShowDate)
		let startShowDateAsDate = new Date(startShowDateAsNum);
		
		let endShowDateAsShort = endShowDateAsDate.toLocaleTimeString([], {timeStyle: 'short'});
		let startShowDateAsShort = startShowDateAsDate.toLocaleTimeString([], {timeStyle: 'short'});

		
		if (checkForTime > endShowDateAsNum) {
			lastShowArray.push([endShowDateAsShort, show.schedule[i].program.name])
			lastShowArray.sort()
		}
		if (checkForTime < endShowDateAsNum) {
			nextShowArray.push([startShowDateAsShort, show.schedule[i].program.name])
			nextShowArray.sort()
		}
	}
	
	let nextShow = nextShowArray.at(-1)
	let lastShow = lastShowArray.at(-1)


	leftDiv.innerHTML  = `
												<p>${lastShow[0]}<br>${lastShow[1]}</p>
											  `
	rightDiv.innerHTML = `
												<p>${nextShow[0]}<br>${nextShow[1]}</p>
											  `


	

}

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
	
	button.innerHTML = `
											<svg id="shuffle-button__icon" width="5.50" height="550" viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
												<rect width="550" height="550"/>
												<path d="M220.008 289.46C209.827 304.948 199.046 319.994 186.183 333.527C155.878 365.406 116.33 373.871 73.6613 371.703C35.3523 369.753 35.5403 429.176 73.6613 431.115C153.827 435.187 210.492 400.551 255.605 341.586C248.176 331.902 241.311 322.148 235.029 312.748C229.859 305.024 224.857 297.128 220.008 289.46Z" fill="black"/>
												<path d="M297.401 242.181C301.519 248.656 305.587 255.023 309.69 261.264C317.211 250.88 325.234 240.856 334.262 231.535C357.052 208.011 383.016 198.345 411.524 195.61C409.715 197.789 407.959 200.008 406.136 202.176C395.721 214.553 393.964 232.009 406.136 244.186C416.845 254.898 437.71 256.589 448.146 244.186C464.217 225.093 479.569 205.395 495.64 186.302C506.106 175.783 510.113 158.289 497.159 144.256L443.693 86.3286C417.658 58.1256 375.75 100.238 401.682 128.339L408.623 135.858C379.461 137.945 351.38 145.364 325.451 162.217C306.079 174.811 289.789 190.996 275.256 208.729C278.175 212.822 281.09 216.981 283.959 221.323C288.546 228.265 293.045 235.342 297.401 242.181Z" fill="black"/>
												<path d="M448.151 305.842C443.119 299.87 435.674 297.164 428.103 297.164C419.968 297.164 411.686 300.297 406.141 305.842C393.969 318.024 395.726 335.477 406.141 347.852C407.964 350.021 409.721 352.245 411.529 354.423C383.021 351.692 357.052 342.018 334.267 318.496C321.303 305.115 310.366 290.318 300.097 275.018C290.145 260.193 280.831 244.89 270.95 229.923C269.061 227.064 267.121 224.319 265.192 221.552C220.872 157.973 165.445 118.591 86.2853 118.591C82.1473 118.591 77.9373 118.7 73.6663 118.913C36.1653 120.819 35.3783 178.368 71.8433 178.368C72.4433 178.368 73.0473 178.35 73.6663 178.32C77.7843 178.112 81.8623 178.003 85.9143 178.003C123.872 178.003 158.803 187.696 186.184 216.504C203.018 234.219 216.302 254.51 229.311 275.018C235.481 284.743 241.595 294.507 247.998 304.084C253.502 312.32 259.21 320.501 265.177 328.479C282.189 351.208 301.485 372.236 325.448 387.815C351.377 404.669 379.458 412.087 408.62 414.169L401.679 421.69C381.788 443.242 401.796 473.029 423.951 473.029C430.684 473.029 437.621 470.271 443.689 463.701L497.16 405.776C510.114 391.741 506.107 374.247 495.641 363.73C479.574 344.627 464.224 324.94 448.151 305.842Z" fill="black"/>
											</svg> Shuffle
											`
	button.addEventListener('click', () => {
		fetchApi()
	})
	return button
}
displayRadioInformation = (content) => {
	const contentContainer = document.querySelector('#content-container')
	const shuffleButton = shufflebutton()
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