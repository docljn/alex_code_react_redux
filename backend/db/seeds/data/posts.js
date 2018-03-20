const moment = require('moment')

module.exports = [
  {
    title: 'My new Pony',
    content: 'I love my new pony',
    date: moment().add(-2, 'days').format(),
    user: 'Alice',
  },
  {
    title: 'Travel',
    content: 'I want a new car. Who has one to give me?',
    date: moment().add(-5, 'days').format(),
    user: 'Mary',
  },
  {
    title: 'Live Healthy',
    content: 'I like courguettes in my porridge',
    date: moment().add(-1, 'days').format(),
    user: 'Martin',
  },
  {
    title: 'Kardashians',
    content: 'Oh my god! Kim and Kanye are the cutest!',
    date: moment().add(-9, 'days').format(),
    user: 'Peter',
  },
  {
    title: 'Spare parts',
    content: 'Looking for spare parts for a 1942 Model T',
    date: moment().add(-6, 'days').format(),
    user: 'Sue',
  }
]


