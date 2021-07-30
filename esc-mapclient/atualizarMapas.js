// Para atualizar os mapas 
// adicione as coordenadas no arquivo coordenadaCidades.json 
// e execute esse arquivo: node atualizarMapas.js

var fs = require('fs');
var http = require('https');

function getCoordenadasCidades(){
	console.log('Lendo coordenadas...');
	var coords = fs.readFileSync('./coordenadaCidades.json', 'utf8');
	console.log('Sucesso ao ler as coordenadas :D\n');
	return JSON.parse(coords);
}

function getUrlStaticMap(coordenadas, resolucaoImagem, zoomImage){
	
	console.log('Montando url base da imagem com a resolução: ' + resolucaoImagem);
	let urlBase = "https://maps.googleapis.com/maps/api/staticmap";
	let size = "size=" + resolucaoImagem; 
	let zoom = "zoom=" + zoomImage;
    let scale = "scale=2"; 
    let mapType = "maptype=roadmap"; 
    let markersEsolution = "markers=size:small%7Clabel:E%7Ccolor:0x204A87%7C-17.751287,-48.6308332" 
    let key = "key=AIzaSyA0w_b240pfOWQ9KbWwUBHDEueqbg9z7GY"; 

    let markersClientes = "markers=size:small"; 

    coordenadas.forEach((item)=>{ 
      	markersClientes += "%7C" + item.latitude + "," + item.longitude; 
    })

    let url = urlBase + "?" + size + "&" + scale + "&" + zoom + "&" + mapType + "&" +  markersEsolution  + "&" +  markersClientes  + "&" + key; 

    console.log('Url montada para a resolução: ' + resolucaoImagem + ' com sucesso :D\n');
    return url;

}

function saveStaticMap(url, nome){
	console.log('Fazendo requisição para a imagem: ' + nome + '...');
	var request = http.get(url, function(res){

	    var imagedata = ''
	    res.setEncoding('binary')

	    res.on('data', function(chunk){
	        imagedata += chunk
	    })

	    res.on('end', function(){
	    	console.log('Sucesso ao obter a imagem: ' + nome + '\n');
	    	console.log('Salvando a imagem: ' + nome + ' no disco...');
	        fs.writeFile(nome, imagedata, 'binary', function(err){
	            if (err) throw err
	            console.log('Imagem ' + nome + ' salvada com sucesso :D \n')
	        })
	    })

	})
}

function saveStaticMapFinal(){
	
	let coordenadas = getCoordenadasCidades();

	let urlP = getUrlStaticMap(coordenadas, "400x400", 3);
	let urlM = getUrlStaticMap(coordenadas, "500x300", 3);
	let urlG = getUrlStaticMap(coordenadas, "800x300", 3);

	saveStaticMap(urlP, './img/staticmapP.webp');
	saveStaticMap(urlM, './img/staticmapM.webp');
	saveStaticMap(urlG, './img/staticmapG.webp');

}

saveStaticMapFinal()
