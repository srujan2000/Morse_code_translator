document.querySelector('#translate').addEventListener('click',translate);



function translate(){
    let input = document.querySelector('.text').value
    let output = document.querySelector('.morse')
    
    if(input === ''){
        alert('Enter the any text')
    }
    else{
       var url = 'https://api.funtranslations.com/translate/morse.json?text='+input;
      fetch(url).
      then(response => response.json()).
      then(json => output.value = json['contents']['translated'] )

    }
}