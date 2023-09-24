// const usernameInput = document.querySelector('#username_input')
// const form = document.querySelector('.form_1')

// //usernameInput.value = 'Hello World'
// const btnElem = document.querySelector('.form_1 button')
// // btnElem.addEventListener('click', function(){
// //     console.log(usernameInput.value)
// // })


// //===========================tasks==================

// //Создать форму, при submit которой данные из формы выводятся в консоль.

// form.addEventListener('submit', function (event) {
//     event.preventDefault() //этот метод отменяет любое действие 
//     console.log(usernameInput.value)
// })

// form.addEventListener("submit", function (e) {//event
//     e.preventDefault()
//     const username = usernameInput.value
//     usernameInput.value = ""
//     console.log(username)
// }) // чтобы поле очищалось, но данные на сервер не отправлялись

//1 Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.

//2 Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.

// form.addEventListener("submit", function (e) {
//         e.preventDefault()
//         const productname = productnameInput.value
//         const product_price = product_priceInput.value
//         productnameInput.value = ""
//         product_priceInput.value = ""
//         console.log(productname)
//         console.log(product_price)
// })

//teacher's variant

const productForm = document.querySelector("#product_form")
const productNameInput = document.querySelector("#product_name")
const productPriceInput = document.querySelector("#product_price")
let products = []
productForm.addEventListener("submit", function (e) {
    e.preventDefault()

    console.log(`Product name: ${productNameInput.value}`)
    console.log(`Product price: ${productPriceInput.value}`)

    const productsObject = {
        name: productNameInput.value,
        price: +productPriceInput.value
    }

    products.push(productsObject)
    
    console.log("Call rerender")
    rerender()


    //productNameInput = ''///
    console.log(products)
    productForm.reset() // метод обнуления дочерних элементов
})

// 3 Добавить функцию, которая получает наименование карточки и цену и возвращает HTML элемент с карточкой товара.

// function createProductCard({name, price})'
// createProductCard(products[i])
function createProductCard(name, price) {
    const pProductName = document.createElement("p")
    const pProductPrice = document.createElement("p")
    pProductName.innerText = name
    pProductPrice.innerText = price

    const productCardDiv = document.createElement("div")
    productCardDiv.classList.add("product_card")
    productCardDiv.append(pProductName, pProductPrice)

    return productCardDiv
}
// 4 Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.
//8 Добавить отображение фразы 'товаров нет', когда товаров нет
function rerender() {
    const productsBlock = document.querySelector(".products_block")
    productsBlock.innerHTML = ""
    if(products.length === 0) {
        const h1Elem = document.createElement("h1")
        h1Elem.innerText = "Товаров нет"
        productsBlock.append(h1Elem)
        return
      }
    for(let i = 0; i < products.length; i++) {
      const {name, price} = products[i]
      const productCard = createProductCard(name, price)
      const removeBtn = createRemoveBtn()
      removeBtn.addEventListener("click", function () {
        console.log(i) // index of product in array products
        products.splice(i, 1)
        // первый параметр индекс начала удаления
        // второй параметр количество элементов для удлаения из массива
        rerender()
      })
      productCard.append(removeBtn)
      productsBlock.append(productCard)
      productCard.addEventListener("dblclick", function () {
        console.log(name);
      })
    }
  }
//Добавить функцию, которая возвращает кнопку в виде крестика в красном кружке.
//Добавить в rerender добавление крестика в верхнем правом углу карточки товара.
function createRemoveBtn() {
    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove_btn")
    removeBtn.innerText = "X"
    return removeBtn
  }
//Добавить анимированное появление крестика при наведении на карточку. Использовать opacity.


// 9 Добавить форму в HTML с полем ввода и кнопкой для поиска по товарам. Реализовать скрипт, который получает из формы строку при submit и выводит в консоль.
const filtersForm = document.querySelector("#products_filters_form")
const productSearchNameInput = document.querySelector("#product_search_name")
const productSortField = document.querySelector('#product_sort_field')


//10 Меняем вызов обработчика формы с submit на change и убираем кнопку из формы.
filtersForm.addEventListener("change", function (e) {
//   e.preventDefault()
 console.log(productSearchNameInput.value)
  console.log(productSortField.value)
})

// 11 Сделать сортировку товаров по названию по нажатию по кнопке.
filtersForm.addEventListener("change", function (e) {
    // e.preventDefault()
    console.log(productSearchNameInput.value)
    console.log(productSortField.value)
  
    if(productSortField.value === "name") {
      // sort by product name
      console.log("by name")
      products = products.sort(function(a, b) {
        if(a.name > b.name) {
            return 1
        } else if (a.name === b.name) {
            return 0
        } else if (a.name < b.name) {
            return -1
        }
      })
    } else if (productSortField.value === "price") {
      // sort by product price
      console.log("by price")
      products = products.sort(function(a, b) {
        if(a.price > b.price) {
              return 1
        } else if (a.price === b.price) {
            return 0
        } else if (a.price < b.price) {
            return -1
        }
      })
    }
  
    rerender()
  })
  
  // const arr = [3, 2, 1]
  // arr.sort(function(a, b) {
  //   if(a > b) {
  //       return 1
  //   } else if (a === b) {
  //       return 0
  //   } else if (a < b) {
  //       return -1
  //   }
  // })
  
  // arr.sort(function(a, b) {
  //   return a - b
  // })
  
  