window.onload = ()=>{
	getSong();
}
const musicContent = document.querySelector(".music-content");
const avatar = document.querySelector(".avatar img");
const name = document.querySelector(".music-play .name");
const creator = document.querySelector(".music-play .creator");
const btnPlay = document.querySelector(".music-controll .bx-play");
const btnNext = document.querySelector(".bx-skip-next");
const btnPrev = document.querySelector(".bx-skip-previous");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const timesong = document.querySelector(".music-bar .duration-time");
const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const list = document.querySelector(".list-music");
const songlist = list.getElementsByTagName("li");
let songIndex = Math.floor(Math.random() * 101);
let arraySongs = [];
let base_api = "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST/";
fectRequest = async (url) =>{
	const response = await fetch(url);
	return response.json();
}
const getData = async () => {
	const response = await fetch(`${base_api}`);
	if (response.ok) {
		return await response.json();
	} else {
		return Promise.reject(response.status);
	}
};
getSong = ()=>{
	const result = getData();
	list.innerHTML = "";
	result.then(data=>{
		let all = data.songs.top100_VN;
		let nt = all[1].songs;
		for(let i = 0; i < nt.length; i++){
			const name = nt[i].title;
			const creator = nt[i].creator;
			const music = nt[i].music;
			const avatar = nt[i].avatar;
			const bgImage = nt[i].bgImage;
			list.innerHTML +=
			`<li class="list-music-item" data-name='${name}' data-creator='${creator}' data-music='${music}'
			data-avatar='${avatar}' data-index='${i}'>
			<div class="list-music-item-info">
			<span class="name">${name}</span>
			<span class="creator">${creator}</span>
			</div>
			<a href="${music}">
			<i class='bx bxs-download'></i>
			</a>
			</li>`
		}
		let songs = document.querySelectorAll(".list-music-item")
		for(let i = 0; i < songs.length; i++){
			arraySongs.push(songs[i].getAttribute("data-music"));
		}
		loadSong();
	})
}
formatTime = (second)=>{
	let hours = Math.floor(second / 3600);
	let minutes = Math.floor((second - hours * 3600) / 60);
	let seconds = Math.floor(second - hours * 3600 - minutes * 60);

	hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
}
loadSong = (song)=>{
	song = songIndex;
	audio.src = arraySongs[song];
	audio.addEventListener('loadedmetadata', ()=>{
		const time = formatTime(audio.duration);
		timesong.textContent = time;
	})
	let detailSong = document.querySelectorAll(".list-music-item");
	name.textContent = detailSong[song].getAttribute("data-name");
	creator.textContent = detailSong[song].getAttribute("data-creator");
	avatar.src = detailSong[song].getAttribute("data-avatar");
	for(let i = 0; i < songlist.length; i++){
		songlist[i].classList.remove("active");
	}
	songlist[song].classList.add("active");
	songlist[song].scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}
playSong = ()=>{
	musicContent.classList.add("playing");
	avatar.style.animationPlayState = 'running';
	btnPlay.classList.remove('bx-play');
	btnPlay.classList.add('bx-pause');
	audio.play();
}
pauseSong = ()=>{
	musicContent.classList.remove("playing");
	avatar.style.animationPlayState = 'paused';
	btnPlay.classList.add('bx-play');
	btnPlay.classList.remove('bx-pause');
	audio.pause();
}
nextSong = ()=>{
	songIndex++;
	if(songIndex > arraySongs.length - 1){
		songIndex = 0;
	}
	loadSong(songIndex);
}
prevSong = ()=>{
	songIndex--;
	if(songIndex < 0){
		songIndex = arraySongs.length -1;
	}
	loadSong(songIndex);
}
updateProgress = (e)=>{
	const { currentTime, duration } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progressBar.style.width = `${progressPercent}%`;
	currentTimeDisplay.textContent = formatTime(currentTime);
}
setProgress = (e)=>{
	const width = e.offsetX;
	const progress = e.currentTarget;
	const progressBarWidth = (width / progress.clientWidth) * 100;
	progressBar.style.width = `${progressBarWidth}%`;
	let { duration } = audio;
	audio.currentTime = (width * duration) / progress.clientWidth;
}
audio.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", setProgress);
audio.addEventListener("ended", ()=>{
	nextSong();
	playSong();
})
btnPlay.addEventListener("click", ()=>{
	if(musicContent.classList.contains("playing")){
		pauseSong();
	}else {
		playSong();
	}
})
btnNext.addEventListener("click", ()=>{
	nextSong();
	setTimeout(()=>{
		playSong();
	}, 800)
})
btnPrev.addEventListener("click", ()=>{
	prevSong();
	setTimeout(()=>{
		playSong();
	}, 800)
})
list.addEventListener("click", (e)=>{
	songIndex = e.target.closest("li").getAttribute("data-index");
	loadSong(songIndex);
	playSong();
})
