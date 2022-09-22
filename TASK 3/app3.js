//task 3 javascript


var myForm=document.getElementById('myForm');
myForm.addEventListener('submit',function(e){ //e - event handler
    e.preventDefault() //imp part..prevent auto submission of form
    var country=document.getElementById('country').value;
  //fetch get request (to url) to get covid 19 data
    
  var url="https://api.covid19api.com/total/dayone/country/"+country; //dynamic -- for any country name u can search 

  //The fetch function will return a promise. When the JSON data is fetched from the file, 
  //the then function will run with the JSON data in the response.
  //json=javascript object notation (language of databases) based on obj notation syntax used in nosqul ,machine learning 

  fetch(url)
  .then((res)=>res.json())  //.then -- returns promise --callback function , res.json --converts to json format
  .then((res)=> {    
    console.log(res)  //got response back after calling fetch call
    var length=res.length    //length (array)
    var index=length-1 //calculate index number , gives array of results
    var confirmed=document.getElementById('confirmed')
    var recovered=document.getElementById('recovered')  //id="recovered" n same goes for all the 3 id's
    var deaths=document.getElementById('deaths')
    var active=document.getElementById('active')


        //clearout the entries when we submit the form , as we r concatinating (joining) the entries we need to 
        confirmed.innerHTML=''
        recovered.innerHTML=''
        deaths.innerHTML=''
        active.innerHTML=''

        // here Confirmed -- property which should be capital

    confirmed.append("Confirmed    "+res[index].Confirmed) //dynamic instead of typying this " Confirmed: " in html h2 tag
    recovered.append("Recovered   "+res[index].Recovered)//dynamic., append the data
    deaths.append("Deaths    "+res[index].Deaths)
    active.append("Active    "+res[index].Active)//dynamic.
  })

})

