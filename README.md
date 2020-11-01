## Table of Content
- [Deployment:](#deployment)
- [Technologies Used:](#technologies-used)
  - [Languages:](#languages)
  - [Libraries and Frameworks:](#libraries-and-frameworks)
  - [Tools](#tools)
- [Project Purpose:](#project-purpose)
- [Business Case:](#business-case)
- [Design principles/features:](#design-principlesfeatures)
- [User Stories:](#user-stories)
- [Future Features:](#future-features)
- [Testing](#testing)
  - [Validation](#validation)
      - [HTML](#html)
      - [CSS](#css)
      - [JS](#js)
  - [Manual testing](#manual-testing)
    - [<ins>Layout Responsive Design:</ins>](#inslayout-responsive-designins)
      - [Menu Page:](#menu-page)
      - [Game Pages:](#game-pages)
    - [<ins>Layout Device Formats:</ins>](#inslayout-device-formatsins)
      - [Menu Page:](#menu-page-1)
      - [Game page:](#game-page)
    - [JS functions](#js-functions)
  - [Bugs](#bugs)
- [References:](#references)
  - [Project Inspired by:](#project-inspired-by)
  - [Images by:](#images-by)

# Deployment:

## Github Pages:

https://92an.github.io/second-milesonte-project/

### steps:
1. Go to your repository in github.
2. Go to the setting.
3. Scroll down to Github Pages.
4. Select branch you want to deploy (Master in my case).
5. Select the folder (/root) to deploy.
6. Save changes, and there is a link to the deployed website (see href above).

See documentation for publishing to Github Pages [here](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## deploy repository locally by cloning directory:
1. Go to the github repository.
2. Click on code.
3. Copy the url to the repository https://github.com/92an/second-milesonte-project.git.
4. Open up your local comand promt (Bash in my case).
5. Make sure to change working directory to the one you want to clone the directory to.
6. type the command git clone https://github.com/92an/second-milesonte-project.git
7. Enter to run the command

See documentation for cloning a github repository [ here ](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


# Technologies Used:

## Languages:
* HTML5
* CSS3 
* Javascript

## Libraries and Frameworks:
* Bootstrap
* Jquery
* Font Awesome

## Tools
* Visual Studio code
* Git
* Github
* Chrome Dev Tools

# Project Purpose:

A math game aimed at 2nd to 3rd graders, which is an age group of 6 – 9 years old. Acting as supplementary material to class giving dynamic questions with instantaneous feedback on the 4 core operators; addition, subtraction, multiplication, and division

# Business Case:

Since looking at numbers from 2019 roughly 600 000 people are between the ages 5 -9 in Sweden; putting the squarely in the market demographic and are potential users of the app. Teaching is in addition an underappreciated profession. This app seeks to alleviate some of the burden on teachers by providing a dynamic set of practice question to work with. This creates space for teachers to focus on the how to solve a question rather than provide materials to practice on. Providing this app at a cheap price would make it lucrative, since integrating technology and education is an underutilized market.

# Design principles/features:

* Simple design to eliminate busywork, focus on core features.

* Menu is simple, such that it only provides access to the game modes in big colorful buttons.

* Streamlined gameplay loop that generates 10 questions in the four core operations.

* Addition only sums up to 100.

* Subtraction has no negative numbers.

* Multiplication only has the standard times table up to 10.

* Division only has numbers that are divisible.

* Instantaneous feedback if right or wrong and return back to menu when all 10 questions are answered.

# User Stories:

* As a teacher I would want it to generate appropriate problems for my math class to ease my workload.

* As a parent I want the application to be safe and child friendly.

* As a user the game should provide feedback as to know if the answer submitted is right or wrong.

* As a user I would want to easily access the different game modes from the menu to focus on a specific area of math.

# Future Features:

* Scalable difficulty

* Additional game modes such as:
	* Subtraction allowing the answer to be negative.
	* Allowing subtraction with negative numbers.
	* Addition with 3 numbers.
	* Measurement conversion.
	* Checking prime numbers.


# Testing

## Validation

#### HTML
Validated with https://validator.w3.org/
* [x] index.html
* [x] addition.html
* [x] subtraction.html
* [x] multiplication.html
#### CSS
Validated with https://jigsaw.w3.org/css-validator/
* [x] style.css
#### JS
Validated with https://jshint.com/
* [x] game.js

## Manual testing
Tested using Chrome web browser and Chrome Dev tools.

Note*

At a glance it seems to work on Edge and Internet Explorer; but no robust test has been conducted.

### <ins>Layout Responsive Design:</ins>
Tested Responsive Design:

* Mobile S 320px
* Mobile M 375px
* Mobile L 425px
* Tablet 768px
* Laptop 1024px
* Laptop L 1440px

#### Menu Page:

|Design Test|Mobile S|Mobile M|Mobile L|
|-----------|:--------:|:--------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | ok | ok |

<p>&nbsp;</p>

|Design Test|Tablet|Laptop|Laptop L|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | ok | ok |

<p>&nbsp;</p>

#### Game Pages:

|Design Test|Mobile S|Mobile M|Mobile L|
|-----------|:--------:|:--------:|:--------:|
| Centered level heading | ok | ok | ok |
| Centered progressbar that starts at 1 | ok | ok | ok |
| Number boxes with numbers in them | ok | ok | ok |
| Centered operation icon between number boxes | ok | ok | ok |
| Centered input box below the question | ok | ok | ok |
| Centered submit button below the input box | ok | ok | ok |

<p>&nbsp;</p>

|Design Test|Tablet|Laptop|Laptop L|
|-----------|:------:|:------:|:--------:|
| Centered level heading | ok | ok | ok |
| Centered progressbar that starts at 1 | ok | ok | ok |
| Number boxes with numbers in them | ok | ok | ok |
| Centered operation icon between number boxes | ok | ok | ok |
| Centered input box below the question | ok | ok | ok |
| Centered submit button below the input box | ok | ok | ok |

<p>&nbsp;</p>

### <ins>Layout Device Formats:</ins>
Tested device formats:

* Moto G4
* Galaxy S5
* Pixel 2
* Pixel 2 XL
* iPhone 5/SE
* iPhone 6/7/8
* iPhone 6/7/8 Plus
* iPhone X
* iPad
* iPad Pro
* Surface Duo
* Galaxy Fold

#### Menu Page:

|Design Test|Moto G4|Galaxy S5|Pixel 2|
|-----------|:--------:|:--------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | ok | ok |

<p>&nbsp;</p>

|Design Test|Pixel 2 XL|iPhone 5/SE|iPhone 6/7/8|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | Excessive blank space above | ok | ok |

<p>&nbsp;</p>

|Design Test|iPhone 6/7/8 Plus|iPhone X|iPad|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | Excessive blank space above | Significant excessive blank space above |

<p>&nbsp;</p>

|Design Test|iPad Pro|Surface Duo|Galaxy Fold|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | Significant excessive blank space above | ok | ok |

#### Game page:

|Design Test|Moto G4|Galaxy S5|Pixel 2|
|-----------|:--------:|:--------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | ok | ok |

<p>&nbsp;</p>

|Design Test|Pixel 2 XL|iPhone 5/SE|iPhone 6/7/8|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | ok | ok |

<p>&nbsp;</p>

|Design Test|iPhone 6/7/8 Plus|iPhone X|iPad|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | ok | ok | Significant excessive blank space above |

<p>&nbsp;</p>

|Design Test|iPad Pro|Surface Duo|Galaxy Fold|
|-----------|:------:|:------:|:--------:|
|Image does not become fuzzy | ok | ok | ok |
|Image and title takes up first section of the page and weave into each other|ok|ok|ok|
| Menu buttons are clearly delineated and centered | ok | ok | ok |
| Menu button links work | ok | ok | ok |
| Footer sits at the bottom | Significant excessive blank space above | ok | ok |

### JS functions

|Functionality Test|Result|
|-----------|:------:|
| On load; game initializes with correct random numbers | ok |
| Addition generates number that sum to no more than 100 | ok |
| Subtraction generates numbers with a positive difference | ok |
| Multiplication generates numbers between 0 and 10 | ok |
| Division generates numbers that are divisible | ok |
| Block enter key on the input box from submitting form and resetting the game | ok |
| Connects the enter key on the input box to the onclick function on the submit button so that you can submit answers using enter | ok |
| Progressbar function moves the active element to the next item in the list | ok |
| Provides correct feedback when submitting answer | ok |
| When submitting right answer moves progress bar | ok |
| When submitting right answer generates new numbers | ok |
| When submitting right answer clears input box | ok |
| When submitting right answer to the 10th question; send congratulations message to the player and take the player to the main menu | ok |

## Bugs
Clicking refresh button restarts the game; something that can happen by accident. 

# References:

## Project Inspired by:

https://www.youtube.com/watch?v=q2Gg4-4wwlo&t=1052s

## Images by:

Image by <a href="https://pixabay.com/users/_Alicja_-5975425/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4014181">_Alicja_</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4014181">Pixabay</a>

