import i18n from './i18n.js';
const defaultControlls = {
	seekTime: 10,
	//autoplay: true,
	controls: ['play-large', 'play', 'fast-forward', 'current-time', 'progress', 'duration', 'mute', 'settings', 'volume', 'fullscreen', 'airplay'],
	settings: ['captions', 'speed', 'quality'],
	loadSprite: true,
	iconPrefix: 'icon',
	iconUrl: '../../../../template/assets/sprite.svg',
	tooltips: {
		controls: true,
		seek: true,
	},
	ratio: "16:9",
	i18n,
}
export default defaultControlls;