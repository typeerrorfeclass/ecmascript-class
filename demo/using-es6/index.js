
console.log(0)

setTimeout(_ => console.log(1))

let prom = new Promise((resolve, reject) => {
  console.log(2)
  resolve()
  console.log(3)
}).then(_ => {
  console.log(4)
}).then(_ => {
  console.log(5)
})

console.log(6)
