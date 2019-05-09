'use strict';

//Get News and shuffle through:

$(document).ready(()=>{
	getNews();

	function getNews()
	{
		//
		let endPoint = "https://newsapi.org/v1/articles";
		let apiKey = "7a6b1574f2be4170947fec9be4dece63";
		//latest news sources
		let urls = [
			`${endPoint}?source=engadget&sortBy=latest&apiKey=${apiKey} `,
			`${endPoint}?source=fortune&sortBy=latest&apiKey=${apiKey} `
		];
		//gt all results
		let allResults = [];

		let count = urls.length-1;
		const get =(real)=>{
			$.getJSON(urls[ count ], function(data) {
				console.log("JSON data has been retrieved from " + data.source);
				let news = data.articles; //get only the news articles
				allResults.push(news)
				real();
			})
		};
		recurse();

		function recurse(){
			if(count >= 0){
				get(recurse);
				count--;
			}
			else
				printNews(allResults);
		}
	}

	//display the news
	function printNews(result)
	{
		let res=[];
		//flatten the array of nested objects into one single array
		result.map(list=>{

			return list.map(item=>{

				res.push(item)
			})
		})
		console.log(res)
		//Shuffle all the news items
		shuffleArray(res);
		let output = "";
		for(let i = 0; i < res.length; i++)
		{
			let link =  res[i].url;
			let resultDiv = `
				<div class="col-sm-4 col-md-4">
					<div class="thumbnail">
						<img src="${res[i].urlToImage}" alt="${res[i].title}" class="img-responsive">
						<div class="caption">
							<h2> ${res[i].title} </h2>
							<h4> ${res[i].description} </h4>
						</div>
					</div>
				</div>	`
			output += resultDiv;
		}
		$('.printResults').html(output);
	}
//shuffle
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	}
});
