
get(1,9);
let count=[];
function remove(a){
    count.push(a)
    if(a===1)
    {
      card.innerHTML = '';
      get(1,9);
     
    } 
    else if(a===2)
    {
        card.innerHTML = '';
        get(13,21);
      
    }    
    else if(a===3)
    {
        card.innerHTML = '';
        get(33,41);
    }   
    else if(a===4)
    {
        card.innerHTML = '';
        get(41,50);
    } 
    else if(a===5)
    {
        card.innerHTML = '';
        get(53,63);
    } 
    else if(a===6)
    {
        card.innerHTML = '';
        get(64,72);
    } 
    
}
function prev(){
   let a=count.pop();
    remove(a-1);
}
function next(){
   let a=count.pop();
    remove(a+1);
}


async function get(a,b) {
    const card = document.querySelector("#card");

    for (let i = a ;i < b; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        const imgg = data.sprites.other.dream_world.front_default;
      
        
        const newCard = document.createElement("div");
       
        newCard.innerHTML = `
            <div class="card">
            <img src="${imgg}" id="img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style="color:black"><b>${data.name.toUpperCase()}</b></h5>
                <a  class="btn btn-primary" data-toggle="popover" title="Pokemon Details" data-content="Name:${data.name}, Type:${data.types[0].type.name}, Hp:${data.stats[0].base_stat}, Attack:${data.stats[1].base_stat}, Defence:${data.stats[2].base_stat} Weight:${data.weight}">Details</a>
            </div>
            
        `;
        $(function () {
            $('[data-toggle="popover"]').popover()
          })
       
        
       card.appendChild(newCard);
    }
    
}



