/* let /const

cons obj = {text:"hello"}

in the loop in functions use let (let)
everything else should be const


text.push to change the value of an arrey
in const 

arrow functions 

function myFunction() {

}


const myArrowFunction =() => {


}

with this new function you can do call back 

forEach /for loop but modern
 
apodArray.forEach(item,index) => {
                   (apod,i)
    console.log("item :>>",apod);
}

//filter Elements in the arrey

apodArray.filter(apod =>) {} 

Map, filter and forEach only works on Arrays they have loop behaviour


//Asynchronous Javascript:
AJAX & fetch

fetch(url).then(reponse =>{ }
)


//*LUCAS SPIKE NOTES*/

const getData = () => {
    //AJAX & fetch
    const url = "https://apodapi.herokuapp.com/api/?start_date=2018-10-05&end_date=2018-12-10&thumbs=true&image_thumbnail_size=480&image_thumbnail_size=240"

    const loading = document.getElementById("loading")
    loading.style.display = "block"

    fetch(url).then(response => {
        console.log('response', response)
        return response.json()
    }).then(data => {
        console.log('apodArray', data)
        loading.style.display = "none"
        createCardList(data);
    })
}


// console.log('test')

// var apodArray = data

// console.log(apodArray);



function createCardList(array) {
    var cardList = document.getElementById("card-list")
    cardList.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        // console.log('array[i]', array[i])
        if (array[i].title.includes("Supernova")) {
            const card = document.createElement("div")
            card.className = "card col-sm-4 col-md-3 col-lg-2"

            const image = document.createElement("img")
            image.src = array[i].url
            image.className = "card-img-top"

            const title = document.createElement("h5")
            title.innerHTML = array[i].title
            title.className = "card-title"

            card.appendChild(image)
            card.appendChild(title)
            cardList.appendChild(card)
        }


    }
}



// let / const

const obj = { text: "hello" }
obj.text = "other"

let foo = "text"
foo = "other text"

// arrow functions

function myFunction() {

}

const myArrowFunctions = () => {

    //forEach
    apodArray.forEach((apod, i) => {
        // console.log('item :>> ', apod);

    })

    // filter
    const fileterdArray = apodArray.filter(apod => {
        return apod.title.includes("Supernova")
    })
    // console.log('fileterdArray', fileterdArray)



    // map
    const arr = [2, 3, 4]
    const mappedArray = arr.map(number => {
        return number * 2
    })
    // console.log('mappedArray', mappedArray)

}

/* I want to fliter all items by

https://www.youtube.com/watch?v=mrYMzpbFz18


https://www.w3schools.com/jsref/jsref_foreach.asp
 */
only list images 