# userFeedbackApp
This is a MERN application for user feedback built with stripeJS and Google Oauth


## Heroku Deployment Checklist
1. __Dynamic Port Binding__ - when we deploy our app, Heroku is going to expect us to listen for incoming http traffic on a specific port

    **when Heroku runs our app it has the ability to inject environment variables --> look at "const PORT = process.env.PORT || 5000" in server.js**


2. __Specify the Node Environment__

    **Tell Heroku to use a specific node -v**

		As of the time of writing this we are using a very advanced version of node in development. It would certainly crash Heroku in production so we need to tell Heroku what version of NodeJS that we want it to use.

    We must go to our package.JSON file and add an "engines" key to the file and specify your node and npm versions. Here we will use node 8.1.1 and npm 5.0.3


3. __Specify a start script__

    **tell heroku what the command is to start to run or server**

		go to package.json and change you start script to "node index.js"

4. __Create a ".gitignore file"__

    **We do not want to include dependencies that Heroku will provided for us**

		we want to have Github ignore our node modules folders so it does not have to get updated on remote.

## First Time Deploy to Heroku & connecting Heroku to Git with Heroku CLI
1. __Navigate to Heroku.com and sign up for an account__

2. __Commit our codebase to git__

  1. Verify that you have git installed on your machine by typing "git --version" if you do not have it, install it for your machine

  2. Start git with the "git init command"

  3. Add the files in your project by typing "git add ."

  4. commit the files to git by typing "git commit -m 'some Commit Message'."

3. __Install Heroku CLI and create a Heroku App__

  1. Use homebrew to install Heroku CLI with "brew install heroku" or update your Heroku to ensure you are using the CLI and not the outdated heroku tool belt. To do this you can run the command "brew upgrade Heroku"

	2. use the terminal to check your Heroku CLI version -- **"heroku -v"**. As long as you get a version returned you can move to the next step

	3. Login to Heroku CLI - in the terminal type **"heroku login"** and enter your email and password. You should recieve a message in the terminal that says "you are logged in as someone@someEmail.com"

	4. in the terminal type the command **"heroku create"** to create your application. When your app has been created you will get an output in the terminal that tells you two things:

	  1. The randomly generated heroku URL that your project is now hosted on.
		    https://mysterious-atoll-32084.herokuapp.com/

		2. A deployment	target URL that is very important to us. It is a remote git repo that we can push our local server to. We will push our local repo to this remote repo. The instant we push to this remote repo, heroku deploys our app and starts it automatically.

4. __Deploy our App with Git__
    1. set up a remote git repo using the second link by copying it from the terminal. in this case
		    https://git.heroku.com/mysterious-atoll-32084.git

		2. on the command line we will use the command **"git remote add heroku https://git.heroku.com/mysterious-atoll-32084.git"** This is telling git to add a remote repository to our current repository and name it as heroku with  this address. If you see a fatal error that says **"remote heroku already exists"** this is fine.

		3. run the command **"git push heroku master"**	this says take our local code and push the master branch to the heroku repository at our specified URL. at the end you should see **"verifying deployment done"**.

		4. type in the **"heroku open"** open command in the terminal and it should open your app that is now live and hosted on heroku.

		5. If your app is not launched, in the terminal type **"heroku logs"** and begin to debug according to the error log.

5. Follow up Heroku deploys
    1. type **"git status"** in the terminal

		2. type **"git add ."** in the terminal

		3. type **"git commit -m 'some commit message'"** in the terminal

		4. type **"git push heroku master"** in the terminal

    5. type **"heroku logs"** in the terminal

		5. type **"heroku open"** in the terminal  

6. Connecting your Github repository with Heroku for continuous integration and Automatic deployments
    1. type **"git init"** in the terminal if you have not already

    2. type **"git add ."** so you can add all of your flies to be tracked by Github. It Adds the files in the local repository and stages them for commit. To unstage a file, use 'git reset HEAD YOUR-FILE'.

    3. run the command **"git commit -m "First commit""**	Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

		4. Go to Github and create a remote repository for your project.

    5. At the top of your GitHub repository's Quick Setup page, click  to copy the remote repository URL.

    5. In Terminal, add the URL for the remote repository where your local repository will be pushed. **"git remote add origin (add remote repository URL)"** to set the new remote repository

		6. type **"git remote -v"** to verifie the new remote URL

		7. Push the changes in your local repository to GitHub. Type **"git push -u origin master"**. This pushes local changes to the remote Github Repo.

		8. Sign into your Heroku account and select your application. Click on the Deploy tab and scroll down to the Deployment method section of the page. Here you can connect  your github repo to your application. Now when you push code to your remote repo, your application will automatically update.

## Google OAuth - Part 1 - Communicating with Google
1. Install passportJS using the command __"npm install --save passport20"__

2. remove the test route that we created in index.js

3. require in passport and the passport-google-oauth20 npm packages.

4. Tell the passport library how to make use of the google strategy in our app. **"new GoogleAuth"** by creating a new function. we will pass in our logic and configurations to our app.

5. Get our keys from google --> we need to make google aware of our application and tell it that we are going to be using it to authorize people into our application.
    1. From gooogle, navigate to **"console.developers.google.com"**

		2. if you do not have an account, create owners

		3. create a new project in the developer console. Use the taxonomy "projectName-Dev"

		4. go to the Google API console and navigate to the API Manager. Search for the Google+ API. you should see a section titled *"Accessing user data with OAuth"*. Enable this API.

		5. In order for this API to work the  way we need it to, we have to create credentials. Click *"create credentials"* on the top of the page. When credentials opens up choose the *"OAuth client ID"* option

		6. To get a client Id we need to configure a client consent screen.
		  1. choose web app from the menu

			2. Name your application

			3. Your authorized JS origins should be **"http://localhost:5000"**

			4. Your authorized redirect URI should be **"http://localhost:5000*"**

			5. Generate your keys and temporarily comment them in your index.js file DO NOT PUSH THEM TO THE REPO

		  6. create a new folder in your project called config. in that folder create a file called keys.js. this file will hold our sensitive information. copy your googleClientID and your googleClientSecret into the keys.js file. We name the key for the passport strategy that we are using s

			7. We will import our key and secret key into the google passport strategy in index.js by importing the directory and file and referencing our keys inside the google passport strategy. We will add a fat arrow callback function in our index.js file

			8. We will no create our express "get" route "/auth/google" and pass it passport's authenticate method using the google strategy by referencing 'google'. GoogleStrategy has built in logic that has an internal identifier of 'google' and it says if anyone tries to authenticate with 'google', use GoogleStrategy. Scope specify's to google what access we want from google. These are the permissions we are requesting on this user from Google. This list is predefined

			9. We are ready to test in the browser. Fire up your application and visit your auth route. We are going to get to google but the fact is that we are going to see a 404 with an error message that says "redirect_uri_mismatch". This is for security purposes so that google can prevent URI spoofing We are going to fix this by grabbing the link in the error message, which takes us back to our google developer console so that we can change and changing it to our Authorized redirect URI of = '/auth/google/callback'

			10. once we change this we should be able to restart our server and go to 'localhost:5000/auth/google'. this should take us to the point of choosing our google account. when we do we will get back  an error message 'Cannot GET /auth/google/callback'. This means google has sent us back to our server but we do not yet have a route to respond to google where we can give it back our verification code. We now have to add in our callback handler express route

			11. So now that we have create our 'auth/google/callback' route we are getting a hanging response from google. we will refer back to our accessToken the we logged earlier and we will add some properties like refreshToken, profile and done. When we defined the google strategy we added a callback function as a second argument. We call it and console log it.

			12. So now we have redirected our user to google, google gave us permission to access the selected user account, we got sent back to our callback URL with a code from google, we then send a request to google with the code in it and get the user account details.After that callback request was made, We call that second argument in Google strategy, the accessToken arrow function, and save our user info to our database

			13. We are going to add some arguments to our accessToken arrow function and console log them in the body of the function so that we can get a better idea of what is happening
        1. We console.log "accessToken". this is our proof to google that we have permission to access a particular users account
        2. We console.log the refreshToken. This helps us update our accessToken at some time interval so that we do not lose access to this persons account
        3. We console.log the profile. This gives us user sepcific information regarding each user, such as, dsplay names, fisrt and last name, email etc.

## Adding a Dev start script to our project

1. install a package called Nodemon.  { https://nodemon.io/ } Nodemon allows us to hot reload while we are developing our project. In other words, we are able to restart our app every time we make a change to our code and save it. We install this package by going to the command line and typing the command "npm i --save-dev nodemon". The "--save-dev" part of the command allows us to save this package in our development dependencies. We save it here because we do not need hot reloading in our production environment.

2. We will now also open our package.json file and create a new script. Go to the scripts section of the file and create a dev script. it should look like this "dev": "nodemon index.js". This now allows us to start our application in development mode by typing the command "npm run dev". This little productvity package is going to save you a lot of time in the developement of your project.

## Google OAuth - Part 2 - Saving our Data
1. Install passportJS using the command __"npm install --save passport20"__

2. remove the test route that we created in index.js

3. require in passport and the passport-google-oauth20 npm packages.

4. Tell the passport library how to make use of the google strategy in our app. **"new GoogleAuth"** by creating a new function. we will pass in our logic and configurations to our app.

5. Get our keys from google --> we need to make google aware of our application and tell it that we are going to be using it to authorize people into our application.
    1. From gooogle, navigate to **"console.developers.google.com"**

		2. if you do not have an account, create owners

		3. create a new project in the developer console. Use the taxonomy "projectName-Dev"

		4. go to the Google API console and navigate to the API Manager. Search for the Google+ API. you should see a section titled *"Accessing user data with OAuth"*. Enable this API.

		5. In order for this API to work the  way we need it to, we have to create credentials. Click *"create credentials"* on the top of the page. When credentials opens up choose the *"OAuth client ID"* option

		6. To get a client Id we need to configure a client consent screen.        
