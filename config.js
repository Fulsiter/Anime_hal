if(!localStorage.getItem("GetMirror")) localStorage.setItem("GetMirror", "true");
mirror = localStorage.getItem("GetMirror");
mirror_preview = localStorage.getItem("GetMirrorPreview")
mirror_api = localStorage.getItem("GetMirrorAPI")
mirror_posters = localStorage.getItem("GetMirrorPosters");

let config = {
	'cache_prefix': CACHE_PREFIX,
	'cache_version': CACHE_VERSION,
	'g_apiKey': 'AIzaSyDnCKI8zpxJ5Iwpa7xpXx1jkKZY0Gr9yqo',
	'g_clientId': '116898535578-na8fsq2p1igt77ve615sa444ur2l1bvv.apps.googleusercontent.com',
	'domains': 'litelibria.com',
	'CustomPosters': "https://api.litelibria.com/preview/",
	'webpPreview': "https://api.litelibria.com/preview/",
	'webpPosters': "https://api.litelibria.com/posters/",
	'titels_api': localStorage.getItem("GetMirror") == "true" ? mirror_api : 'https://api.anilibria.tv/v2.13/',
	'posters': localStorage.getItem("GetMirror") == "true" ? mirror_posters : 'https://anilibria.tv',
}
let addresses = [
	{
		"previewLiteLibria": "https://api.litelibria.com/preview/",
		"previewT1MOXA": "https://api.7u7.uk/anilibria_bot/getThumbnail/",
		"optimizedImages": "https://api.litelibria.com/posters/"
	}
]