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


	
var app = new Vue({
	el: '#app',
	data: {
		data: {},

		random_data: {
			main: [],
			extra: []
		},

		aButtontexts: [
			"Узнать",
			"Всё было совсем не так",
			"Ещё",
			"Продолжай",
			"Ещё вариант",
			"Давай по новой"
		],
				
		showPreloader: true,
		showInfo: true,

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
		}
	},
	mounted: function() {
		if(this.bDebug) {
				alert('mount start');
			}
		
		if(this.bDebug) {
			alert('lib version: '+lib_TFTL.version)
		}
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
			this.random_data = lib_TFTL.getHook();
			
		},
		
	}
});

});