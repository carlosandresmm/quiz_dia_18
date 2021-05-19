//localStorage

let colores = ['amarillo','azul','rojo']
let colors = localStorage.setItem('mis_colores',colores)

let consultar_colores = localStorage.getItem('mis_colores')
document.write(consultar_colores)

// sessionStorage

let frutas = ['mango','uva','lulo']

let guardar_frutas = sessionStorage.setItem('mis_frutas',frutas)

let consultar_frutas = sessionStorage.getItem('mis_frutas')
alert(consultar_frutas)