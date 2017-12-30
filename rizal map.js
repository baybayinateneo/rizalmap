
var rsr = Raphael('rizalmap', '3508', '2480');

var lugar = [];

var $rizalmap = $('#rizalmap');
var $infobox = $('.infobox');


// Fort 1
var fort1 = rsr.path("m 222.75175,-1822.7468 a 54.617203,54.617203 0 0 1 -54.6172,54.6172 54.617203,54.617203 0 0 1 -54.6172,-54.6172 54.617203,54.617203 0 0 1 54.6172,-54.6172 54.617203,54.617203 0 0 1 54.6172,54.6172 z");
fort1.attr({id: 'fort1',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'});
fort1.transform("").data('id', 'fort1'); 
lugar.push(fort1);

//Fort 2
var fort2 = rsr.path("m 336.1136,1768.3411 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
fort2.attr({id: 'fort2',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'fort2', 'lugar-name':'Unang bumisita kay Rizal ang mga Heswitang guro niya sa Ateneo: sina Padre Mata, Padre Viza, at Padre Faura. Pinaalala ni Rizal ang babala ni Faurang ikamamatay niya ang mga nobela. "Padre, isa ka ngang propeta!"'});
lugar.push(fort2);

//Fort 3
var fort3 = rsr.path("m 458.20972,1717.7521 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
fort3.attr({id: 'fort3',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'fort3', 'lugar-name':'Sinulat ni Rizal ang huling liham sa mga kaibigan. Sinulat niya rin ang tulang kilala ngayon bilang "Mi Ultimo Adios". Itinago niya ang kopya ng tula sa kanyang gasera."'});
lugar.push(fort3);

//Fort 4
var fort4 = rsr.path("m 272.2395,1935.1182 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
fort4.attr({id: 'path4514-05',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'fort4', 'lugar-name':'Dumalaw sa huling pagkakataon ang kanyang pamilya. Iniwan niya ang kanyang mga pamana: upuan kay Narcisa, at panyo, sinturon, at relo sa mga pamagking sina Angelica at Mauricio. Iniabot din niya kay Trinidad ang gaserang naglalaman ng kopya ng tula.'});
lugar.push(fort4);

//Fort 5
var fort5 = rsr.path("m 382.33561,1897.0796 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
fort5.attr({id: 'path4514-9-1',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'fort5', 'lugar-name':'Dumating si Josephine Bracken, at binigyan ni Rizal ng librong Imitations of Christ. Nakasulat sa libro: "To my dear and unhappy wife, Josephine, December 30th 1896." Hinagkan niya ang asawa.'});
lugar.push(fort5);

//Fort 6
var fort6 = rsr.path("m 509.69747,1882.1235 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
fort6.attr({id: 'path4514-0-3',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'fort6', 'lugar-name':'Nagsimula ang pagmartsa ni Rizal patungong Bagumbayan nang 6:30 ng umaga. Suot niya ay itim na coat at pantalon, puting kamisa, at chaleco. Kasabay niyang maglakad ang mga Heswitang sina Padre March at Padre Villaclara.'});
lugar.push(fort6);

//Postigo
var postigo = rsr.path("m 1143.8493,1807.8289 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
postigo.attr({id: 'path4514-0-3-2',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'postigo', 'lugar-name':'Nang dumaan si Rizal sa Puerta de Postigo, tumingala si Rizal sa langit at sinabing: "Kay ganda naman ng umagang ito! Sa mga umagang gaya nito madalas kaming maglakad ng aking mahal."'});
lugar.push(postigo);

//Ateneo
var ateneo = rsr.path("m 1477.0363,1694.6506 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
ateneo.attr({id: 'path4514-0-3-2-4',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'ateneo', 'lugar-name':'"Iyan ba ang Ateneo? Marami akong masasayang taon diyan."'});
lugar.push(ateneo);

//PLM
var plm = rsr.path("m 2129.0045,1423.1542 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
plm.attr({id: 'path4514-0-3-2-4-6',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'plm', 'lugar-name':'Sa Cuartel de Espana noong Disyembre 26, nilitis at hinatulan si Jose Rizal.'});
lugar.push(plm);

//San Juan de Dios
var sjdj = rsr.path("m 1476.302,798.83801 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
sjdj.attr({id: 'path4514-0-3-2-4-1',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'sjdj', 'lugar-name':'Sa Ospital de San Juan de Dios dinala ang bangkay.'});
lugar.push(sjdj);

//Bagumbayan
var bagumbayan = rsr.path("m 2851.2141,1750.8726 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
bagumbayan.attr({id: 'path4514-0-3-2-4-1-9',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'bagumbayan', 'lugar-name':'Alas siyete ng umaga nang makarating si Rizal sa Bagumbayan. Handa na ang mga Indiong babaril kay Rizal, pati ang mga Kastilang babaril sa kanila kung hindi bumaril. Sinuri ng isang doktor ang pulso ni Rizal. Sa kabila ng napipinto niyang kamatayan, normal lamang ang pulso nito. 7:03. "Consummatum est!" Sa huling sandali, nagawa ni Rizal na umikot nang bumagsak siyang nakaharap sa langit.'});
lugar.push(bagumbayan);

//Luneta
var luneta = rsr.path("m 2853.9484,1366.3815 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
luneta.attr({id: 'path4514-0-3-2-4-1-9-9',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'luneta', 'lugar-name':'Matapos ang labing-anim na taon, inilipat ang mga labi ni Rizal sa kanyang monumento malapit sa Bagumbayan. Kilala na ngayon ito bilang "Liwasang Rizal" o "Luneta", mula sa lumang Kastilang pangalan nito.'});
lugar.push(luneta);

//Paco
var paco = rsr.path("m 3042.2857,248.21232 a 54.617203,54.617203 0 0 0 -54.6172,-54.6172 54.617203,54.617203 0 0 0 -54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,54.6172 54.617203,54.617203 0 0 0 54.6172,-54.6172 z");
paco.attr({id: 'path4514-0-3-2-4-1-9-7',opacity: '0.6',fill: '#dd8148',"fill-opacity": '1',stroke: '#000000',"stroke-width": '0.94',"stroke-opacity": '1'}).data({'id':'paco', 'lugar-name':'Inilibing sa lihim na puntod sa Sementeryo de Paco si Rizal. Nang mahanap ng kapatid na si Narcisa ang puntod, nilagyan niya ng baligtad na inisyal bilang pananda: "RPJ".'});
lugar.push(paco);

var clam = [];

//Baybayin Logo
var baybayin = rsr.path("m 3404.8616,2108.794 a 235.41598,227.7735 0 0 0 -235.416,-227.7735 235.41598,227.7735 0 0 0 -235.4159,227.7735 235.41598,227.7735 0 0 0 235.4159,227.7734 235.41598,227.7735 0 0 0 235.416,-227.7734 z");
baybayin.attr({id: 'path4514-0-3-2-4-1-9-2',opacity: '0',fill: '#dd8148',"fill-opacity": '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"stroke-width": '4',"stroke-opacity": '1'}).data('id', 'baybayin');
clam.push(baybayin);

for (var i = 0; i < lugar.length; i++) {


    // Showing off
    lugar[i].mouseover(function(e){
		this.node.style.fill = '#df5e10';
		document.getElementById('lugar-name').innerHTML = this.data('lugar-name');
		
	});

	lugar[i].mouseout(function(e){
		this.node.style.fill = '#dd8148';
	});
	
	lugar[i].mousedown(function(e){
		this.node.style.opacity = 1;
		var posx;
		var posy;

		if (typeof e !== 'undefined') {
			posx = e.pageX - $rizalmap.offset().left - 67;
			posy = e.pageY - $rizalmap.offset().top - 67;
		} else {
			// console.log(building);
			posx = parseInt(lugar[i].getBBox().x, 10) - 57;
			posy = parseInt(lugar[i].getBBox().y, 10) - 57;
		}

		console.log(posx, posy);

		$infobox.css({
			'top': posy + 'px',
			'left': posx + 'px'
		});

		$infobox.find('.infobox__title').text(this.data('lugar-name'));
	});

	$infobox.on('click', '.infobox__close', function(e){

		$infobox.css({
			'top' : '-99999px',
			'left' : '-99999px'
		});

		e.preventDefault();
		e.stopPropagation();
	});
}

for (var i = 0; i < clam.length; i++) {


    // Showing off
    clam[i].mouseover(function(e){
		this.node.style.opacity = 0;
		document.getElementById('lugar-name').innerHTML = this.data('lugar-name');
	});

	clam[i].mouseout(function(e){
		this.node.style.opacity = 0;
	});
	
	clam[i].click(function(e){
		this.node.style.opacity = 0.3;
		
		
	});
}
var rsrGroups = [];
	
