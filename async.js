// Write an asynchronous function and call it with async/await
async function num() {
    console.log(getRandomNumber())
}
// Write function called getRandomNumber that returns a promise
function getRandomNumber() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let rand = Math.floor(Math.random()*10);
            console.log(rand)
            const error = false
    
        if(!error) {
            resolve(rand);
        }else {
            reject("Error: Something went wrong")
        }
            //callback();
        }, 500)
    
        
      }) 
    }
num();
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function


// Fetch remote data using async/await
// Write an asynchronous function that accepts 1 parameter
async function getPlace(cityName) {
    const res = await fetch("https://geocode.xyz/"+cityName+"?json=1&auth=481409456838701848009x81315")
    const info = await res.json();
    console.log(info.latt, info.longt);
}

getPlace("seattle")
getPlace("atlanta")
getPlace("tacoma")
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:
// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test
// (Note: the API will only allow you 2 calls per second, so if you are getting errors and you think you shouldn't be, try calling fetching only ONCE per execution.)