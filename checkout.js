

window.addEventListener('DOMContentLoaded', ()=>{


    let add = document.getElementById('add');
    let qty = document.getElementById('qty');
    let sub = document.getElementById('sub');
    let amount = document.getElementById('td-amount');

    let add2 = document.getElementById('add2');
    let qty2 = document.getElementById('qty2');
    let sub2 = document.getElementById('sub2');
    let amount2 = document.getElementById('td-amount2');

function update_amounts(){
    let add = document.getElementById('add');
    let sub = document.getElementById('sub');
    let qty = document.getElementById('qty').value;
    let amount = document.getElementById('amount');
    let price = document.getElementById('price');
        var sum = 0.0;

       
    
}

function addUp(){
        let sumup = Number(qty.value);
        if(sumup >= 0){
            sumup +=1;
        }
     
        return sumup;
    }

    function addUp2(){
        let sumup = Number(qty2.value);
        if(sumup >= 0){
            sumup +=1;
        }
     
        return sumup;
    }

    function subDown(){
        let sumup = Number(qty.value);
        if(sumup >= 1){
            sumup -=1;
        }
        return sumup;
    }

    function subDown2(){
        let sumup = Number(qty2.value);
        if(sumup >= 1){
            sumup -=1;
        }
        return sumup;
    }

    function cal(){
       let res = Number(price.value) * Number(qty.value);
       return res;
    }

    function cal2(){
        let res = Number(price2.value) * Number(qty2.value);
        return res;
     }


add.addEventListener("click", ()=>{
    qty.value = addUp();
    amount.innerHTML = cal()
    let subtotal= document.getElementById('td-amount').innerHTML;
    let subtotal2 = document.getElementById('td-amount2').innerHTML;
    let total = Number(subtotal) + Number(subtotal2)
    document.getElementsByClassName('total')[0].innerHTML = total;
  
 
})
sub.addEventListener('click', ()=>{
    qty.value = subDown()
    amount.innerHTML = cal();
    let subtotal= document.getElementById('td-amount').innerHTML;
    let subtotal2 = document.getElementById('td-amount2').innerHTML;
    let total = Number(subtotal) + Number(subtotal2)
    document.getElementsByClassName('total')[0].innerHTML = total;
})


add2.addEventListener('click', ()=>{
    qty2.value = addUp2();
    amount2.innerHTML = cal2()
    let subtotal= document.getElementById('td-amount').innerHTML;
    let subtotal2 = document.getElementById('td-amount2').innerHTML;
    let total = Number(subtotal) + Number(subtotal2)
    document.getElementsByClassName('total')[0].innerHTML = total;

})

sub2.addEventListener('click', ()=>{
    qty2.value = subDown2()
    amount2.innerHTML = cal2()
    let subtotal= document.getElementById('td-amount').innerHTML;
    let subtotal2 = document.getElementById('td-amount2').innerHTML;
    let total = Number(subtotal) + Number(subtotal2)
    document.getElementsByClassName('total')[0].innerHTML = total;
})

})




