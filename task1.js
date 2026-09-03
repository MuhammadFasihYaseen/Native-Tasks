let student=[{sid:101,sname:"syed saim hussain",marks:90},
    {sid:102,sname:"Zakariya umar",marks:80},
    {sid:103,sname:"Ehtisam Nadir",marks:75}];

console.log(student);
let std=student[0];
for(let i=1;i<student.length-1;i++){
    if(std.marks<student[i].marks)
        std=student[i].marks;
}

console.log(std);