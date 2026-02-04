let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;

console.log(sum);
console.log(difference);

// ===== Урок: операторы и условия ===== //
let title = "";
if(title === ""){
    console.log("Название задач не указано");
}else{
    console.log("Задача:", title);
}

let tasks = 5;
if(tasks === 0){
    console.log("Список пуст");
}else if(tasks<= 3){
    console.log("Немного задач");
}else{
    console.log("Много задач");
}

function sum(a, b){
    return a + b;
}

console.log(sum(3, 4)); // 7
console.log(sum (10, 5)); // 15

function isTaskDone(status){
    return status === "выполнена";
}

console.log("выполнена"); // true
console.log("активна"); // false

function taskSummary(total, done){
    let active = total - done;
    return "Всего: " + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(5, 3));
console.log(taskSummary(10, 4));