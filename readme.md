<p align = "center">
  <img src="https://github.com/higorhlg/Be-The-Hero/blob/master/frontend/src/assets/logo.svg" />
</p>
                                                                                             

Be The Hero is an application that has the purpose of helping Animal Welfare Non-governmental organizations (NGOs). In the mobile app people can see incidents in which a NGO needs financial help and get in touch with the NGO to provide help, NGOs can use the web version of the application to register new cases.

Use case example:
Let's suppose a NGO who deals with animals on the street finds a dog with a broken paw. The NGO then takes the dog to it's place and register the incident to get external help from people willing to contribute with the costs.

<h2> How it works: </h2>
There is 2 versions of the application, each aimed at a different user, the web application and the mobile application, both feed from the server API available in the "backend" folder. 

<h3> The Web Application </h3>

The web application's code is avaible at the folder named "frontend", this application is to be used by NGOs to announce incidents. 

<!-- Front end screenshots -->

<h3> The Mobile Application </h3>

The mobile application's code is available at the folder named "mobile", this application is to be used by anyone who is willing to help NGOs, the mobile app user can view all the cases registered by all the NGOs and choose one or more to step in and contact the organization to offer help.

<!-- Mobile screenshots -->

<h2> Technologies </h2>

The webpage was built with <b>ReactJS</b>, the mobile app with <b>React Native</b> and the server with <b>NodeJS</b>. The database configured is <b>SQLite</b> and could be easily adapted to other relational databases, a SQL Query Builder named <b>Knex</b> is used to generate SQL queries.

<h2> How to execute the project </h2>

To run the project you'll need to have installed: Git, Node.js and Yarn. 

<h3> Step 1 - Clone This repository </h3> 

```
git clone https://github.com/higorhlg/BeTheHero
```

<h3> Step 2 - Start The Server </h3>

First of all you should start the server, located in the "backend" folder, to do that you must run the following lines at your terminal:

```
# Navigate to backend folder
cd backend

# Install dependencies
yarn install

# Start Server
yarn start
```

<h3> Step 3 - Run the Web and Mobile Application </h3>

With the server up and running from the previous step made, you can now run the web or mobile application, respectively available in the frontend and mobile folders withing the project, you can get them running using the same terminal commands described in the previous step.

```
# From the root folder of the project, go to the web or mobile application folder, for example, "frontend":
cd frontend

# Install dependencies
yarn install

# Run Application
yarn start
```

When the web application is running, it can be seen on a browser on the URL displayed in the CLI that's running it. To run the mobile application you will deal with expo.


<!--

# Entities:
- NGO
- INCIDENT

# FEATURES:
- NGO LOGIN
- NGO LOGOUT
- REGISTER NEW INCIDENTS
- DELETE INCIDENT
- LIST NGO INCIDENTS
- LIST ALL INCIDENTS
- CONTACT NGO (EMAIL/WHATSAPP)

-->
