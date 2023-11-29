// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
let x = 0;

while(x < restaurants.length)
{
    newRestaurants.push("Restaurant Name: " + restaurants[x])
    x++;
}

console.log(newRestaurants);
