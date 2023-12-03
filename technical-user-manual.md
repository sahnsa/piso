# Technical and User Manual

The MyHealthHub is a comprehensive health web app that allows patients to record and track their day-to-day health activities. By doing so, they can gather crucial information that assists them in maintaining optimal health.

## Provide Deployment Information:
	• Local

## Startup and Config:
	• Step 1: Start MyHealthHub WebApp
		0: Open a new terminal session.
		1: cd /path/to/team34/docker
		Note: (replace /path/to/ with where team3 folder is located, i.e., /jimmyjohn/project/team34)
		2: sudo ./docker-build

		3: cd /path/to/team34
		4: sudo ./docker-run 
		Note: sudo provides you with an elevated priviledge.

## Basic User Instruction:
	• Step 2: Launch MyHealthHub WebApp
		1: Select your favorite browser (Firefox, Chrome, etc.).
		2: Type http://localhost:3000 url in your browser.
		3: Hit enter on your keyboard.
		 	Note: You will be directed to the Patient Login page (see screenshot below).
		 	![Patient login page](../images/patient-login.png)
		4: Select the patient or your name in the drop down list to login.
		5: Enter your password (if not already saved at login).
		6: Click "Login" or hit enter on your keyboard.
			Note: You will be directed to the "Authorize App Launch" page (see screenshot below).
			![Patient login page](../images/signin-approval.png)
		7: Click on the "Approve" button to authorize login.
			(Or click on the "Deny" button to cancel login).
		8: Click on the "Approve" button to be directed to the User Dashboard (see screenshot below).
		![User dashboard page](../images/user-dashboard.png)

	• Step 3: How to Use The MyHealthHub WebApp
		1: In the "What advice do you need" input field, type in any help advice you need (i.e, how can I stay healthy?).
		2: Click on the "Request" button.
			Note: Wait for a few minutes for your advice results to display.
		3: Under the "Add Glucose Results," enter your glucose level info (i.e, 120).
		4: Select a unit under the "Glucose Unit" dropdown selection.
		5: Select a date by clicking on the calendar icon at the right of the input field or enter a date (format: mmm/ddd/yyyy).
		6: Select or enter a time.
		Note: you can check the "Fasting" box if you didn't eat any food before recording your glucose information.
		7. Click the "Add" button to save your glucose information.
		Note: A chart will display indicating your glucose level.
		8: Repeat the process for "Add Calorie Intake", "Add exercise."

	• Step 4: Assess COVID-19 Risk in Your County
		1: Select your state from the drop down list.
		2: Select your county from the drop down list.
		Note: List of counties will not populate until you select a State.
		3: Click on "Search."
		4: Wait for a few seconds, COVID-19 information will be displayed for the selected county.

	• Step 5: Log Out
		1: Click on the "LOGOUT" button at the top of the dashboard to logout of the app.
		Note: This will direct you to the Patient login page.
		2: Close your browser.
		3: Close all your terminals.
		4: You are DONE! 

## Special Instruction for Grading:
	• NA

## Research:
	• The COVID Act Now API provides access to real-time COVID-19 data and related information. COVID Act Now is an organization that collects and analyzes data related to the COVID-19 pandemic to help individuals, communities, and policymakers make informed decisions. For our COVID-19 Risk Assessment API, we leveraged this API to help users conduct their COVID-19 risk assessment.

	• URL: https://apidocs.covidactnow.org/updates

## Architecture Diagram:
	• ![MyHealthHub App Architecture Diagram](../images/architecture.png)


