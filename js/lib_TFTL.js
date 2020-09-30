(function(window){
  // You can enable the strict mode commenting the following line  
  // 'use strict';
		
	var data = [
		{
			name: "Machines",
			title: "Машины",
			die: "1",
			subs: [
				{
					name: "Stranger",
					title: "Необычные",
					list: [
						"домашняя техника ведёт себя необъяснимым образом",
						"в городе появляется новый популярный гаджет",
					]
				},
				{
					name: "Impossible",
					title: "Невозможные",
					list: [
						"телевизор обретает разум",
						"домашний робот сходит с ума",
						"уличные фонари обмениваются сообщениями на азбуке Морзе",
					]
				},
				{
					name: "Dangerous",
					title: "Опасные",
					list: [
						"игрушечный инопланетянин начинает убивать",
						"строительные машины возводят стену вокруг города",
						"роботы поднимают восстание",
					]
				}
			]
		
		},
		{
			name: "Group",
			title: "Взаимоотношения",
			die: "2",
			subs: [
				{
					name: "Arguments",
					title: "Ссора",
					list: [
						"споры внутри группы",
						"у кого-то появляется новый друг",
						"кто-то из ребят в обиде на остальных",
					]
				},
				{
					name: "Rifts",
					title: "Разлад",
					list: [
						"дружба героев под угрозой",
						"в группе появляется новый член",
						"кого-то из ребят отправляют в летнюю школу",
					]
				},
				{
					name: "Change",
					title: "Перемены",
					list: [
						"клуб «охотников на монстров» распадается",
						"кто-то переезжает на Аляску",
						"кто-то из ребят начинает встречаться",
					]
				}
			]
		
		},
		{
			name: "Creatures",
			title: "Создания",
			die: "3",
			subs: [
				{
					name: "Stranger",
					title: "Необычные",
					list: [
						"местная собака ведёт себя странно",
						"поблизости видели дикую пуму",
						"дети находят следы бигфута",
					]
				},
				{
					name: "Impossible",
					title: "Невозможные",
					list: [
						"местные птицы крадут мелочь",
						"дети находят яйцо динозавра",
						"дети находят опустевшее логово снежного человека",
					]
				},
				{
					name: "Dangerous",
					title: "Опасные",
					list: [
						"что-то огромное и зловещее очнулось ото сна",
						"школу заполоняют разумные крысы",
						"йети в моём гараже и он чертовски зол!",
					]
				}
			]
		
		},
		{
			name: "Phisics",
			title: "Пространство и время",
			die: "4",
			subs: [
				{
					name: "Stranger",
					title: "Необычные",
					list: [
						"диван в гостиной поедает мелочь",
						"часы на спортивной площадке идут медленнее, чем должны",
						"мои кроссовки намагнитились",
					]
				},
				{
					name: "changing",
					title: "Изменения",
					list: [
						"поблизости появилась блуждающая временная аномалия",
						"открылся портал в другое время",
						"я могу силой мысли запитать тостер",
					]
				},
				{
					name: "Weird",
					title: "Дикость",
					list: [
						"взрослые стремительно молодеют",
						"через портал на заднем дворе прибывают рыцари",
						"все уверены, что наш город находится в Канзасе и всегда там был",
					]
				}
			]
		
		},
		{
			name: "Organisations",
			title: "Правительство и корпорации",
			die: "5",
			subs: [
				{
					name: "Minor",
					title: "Незначительные происшествия",
					list: [
						"небольшая утечка токсичных отходов",
						"«нам просто нужна плёнка из твоей камеры, сынок»",
						"зачем они купили эту землю?",
					]
				},
				{
					name: "jail",
					title: "За это сажают",
					list: [
						"незаконные эксперименты в лаборатории",
						"нелегальное захоронение токсичных отходов",
					]
				},
				{
					name: "Rotten",
					title: "Все прогнило",
					list: [
						"угроза национальным интересам",
						"государственная измена",
						"весь город — объект эксперимента?",
					]
				}
			]
		
		},
		{
			name: "Aliens",
			title: "Инопланетяне",
			die: "6",
			subs: [
				{
					name: "MinoFirstr",
					title: "Контакты первой степени",
					list: [
						"очевидцы НЛО",
						"сообщения со звёзд",
					]
				},
				{
					name: "Second",
					title: "Контакты второй степени",
					list: [
						"артефакты инопланетного происхождения",
					]
				},
				{
					name: "Third",
					title: "Контакты третьей степени",
					list: [
						"встреча с инопланетянами",
						"похищение",
						"база пришельцев в горах рядом с городом",
					]
				}
			]
		
		},
		{
			name: "Extra",
			title: "Дополнительно",
			subs: [
				{
					name: "Local",
					title: "Соседи",
					die: "1",
					list: [
						"Местные жители ведут себя чрезвычайно странно"
					]
				},
				{
					name: "Event",
					title: "Мероприятия",
					die: "2",
					list: [
						"День рождения",
						"городской праздник",
						"общественное мероприятие."
					]
				},
				{
					name: "Family",
					title: "Близкие",
					die: "3",
					list: [
						"Что-то связанное с домашним питомцем",
					]
				},
				{
					name: "Past",
					title: "Прошлое",
					die: "4",
					list: [
						"Я и забыл об этом! Что-то из прошлого возвращается, чтобы преследовать героев.",
						"Неожиданная встреча с товарищем по летнему лагерю",
					]
				},
				{
					name: "Strangeers",
					title: "Незваные гости",
					die: "5",
					list: [
						"В деле замешан кто-то недавно прибывший в город.",
						"С новыи соседями что-то не так",
					]
				},
				{
					name: "Wildcard",
					title: "Нечто невероятное",
					die: "6",
					list: [
						"дети оказываются в фильме, шагнув через его постер",
						"дети сталкиваются со своими злыми двойниками",
						"герои встречают президента."
					]
				}
			]
		
		}
	]
	
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	function randd(min, max) {
		return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
	};
	function shuffle(o){		
		for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);		
		return o;
	};

	/**
	* Returns roll results
	*
	* @param {string} sDie - string like 3d6+8 
	*/
	function parseDie(sDie){
		// nDn+n
		let oDice = sDie.match(/(\d+)?d(\d+)([+-]\d+)?/i); // 1,2,4,5
		
		let nDie = Number(oDice[2]);
		let nCount = Number(oDice[1]);
		let nMod = Number(oDice[3]);
		
		let nResult = 0;

		if(nDie) {
			nResult = randd(1,nDie);
		}
		if(nCount) {
			nResult = nResult*nCount;
		}
		if(nMod) {
			nResult = nResult+nMod;
		}
		return nResult;
	}

	function _getRandomSet(){
		let aNumbers = [1,2,3,4,5,6];
		let aFullSet = [];
		
		for (let i=0; i<6; i++) {
			aNumbers.forEach(el=>{aFullSet.push(el)});
		}
		
		aFullSet = shuffle(aFullSet);
		
		return aFullSet.splice(0, 7);
	}
	/**
	* translate number list to object dict
	*
	* @param {array} aSet - array of d6
	*/
	function _getGroups(aSet){
		let oSet = {};
		for (let i=1; i<7; i++) {
			oSet[i] = aSet.filter(el=>el==i).length;
		}
		
		return oSet;
	}
	/**
	* translate set to daat lists
	*
	* @param {object} oSet - dict - counts of numbers
	*/
	function _getResult(oSet){
		let aResult= [];
		let aExtra = [];
		for (let i=1; i<7; i++) {
			if(oSet[i]>0) {
				switch (Number(oSet[i])) {
					case 2: aResult.push(_getFromData(i, 2)); break;
					case 3: aResult.push(_getFromData(i, 3)); break;
					case 3: aResult.push(_getFromData(i, 4)); break;
					default: aExtra.push(_getFromExtra(i));
				}
			}
		}
		
		return {
			main: aResult,
			extra: aExtra
		};
	}
	
	function _getFromData(nIndex, nValue){
		let oRes = {};
		let oPart = data.find(el=>el.die == nIndex);
		if(oPart && oPart.subs) {
			oRes.group = oPart.title;
			let oSub = oPart.subs[nValue-2];
			if(oSub && oSub.list) {
				oRes.sub = oSub.title;
				let nMax =  oSub.list.length-1;
				let nIndex = randd(0, nMax);
				oRes.result = capitalizeFirstLetter(oSub.list[nIndex]);				
			}
		}
		
		return oRes;
	}
	function _getFromExtra(nIndex){
		let oRes = {};
		let oExtra = data.find(el=>el.name == "Extra");
		if(oExtra && oExtra.subs) {			
			let oSub = oExtra.subs.find(el=>el.die == nIndex);
			if(oSub && oSub.list) {
				oRes.sub = oSub.title;
				let nMax =  oSub.list.length-1;
				let nIndex = randd(0, nMax);
				oRes.result = capitalizeFirstLetter(oSub.list[nIndex]);			
			}
		}
		
		return oRes;
	}
	
	function _getHook(oParams){
		let aSet = _getRandomSet();
		if(oParams && oParams.showLog) {
			console.log("aSet: "+aSet.join(", "));
		}
		let oGroups = _getGroups(aSet);
		if(oParams && oParams.showLog) {
			console.log("oGroups: ");
			console.dir(oGroups);
		}
		return _getResult(oGroups);
	}

	function _init(){
		
	}
	function returnLibrary(){
    var _Lib = {};
		_init();
		
		_Lib.data = data;
		_Lib.randd = randd;
		_Lib.shuffle = shuffle;
		_Lib.parseDie = parseDie;
		
		
		_Lib.version = '30.09.2020';
		
		_Lib.getHook = _getHook;

    return _Lib;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.lib_TFTL) === 'undefined'){
    window.lib_TFTL = returnLibrary();
  }
})(window); // We send the window variable withing our function
