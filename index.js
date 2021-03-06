categories =  [
  {
    capacity: 15000,
    name: "Дом",
    id: 1
  },
  {
    name: "Еда",
    capacity: 10000,
    id: 2
  },
  {
    id: 3,
    name: "Машина",
    capacity: 7000
  },
  {
    id: 4,
    name: "Пожертвования",
    capacity: 7000
  },
  {
    id: 5,
    name: "Дары",
    capacity: 7000
  },
  {
    name: "rtet",
    id: 6,
    capacity: 1000
  },
  {
    name: "test",
    id: 7,
    capacity: 10000
  }
];

events = [
  {
    id: 1,
    type: "income",
    amount: 1250,
    category: 5,
    date: "12.06.2019 19:49:02",
    description: "Подарили еду в гостях"
  },
  {
    id: 2,
    type: "outcome",
    amount: 1300,
    category: 1,
    date: "13.06.2019 19:49:02",
    description: "Купил посудомоечную машину"
  },
  {
    type: "income",
    amount: 1480,
    category: 2,
    date: "17.06.2019 14:00:48",
    id: 5,
    description: "Поход в окей с баллами. Бесплатная еда"
  },
  {
    type: "outcome",
    amount: 2470,
    category: 2,
    date: "17.06.2019 14:00:58",
    id: 4,
    description: "Закупка на неделю"
  },
  {
    type: "outcome",
    amount: 4000,
    category: 3,
    date: "10.06.2019 14:01:58",
    id: 5,
    description: "Заправка + проход ТО"
  },
  {
    category: 4,
    amount: 100,
    description: "Hello",
    type: "outcome",
    date: "20.06.2019 14:55:18",
    id: 6
  },
  {
    category: 3,
    amount: 100,
    description: "Hello",
    type: "outcome",
    date: "20.06.2019 14:55:18",
    id: 7
  },
  {
    category: 4,
    amount: 100,
    description: "Hello",
    type: "outcome",
    date: "20.06.2019 14:55:18",
    id: 8
  },
  {
    category: 2,
    amount: 100,
    description: "Hello",
    type: "outcome",
    date: "20.06.2019 14:55:18",
    id: 9
  },
  {
    category: 1,
    amount: 100,
    description: "Hello",
    type: "outcome",
    date: "20.06.2019 14:55:18",
    id: 10
  },
  {
    category: 3,
    amount: 100,
    description: "Hello",
    type: "outcome",
    date: "20.06.2019 14:55:18",
    id: 11
  },
  {
    type: "outcome",
    amount: 5000,
    category: 7,
    date: "17.06.2019 14:00:58",
    id: 12,
    description: "Test description"
  }
];

cats = [];

categories.forEach((cat) => {
  cats[cat.id] = cat.name
});

console.log(cats);

amounts = [];
events.forEach((event) => {
  amounts[event.category] = typeof amounts[event.category] !== 'undefined'
    ? amounts[event.category] + event.amount
    : event.amount;
});

console.log(amounts);

res = [];
for (i = 1; i <= categories.length; i++) {
  res.push({
    name: cats[i],
    value: amounts[i]
  })
}

console.log(res);
