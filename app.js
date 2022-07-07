const person = {    
    personName: null,
    personSurname: null,
    personAge: null,
    personLocation: null,
    personHobby: null
}
person.personName = 'Alex'
person.personSurname = 'Kuroneko'
person.personAge = 12
person.personLocation = 'Kiev'
person.personHobby = 'programming'
person.personWeight = 40

a = {}
b='ass'
a[b] = '300 bucks'
console.log(a)

const testMethodObject = {
    testMethod: function(a) { console.log(a) }
}
testMethodObject.testMethod(person)

const person2 = JSON.parse(JSON.stringify(person))

person2.personName = 'Sonia'
person2.personSurname = 'Shevchenko'
person2.personAge = 12
person2.personLocation = 'Dnipro'
person2.personHobby = 'dancing'
person2.personWeight = 39

testMethodObject.testMethod(person2)
const person3 = JSON.stringify(person2)

document.getElementById("demo").innerHTML = person3;