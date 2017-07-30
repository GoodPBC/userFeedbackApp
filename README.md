# userFeedbackApp
This is a MERN application for user feedback built with stripeJS &amp; Google Oauth


## Heroku Deployment Checklist
1. __Dynamic Port Binding__ - when we deploy our app, Heroku is going to expect us to listen for incoming http traffic on a specific port

    **when Heroku runs our app it has the ability to inject environment variables --> look at "const PORT =process.env.PORT || 5000" in server.js**


2. __Specify the Node Environment__

    **Tell Heroku to use a specific node -v**

		We are using a very advanced version of node in development. It would certainly crash Heroku in production so we need to tell Heroku what version of NodeJS that we want it to use.

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

		3. run the command **"git push heroku master"**	this says take our local code and push the master branch to the heroku repostory at our speicfied URL


5. Heroku deploys project
