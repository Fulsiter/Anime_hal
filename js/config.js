if(!localStorage.getItem("GetMirror")) localStorage.setItem("GetMirror", "true");
mirror = localStorage.getItem("GetMirror");
mirror_preview = localStorage.getItem("GetMirrorPreview")
mirror_api = localStorage.getItem("GetMirrorAPI")
mirror_posters = localStorage.getItem("GetMirrorPosters");

let config = {
	'g_apiKey': 'AIzaSyDnCKI8zpxJ5Iwpa7xpXx1jkKZY0Gr9yqo',
	'g_clientId': '116898535578-na8fsq2p1igt77ve615sa444ur2l1bvv.apps.googleusercontent.com',
	'domains': 'litelibria.com',
	'CustomPosters': "https://api.7u7.uk/anilibria_bot/getThumbnail/",
	'webpPreview': "https://api.litelibria.com/preview/",
	'webpPosters': "https://api.litelibria.com/posters/",
	'titels_api': localStorage.getItem("GetMirror") == "true" ? mirror_api : 'https://api.anilibria.tv/v2.13/',
	'posters': localStorage.getItem("GetMirror") == "true" ? mirror_posters : 'https://anilibria.tv',
}
let mirrorUrlImages = [
	"https://anilibria.tv",
	"https://static-libria.weekstorm.one",
	"https://static.wwnd.space"
]
let mirrorUrlAPI = [
	"https://api.anilibria.tv/v2.13/",
	"https://litelibria.anilib.top/api/v2.13/",
	"https://litelibria.anilib.moe/api/v2.13/",
	"https://litelibria.anilib.one/api/v2.13/",
	"https://litelibria.anilib.icu/api/v2.13/"
]
