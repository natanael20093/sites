// FUNCAO

const listaDENOMES = ["marta", "josé" ,"maria", "NAIARA","dilma"]

console.lo("exibindo todos os elementos:")
console.log(listaDENOMES)

console.log("\nexibindo apenas o primeiro elemento:")
console.log(listaDENOMES[0])

console.log("\nAdicionar um elemento:")
listaDENOMES.push("marilia")
console.log(listaDENOMES)

console.log("\n Remover um elemento:")

listaDENOMES.splice(2,1)
console.log(listaDENOMES)

console.log("\nRemovendo apenas o ultimo elemento:")
listaDENOMES.pop()
console.log(listaDENOMES)

console.log("\nREmovendo apenas o primeiro elemento:")
