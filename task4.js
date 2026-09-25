let participent=[{name:'saad',reg:123,department:'add',ticketType:'weq',payments:'paid',attendenceStatus:'adsent'},
    {name:'saad',reg:12,department:'add',ticketType:'weq',payments:'unpaid',attendenceStatus:'done'},
]


// 01
const show=(p)=> {
    console.log(p);
}

participent.forEach(show);

// 02
console.log(participent.find(p=>p.reg==123));
// console.log(null);


// 03
const unpaid = participent.filter(p => p.payments === 'unpaid');

console.log(unpaid);


// 04
console.log(participent.find(p => p.reg === 123? p.attendenceStatus='present':console.log("present")));

// if (result && result.attendenceStatus === 'absent') {
//     console.log("Participant is present:", result);
// } else {
//     console.log("Participant not found or not present");
// }


// 05
let cout=0;
let paid=0;
let un=0,pa=0,a=0;

participent.forEach(p=>{
    if(p.payments=='paid'){
        paid++;
    }
     if(p.payments=='unpaid'){
        un++;
    }
     if(p.attendenceStatus=='present'){
        pa++;
    }
     if(p.payments=='absent'){
        a++;
    }
    cout++;
})

console.log();