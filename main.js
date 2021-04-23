
// // Ascending-order ترتيب تصاعدي

let a=Number(prompt('enter value no1',)) || 0;
let b=Number(prompt('enter value no2',)) || 0;
let c=Number(prompt('enter value no3',)) || 0;

let e ,d;
if(a < b ){
    e=a;
    d=b;
    if(e<c){
    if(c>d){
    d=c;
    alert([e,b,c]);
    }

    }
    else{
    e=c;
    alert([e,a,d]);
    }

}
else {
    e=b;
    d=a;
    if(e<c){
    if(c>d){
    d=c;
    alert([e,a,c]);
    }

    }
    else{
    e=c;
    alert([e,b,d]);
    }

}