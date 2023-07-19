// GLOBAL VARIABLES //

const navbar = document.querySelector("#movie-list")
let currentMovie

// CHALLENGE 1 //

fetch("http://localhost:3000/movies")
    .then( response => response.json() )
    .then( movieObjectArray => {
        console.log("first movie after fetch: ", movieObjectArray[0] )
        movieObjectArray.forEach(movieObject => {
            const img = document.createElement('img')
            img.src = movieObject.image
            navbar.append( img )

            // CHALLENGE 3 //
            img.addEventListener( "click", () => populateDetails(movieObject) )
        })

        // CHALLENGE 2 //
        const firstMovie = movieObjectArray[0]
        populateDetails(firstMovie)
    })

    
    
function populateDetails(movieObject) {
    currentMovie = movieObject
    
    console.log("inside populateDetails: ", movieObject )
    
    const detailImage = document.querySelector("#detail-image")
    detailImage.src = movieObject.image
    const title = document.querySelector("#title")
    title.textContent = movieObject.title
    const yearReleased = document.querySelector("#year-released")
    yearReleased.textContent = movieObject.release_year
    const description = document.querySelector("#description")
    description.textContent = movieObject.description
    const amount = document.querySelector("#amount")
    amount.textContent = movieObject.blood_amount
    const watched = document.querySelector("#watched")
    watched.textContent = movieObject.watched ? "Watched" : "Unwatched"
    // ternary statement --> concise if / else statement //
}


// CHALLENGE 4 //

const theButton = document.querySelector("#watched") 

theButton.addEventListener("click", () => {
    console.log( "before switching to watched: ", currentMovie )
    currentMovie.watched = !currentMovie.watched
    theButton.textContent = currentMovie.watched ? "Watched" : "Unwatched"
})


// CHALLENGE 5 //

const form = document.querySelector('#blood-form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const amountOfDropsToAdd = event.target['blood-amount'].value

    currentMovie.blood_amount += parseInt( amountOfDropsToAdd )

    const amountSpan = document.querySelector( '#amount' )
    amountSpan.textContent = currentMovie.blood_amount
})