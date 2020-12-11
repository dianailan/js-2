//1
// მოცემულია მასივი:
// let array = [5, 10, 25, 100, 6, 18];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 2-ზე გაყოფილი;
// let array = [5, 10, 25, 100, 6, 18];
// let newarr = array.map(func);
// function func (num){
//     return num / 2;
// }
// console.log(newarr)

//2
// მოცემულია მასივი:
// let array = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო სტრინგები;
// let array = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];
// var strings = array.filter(value => typeof value === 'string');
// console.log(strings);

// 3
// მოცემულია მასივი:
// let array = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები;
// let array = ["hello", "javascript", "html", 43, "css", "scss", 76, "bootstrap", 88, 59];
// var nums = array.filter(value => typeof value === 'number');
// console.log(nums);

// 4
// მოცემულ მასივში გვაქვს 5 ობიექტი;
// გამოიტანეთ ის ქალაქი, რომლის მოსახლეობა 3 მილიონზე ნაკლებია - filterის გამოყენებით;
// let cities = [
//      {name: 'los angeles', population: 3792621},
//      {name: 'new york', population: 8175133},
//      {name: 'chicago', population: 2695598},
//      {name: 'houston', population: 2099451},
//      {
// name: 'philadelphia', population: 1526006}
// ];
// let cities = [
//      {name: 'los angeles', population: 3792621},
//      {name: 'new york', population: 8175133},
//      {name: 'chicago', population: 2695598},
//      {name: 'houston', population: 2099451},
//      {name: 'philadelphia', population: 1526006}
// ];
// let littleC = cities.filter(function(city){
//     return city.population < 3000000;
// })
// console.log(littleC)

// დინამიურად ჯავასკრიპტის საშუალებით შექმენით 3 ბოქსი(დივი),
// დაალაგეთ გვერდიგვერდ ეს 3 ბოქსი - css-ის საშუალებით;
// თითოეულ დივში დინამიურად შექმენით სურათი, სათაური და ტექსტი;
