# Ian O'Brien & Thomas Cleary Capstone Project

## Table of Contents

<ul>
  <li>Introduction</li>
  <li>Setup</li>
  <li>Key Features</li>
  <li>Notes</li>
  <li>FAQ</li>
  <li>License</li>
</ul>

## Introduction

This project, by Ian OB and Thomas C., is a full-stack Portfolio site which intends to use ReactJS and Tailwind CSS for its front-end, and MongoDB Atlas as its back-end database. It is meant to be a modern updated site for the historical author "Edward Steers Jr.". 

Ian O'Brien worked on the front-end with the ReactJS+Tailwind site. It makes use of a custom fetch useHook, which retrieves the database's data via a GET call through an Atlas https endpoint. Another endpoint exists with a query function attached that checks for ISBN values to be passed through to create individual book information pages. The pages are responsive due to Tailwind's easy media query classes and the site was designed with a mobile-first approach in mind which can be viewed through our FigMa prototype [here.](https://www.figma.com/file/YvF5Ad5KortGY9icbdRoxs/UI%2FUX-Prototype?type=design&mode=design&t=IYCbwEwhlieLGinw-0)

Thomas Cleary worked on the database. The database is a MongoDB database and was filled via an Amazon Webscraper which can be found [here.](https://github.com/Capstone-Project-IOBrien-TCleary/back-end) 

## Setup

To run this project, you will need to have node and npm on your machine. This project in particular uses node v21.7.1 and npm 10.5.0. If you find the project cannot run despite following the other setup steps, please make sure your build is not out of date.

After downloading the react project, you will find that the required dependencies (node modules) this project needs are not included in the GitHub repo (or .zip if you are a professor viewing this via portfolio) for size reasons. Due to this, before you run the website you will need to extract the contents of the project to a folder of your choice, and run a terminal instance at the root of said folder. From there, you should run `npm install` to get all necessary dependencies.

After installing the dependencies, you can simply run `npm run start` to run a local instance on the web application.

## Key Features

### Mobile-First Approach

As stated in the introduction, this project used a FigMa prototype which can be found [here](https://www.figma.com/file/YvF5Ad5KortGY9icbdRoxs/UI%2FUX-Prototype?type=design&mode=design&t=IYCbwEwhlieLGinw-0) as the backbone of the UI decisions. While it may not be 1:1 due to time constraints, it made the implementation process smoother.

### Responsive Design

With the use of Tailwind's simple media query classes, being as simple as a "sm:/md:/lg:..." tag onto an element of our JSX, the site easily responds to your screen-size on most if not all devices capable of running a JavaScript supported browser.

### Cloud Back-End via MongoDB Atlas

With the use of MongoDB Atlas, the simple book database is hosted on the cloud and with its app support we easily setup a secure GET endpoint to query all the books as well as individual ones when a user clicks a book cover. 

### Efficient Hooking

In order to program the book cataloging efficiently, this site makes use of a custom useHook that uses the fetch library. This hook is capable of acquiring the data from an https endpoint, has a flag for if the fetch request is pending to avoid errors if a user clicks off the page, and also is capable of returning and rendering an error in the case of the endpoint being down.

### Modern UI via Tailwind

As using more modern libraries such as Tailwind and ReactJS was the focal point of this project, this site makes use of plenty of Tailwind features. @apply classes, it extends its own color/font via the tailwind.config.js, and more.


## Notes

Past April 2024, this project is not being maintained as it is a capstone project. Leaving an issue [here](https://github.com/ykhm-iob/IanOBThomasC_Capstone/issues) will be seen, but there are no promises that it cannot be addressed if an issue is submitted far into the future.

## FAQ

<ul>
  <li>The project won't start and I was incapable of reading the SETUP section, what do I do?</li>
</ul>

Make sure your node and npm version matches the project's listed in the SETUP section by running `node -v` and `npm -v` in your terminal. If it does, make sure you ran `npm install` in the root folder with the project.

<ul>
  <li>The project won't start despite me doing what was put in the SETUP section, what do I do?</li>
</ul>

Submit it as an issue [here.](https://github.com/ykhm-iob/IanOBThomasC_Capstone/issues) If you are a professor using this project and not someone who has stumbled upon the GitHub repo, please contact my student e-mail (IanOB).

<ul>
  <li>I want to [use part or all of your web application in my project/ as a reference or template], can I do that?</li>
</ul>

Yes. You have my permission to use any part of the site you wish as it was created for educational purposes as a capstone project.

<ul>
  <li>The books page is throwing an error despite me not editing the site. Why?</li>
</ul>

I'm not sure, but the database could be down depending on when you use this site. Please open an issue [here](https://github.com/ykhm-iob/IanOBThomasC_Capstone/issues) or reach out to me if you are a professor attempting to run this project at my student e-mail (IanOB).

<ul>
  <li>I don't like [specific UI/programming decision], and I could do it better.</li>
</ul>

I am very open to criticism in all regards, as this is my first time working on a front-end project. Please feel free to open an issue [here](https://github.com/ykhm-iob/IanOBThomasC_Capstone/issues) for criticism, or if you are a professor at SU well versed in front-end, send me an e-mail at my student address (IanOB).


## License

This project uses the MIT License. see the LICENSE file in the project for more information.