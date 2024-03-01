
const details = document.getElementById('Details');


async function fetchData()
{
  try{
     const pName=document.getElementById("pokemon").value.toLowerCase();
     const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pName}`);
     const data =await response.json();
     console.log(data);
     const image = data.sprites.other.dream_world.front_default;
     const typee= data.types[0].type.name;
     const hp= data.stats[0].base_stat;
     const attack=data.stats[1].base_stat;
     const defence=data.stats[2].base_stat;
     const weight=data.weight;
     
     const img=document.getElementById("pokemonSprite");
    
   
     img.src=image;
     img.style.display = "block";
     details.innerHTML = `
     <h1 id="div2">POKEMON DETAILS</h1>
     <div>
       <h1>Name : ${pName}</h1>
       <h1>Type : ${typee}</h1>
       <h1>hp : ${hp}</h1>
       <h1>Attack :${attack}</h1>
       <h1>Defence :${defence}</h1>
       <h1>Weight : ${weight} </h1>
     `
     
  }
  catch(error){
     alert("Enter a Valid Pokemon");
  }
}


