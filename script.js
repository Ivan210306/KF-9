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
console.log(sum(10, 5)); //15

function isTaskDone(status){
    return status === "выполнена";
}

console.log(isTaskDone("выполнена")); // true
console.log(isTaskDone("активна"));

function taskSummary(total, done){
    let active = total - done;
    return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(5, 3));
console.log(10, 4);



let cities = ["Москва", "Париж", "Питер", "Токио"];
cities[2] = "Лондон";
console.log(cities); // ["Москва", "Париж", "Лондон", "Токио"]

let task = {
    id: 1,
    title: "Купить молоко",
    status: "активна"
};
console.log(task.id); // 1
console.log(task.title); // "Купить молоко"
console.log(task.status); // "активна"

let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Сделать уроки", status: "активна"},
];
console.log(tasks[0].title); // "Купить молоко"
console.log(tasks[1].status); // "выполнена"

tasks[0].status = "выполнена";
console.log(tasks[0]); // {id: 1, title: "Купить молоко", status: "выполнена"}

tasks.push({id: 4, title: "Прогулка", status: "активна"});
console.log(tasks);

let user = {
    name: "Анна",
    tasks: tasks
};

console.log(user.name); // "Анна"
console.log(user.tasks.length); // 4
