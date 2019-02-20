// Assignment 1

function getDogs(userInput) {
    let request = `https://dog.ceo/api/breeds/image/random/${userInput}`
    fetch(request)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            return responseJson;})
        .catch(error => alert('Something went wrong. Try again later.'));
}



function buttonHandler() {
    $('form').submit(event => {
        event.preventDefault();
        getDogs($('#dogInput').val());
    });
}

$(buttonHandler());

// function getDogs() {
//     fetch('https://dog.ceo/api/breeds/image/random/3')
//         .then(response => response.json())
//         .then(responseJson => {
//             console.log(responseJson);
//             return responseJson;})
//         .then(responseJson => 
//             displayResults(responseJson))
//         .catch(error => alert('Something went wrong. Try again later.'));
// }

// function displayResults(responseJson) {
//     console.log(responseJson);
//     //replace the existing image with the new one
//     $('.results-div').replaceWith(
//       `<img src="${responseJson.message}" class="results-img">`
//     )
//     //display the results section
//     $('.results').removeClass('hidden');
// }