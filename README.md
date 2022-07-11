# Rock, Paper, Scissors!

## Introduction
Rock, Paper, Scissors is a single page web application built with HTML5, CSS3, and vanilla javascript. This web application allows the user to play a game of "rock, paper, scissors" against a computer. There are two game play options: one with the classic fighters of "rock, paper, scissors" choices, and the other with five fighter options "rock, paper, scissors, lizard, spock." The main page begins with the rules shown and allows the user to choose the game they would like to play. Then once the user chooses their fighter/weapon the game truly begins!
## Project Specs
The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo-v2.html).
## Deployed Page
[Deployed Site](https://forsethnico.github.io/rock-paper-scissors/)
## Contributors
  [Nicole Forseth](https://github.com/forsethnico) - Front End Engineering Student at [Turing School of Software and Design](https://turing.edu/)
## Learning Goals
  - Use DRY Javascript and event delegation to handle similar event listeners
  - Write semantic HTML and efficient CSS to form a usable UI
  - Manipulate the page after loading to add, remove, and update elements on the DOM
  - Understand the difference between the data model and how the data is displayed on the DOM
  - Use our problem solving process to break down large problems and solve things step by step
## Illustrations
https://user-images.githubusercontent.com/18154724/173674889-f325fc5f-e5a6-461f-a4cd-5e5e9ccf6c16.mov
## Application Features
- On page load, there are two game play options: one with the classic "rock, paper, scissors" choices, and the other is more difficult with five options "rock, paper, scissors, lizard, spock." The user chooses a game play option which chooses which selection of fighters are available. 
- The game is played by one user against a computer which generates a randomly selected fighter choice from the available options. The user is directed to "Choose a Fighter!" and they must select their choice.
- The winner is determined, the user choice and the computer choice fighter images are then displayed, along with a message about who won that round. The win count for the respective player is incremented and no scores are changed if the result is a draw. The win count is reset on page refresh.  
- After one round of battle is played, the user has the ability to "Change Game" from classic to more difficult to continue playing (win count doesn't reset). You can move back and forth between game types as many times as you would like. 
- A timeout is used after a completed game to reset the board to show the fighter choices to play again. 
- Architecture:
  * Two Javascript files (player.js and game. js) contain classes where the game logic exists
  * There is one instance of the Game class created and two Player instances that are interacting with each other. I struggled with how to implement the appropriate methods between the two. 
  * One javascript file (main.js) displays the data to the DOM
  * Separate CSS and HTML files contain the skeleton and styling elements
## Possible Future Extensions
  - Set a specific number of wins for a player to reach and then restart the game score to zero wins. If I had additional time, I wanted to implement this  feature first. 
  - Implement a local storage extension where the number of wins would persist across page refreshes. This is something I would like to learn more about, but have not researched at this time. 
  - I would also like to update the CSS with more microinteractions and perhaps making the fighters animated. 
## Set Up
1. Create a private repository on GitHub. 
2. Clone the repo to your local machine.
3. View the project in the browser by running open index.html in your terminal.
## Technologies
  - Javascript
  - HTML
  - CSS
  - GitHub
  - Atom
## Resources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [JavaTPoint](https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript)
  - [YouTube](https://www.youtube.com/)
  - [W3Schools](https://www.w3schools.com/)
  - [Trello Board](https://trello.com/b/7v4C9C0L/final-solo-project) for organization
