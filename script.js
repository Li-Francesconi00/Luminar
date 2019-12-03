function search(x) {
    $.getJSON( // Função do jQuery para chamar API em formato JSON
			"https://api.nasa.gov/planetary/apod?api_key=SyYvVZP3lSNLdiFCRDUEQmBJ2ipAzOXYGILgfE9S&date="+x, // Chama a API com a data
			function(data){ // Função caso encontre o JSON
				//O data da função se refere aos dados recebidos da API 
				var caixa = "<div class='col-md-6 col-xl-4 galaxy'></div>"
        var card = "<div class='card'></div>"; //Define um card com bootstrap
				var texto = "<div class='overflow-auto'></div>"
				var img = "<div class='jumbotron jubotron-fluid' style='background-image: url("+data.url+")'></div>"; //Busca a imagem na API
				var dia = "<p class='dia'>"+data.date+"</p>";
        if (data.hasOwnProperty("copyright")) {
					var autor = "<p class='autor text-right'>"+data.copyright+"</p>"; //Busca o autor na API
				} else {var autor = "<p class='autor text-right'><em>Autor desconhecido</em></p>"}
				var description = "<p class='description'>" +data.explanation+ "</p>";
				texto = $(texto).append(autor, dia, description);
        card = $(card).append(img, texto); //Insere img e autor no card
				caixa = $(caixa).append(card);
        $("#cards").append(caixa); // Insere o card na página
				
    })
		.fail(function(){
			alert("Erro. Imagem não encontrada para a data inserida");
		})
}


function limpar() {
    $(".galaxy").remove() //Remove todos os cards
}
