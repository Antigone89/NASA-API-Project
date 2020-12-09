const getData = () => {
    fetch(data).then((response) => {
        return response.json();
    }).then((data) => {
        console.log('data', data)
        createHtmlTable(data)
        createDropDown(data)
        setEventListeners(data)
    })
}
const getDataAsync = async () => {
    let response = await fetch(data);
    let data = await response.json();
    return data;
};
    
//* Create a list of pictures.
console.log(data[0,1,2,3,4].url)
console.log(data[0,1,2,3,4].description)