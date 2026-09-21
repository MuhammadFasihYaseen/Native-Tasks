let orders=[{customer_name:"ali", product_name:"bulb", quantity:3,price:100,order:"Pending"},
    {customer_name:"Amed", product_name:"Light", quantity:2,price:300,order:"Shipped"}];

//01
function calPrice(order){
    let bill=order.quantity * order.price;
    console.log("order total price =" + bill );
    
}


calPrice(orders[0]);


//02
function calCus(name){

    let sum=0;
    for(let o of orders){
        if(o.customer_name==name){
            sum = sum+o.quantity * o.price;
        }
    }

    console.log("order total price spend by "+ name +"=" + sum );  
}

calCus('ali');

//03
function checkStatus(status){

    for(let o of orders){
        if(o.status==status){
            console.log(o);  
        }
    }

}

checkStatus('Pending');


//05
function calPrice(order){
    let bill=order.quantity * order.price;
    if (bill==10000){
        bill= bill + ((10*bill)/100); 
    }
    
    return bill;
}


//04
function check(list){
    let p={'buld':0, 'light':0}
    for(let o of list){
        if(o.product_name=='bulb'){
            p['buld']++;
        }
        else if(o.product_name=='light'){
            p['light']++;
        }
    }
    console.log(p);
}
