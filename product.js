const menuOptions = [

    { name: 'Kit Restaurador', price: 250, pink: false, src: './Assets/cabelo8.jpg' },
    { name: 'Kit Reconstrutor', price: 240, pink: false, src: './Assets/cabelo2.jpg' },
    { name: 'Kit Hidratação', price: 220, pink: false, src: './Assets/cabelo5.jpg' },
    { name: 'Kit Evolução', price: 280, pink: false, src: './Assets/cabelo1.jpg' },
    { name: 'Kit Abacate', price: 210, pink: false, src: './Assets/cabelo7.jpg' },
    { name: 'Protetor Termico', price: 109, pink: false, src: './Assets/cabelo10.jpeg' },
    { name: 'Creme Hidratante', price: 100, pink: false, src: './Assets/cabelo9.jpeg' },
    { name: 'Shampoo', price: 100, pink: false, src: './Assets/cabelo12.jpeg' },
    { name: 'Kit Hup', price: 252, pink: false, src: './Assets/cabelo3.jpg' },
    { name: 'Condicionador', price: 1230, pink: false, src: './Assets/cabelo11.jpeg' },
    { name: 'Hidratante', price: 155, pink: false, src: './Assets/cabelo13.jpeg' },
    { name: 'Hidratação', price: 169, pink: false, src: './Assets/cabelo14.jpeg' },
    



]

const list = document.querySelector('.produto')
let myLi =''

menuOptions.forEach(product => {

   myLi+= `
<li class="box-product">
<a href="#" class="link-procuct abrirModal-js">
<img src=${product.src}>
<p class="descrition">
 ${product.name}
</p>
 <p class="price">
   ${product.price}.00
</p>
</a>

</li>

`
})

list.innerHTML = myLi



