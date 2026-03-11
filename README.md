# Laundry Service App

## Project Description

This is a laundry service app which basically helps the user to know about out laundary services and about our company. A user can see all the services we provide with their prices and they can add or remove the service they want from their cart. They can book services and an email will be send to their mail with the details of their booking. Also a user can subscribe to out newsletter to get all the updates on their mail.


## Features Implemented

1. **Service button**- We have a service button which helps the user to scroll directly to out services.
2. **Add and remove button**- We have an ass and remove button for the user to add or remove services which they want or not needed anymore dynamically.
3. **Email**- We have send email to out users if they book any sevices or subscribe to our newsletter.
4. **Cart empty**- When the user book services, the cart is dynamically update and empty for the future use.
5. **Navbar**- We have navbar where all our imfornation links are there to render directly to the page the user wants to go.


## How to run locally

### Clone the project from the Github

`git clone "https://github.com/Ishita282/DOM"`

### Run

- Install extention in vscode "Go Live"

- Click on `Go Live`



## EmailJS setup instructions

- To start
    >> Go to EmailJS → https://www.emailjs.com
    >> Create a free account and log in
    >> Create Email Service
    >> Open Email Services in the dashboard
    >> Connect your email provider (Gmail, etc.)

- To create services
    >> Click Add New Service
    >> Copy the Service ID

- To create template
    >> Go to Email Templates
    >> Click Create New Template
    >> Add fields like:
        name
        email
        message
    >> Save the template and copy the Template ID

- To get Public Key
    >> Go to Account → API Keys
    >> Copy your Public Key

- To install EmailJS in Project
    >> Add EmailJS script in your HTML file.
    `<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>`

- To initialize EmailJS
    `window.onload = function () {emailjs.init("YOUR_PUBLIC_KEY")};`

- To send Email
    `emailjs.send("SERVICE_ID", "TEMPLATE_ID", {name: userName, email: userEmail, message: userMessage});`


### Then form submissions will send emails automatically.

## Deployment steps to Netlify

- To deploy
    >> Go to Netlify → https://www.netlify.com
    >> Create a account and connect with github
    >> Build your project folder.
    >> Go to Netlify Dashboard.
    >> Got to github Push your project to github.
    >> In Netlify click add new site and Import from Git.
    >> Connect GitHub.
    >> Select repository.
    >> Click Deploy Site.
    >> Netlify will automatically deploy and update your site when you push changes.


## Links

### GitHub Link- "https://github.com/Ishita282/DOM"
### Live Demo Link- "https://mern-assignment-4.netlify.app/"
