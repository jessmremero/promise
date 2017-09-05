console.log(1)
function maida (){
	console.log(2)
	return new Promise(function(resolve,reject){//返回一个promise//
		console.log(3)//promise后面的会立即执行//
		setTimeout(function(){
			console.log(4)
			let random = Math.random()
			console.log(random)
			if(random>0.5){
				resolve()
			}else{
				reject()
			}
		},1000)
	})
}

console.log(5)
let apromise = maida()
console.log(6)
apromise.then(function(){
	console.log(7)
	console.log('win')
},function(){
	console.log('lose')
})//执行顺序：1 5 2 3 6 4 7//