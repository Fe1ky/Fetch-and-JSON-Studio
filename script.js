// TODO: add code here

window.addEventListener('load', (event) => {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
           let myContainer = document.getElementById("container");

        
        myContainer.innerHTML = myContainer.innerHTML + `<h3> Number of Astronauts : ${json.length}</h3>`

        json.sort(function(a,b){
            return b.hoursInSpace - a.hoursInSpace;
        });



        for(var i=0; i<json.length; i++){
       
          
       
    
        myContainer.innerHTML = myContainer.innerHTML + `
            <div class="astronaut">
                <div class="bio">
                  <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space:  ${json[i].hoursInSpace}</li>
                        <li id = "act" >Active:  ${json[i].active}</li>
                        <li>Skills:${json[i].skills}</li>
                    </ul>
                </div>
                 <img class="avatar" src=" ${json[i].picture}">
            </div>
         `;
        }  



           
        });
     });
  });



  