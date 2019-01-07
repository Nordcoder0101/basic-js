'use strict'

let students = [
  {name: 'Greg', cohort: 'Jan'},
  {name: 'Andrew', cohort: 'Jan'},
  {name: 'Yoko', cohort: 'Mar'},
  {name: 'Drew', cohort: 'Mar'}
]

function printObj(obj){
  console.log(obj)
}

// 

let users = {
  employees: [
    { 'first_name': 'Miguel', 'last_name': 'Jones' },
    { 'first_name': 'Ernie', 'last_name': 'Bertson' },
    { 'first_name': 'Nora', 'last_name': 'Lu' },
    { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
  ],
  managers: [
    { 'first_name': 'Lillian', 'last_name': 'Chambers' },
    { 'first_name': 'Gordon', 'last_name': 'Poe' }
  ]
};

function printThings(obj){
  console.log("EMPLOYEES")
  for (let i = 0; i < obj['employees'].length; i++){
    console.log(obj['employees'][i]['first_name'], obj['employees'][i]['last_name'], (obj['employees'][i]['first_name'].length + obj['employees'][i]['last_name'].length))
  }
  console.log("MANAGERS")
  for (let i = 0; i < obj['managers'].length; i++) {
    console.log(obj['managers'][i]['first_name'], obj['managers'][i]['last_name'], (obj['managers'][i]['first_name'].length + obj['managers'][i]['last_name'].length))
  }
  
  
  
}

printThings(users);