let arr = []
let ArrayLength = 0
let target = 0
let MaxNumberToRandom = 0

function RandomNumbersForArr(arr){
    for(let i = 0; i < ArrayLength; i++){
        let r = Math.floor(Math.random() * MaxNumberToRandom)
        arr.push(r)
    }   
}

function BubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let l = 0; l < arr.length - i - 1; l++) {
			if (arr[l] > arr[l + 1]) {
				let n = arr[l]
				arr[l] = arr[l + 1]
				arr[l + 1] = n
			}
		}
	}
}

function binarySearch(arr, target) {
	let left = 0
	let right = arr.length - 1

	while (left <= right) {
		let mid = Math.floor((left + right) / 2)
		let currentElement = arr[mid]
		if (currentElement === target) {
			return mid
		} else if (target < currentElement) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}

function FillVariables() {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	})
	readline.question(`Введіть бажаний розмір масиву: `, rl1 => {
		ArrayLength = rl1
		ArrayLength = ArrayLength * 1

		readline.question(`Введіть граничне число для рандомайзера чисел: `, rl2 => {
			MaxNumberToRandom = rl2
			MaxNumberToRandom = MaxNumberToRandom * 1

			readline.question(`Введіть число для пошуку у масиві: `, rl3 => {
				target = rl3
				target = target * 1

	RandomNumbersForArr(arr)
	BubbleSort(arr)
	let searchResult = binarySearch(arr, target)

	console.table(arr)
		if (searchResult == -1) {
			console.log(`Елемент ${target} не знайдено :(`)
		} else {
			searchResult++
			console.log(`Елемент ${target} знайдено`)
		}

			})
		})
	})
}
FillVariables();