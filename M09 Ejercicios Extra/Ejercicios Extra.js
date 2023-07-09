/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { filter } = require("../M08 JavaScript Callback/homework")

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arreglo=[]
   var propiedades=Object.keys(objeto)
   for(var i=0; i<propiedades.length;i++){
      arreglo[i]=[propiedades[i],objeto[propiedades[i]]]
   }
   return arreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letras=string.split("")
   var unicasletras=letras.filter((letra,index)=>{
      return letras.indexOf(letra)===index
   })
   unicasletras=unicasletras.sort()
   objeto={}
   unicasletras.map(letra=>{
      var conteo=0
      for(var i=0;i<letras.length;i++){
         if(letra==letras[i]){
            conteo=conteo+1
         }else{
            conteo
         }
      }
      objeto[letra]=conteo
   })
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letras=string.split("")
   var miniscula=[]
   var mayuscula=[]
   for(var i=0;i<letras.length;i++){
      if(letras[i]!==letras[i].toUpperCase()){
         miniscula.push(letras[i])
      } else {
         mayuscula.push(letras[i])
      }
   }
   return mayuscula.join("") + miniscula.join("")
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras=frase.split(" ")
   var palabrasinversas=[]
   for(var i=0;i<palabras.length;i++){
      var palabrai=palabras[i].split("")
      var palabrainverso=[]
      for(var e=0;e<palabrai.length;e++){
         palabrainverso[e]=palabrai[palabrai.length-1-e]
      }
      palabrainversojunto=palabrainverso.join("")

      palabrasinversas[i]=palabrainversojunto
   }
   return palabrasinversas.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var array=numero.toString()
   array=array.split("")
   function ultimoigualaprimero2(ele,indi,arre){
      if(ele===arre[arre.length-1-indi]){
         return true
      } else{
         return false
      }
   }
   if(array.every(ultimoigualaprimero2)===true){
      return "Es capicua"
   } else{
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array=string.split("")
   function tieneabc(letra){
      if(letra==="a" || letra==="b" || letra==="c"){
         return false
      } else {
         return true
      }
   }
   array=(array.filter(tieneabc)).join("")
   return array
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var palabraylongitud=[]
   for(var i=0;i<arrayOfStrings.length;i++){
      palabraylongitud[i]=[arrayOfStrings[i].length,i]
   }
   palabraylongitud=palabraylongitud.sort()
   var arraynuveo=[]
   for(var e=0;e<arrayOfStrings.length;e++){
      arraynuveo[e]=arrayOfStrings[palabraylongitud[e][1]]
   }

   return arraynuveo
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   function tiene(numero){
      for(var i=0;i<array2.length;i++){
         return array2.includes(numero)
      }
   }
   return array1.filter(tiene)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
