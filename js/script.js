function priceField(inputPrice){
  const price=  document.getElementById(inputPrice);
  const priceAmount=price.value;
  return priceAmount
}

document.getElementById("submit-button").addEventListener('click',function(){
    const priceNo=priceField('price-field');
    const priceText=document.getElementById('price');
    priceText.innerText=priceNo;
    const discound=document.getElementById('discound-field');
    const discoundText=discound.value; 
    
   

    if(discoundText=="Another"){
        const discoundPrice=(priceNo*30)/100;
        const newdiscoundPrice = priceNo-discoundPrice;
       const discoundElement= document.getElementById('discound');
       discoundElement.innerText=newdiscoundPrice;
       
    }
    else if(discoundText=="Bangladesh"){
        const discoundPrice=(priceNo*50)/100;
        const newdiscoundPrice = priceNo-discoundPrice;
       const discoundElement= document.getElementById('discound');
       discoundElement.innerText=newdiscoundPrice;   
      
    }
})