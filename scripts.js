const windowText = document.getElementById('windowText');
const gifImage = document.getElementById('gifImage'); // Get the GIF image element
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const buttonContainer = document.querySelector('.buttonContainer'); // Get the button container

let noClickCount = 0;

// Function for changing the text, font size, and GIF when "YES" is clicked
yesButton.addEventListener('click', function() {
    windowText.innerHTML = "Yay! let's go out at Valentine's Day! 🌹";
    gifImage.src = "img/YES.gif"; // Change the GIF to something else
    gifImage.style.width = "100%";
    buttonContainer.style.display = "none"; // Hides the entire button container
});

noButton.addEventListener('click', function(){
    noClickCount++

    if (noClickCount === 1) {
        windowText.innerHTML = "You really don't want to be my valentine?";
        gifImage.src = "img/no1.gif"; 
    } else if (noClickCount === 2) {
        windowText.innerHTML = "Do you really really don't wan't to??";
        windowText.style.fontSize = "30px";
        gifImage.src = "img/no2.gif"; 
    } else if (noClickCount === 3) {
        windowText.innerHTML = "YOU DON'T REALLY REALLY REALLY WANT TO??";
        gifImage.src = "img/no3.gif"; 
    } else if (noClickCount === 4) {
        // Change the "NO" button to a "YES" button on the 4th click
        noButton.innerHTML = "YES";
        windowText.innerHTML = "I'll ask one last time will you be my valentine?? ehehe";
        gifImage.src = "img/hehe.gif"; 
        // Optional: Add the same event as yesButton to the new "YES" button
        noButton.removeEventListener('click', arguments.callee); // Remove old NO click event
        noButton.addEventListener('click', function() {
            windowText.innerHTML = "Yay! let's go out at Valentine's Day! 🌹";
            gifImage.src = "img/YES.gif";
            buttonContainer.style.display = "none"; // Hides the entire button container

        });
    }

});