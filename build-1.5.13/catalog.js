var styleCatalog = 1;
var urlGenerate = config["titels_api"]+"getUpdates?";
var num = 36;
var after = 0;
var SortVisual = 0;

function page_catalog() {
	after = 0;

  document.getElementById('app').innerHTML = `
	<!-- Блок Сортировки	 -->
	<div class="SortingBlock" id="SortingBlock" style="display: none">
		<div class="SortingBlockForm">
			<select class="SortingChosen" id="SortingGenres">
				<option value="0" selected>Выбрать жанры</option>
			</select>
			<select class="SortingChosen" id="SortingYears">
				<option value="0" selected>Выбрать год</option>
			</select>
			<select class="SortingChosen" id="SortingSeason">
				<option value="0" selected>Выбрать сезон</option>
				<option value="1">Зима</option>
				<option value="2">Весна</option>
				<option value="3">Лето</option>
				<option value="4">Осень</option>
			</select>
			<span class="SortingContainer">
				<select class="SortingChosen" id="SortingOrderBy">
					<option value="" selected>Сортировать по ...</option>
					<option value="&order_by=season.year">Году</option>
					<option value="&order_by=code">Названию</option>
					<option value="&order_by=in_favorites">Популярности</option>
					<option value="&order_by=type.series">Количеству серий</option>
					<option value="&order_by=season.code">Типу</option>
				</select>
				<label class="SortingCheckboxContainer">
					<input type="checkbox" checked="checked" id="SortingChecUpTop">
					<span class="SortingCheckmark">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"/></svg>
					</span>
				</label>
			</span>	
			<button class="SortingButton" onclick="ClearSortingTitles()">Сбросить</button>
		</div>
	</div>



	<!-- Блок Каталог	 -->
	<div class="CatalogBlock">
		<div class="CatalogList">
			<div style="display: flow-root;">
				<h1 style="float: left;">Каталог</h1>

				<div class="CatalogListButton" onclick="setCatalogStyle()" id="CatalogGrid">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g><path fill="var(--ColorThemes3)" d="M207.16667,56.5v37.66667c0,5.198 -4.21867,9.41667 -9.41667,9.41667h-169.5c-5.198,0 -9.41667,-4.21867 -9.41667,-9.41667v-37.66667c0,-10.35833 8.475,-18.83333 18.83333,-18.83333h150.66667c10.35833,0 18.83333,8.475 18.83333,18.83333zM28.25,122.41667h169.5c5.198,0 9.41667,4.21867 9.41667,9.41667v37.66667c0,10.35833 -8.475,18.83333 -18.83333,18.83333h-150.66667c-10.35833,0 -18.83333,-8.475 -18.83333,-18.83333v-37.66667c0,-5.198 4.21867,-9.41667 9.41667,-9.41667z"></path></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setCatalogStyle()" id="CatalogGrid_Small" style="display:none;">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><g><path fill="var(--ColorThemes3)" d="M21.5,21.5c-3.96317,0 -7.16667,3.2035 -7.16667,7.16667v50.16667h35.83333v-57.33333zM64.5,21.5v57.33333h43v-57.33333zM121.83333,21.5v57.33333h35.83333v-50.16667c0,-3.96317 -3.2035,-7.16667 -7.16667,-7.16667zM14.33333,93.16667v50.16667c0,3.96317 3.2035,7.16667 7.16667,7.16667h28.66667v-57.33333zM64.5,93.16667v57.33333h43v-57.33333zM121.83333,93.16667v57.33333h28.66667c3.96317,0 7.16667,-3.2035 7.16667,-7.16667v-50.16667z"></path></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setCatalogStyle()" id="CatalogList" style="display:none;">
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226 226"><g><path fill="var(--ColorThemes3)" d="M47.08333,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,28.25c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM47.08333,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333zM141.25,122.41667c-10.38658,0 -18.83333,8.44675 -18.83333,18.83333v37.66667c0,10.38658 8.44675,18.83333 18.83333,18.83333h37.66667c10.38658,0 18.83333,-8.44675 18.83333,-18.83333v-37.66667c0,-10.38658 -8.44675,-18.83333 -18.83333,-18.83333z"></path></g></svg>
				</div>

				<div class="CatalogListButton" onclick="setFilterCatalogStyle()" id="FilterOpen">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" id="filterColor1" style="fill: var(--ColorThemes3);width: 24px;margin-top: 1px;" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m21 2h-18a1.0007 1.0007 0 0 0 -.8193 1.5732l6.8193 9.7422v7.6846a1.0015 1.0015 0 0 0 1.53.8481l4-2.5a1.0014 1.0014 0 0 0 .47-.8481v-5.1846l6.8193-9.7422a1.0007 1.0007 0 0 0 -.8193-1.5732z"></path></g></svg>
				</div>
				<div class="CatalogListButton" onclick="setFilterCatalogStyle()" id="FilterClose" style="display:none;">
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 24 24" id="filterColor2" style="fill: var(--ColorThemes3);width: 24px;margin-top: 1px;" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="M9,21V13.3154L2.1807,3.5732A1.0006,1.0006,0,0,1,3,2H21a1.0006,1.0006,0,0,1,.8193,1.5732L15,13.3154V18.5a1.0013,1.0013,0,0,1-.47.8481l-4,2.5A1.001,1.001,0,0,1,9,21ZM4.9209,4l5.8984,8.4268A1.0022,1.0022,0,0,1,11,13v6.1958l2-1.25V13a1.0022,1.0022,0,0,1,.1807-.5732L19.0791,4Z"></path></g></svg>
				</div>

				<div class="CatalogListButton" onclick="appReloadApi()" id="UpdateMobileApi">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"><path fill="var(--ColorThemes3)" d="M86,21.5c-34.27,0 -62.30939,26.89969 -64.30404,60.67871l-7.14567,-7.14567c-1.01222,-1.0424 -2.4033,-1.63064 -3.85628,-1.6307c-2.18814,0.00053 -4.1576,1.32735 -4.98006,3.35504c-0.82245,2.02769 -0.33375,4.35156 1.23575,5.87624l16.125,16.125c2.0991,2.09823 5.50149,2.09823 7.60059,0l16.125,-16.125c1.40412,-1.34815 1.96971,-3.35005 1.47866,-5.23364c-0.49105,-1.88359 -1.96202,-3.35456 -3.84561,-3.84561c-1.88359,-0.49105 -3.88549,0.07455 -5.23364,1.47866l-6.73275,6.73275c2.15533,-27.75469 25.2122,-49.51579 53.53304,-49.51579c18.18886,0 34.16487,9.01846 43.90283,22.80876c1.10757,1.56927 2.96825,2.42838 4.88105,2.25367c1.91279,-0.17471 3.58705,-1.35669 4.392,-3.10064c0.80495,-1.74395 0.61828,-3.78487 -0.48968,-5.35386c-11.66886,-16.52471 -30.93522,-27.35791 -52.6862,-27.35791zM145.04802,71.66667c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471l-16.125,16.125c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l6.73275,-6.73275c-2.15534,27.75469 -25.2122,49.51579 -53.53304,49.51579c-18.18886,0 -34.16487,-9.01846 -43.90283,-22.80876c-1.10757,-1.56927 -2.96825,-2.42838 -4.88105,-2.25367c-1.91279,0.17471 -3.58705,1.35669 -4.392,3.10064c-0.80495,1.74395 -0.61828,3.78487 0.48968,5.35386c11.66886,16.52471 30.93522,27.35791 52.6862,27.35791c34.27,0 62.30939,-26.89969 64.30403,-60.67871l7.14567,7.14567c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-16.125,-16.125c-1.02666,-1.02708 -2.4252,-1.59508 -3.87728,-1.57471z"></path></svg>
				</div>
			</div>
			<div id="LineGeneratorCatalog" class="LineGenerator">
				<!-- Карточки с контентом -->


			</div>

			<!-- Картинка в случае отсутствия ответа  -->
			<div id="FilterNone" style="display:none;">
				<img src="img/libriatyan/4.webp" style="width: 145px;">
				<br /><br />
				<p style="color: var(--ColorThemes3);">Ничего не найдено...</p>
			</div>

			<!-- Анимация загрузки -->
			<div id="LoadAnimCatalog" class="LoadAnim" style="display:none;">
				<svg style="width: 45px;" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="64px" height="64px" viewBox="0 0 128 128" xml:space="preserve"><g><path d="M64 9.75A54.25 54.25 0 0 0 9.75 64H0a64 64 0 0 1 128 0h-9.75A54.25 54.25 0 0 0 64 9.75z" fill="#d53c3c"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>
			</div>	

			<!-- Кнопка включения автодобавления тайтлов  -->
			<button id="LoadApiCatalogButton" class="LoadApiButton" onclick="LoadApiCatalog();FilterNoneTop();" style="display:none;">Показать ещё</button>
		</div>
	</div>
  `;

	getCatalogStyle();

	LoadApiGenresCatalog();
	LoadApiYearsCatalog();

	if(CatalogsList == null) {
		LoadApiCatalog();
	} else {
		GeneratorCatalog();
		document.getElementById("LoadApiCatalogButton").style.display = "";
	}

	appWidth();
  Scroll_to_top();
	SortingEvent();
}


// Функция обновления стилизации
function getCatalogStyle(){
	if(localStorage.getItem('styleCatalog')){
		styleCatalog = localStorage.getItem('styleCatalog');
	} else {
		styleCatalog = 0;
		localStorage.setItem('styleCatalog', '0');
	}
	
	if(styleCatalog == '0'){
		document.getElementById('CatalogGrid').style.display = "none";
		document.getElementById('CatalogGrid_Small').style.display = "none";
		document.getElementById('CatalogList').style.display = "block";
	} else if(styleCatalog == '2'){
		document.getElementById('CatalogGrid').style.display = "none";
		document.getElementById('CatalogGrid_Small').style.display = "block";
		document.getElementById('CatalogList').style.display = "none";
	} else {
		document.getElementById('CatalogGrid').style.display = "block";
		document.getElementById('CatalogGrid_Small').style.display = "none";
		document.getElementById('CatalogList').style.display = "none";
	}
}
function setCatalogStyle(){
	if(styleCatalog == 1){
		styleCatalog = 2;
		localStorage.setItem('styleCatalog', '2');
		document.getElementById('CatalogGrid').style.display = "none";
		document.getElementById('CatalogList').style.display = "none";
		document.getElementById('CatalogGrid_Small').style.display = "";
	} else if(styleCatalog == 2){
		styleCatalog = 0;
		localStorage.setItem('styleCatalog', '0');
		document.getElementById('CatalogGrid').style.display = "none";
		document.getElementById('CatalogList').style.display = "";
		document.getElementById('CatalogGrid_Small').style.display = "none";
	} else {
		styleCatalog = 1;
		localStorage.setItem('styleCatalog', '1');
		document.getElementById('CatalogGrid').style.display = "";
		document.getElementById('CatalogList').style.display = "none";
		document.getElementById('CatalogGrid_Small').style.display = "none";
	}
	document.getElementById('LineGeneratorCatalog').innerHTML = "";
	GeneratorCatalog(1);
}

function FilterNoneTop(){
	document.getElementById('FilterNone').style.top = "auto";
	document.getElementById("LoadAnimCatalog").style = "top: 10px;position: relative;left: auto;";
}

// Функция для видимости фильтров
function setFilterCatalogStyle(){
	if(styleFilter == 1){
		styleFilter = 0;
		document.getElementById('FilterOpen').style.display = "none";
		document.getElementById('FilterClose').style.display = "";
		document.getElementById('SortingBlock').style.display = "";
	} else {
		styleFilter = 1;
		document.getElementById('FilterOpen').style.display = "";
		document.getElementById('FilterClose').style.display = "none";
		document.getElementById('SortingBlock').style.display = "none";
	}
}

// Функция запуска сортировки
function SortingEvent(){
	document.querySelector("#SortingGenres").addEventListener('change', function (e) {
		SortingTitles()
	})
	document.querySelector("#SortingYears").addEventListener('change', function (e) {
		SortingTitles()
	})
	document.querySelector("#SortingSeason").addEventListener('change', function (e) {
		SortingTitles()
	})
	document.querySelector("#SortingOrderBy").addEventListener('change', function (e) {
		SortingTitles()
	})
	document.querySelector("#SortingChecUpTop").addEventListener('click', function (e) {
		SortingTitles()
	})
}

// Функция сортировки
function SortingTitles(){
	SortVisual = 1;
	num = 36;
	after = 0;
	CatalogsList = null;

  var genres_sort = document.getElementById("SortingGenres").value;
  var years_sort = document.getElementById("SortingYears").value;
  var season_sort = document.getElementById("SortingSeason").value;
  var orderBy_sort = document.getElementById("SortingOrderBy").value;
  var genres = '',
      years = '',
      season = '',
      and_1 = '',
      and_2 = '',
      query_1 = '';

  if (genres_sort != 0) {
    genres = '{genres} ~= ("'+genres_sort+'")';
  }
  if (years_sort != 0) {
    years = '{season.year} == '+years_sort;
  }
  if (season_sort != 0) {
    season = '{season.code} == '+season_sort;
  }
  if (genres_sort != 0 && years_sort != 0) {
    and_1 = ' and ';
  }
  if (years_sort != 0 && season_sort != 0 || genres_sort != 0 && season_sort != 0) {
    and_2 = ' and ';
  }
  if (genres_sort == 0 && years_sort == 0 && season_sort == 0 && orderBy_sort != '') {
    query_1 = '1'
  }

  var checkbox_sorting = '0';
  if (document.querySelector('#SortingChecUpTop:checked')) {
     checkbox_sorting = '1';
  }
  if (genres_sort == 0 && years_sort == 0 && season_sort == 0 && orderBy_sort == '') {
		urlGenerate = config["titels_api"]+'getUpdates?';
  } else {
		urlGenerate = config["titels_api"]+'advancedSearch?query='+ query_1 + genres + and_1 + years + and_2 + season + orderBy_sort +'&sort_direction='+checkbox_sorting+'&';
  }

	document.getElementById('LineGeneratorCatalog').innerHTML = "";
	LoadApiCatalog()
}

// Функция визуализации сортировки
function exSortVisual(){
	if(SortVisual == 0){
		document.getElementById('filterColor1').style.fill = "var(--ColorThemes3)";
		document.getElementById('filterColor2').style.fill = "var(--ColorThemes3)";
	} else {
		document.getElementById('filterColor1').style.fill = "var(--PrimaryColor)";
		document.getElementById('filterColor2').style.fill = "var(--PrimaryColor)";
	}
}

// Функция сброса сортировки
function ClearSortingTitles(){
	SortVisual = 0
	
	num = 36;
	after = 0;
	CatalogsList = null;

	document.querySelector("#SortingGenres").value = 0
	document.querySelector("#SortingYears").value = 0
	document.querySelector("#SortingSeason").value = 0
	document.querySelector("#SortingOrderBy").value = ""
	document.querySelector("#SortingChecUpTop").checked=true
	
	urlGenerate = config["titels_api"]+'getUpdates?';

	document.getElementById('LineGeneratorCatalog').innerHTML = "";
	LoadApiCatalog()
}


// Функции запросов к Api
function LoadApiCatalog() {
	if(CatalogsList != null){
		after = CatalogsList.length;	
	}

	// Запуск анимации загрузки контента
	document.getElementById("LoadAnimCatalog").style.display = "block";
	document.getElementById("LoadApiCatalogButton").style.display = "none";

	// Запрос к Api 
	var url = urlGenerate + "filter=id,names,posters.medium,player.series,description,genres,type&limit="+num+"&after="+after;
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
		document.getElementById("LoadAnimCatalog").style.display = "none";
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		if(data.length == 0) {
			document.getElementById("FilterNone").style = "top: 10px;position: relative;left: auto;";
			document.getElementById("LoadApiCatalogButton").style.display = "none";
		} else {
			document.getElementById("FilterNone").style.display = "none";
			document.getElementById("LoadApiCatalogButton").style.display = "";
		}

		if(CatalogsList == null) CatalogsList = data;
		else Array.prototype.push.apply(CatalogsList, data);

		GeneratorCatalog();
		preloader_none();
  })
  .catch(function (error) {
    console.log('error', error)
  })
}
function LoadApiGenresCatalog() {
	// Запрос к Api 
  var url = config["titels_api"]+"getGenres";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		for (let i = 0; data.length > i; i++) {
			var div_Genres = document.createElement('option');
			document.getElementById('SortingGenres').appendChild(div_Genres);
			div_Genres.value = data[i];
			div_Genres.innerHTML = data[i];
		}
  })
  .catch(function (error) {
    console.log('error', error)
  })
}
function LoadApiYearsCatalog() {
	// Запрос к Api 
  var url = config["titels_api"]+"getYears";
  fetch(url)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
		for (let i = 0; data.length > i; i++) {
			var div_Genres = document.createElement('option');
			document.getElementById('SortingYears').appendChild(div_Genres);
			div_Genres.value = data[i];
			div_Genres.innerHTML = data[i];
		}
  })
  .catch(function (error) {
    console.log('error', error)
  })
}


// Функции заполнения контента
function GeneratorCatalog(n) {
	exSortVisual() // Проверка визуализации сортировки

	if(n == 1) {
		numAft = 0
	} else {
		numAft = after
	}
	for (let i = numAft; CatalogsList.length > i; i++) {
		var genres = '', TextSerie = '', SerieLength = '';
		for(let g = 0; CatalogsList[i].genres.length > g; g++){
			if(genres == '') genres = CatalogsList[i].genres[g];
			else genres = genres + ', ' +CatalogsList[i].genres[g];
		}
		if(CatalogsList[i].player.series.last != null){
			if(CatalogsList[i].type.code == 0){
				SerieType = "Фильм"
			} else if(CatalogsList[i].type.code == 2){
				SerieType = "OVA"
			} else if(CatalogsList[i].type.code == 3){
				SerieType = "ONA"
			} else if(CatalogsList[i].type.code == 4){
				SerieType = "Спешл"
			} else {
				SerieType = "Серия"
			}

			SerieLength = CatalogsList[i].type.series != null ? ` из ${CatalogsList[i].type.series}` : ""

			TextSerie = `<div class="LineCard-TextSerie">${SerieType} ${CatalogsList[i].player.series.last}${SerieLength}</div>`;

			var seriesSH = "Нэма...";
			if(Object.keys(CatalogsList[i].player).length != 0){
				seriesSH = `${SerieType} ${CatalogsList[i].player.series.last}${SerieLength}`;
			}
		}

		if (localStorage.getItem('postersMode') == 'webp') {
			var stylePoster = `<img src="${config["webpPosters"]}${CatalogsList[i].id}.webp" alt="">`
		} else {
			var stylePoster = `<img src="${config["posters"]}${CatalogsList[i].posters.medium.url}" alt="">`
		}

		if(styleCatalog == 0){
			var div = document.createElement('div');
			document.getElementById('LineGeneratorCatalog').appendChild(div);
			div.className = 'LineCard-MediumHovers';
			div.innerHTML += `
				${TextSerie}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
				${stylePoster}
				<div class="LineCard-Hover" onclick='goRoute("/release", {id:${CatalogsList[i].id}})'>
					<p class="LineCard-Hover-Name">${CatalogsList[i].names.ru}</p>
					<p class="LineCard-Hover-Genres">${genres}</p>
					<p class="LineCard-Hover-Description">${CatalogsList[i].description}</p>
				</div>
			`;
		} else if(styleCatalog == 2){
			var div = document.createElement('div');
			document.getElementById('LineGeneratorCatalog').appendChild(div);
			div.className = 'LineCard-SmallHovers';
			div.innerHTML += `
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"/></svg>
				${stylePoster}
				<a class="LineCard-Hover" onclick="goRoute('/release', {id:${CatalogsList[i].id}})">
					<p class="LineCard-Hover-Serie">${seriesSH}</p>
				</a>
			`;
		} else {
			var div = document.createElement('div');
			document.getElementById('LineGeneratorCatalog').appendChild(div);
			div.className = 'LineCard-Long';
			div.setAttribute("onclick", `goRoute("/release", {id:${CatalogsList[i].id}})`);
			div.innerHTML += `
				<div class="LineCard-Long-Left">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
					${stylePoster}
				</div>
				<div class="LineCard-Long-Right">
					<p class="LineCard-Long-Name">${CatalogsList[i].names.ru}</p>
					<p class="LineCard-Long-Genres">${genres}</p>
					<p class="LineCard-Long-Description">${CatalogsList[i].description}</p>
				</div>
		`;
		}
	}
}