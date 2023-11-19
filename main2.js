const { faker } = require('@faker-js/faker')

let arr = []
let ArrayLength = 10

function FillArray(arr){
    for(let i = 0; i < ArrayLength; i++){
        let personName = faker.person.firstName()
        let personSurname = faker.person.lastName()
        let result = personName + ' ' + personSurname
        arr.push(result)
    }
}

function BubbleSort(arr) {
	let temp = 0

	for (let j = 0; j < arr.length - 1; j++) {
		for (let i = j + 1; i < arr.length; i++) {
			if (arr[j].localeCompare(arr[i]) > 0) {
				temp = arr[j]
				arr[j] = arr[i]
				arr[i] = temp
			}
		}
	}
}
FillArray(arr)
console.log('\x1b[34mUnsorted Array: \x1b[0m')
console.table(arr)

BubbleSort(arr) 
console.log('\x1b[34mSorted Array: \x1b[0m')
console.table(arr)
