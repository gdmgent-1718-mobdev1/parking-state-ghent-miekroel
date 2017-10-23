//data ophalen
function getJsonByPromise(url,succeshander, errorhandler){// geef de url, de succes en de errorhandler mee
    var xhr = new XMLHttpRequest();// maak een nieuwe xmlhttp request aan
    xhr.responseType = 'json';// maak het responsetype json
    xhr.open('GET', url, true)// open de lijn
    xhr.onload = function(){// als de xhr geladen is
        if (xhr.status == 200){// als het geslaagd is
            var data = (!xhr.responseType)?JSON.parse(response):xhr.response;// maak de variabele data aan en stop er de response in het type json in
            succeshander && succeshander(data);
        }
        else{
            errorhandler && errorhandler(xhr.status);
        }
    };
xhr.onerror=function(){// als de xhr niet kan laden geef terug dat het een netwerkfout is
    errorhandler && errorhandler('network error');
};
xhr.send(null);
};         

function timer(){
    //functie oproepen en de drie parametersmeegeven: url, succes en error
    //url
  getJsonByPromise(`https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json`, 
//succeshandler
function(data) {
    console.log(data);
    tempStr = "";

    
    const elementParking = document.querySelector('.parking');


    console.log(elementParking);
    data.forEach(function(data) {
        let name = data.name;        
        let totalCapacity = data.totalCapacity;
        let availableCapacity = data.parkingStatus.availableCapacity;
        
        
        tempStr += `<div class="parkeergarage"><h3> ${name}</h3>  <br>
       <p>Totale plaatsen:  ${totalCapacity}</p>   <br>
       <p>Beschikbare plaatsen: ${availableCapacity}</p>
        
        `;

        let percent = parseInt(availableCapacity)/parseInt(totalCapacity);
        console.log(percent);
        let color;
        if (percent > 0.50){
            color = "green";
            tempStr +=`<div class="circle ${color} "></div>
            </div>`;
        }else if(percent < 0.50 && percent > 0.20){
            color = "orange";
            tempStr +=`<div class="circle ${color} "></div>
            </div>`;
        }else{
            color = "yellow";
            tempStr +=`<div class="circle ${color} "></div>
            </div>`;
        }
       

       

     }, this);
     
    elementParking.innerHTML = tempStr;
},

    //errohandler
    function(error) {
        console.log(error);
    }   

    ); };
    timer();
    setInterval(timer, (10000));
   