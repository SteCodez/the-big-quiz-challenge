# Project-2-The Big Quiz Challange
## Table of Contents

1. [General Info](#GeneralInfo)
2. [User Stories](#UserStories)
3. [Design](#Design)
4. [Technologies](#Technologies)
5. [Testing](#Testing)
6. [Deplpoyment](Deployment)
7. [Credits](#Credits)
8. [Notes](#Notes)
---
---

## General Info
***
---
---

* The purpose of this site is to make a fun but challanging quiz application using HTML, CSS and JavaScript. 
* I followed multiple tutorials in preperation for this and created this project through a tutorial as well as others 4 times before having my own shot at it.
* Even though I followed a tutorial I physically typed every single letter of code myself and can now say I have a good understanding of the what/why in the code and feel I have developed a much better understanding of JavaScript as a whole.
* I genuinely struggled throughout this section of the course but after completing this project over and over again I can say with confidence I am happy with the progression of my JavaScript although a lot of extra work is to be done to be at a level where I could create this app on my own.
* The bulk of the styling is based on a tutorial but I had to customize it with my own media queries as they were not present and added my own flare on the style itself.
* Overall I am extremely comfortable with CSS and HTML, I find them very straightforward and easy to use so I felt.
* The JavaScript tutorial owner is a YouTuber named Brian Design, the vast majority of the code was created and can only be credited to him.

---
## User Stories
---
---
#### **As a user using this application the things I would like to see are.**
* An interesting and challanging quiz.
* Multiple choices.
* A way to keep track of scores.
* A leaderboard to show past scores.
 
 #### **As a user returning to this application the things I would like to see are.**
 * New questions.
 * A way to share scores with other users.
 * Pictures to accompany the questions or right answers.
 * Picture questions (identifying random objects)

 
---
---

## Design
***
---
---
#### Wireframes
* I am currently very unhappy about the quality of my Wireframes. Unfortunately my free subscription with Balsamiq had expired. I found it hard to find a strong replacement for Balsamiq as I found it very easy to use with some fantastic functions. The replacement I used for the Wireframes was called Uizard. It was very basic and I found it very complicated, actually near impossible to get even very basic wireframing done as the quality of the tools were poor and even something as simple as copying an inputted feature and pasting it would place the pasted item halfway across the screen onto another wireframe. 

* [Wireframe, phones](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/phone_wireframes.png)
* [Wireframe, tablets](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/wireframes_tablet.png)
* [Wireframe, full screen](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/computer_wireframe_one.png)
* [Wireframe, full screen part two](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/computer_wireframes_two.png)
---
 #### Fonts
* The font used throughout the app is Nova, its a simple font that adds a retro feel. I felt adding a secondary font was uncalled for as the site as a whole is not type heavy and the color scheme and layout of everything breaks the site up nicely enough to allow one font to look consistently well placed.

#### Color Palette
The color pallete I went with was black background with all blue buttons except for the button leading to the highscores page which is yellow, also the progress bar is a shade of green. The buttons also turn green or red based on the answer being correct or incorrect. 

* [Color black](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/black_color_palette.png)
* [Color Blue](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/blue_color_palette.png)
* [Color Yellow](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/yellow_color_palette.png)
* [Color green](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/green_color_palette.png)
* [No answer](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/no_answer.png)
* [Answer correct](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/right_answer.png)
* [Answer Incorrect](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/wrong_answer.png)

#### General Layout

* The overall layout of the app is very simple and straight forward, I feel the app has a very streamlined look and is quite pleasing to the eye regardless of the device it is played on. I had at least 20 people play through the quiz on various devices of various sizes and shapes and can confirm that virtually everyone said the app fit the screen perfect with no text or elements leaving the visible are of the screen.
* The design leaves a lot of room for improvements if desired and the color scheme is very easily changed without compromising the overall color palette of the app.
* The site is 100% responsive across all devices of all shapes and sizes making for an extremely accessible gaming experience catering for all manners of peple from all walks of life.

* [Overall Responsiveness home](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/responsive_design_test.png) 
* [Overall Responsiveness home](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/general_responsiveness_quiz.png)
* [Overall Responsiveness home](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/general_responsiveness_end.png)
* [Overall Responsiveness home](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/general_responsiveness_leaderboard.png)
* [Quiz mobile Responsiveness](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/quiz_game_responsiveness.png)
* [Home page mobile responsiveness](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/mobile_responsiveness.png)
* [Leaderboard mobile responsiveness](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/leaderboard_responsiveness.png)

---
---
## Technologies
***
---
---
* HTML5 
* CSS
* VSCode
* JShint
* GitHub
* GitPod
* Google
* Font Awesome
* Google Fonts
* WebKit
* Developer tools

---
---
## Testing
***
---
---
* As I read through the code multiple times I am happt to say that there was a total of 1 error through all of the validation which was quickly resolved as a minor typo.

 | What is expected. | Did the element successfully perform its task? If not, why? | How was the issue fixed? | Approved/issue resolved? |
   |-------------| ------------ | ------------- |------------- |
| I expect the play button to start the quiz. | The play button successfully started. | No issue. | Yes.
| I expect the highscores button to take me to the leader board.  | Highscores button succesfully transitioned to the leaderboard page. | No issue. | Yes.
| I expect the choice buttons to flash green when the correct answer is selected.| The button successfully flashed green when the correct answer was selected. | No issues. | Yes.
| I expect the choice buttons to flash red when the incorrect answer is selected.| The button successfully flashed red when the incorrect answer was selected. | No issues. | Yes.
| I expect the time transitioning from question to question to consistently take less than 1 second. | The time between questions remained at an acceptable level throughout. | No issues. | Yes.
| I expect all buttons on the end page to be fully functional and complete the assigned tasks. | All buttons succesfull submitted and/or transitioned to the assigned location. | No issues. | Yes.
| I expect the name submitted on the end page to successfully transfer with the aquired score to the successfully transfer to the leaderboard without issue. | The name and score did not succesfully transfer to the leaderboard because of a typo in the highscore.js page causing the leader board to target an empty array instead of the ID on line 1. | Changed line 4 to "highScoresList" as opposed to "highScores". | Yes.
|Testing "html" pages on the W3C Validator. | Zero errors shown. |  | Yes.
|Testing "CSS" pages on the W3C Validator. | Zero errors shown. |  | Yes.
|Testing "JavaScript" files on JShint. | A few warnings shown, mostly for lack of semicolons. Some undefined variables but overall a good responses and no issues with the functionality of the site. |  | Yes.

* [Home page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/index.html_validation.png)
* [Quiz page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/game.html_validation.png)
* [End page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/end.html_validation.png)
* [Leaderboard page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/highscores.html_validation.png)
* [Style.css page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/style.css_validation.png)
* [Game.css page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/game.css_validation.png)
* [Highscore.css page validation certificate](https://github.com/SteCodez/the-big-quiz-challenge/blob/master/quiz_challenge_images_/highscores.css_validation.png)


## Deployment
***
---
---
#### Deploying on GitHub pages
* After creating all of the neccessary files for my project on VScode I committed the bulk of my code to GitHub.
* After pulling all the code I navigated to my project repo.
* I clicked the settings button in the nav bar
* I then scrolled down and clicked the pages button on the left hand side of the screen.
* After navigating successfully to the GitHub pages section, scroll to where it says branch. 
* I picked the branch and selected the desired folder.
* I clicked the save button.
* I watched the build to check it was successful and then opened the website by scrolling back up and clicking the deployment link where it says "your site is live".

#### Forking the GitHub Repository
By forking the GitHub Repository you will be able to make a copy of the original repository on your own GitHub account allowing you to view and/or make changes without affecting the original repository by using the following steps:

* Log in to GitHub and locate the GitHub Repository.
* At the top of the Repository (not top of page) just above the "Settings" button on the menu, locate the "Fork" button.
* You should now have a copy of the original repository in your GitHub account.

#### Making a local clone
* Log in to GitHub and locate the GitHub Repository.
* Under the repository name, click "Clone or download".
* To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
* Open commandline interface on your computer.
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone, and then paste the URL you copied above.
* Press Enter. Your local clone will be created.

## Credits
***
---
---
* https://www.codingcommanders.com/website-builder/social-media-links.html (Code for social media hover function)
* Brian Design tutorials.
* Rich Wells for guiding me in the right direction and helping me solve issues and furthering my knowledge of JavaScript.
* I followed the information from the ReadMe of Donna Maguire who submitted her project in the peer review channel as I was struggling to describe how to make a clone and forking a repository for others trying to edit and clone my project.

## Notes
---
---
* I am aware that all of my files should have been compiled and was sure I would be able to do it at the end, unfortunately I had a conflict between VScode and GitHub which I was unable to resolve even tho I searched thoroughly online for methods of doing so. Somehow 2 branches clashed from me committing and it became a bit of a cluster mess and I had progressed passed that stage so I was fearful of fixing this issue and having the commit pushed and resetting all of the work I have done.
* This issue is something I will address and should have done immediately. Fortunately it does not have a detremental effect on the project content itself but makes the project harder to navigate for other developers.
