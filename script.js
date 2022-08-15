let mainCourse = {id:'', name:'', desc:'', price:0};
let drink = {id:'', name:'', desc:'', price:0};
let dessert = {id:'', name:'', desc:'', price:0};
let cont = 0;
let buttonCheck = false;


function selectPrincipal(parent){

    mainCourse.id = parent.id;
    mainCourse.name = parent.getElementsByTagName('h1')[0].innerHTML;
    mainCourse.desc = parent.getElementsByTagName('p')[0].innerHTML;
    const cleanPrice = parent.getElementsByTagName('h2')[0].innerHTML.slice(3).replace(',', '.');
    mainCourse.price = parseFloat(cleanPrice);

    const selected = document.querySelector('.select-principal');
     
    if(selected && selected.id !== mainCourse.id){
         selected.classList.remove('select-principal');

     }

    parent.classList.toggle('select-principal');
    const check = document.querySelector('.select-principal');
    
    if(!check){
        mainCourse = {id:'', name:'', desc:'', price:0};
    }
    checkFinish();
}

function selectDrink(parent){
    
    drink.id = parent.id;
    drink.name = parent.getElementsByTagName('h1')[0].innerHTML;
    drink.desc = parent.getElementsByTagName('p')[0].innerHTML;
    const cleanPrice = parent.getElementsByTagName('h2')[0].innerHTML.slice(3).replace(',', '.');
    drink.price = parseFloat(cleanPrice);

    const selected = document.querySelector('.select-drink');
     
    if(selected && selected.id !== drink.id){
         selected.classList.remove('select-drink');

     }

    parent.classList.toggle('select-drink');
    const check = document.querySelector('.select-drink');
    
    if(!check){
        drink = {id:'', name:'', desc:'', price:0};
    }
    checkFinish();
}

function selectDessert(parent){
    
    dessert.id = parent.id;
    dessert.name = parent.getElementsByTagName('h1')[0].innerHTML;
    dessert.desc = parent.getElementsByTagName('p')[0].innerHTML;
    const cleanPrice = parent.getElementsByTagName('h2')[0].innerHTML.slice(3).replace(',', '.');
    dessert.price = parseFloat(cleanPrice);

    const selected = document.querySelector('.select-dessert');
     
    if(selected && selected.id !== dessert.id){
         selected.classList.remove('select-dessert');

     }

    parent.classList.toggle('select-dessert');
    const check = document.querySelector('.select-dessert');
    
    if(!check){
        dessert = {id:'', name:'', desc:'', price:0};
    }
    checkFinish();
}

function checkFinish(){
    const ids = [mainCourse, drink, dessert].map((element)=>{
        return element.id;
    }); 
    const butao = document.querySelector('.waiting');
    if(ids.every((id)=>id)){
        buttonCheck = true;
        butao.classList.add('finish');
        butao.innerHTML = 'Finalizar pedido';
        return
    } 
        butao.classList.remove('finish');
        buttonCheck = false;
        butao.innerHTML =  'Selecione os 3 itens para fechar o pedido';
}
function finish(finalizado){
    if(!buttonCheck){
        return
    }
    const totalPrice = (mainCourse.price + drink.price + dessert.price).toFixed(2);

    const textMsg = `Olá, gostaria de fazer o pedido:\n- Prato: ${mainCourse.name}\n- Bebida: ${drink.name}\n- Sobremesa: ${dessert.name}\nTotal: R$ ${totalPrice}`;

    const encode = 'https://wa.me/5511962456385?text='+encodeURIComponent(textMsg);

    window.open(encode);

}
