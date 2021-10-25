import defaultControlls from './controll.js';

document.addEventListener("DOMContentLoaded", () => {
	const video = document.querySelector("video");
	const source = video.getElementsByTagName("source")[0].src;

	if (Hls.isSupported()) {
		const hls = new Hls();
		hls.loadSource(source);
		hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
			const availableQualities = hls.levels.map((l) => l.height)
			defaultControlls.quality = {
				default: availableQualities[0],
				options: availableQualities,
				forced: true,    
				onChange: (e) => updateQuality(e),
			}
			const player = new Plyr(video, defaultControlls);
		});
		hls.attachMedia(video);
		window.hls = hls;
	}
	else{
		const player = new Plyr(video, defaultControlls);
	}
	const updateQuality = (newQuality) =>{
		window.hls.levels.forEach((level, levelIndex) => {
			if (level.height === newQuality) {
				console.log("Found quality match with " + newQuality);
				window.hls.currentLevel = levelIndex;
			}
		})
	}
})
