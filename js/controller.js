var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var is_android = navigator.platform.toLowerCase().indexOf("android") > -1;
if(is_firefox && is_android){
	alert ('Мобильный firefox не отображает все это великолепие')
}

document.addEventListener('DOMContentLoaded', function(){

function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};
function shuffle(o, bRand){
	if(bRand){
    for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);
	}
  return o;
};

function _formatText(sText){
	return sText?sText.split("|").map(el=>`<p>${el}</p>`).join("\r\n")
				.replace(/\[([^\[\]]+)\]/g, "<b>$1</b>")
				.replace(/\{([^\[\]]+)\}/g, "<i>$1</i>"):"";
}

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


Vue.component('die', {
	props: {		
		side: {
			type: Number,
			default: 1
		},
		rolling: {
			type: Boolean,
			default: false
		}
		
	},
	data: function(){
		return {
			bouce_active: false
		}
	},
	methods: {
		
	},
	computed: {
		_side: function(){
			return `show-${this.side}`;
		},
		_bounce: function(){
			return this.rolling?`bounce-${randd(1,5)}`:"";
		},
		_roll: function(){
			return this.rolling?`roll-${randd(1,5)}`:"";
		},
		_stop: function(){
			return this.rolling==false?`stop-${this.side}`:"";
		}
	},
	created: function(){
		
	},
	template: `<div :class="[{scene: true}, _bounce]">
	<div class="cube" :class="[_roll, _stop]">
		<div class="cube__face cube__face--1">⚀</div>
		<div class="cube__face cube__face--2">⚁</div>
		<div class="cube__face cube__face--3">⚂</div>
		<div class="cube__face cube__face--4">⚃</div>
		<div class="cube__face cube__face--5">⚄</div>
		<div class="cube__face cube__face--6">⚅</div>
	</div>
</div>`
});

	
var app = new Vue({
	el: '#app',
	data: {
		data: {},

		random_data: {
			main: [],
			extra: []
		},

		aQuestionText: [
			"С чего же всё началось?",
			"С чего же началось на этот раз?",
			"Как всё начиналось?",
			"А что на этот раз?"
		],
		aButtontexts: [
			"Узнать",
			"Всё было совсем не так",
			"Ещё",
			"Продолжай",
			"Ещё вариант",
			"Давай по новой"
		],
		
		menu: [
			{
				title: "Информация об инструменте",
				icon: "📁",
				value: true
			},
			{
				title: "Данные таблиц",
				icon: "💾",
				value: false
			},
			{
				title: "Генератор имен",
				icon: "🧑‍🤝‍🧑",
				value: false,
				type: 'link',
				url: 'https://tentaculus.ru/names/index.html#list=tftl&sex=any',
			}
		],
		
		dice: [
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
			{
				value: 1,
				animation: 1,
				height: 1,
				rolling: false
			},
		],
				
		showPreloader: true,
		//showInfo: true,

		oConfig: {},
		bAppIsReady: false,
		bDebug: location.href.includes("debug=true"),
		
		bModalWinShow: false,
		sModalWinCont: ""
	},

	computed: {
		sButtonText: function(){
			if(this.random_data.main.length || this.random_data.extra.length ) {
				let nMax = this.aButtontexts.length-1;
				return this.aButtontexts[randd(0, nMax)];
			} else {
				return this.aButtontexts[0];
			}
		},
		sQuestionText: function(){
			if(this.random_data.main.length || this.random_data.extra.length ) {
				let nMax = this.aQuestionText.length-1;
				return this.aQuestionText[randd(0, nMax)];
			} else {
				return this.aQuestionText[0];
			}
		},
		
		showInfo: function(){
			return this.menu.find(el=>el.icon=="📁").value;
		},
		
		showTables: function(){
			return this.menu.find(el=>el.icon=="💾").value;
		},
		
		tablesData: function(){
			let oDieDictIco = {
				"1": "⚀ Единицы",
				"2": "⚁ Двойки",
				"3": "⚂ Тройки",
				"4": "⚃ Четверки",
				"5": "⚄ Пятерки",
				"6": "⚅ Шестерки"
			}
			let oDieDict = {
				"1": "eдиницы",
				"2": "двойки",
				"3": "тройки",
				"4": "четверки",
				"5": "пятерки",
				"6": "шестерки"
			}
			let oData = lib_TFTL.data;
			oData.forEach(el=>{
				el.dieNames = oDieDictIco[el.die] || "Одиночные цифры";
				
				el.subs.forEach((item, i)=>{
					item.info = `${item.die? "": i+2} ${oDieDict[item.die || el.die]}`;
				});
			});
			
			return oData;
		}
	},
	mounted: function() {
		if(this.bDebug) {
				alert('mount start');
			}
		
		if(this.bDebug) {
			alert('lib version: '+lib_TFTL.version)
		}
		
		this.dice.forEach((el, i)=>{
			el.value = randd(1,6)
		});
		
		this.loadConfigData();
		// this.structure = lib_TFTL.getStructure();
		// if(this.bDebug) {
			// alert('structure length: '+this.structure.length)
		// }
		
		
		// this.dm_helper.sources = this.structure[0].sub;
		
		// if(this.bDebug) {
			// alert('sources length: '+this.dm_helper.sources.length)
		// }
		
		// this.dm_helper.sources.forEach(el=>{el.active = el.key=='common'});
		
		// this.updateHash();
		//this._setMoveLinks();
		// this.getHash();
		
		// let oLoader = document.querySelector("#loader_overflow");
		// if(oLoader) {
			// oLoader.classList.add("hidden");
			// setTimeout(function(){oLoader.remove()}, 600);
		// }
		setTimeout(function(){
			this.showPreloader=false; 
			this.bAppIsReady = true;
			if(this.bDebug) {
				alert('redy: '+this.bAppIsReady);
			}
		}.bind(this), 300);
		
		//this.bAppIsReady = true;		
		
		if(this.bDebug) {
			alert('redy: '+this.bAppIsReady);
		}
		
		//window.addEventListener('hashchange',()=>{this.getHash();})
		
		//this._random();
	},
	methods: {
		_random: function(){
			//this.random_data = lib_TFTL.getHook({showLog: true});
			this.roll();
		},
		
		menu_click: function(oItem){
			let oMenuItem = this.menu.find(el=>el.icon==oItem.icon);
			if(oMenuItem.type=='link') {
				window.open(oMenuItem.url);
			} else {
				oMenuItem.value = !oMenuItem.value;
			}
			
			this.setConfig('menu', this.menu.map(el=>el.value));
		},
		
		_sleep: async function(nMs=1500){
			return new Promise((resolve)=>{setTimeout(()=>{				
				resolve()
			}, nMs)});
		},
		_animate_roll: async function(aSet){
			let aSorted = aSet.sort();
			this.dice.forEach((el, i)=>{
				el.rolling = true;
				el.stop = false;
			});
			await this._sleep(1000);
			this.dice.forEach((el, i)=>{
				el.rolling = false;
				el.stop = true;
				el.value = Number(aSorted[i])
			});
			
			await this._sleep(600);
			
			this.dice.forEach((el, i)=>{
				el.rolling = false;
			});
		},
		
		roll: async function(){
			let set = lib_TFTL.getRandomSet();
			// dice animation
			await this._animate_roll(set);
			this.random_data = lib_TFTL.getHook({showLog: true, set: set});
			
		},
		
		
		setConfig: function (prop, val) {
			if(prop && val != undefined && this.oConfig) {
				this.oConfig[prop] = val;
				localStorage.setItem("tftl_config", JSON.stringify(this.oConfig));
			}
		},
		getConfig: function (prop) {
			this.oConfig = JSON.parse(localStorage.getItem("tftl_config")) || {};
			if(prop!=undefined) {
				return localStorage.getItem("tftl_config")? this.oConfig[prop] : null;
			}
			return ""; 
		},
		
		loadConfigData: function(){
			let aMenuSelected = this.getConfig("menu");
			if(aMenuSelected){
				this.menu.forEach((el, i)=>{
					el.value = aMenuSelected[i];
				}) 				
			}		
			
		},
		
	}
});

});