const restock = list => {
    let res=[];
    for(let p of list){
        if(p.qt>=p.reorder_level){
            res.push(p);
        }
    }
    return res;
}
console.log(restock([{name:'pen',qt:13, reorder_level:1},{name:'pencil',qt:0,reorder_level:1}]));


const bonus = list => {
    let emp=[];
    for(let e of list){
        if(e.exp>=5 && e.rating>=4){
            e.bonus=e.salary;
        }
        else if(e.exp>=5 || e.rating>=4){
            e.bonus=e.salary/2;
        }
        else
            e.bonus=0;
        emp.push(e);
    }
    return emp;
}
console.log(bonus([{name:'saad',rating:4,exp:5,salary:5000},{name:'pencil',rating:3,exp:5,salary:2000}]));
