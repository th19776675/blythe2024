
  function roundDownToNearest100(number) {
    return Math.floor(number / 100) * 100;
}

// Initial letters array
let letters = ['B', 'L', 'Y', 'T', 'H', 'E', '(', 'D', 'O', 'T', ')', 'W', 'O', 'R', 'L', 'D'];

const fonts = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Bookman'];


// Function to increment the letters in the sequence
function incrementLetters(letters) {
  const lastLetter = letters.pop(); // Remove the last letter
  letters.unshift(lastLetter); // Add it to the front
  return letters;
}

function getRandomFont() {
  const randomIndex = Math.floor(Math.random() * fonts.length);
  return fonts[randomIndex];
}

// Function to create the letter box
function createLetterBox(letter) {
  const letterBox = document.createElement("div");
  letterBox.className = "letter-box";
  
  const letterDiv = document.createElement("div");
  letterDiv.className = "letter";
  letterDiv.textContent = letter;
  letterDiv.style.fontFamily = getRandomFont(); // Assign a random font
  
  letterBox.appendChild(letterDiv);
  
  return letterBox;
}

// Function to update the background boxes with letters
function updateBackgroundBoxes() {
    // Remove existing letter boxes
    const mainBg = document.querySelector(".main-bg");
    mainBg.innerHTML = ''; // Remove all child elements
    
    // Determine how many boxes are needed based on the updated viewport dimensions
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    let yBoxes = roundDownToNearest100(viewportWidth - 50) / 100;
    let xBoxes = roundDownToNearest100(viewportHeight - 50) / 100;
    let boxNumber = yBoxes * xBoxes;

    // Increment the letters in the sequence
    letters = incrementLetters(letters);

    // Loop through each box and assign the corresponding letter
    for (var i = 0; i < boxNumber; i++) {
        const letterIndex = i % letters.length; // Get the index of the letter to assign
        const letter = letters[letterIndex];
        mainBg.appendChild(createLetterBox(letter));
    }
}

// Ensure the DOM is fully loaded before updating background boxes
document.addEventListener("DOMContentLoaded", () => {
    // Initial update when the page loads
    updateBackgroundBoxes();

    // Update background boxes every second
    setInterval(updateBackgroundBoxes, 1000);
});