


function createList(arr) {
console.log(arr)
    var container = document.getElementById("list")
    container.innerHTML = ""
    
    var dropdownValue = document.getElementById("dropdown").value
    console.log(dropdownValue)

        var checkboxesArray = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  checkboxesArray.push(parseInt(checkboxes[i].value))
}

    console.log(checkboxesArray)


    for (var i = 0; i < arr.length; i++)  {
        if (arr[i].title.includes(dropdownValue)) {
                  var dateObject = new Date(arr[i].date)
            var month = dateObject.getMonth()

            console.log(month)
            if(checkboxesArray.includes(month)){
            var div = document.createElement("div")

            var img = document.createElement("img")
            img.src = arr[i].url

      

            var date = document.createElement("p")
            date.innerHTML = arr[i].date
            var title = document.createElement("p")
            title.innerHTML = arr[i].title

            div.appendChild(img)
            div.appendChild(date)
            div.appendChild(title)

            container.appendChild(div)
            }
            }
    }
}



function dropdownChanged() {
createList(data)
}
function checkboxChanged() {
    

createList(data)
}
/*in information.html
<button onclick="myFunction()">Show more</button> */
/*
function myFunction() {
    let button = document.getElementById("button").replace
document.innerHTML.replace


function myFunction() {
  document.getElementById("demo").innerHTML = "SHOW LESS";
}
*/



    
function myFunction() {
    let para = document.getElementById("para");
    let btn = document.getElementById("button");
    if (para.style.display === "none") {
        para.style.display = "block";
        btn.innerHTML="Show less"
    }

    else {
        para.style.display = "none";  
        btn.innerHTML="Show more";
    }
}

