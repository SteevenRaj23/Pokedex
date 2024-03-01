const btn=document.querySelectorAll('button');
const cart=document.querySelector('#cart')
let count=[];
btn.forEach(function(btn)
{
    btn.onclick = function() {
        alert("Added Successfully")
        const item =this.closest('.item');
        const items= item.querySelector('h5').textContent;
        count.push(items);
        cart.onclick();
    };
});

const buy=document.querySelector('#buy')
buy.onclick = () =>{
    alert("Payment Successful");
}

const close=document.querySelector('#close')
close.onclick = () =>{
    count.pop();
    cart.onclick();
}
     
const body = document.querySelector('body');
cart.addEventListener('click' , ()=>{
    body.classList.toggle('showcard')
})





cart.onclick =()=>{
    
    
    let total=0;
    let alertmsg="";
    for(let i=0;i<count.length;i++){

         total= total+ parseInt(count[i].slice(-5,-2));
         alertmsg +=count[i]+"<br><br>";
    }
    // alert(alertmsg+"\n\nTotal Items "+count.length+"\nTotal Amount "+total+" Rs");

    const list=document.querySelector('#list')
    console.log(list)
    const lists = document.createElement("div");
    const existinglist = list.querySelector('.lists');
    if (existinglist) {
      
        existinglist.innerHTML = `
            <h4>${alertmsg}</h4>
            <h4>Total Items: ${count.length}</h4>
            <h4>Total : ${total}</h4>
        `;
    }
    else{
            lists.innerHTML = `
                <div class="lists">
                   <h4>${alertmsg}</h4>
                   <h4>Total Items: ${count.length}</h4>
                   <h4>Total : ${total}</h4>
                </div>
                
            `;
    
    list.appendChild(lists);  
    }        
}


