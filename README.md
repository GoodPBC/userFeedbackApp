# userFeedbackApp
This is a MERN application for user feedback built with stripeJS and Google Oauth


## Heroku Deployment Checklist
1. __Dynamic Port Binding__ - when we deploy our app, Heroku.com is going to expect us to listen for incoming http traffic on a specific port

    **When Heroku runs our app it has the ability to inject environment variables --> look at "const PORT = process.env.PORT || 5000" in server.js**


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

  3. Add the files in your project by typing "git add ." which adds all of your files in the project directory to git to be tracked

  4. commit the files to git by typing "git commit -m 'some Commit Message'." this tracks each change you make to a file.

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

		6. type **"git remote -v"** to Verify the new remote URL

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
1. __Refactoring our server__ -- In express there is no convention on how to structure your projects. so we will create a folder structure that makes sense for our project. Please make not of the fact that you can structure your project in other ways. For  the purposes of this project we will use 3 main directories and and a server file. It looks something like this:

        =============================================
        =       =============================       =  
        =       =                           =       =
        =       =          CONFIG           =       =
        =       =          FOLDER           =       =    
        =       =                           =       =
        =       =============================       =
        =       =============================       =  
        =       =                           =       =
        =       =          ROUTES           =       =
        =       =          FOLDER           =       =     
        =       =                           =       =
        =       =============================       =
        =       =============================       =  
        =       =                           =       =
        =       =         SERVICES          =       =
        =       =          FOLDER           =       =     
        =       =                           =       =
        =       =============================       =
        =                 SERVER.JS                 =        
        =============================================

The config folder holds all of our Secret keys and API keys and settings for our application.

The routes folder is going to hold all of our express routes. we will create individual files for each set of routes

The services folder will hold all of our files that will hold the logic for the different services that we will be using in the project. This is for helper modules and business logic.

We are now going to refactor a bunch of our code in order to make our project work within our new project folder and files structure
2. we are going to create our routes folder first. Inside the routes folder we will create a "auth.js" file. We will pull our route handlers from the server.js file and past them into auth.

3. make a services directory and create a passport.js file. Go to server.js and cut the passport strategy and paste it into our passport file.

3. go to server.js and cut all of the require statements except the express statement and paste them into the passport.js file. We have to refactor the keys require from ('./config') to ('../config')

4. So just because we have the passport.js file in our project directory, does not mean that it will be automatically executed because we do not yet require it anywhere into our project structure. so we should require it to our server.js file so that it gets ran.We require it like so: __const passportConfig = require('./sevices/passport');__  One more thing... inside of passport.js we are not really exporting any code, so we do not need the require statement to assign the file to a const. so we condense it to __require('./sevices/passport');__

5. Lets take a look at the routes folder and the auth file in the folder. In this file we make use of the passport library so we have to require it; __const passport = require('passport')__ Understand that here we are require the npm module. Another big change we must make is on the route handlers. Right now we are using get routes on the __app__ object in the routes file but we do not define that app object in the routes file. We define it in our server file. We need a way to bring the app object into the routes file. We do this by using module.exports and setting it equal to an arrow function that we wrap our routes with. so now we are exporting that function. We are going to bring it into server.js in an interesting way.

6. Understanding email/password authentication. A user signs in with an email / pw combo. we right it down on our server. time goes by and they leave. later on they come back with the same combo and we are able t identify the combo. When it comes to Oauth though we do not have an email / pw combo. We have to find a way to identify them that will always be consistent. We will find a way to save the user id from either google or Instagram because it will always stay the same.

7. __oAuth flow__ our server takes a users proflie and creates a record on our server. We then check our DB for the user to see if they signed up before. If yes, great we know who they user is. If no, we create the user and take a cookie and put the users id inside of it and we send that cookie back to the users browser. Once we do that the user can make any subsequent requests that they want to. Now if the user creates something in our app. When they log out the cookie is invalidated. When they come back, They have to log in again. Now we create a new cookie for the same user that has the same id. Anytime a user visits our app, we will always look for them in our DB before creating a new record.



##Setting up our MongoDB database

8. __Basics of Mongo___ AS you may have noticed we have added mongo and mongoose the project. Mongo stores records in collections. Collections have documents inside them. these area our records. in a user collection there would be lots of user documents. Every record is an object. Everything in mongo is stored in key value pairs. Mongo is known for being a "schemaless"
database, also known as a "NoSQL" database. __Mongoose__ is a library that makes it easier for us to work with MONGODB.

9. We are going to set up a remote mongo instance because it is easier to maintain and trouble shoot. Local mongodb can be a little challenging for some folks so the remote takes care of that.  Go to http://mlab.com. create an account if you do not have one already. Once you login you will be taken to your dashboard. create a new database on the free plan. We will create a sandbox on AWS.  pick the US east region or the one closest to you. Enter a DB name and leave the default version for the DB. You should see a new DB on dashboard. Click on your db and you will se some instructions and 2 warnings.It is important that we pay attention to the second warning that says we need a user. this does not mean a user of our applkication it means that we need a db admin. We click on the Users tab and click the **"+Add database user button"** We must create a username and a secure password. **MAKE SURE YOU UNCHECK READ ONLY**. Thats it.

10. __Setting up Mongoose__ Kill your server. stay in the project directory and type in the command **"npm install --save mongoose"** this installs the mongoose ORM for mongodb into your project. Mongoose makes it very easy for us to interface with our mongodb instance. After mongoose is installed we will go to our server.js file and require mongoose with the __const mongoose = require('mongoose');__ syntax. we then have to connect to the database with the __mongoose.connect('yourMlabURI')__ . The problem is that you do not want to the URL to your mongoDB from Mlab being vulnerable in your project so we need a way to protect that information. This is the perfect time to make use of our keys.js file. We are going to add a key to our keys file and call it mongoURI. the value of that key will be set to our MLab URI ( mongodb://<dbuser>:<dbpassword>@ds135963.mlab.com:35963/userfeedback_app ). we will replace <dbuser> & <dbpassword> with the user name and PW we created for the database admin on mLab. No we will pull keys into our server file and reference it in our mongoose.connect statement. Restart your server and that should do it for you.

11. __Making our mongoose model__ So now we need to use mongo to store information about our users. this is don through creating what is called a "mongoose Model". We are going to make a new folder called models. in models we will make a file called Users.js. In User.js we are going to create a new mongoose Schema according to **"http://mongoosejs.com/docs/guide.html"** Finally we require that new model in our server so it gets executed in our program. We must make sure that our schema has a key value pair of googleId: String, so that we can save our user to our db and identify them.

12. __Saving information to our DB__ Okay so we need a way to save a user to our database so that we store the user's googleId and give them a cookie to come back to our site. We do this by requiring mongoose and our User model into our passport.js file. We are now going to go to our callback function and create a new user and create an object that will have all of the properties that we want this user to have. We must remember to run the .save() method on our user in order to save our user to the database.

13. __Querying our MongoDB__  We need to modify our callback function with some more logic. Before we create a new user we will check to see if any existing user in our database has a matching googleId. if someone does, then we will not create a new record. if they don't we will create a new record.

To do this we need to use the "findOne" method that mongoose gives us to look up a record by googleId.  This is a query.

14. __Passport Callbacks__ After we create our user we have to inform passport that we are done creating our database record so that it can continue its auth process. we do this with the ".done" method. if you notice the 4th argument in the passport CB function is done. This tells passport we are finished and that it can resume. We have to call this function. In order to call it we have to call it with 2 arguments. In the case were we find a user in the database calling this function is simple. We feed it the two arguments and thats it.first one is null an error object, second is user record (existingUser).  In the case where we have to create a user, we need to take extra steps. Remember anytime we save a record it is an asynch operation. So we do not want to call done until we until we know that we have successfully saved a user. We need to use another .then statement to run the CB function.

15. __Encoding Users__ We are going to generate some identifier and pass it to the user in a **cookie** that will be provided in any follow up request to our server. In our browser someone logs in and goes through oAuth and comes back to server with a google profile. The server then runs the googleStrategy CB function that we just finished and process the profile that we just got from the user/ google. Lets say we have a record of an existing user. Server says okay you match and i now need to give you a token that is going to identify you on any followup requests. We generate this token by defining a function called serializeUser. It will be automatically called by passport with our User model. We are gonna use that model to generate that identifier and pass it to passport. Passport will automatically stuff that token into the users cookie for us. Once the user makes a follow up request from the browser back to our server, when they do the cookie will be automatically added to the request by the browser. We are going to take that identifier from the cookie and pass to a second funciton that we will define called deserializeUser, that will take that info and turn it back to a user model. This is what keeps our user logged in and allows us to continue to satisfy their requests.

####It looks like this:
  **Browser** Sends login request to ---> **SERVER** Your ID is good ---> **SERVER** call serializeUser function to generate identifier ---> **Browser** set cookie ---> **Browser** sends request for a page to the server ---> **SERVER** calls deserializeUser ---> **SERVER** says welcome back ---> **SERVER** satisfies page request ---> **SERVER** sends request to **Browser**

**Important Note**
  oAuths only purpose is to allow someone to sign in, after that we use our own internal id's to identify users. Here we are using the mongoID that we reference with user.id

16. __deserializeUser__ here we take the id that we stuffed in the cookie and turn it back into a user model.

17. __Enable Cookies__ We need to tell passport to make use of cookies to manage auth in our app. Out of the box express does not handle cookies so we have install a helper library so we go to terminal and type **"npm install --save cookie-session"**. We are going to our server.js were we do all of our initial setup.


18. __logging out users.__ inside auth routes, we need create a route handler. to hand the logging out of users. we use "req.logout();" to logout inside of our api/logout route


## Dev VS. Production Environments

1. __Dev VS. Production Keys__ we have keys file in config file. We should have 2 seperate sets of keys one for dev and on for Production. dev we store on our machine, production we store remotely on Heroku. One is for security and 2 is so we can have a separate DB for our production users. We are going to refactor our keys.js file. We need seperate credentials for our API's. generate a production project in the google developer console.
  1. Create new Database with VERY secure password and DB user
  2. Create prod version of Google API key. enable the google+ API, Create Credentials, configure consent screen(spend some time for production) We are going to switch the redirectURI's from local host to our heroku application.

2. __Determining Environment__ For our production application google requires us to enter our Authorized Javascript Origin and our Authorized redirect URI.
These will be set to heroku domains. You want to use your home page for us it is:
    redirectURI =  __"https://salty-anchorage-75143.herokuapp.com/auth/google/callback"__
		Javascript Origin = __"https://salty-anchorage-75143.herokuapp.com"__

We now have mongo and google credentials for prouduction set up.
As of now we are not commit our /config.keys.js file to git. we are going to change that. we will now remove it from the .gitignore file so that the app knows what to do in dev or production. We will not commit our new config/dev.js

We are going to create a dv.js file in config folder and we are goin gto cut our config file and paste it into this new file. The dev file will never get committed to github. We need to go back to keys.js an figure out how to understand whether we are in PROD or DEV.

When we deploy to heroku their is an existing environment variable called NODE_ENV. It tells us whether or not we are running in a production environment. We used this in our PORT const in server.js

inside keys.js we are going to use an if statement that will tell our app which set of keys to use. We will do this using an if else statement. if on production, use production if on dev, use dev. We will include our prod.js file into our push's so that heroku can use the environment variables in production


#Client Side React

##Creating our React app

We are going to use the Create React App, application generator. It gives us a ton of utility. By using this though we will need to focus and take some time to understand what is going on under the hood.

1. __React App Generation__ https://github.com/facebookincubator/create-react-app go to this link. Read through the documentation. run the command "npm i -g create-react-app" in the terminal. this will install the create-react-app framwork on your machine globally. We are going to generate a new react project. go to the terminal and make sure you are in your project directory. type in the command "create-react-app client". It is very important that you call the app "client".

2. __Seperate front end server__ We have a new react project called client. It is a folder in our project. This houses everything having to do with react. It has its ownd built in server. We need to start the server to get it to work. In our project we need to navigate to the client folder and type npm start to run the client side server. We are using a separate server for the front end. inorder to start the react server we run yarn start from the client directory. we find it at "http://localhost:3000".  

												=================
												=    BROWSER    =
												=================														 
												|               |
												|               |
												v								v		
					=================           =================
					=     REACT     =           =    EXPRESS    =
					=================           =================											
					|  |       |								|
					|	 |			 |							  |
					v  v       v								v
	========== ======= ==========       =========
	=ButtonJS= =AppJS= =HeaderJS=       =MongoDB=
	========== ======= ==========       =========					
