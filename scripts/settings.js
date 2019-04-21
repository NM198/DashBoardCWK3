
async function changeimage(){
   let selValue = document.getElementById('imageselect').value;
   let image = document.getElementById('img');

    if(selValue == 3 )
    {
      image.src = "/images/bann2.jpg";
    }
    if  (selValue ==4 )
    {
      image.src = "/images/bann2.jpg";
    }
    else{
      image.src = "/images/bann1.jpg";
    }
    console.log(selValue);

	}
  module.exports.changeimage = changeimage();
