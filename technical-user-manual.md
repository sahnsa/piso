# Technical and User Manual

## Provide deployment information:
	- deployment info here

## Basic user instruction:
	- Step 1: select your favorite browser
	- Step 2: type in url
	- Step 3: hit enter on your keyboard
	- Step 4: you will be presented with login screen
	- Step 5: enter your username and password
	- Step 6: click login or hit enter on your keyboard
	- 

## Special instruction for grading
	- Special instructions should be here

## Research
	- Any research done during the course of the project.

## Architecture Diagram
	- ![Health Tracker Architecture Diagram](../images/architecture.png)

## Startup and Configuration Files
		
	- Setup local SMART App Launcher and FHIR servers

		- cd team34/smart-dev-sandbox  
		- docker-compose up

	- Start Winning WebApp
		- Open new terminal session

		- `cd team34/docker`  
		- `./docker-build`  

		- `cd team34` 
		- `./docker-run`  

	- Now inside docker container
		- `yarn install`  
		- `yarn start` 

	- Launch Winning WebApp
		- http://localhost:3000

	- View App Launcher
		- http://localhost:4013


