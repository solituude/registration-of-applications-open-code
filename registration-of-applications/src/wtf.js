

const dataSet = [{"id":1,"address":"02877 Cardinal Court","accident":"Прорыв","priority":"Незамедлительно","name":"Vinogradov","phone":"+62 (270) 685-6603"},
    {"id":2,"address":"07829 Elgar Center","accident":"Некачественная вода","priority":"Средний","name":"Popov","phone":"+44 (979) 351-5609"},
    {"id":3,"address":"7 Mallory Road","accident":"Утечка","priority":"Незамедлительно","name":"Vasiliev","phone":"+86 (390) 483-4259"},
    {"id":4,"address":"5 Sauthoff Road","accident":"Прорыв","priority":"Средний","name":"Kuznetsov","phone":"+1 (914) 268-1636"},
    {"id":5,"address":"094 Longview Junction","accident":"Закупорка","priority":"Незамедлительно","name":"Volkov","phone":"+86 (177) 625-4891"},
    {"id":6,"address":"21563 Hansons Alley","accident":"Закупорка","priority":"Средний","name":"Vasiliev","phone":"+54 (639) 473-9173"},
    {"id":7,"address":"41280 Summerview Point","accident":"Некачественная вода","priority":"Средний","name":"Novikov","phone":"+387 (705) 519-3471"},
    {"id":8,"address":"1015 Dixon Court","accident":"Прорыв","priority":"Незамедлительно","name":"Vasiliev","phone":"+62 (383) 250-0251"},
    {"id":9,"address":"6 Boyd Center","accident":"Некачественная вода","priority":"Средний","name":"Kuznetsov","phone":"+62 (605) 725-0468"},
    {"id":10,"address":"53 Sauthoff Trail","accident":"Прорыв","priority":"Высокий","name":"Bogdanov","phone":"+86 (791) 834-6506"},
    {"id":11,"address":"7103 2nd Crossing","accident":"Колонка уличная","priority":"Незамедлительно","name":"Morozov","phone":"+33 (995) 608-2745"},
    {"id":12,"address":"9794 Blaine Drive","accident":"Некачественная вода","priority":"Низкий","name":"Golubev","phone":"+93 (802) 792-9224"},
    {"id":13,"address":"7 Ruskin Point","accident":"Колонка уличная","priority":"Низкий","name":"Novikov","phone":"+63 (192) 851-8777"},
    {"id":14,"address":"81 Kropf Hill","accident":"Некачественная вода","priority":"Средний","name":"Vasiliev","phone":"+86 (816) 288-2650"},
    {"id":15,"address":"745 Debra Center","accident":"Утечка","priority":"Незамедлительно","name":"Bogdanov","phone":"+385 (958) 779-6491"},
    {"id":16,"address":"9 Russell Court","accident":"Утечка","priority":"Средний","name":"Bogdanov","phone":"+57 (962) 887-4854"},
];
const id = 2;

let id1 = dataSet.find(item => item.id === id);
console.log(id1);