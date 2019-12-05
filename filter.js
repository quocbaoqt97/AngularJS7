var list2=[1,2,3,4,5,6,7,8,9];
console.log("original list:",list2);
function filterarray(value){
  return value>5;
}
var list3 = list2.filter(filterarray);
console.log("filtered list:",list3);
var list4 = ["Milk","Donuts","Chocolate","Bismol","Bismol(pancake)",
"Bismol(chocolate)","Bismol(milk)"];
console.log("original list:",list4);
var search="Bismol";
function filterarray2(value){
  if(value.indexOf(search)!==-1)
  return value;
}
var list5 = list4.filter(filterarray2);
console.log("filtered array:",list5);
