let currentPlayer = 'red'; // Current player
let gameover = false; // Game over flag

// Get all buttons
let buttons = document.getElementsByTagName("button");

// Add event listeners to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // Check if the button is not already colored and the game is not over
        if (this.style.backgroundColor === '' && !gameover) {
            // Change button color based on current player
            this.style.backgroundColor = currentPlayer;
            // Check for winner
            if (checkWinner(currentPlayer)) {
                alert(currentPlayer + " wins!");
                gameover = true;
            } else {
                // Switch player
                currentPlayer = currentPlayer === 'red' ? 'blue' : 'red';
            }
        }
    });
}

// Function to check if there's a winner
function checkWinner(player) {
    // Define winning combinations
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    // Check each winning condition
    for (let condition of winConditions) {
        let [a, b, c] = condition;
        if (buttons[a].style.backgroundColor === player &&
            buttons[b].style.backgroundColor === player &&
            buttons[c].style.backgroundColor === player) {
            return true; // Return true if a winning combination is found
        }
    }
    return false; // Return false if no winning combination is found
}
