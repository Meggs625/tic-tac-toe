# 🐷 Tic Tac Toe! 🐯


## Table of Contents
  * [Introduction](##introduction)
  * [Contributors](##contributors)
  * [Project Manager](##project-manager)
  * [Technologies Used](##technologies-used)
  * [Goals](##goals)
  * [Features](##features)
  * [Demonstration](##demonstration)
  * [Deployed Page](##deployed-page)
  * [Possible Future Extensions](##possible-future-extensions)
  * [Set Up](##set-up)
  * [Sources](##sources)
  * [Project Specs](##project-specs)
  * [Challenges and Wins](##challenges-and-wins)


## Introduction
  Take a break from the day to day and play a rousing game of Tic-Tac-Toe! It's great for all ages. You and one competitor can face off , track your wins, and see who leaves victorious.

## Contributors
  Megan McBride - Frontend Development student at Turing

## Project Manager
  Heather Faerber

## Technologies Used
  * Javascript
  * HTML
  * CSS

## Goals
  For this project, I started with three goals:
    1. To gain a better understanding of when/how to use localStorage.
    2. How to correctly differentiate between the DOM and the Data Model
    3. Use event bubbling when appropriate

## Features
  This page will allow the user to:
    * Begin a new personalized game of Tic-Tac-Toe by entering the players' displayNames.
    * Accurately track the turns and wins as game play progresses.
    * Does not allow for player icons to override one that has already been placed.
    * Does not allow for players to continue to click open sections after winner has been declared.
    * Maintain the turn and win upon page reload.
    * Clear previous history to allow for a new players to start a new game.

## Features
  ![New-Recording-6_14_2021_-2_10_57-PM](https://user-images.githubusercontent.com/78767067/121958594-15e6e380-cd21-11eb-9574-324589064c39.gif)

## Deployed Page
  Coming Soon

## Possible Future Extensions
  In the future, a user might look forward to:
    * Each player selecting their preferred character icon from a list
    * Confetti to fill the screen when a game is playerTwoName

## Set Up
  1. Fork this repo
  2. Clone the repo to your local machine
  3. View the project in the browser by running 'open index.html' in your terminal

## Sources
  * [MDN](https://developer.mozilla.org/en-US/)
  * [CSS-Tricks](https://css-tricks.com/)
  * [HTML Color Codes](https://htmlcolorcodes.com/)

## Project Specs
  The full information on the project can be found [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html)

## Challenges and Wins

  ### Challenges:
    * At first, it was difficult to decide on the structure of tracking the actions on the game board. I started by creating a large array of all the different winning conditions. After distilling that down to one object literal, it became a lot easier to visualize.
    * Local storage was a sticking point for me after I changed from only storing the turns and the wins to storing object literals of the players. This caused a lot of trial and error and the realization that even though I retrieved and parsed the object from localStorage, it did not immediately instantiate as an instance of the Player class.
    * Finding something new each time I read through the project specifications and realizing that although a certain part was not applicable the first read through, after working through some code, I made a mistake against what was outlined in the spec. I would then have to go back and made updates. For example: I forgot that it stated to only have one global variable for the game. Organically, I had made more than one global variable...

  ### Wins:
    * There were a lot of pieces that clicked into place for me through trial and error on this project. As I stated in the Challenges, localStorage was still mysterious to me. However, after having worked through those challenges, I feel I have gained a better understanding.
    * A big win was not getting truly stuck in any particular part. Although I spent more time than I would have liked on one or two aspects, I was always making some kind of progress, however small. With each console.log and search through my notes, I was able to locate that problem, fix it, and then move on to troubleshoot the next problem.
    * With wanting to apply more of what we have learned over the last five weeks, I wanted to challenge myself a bit and add some extra features. One of which was a "Clear Match History" button to allow players to start new games matches. Also, adding the form to allow players to personalize their experience was a lot of fun.
    * One last win: Being able to better grasp CSS Flexbox and use it to get the site to look as I want. I also really enjoyed delving into CSS to add some fun features to the buttons including a shadow, hover state style change, and slow fade. CSS has been a struggle for me on past projects, so this felt like a big win!
