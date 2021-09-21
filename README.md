# Cakemos
cakemos is an influencer platform build for modern marketing

# Links

## Client
[Repository for client](https://github.com/mindmarine/cakemos-client)
[Deployed cakemos client](https://mindmarine.github.io/cakemos-client/)
## Server
[Repository for server](https://github.com/mindmarine/cakemos-server)
[Deployed server](https://cakemos.herokuapp.com/)

# User stories

## As a user
- I would like to sign up with email and password
- I would like to sign in with email and password
- I would like to be able to change my password
- I would like to sign out
  
### V1
- I would like to add a new influencer
- I would like to update an influencer
- I would like to delete an influencer
- I would like to see all influencers

### V2 
- I would like to filter influencers
- As a client I would like to filter influencers

# Wireframe
![Wireframe](https://i.imgur.com/dqMtst7.png)

# Entity Relationship Diagram
![Wireframe](https://i.imgur.com/OqakIeV.png)

# Technologies
- React framework
- Express API framework
- MongoDB
- Mongoose
- Git, GitHub
- Heroku platform
- MongoDB platform
- Bootstrap
- JavaScript, JSX, HTML, CSS, sass
- Node.js
- Axios
- Npm

# Instalation (Server and Client Installations)

## deploy to heroku
- Run `heroku create`
- run `heroku git:remote -a cakemos`
- set git remote `heroku` to `https://git.heroku.com/cakemos.git`
- Commit to your local main branch (if you do not have a branch named main, you can create one with `git checkout -b main`)
- Push your latest code to Heroku (`git push heroku main`)
- Add any addons. See MongoDB Atlas or AWS
- In terminal, run: `git push heroku main` (should build your site)
Note: Due to the first line of code in the server.js file, the default deployment environment will be production
-  You need to set your CLIENT_ORIGIN so that your deployed API will ONLY accept requests from the correct domain. IF you're client is deployed on GitHub, your ORIGIN will be: https://<% github username %>.github.io
- Set your client ORIGIN by: heroku config:set CLIENT_ORIGIN="https://<% github username %>.github.io"
-  Your site is published at https://mindmarine.github.io/gracelli/
-  `heroku config:set CLIENT_ORIGIN="https://mindmarine.github.io"`
-  You should have (at least) two config variables set in heroku (heroku>settings>config vars): DB_URI and CLIENT_ORIGIN
- If you are using AWS, you should have two additional config variables.
- Once all of these are set, run in terminal: `heroku restart`
- Then in terminal, run: `heroku open`

## MondoDb Atlas
- https://cloud.mongodb.com/ and sign in
- create project, create cluster: CakemosCluster0
- create database
- connect db
1. Add a connection IP address: Allow Access From Anywhere
2. Create a Database User: Username: admin Password ZvjszV50SJhYJnfp
- choose a connection method (connect your application)
1. select your driver and version: driver: node.js version: 4.0 or later
2. Add your connection string into your application code
NOTE: You don't have a database at this point yet, but MongoDB will create it as soon as you use your application to create data. 
So, in the example above, the atlas_db_test database will not exist until the first user is created via a sign-up.

## Client
- download template and move to dedicated project and client folder
- personalize template
- `git init`
- npm install
- install additional packages
    1. Ant Design
    2. And Design Icons
- make changes and create new code
- Push to github repository `git push origin main`
…or push an existing repository from the command line
git remote add origin git@github.com:mindmarine/cakemos-client.git
git branch -M main
git push -u origin main
- deploy with `npm run deploy`
- create a page in settings/github

# create a table for front end developers
https://react-bootstrap.github.io/components/table/

# List unsolved problems which would be fixed in future iterations
- Table view for all influencers. This should show one header and populate dynamically all the rows for the exiting influencers
- To be developed. Ability to search and filter influencers by topics and tags

## Catalog of Routes

### Front End Routes
| entity     | route path                    | verb   | functionality                                                        |
| ---------- | ----------------------------- | ------ | -------------------------------------------------------------------- |
| user       | /sign-up                      | POST   | form to sign up: username, email, password and password confirmation |
| user       | /sign-in                      | POST   | let users sign in with email and password                            |
| user       | /sign-out                     | DELETE | signs out login users                                                |
| user       | /change-password              | PATCH  | allows users to change password                                      |
| influencer | /add-influencer               | POST   | this enable signed in users to make a post                           |
| influencer | /show-influencers             | GET    | shows all influencers                                                |
| influencer | /influencerstable             | GET    | shows influencers table                                              |
| influencer | /update-influencer/:id/editv2 | PATCH  | update influencer                                              |
| guest, user | /inspiration | GET  | Inspiration Page                                          |

### Back End (API) Routes
| entity     | route path       | verb          | functionality              |
| ---------- | ---------------- | ------------- | -------------------------- |
| user       | /sign-up         | POST          | sign up api                |
| user       | /sign-in         | POST          | sign in route              |
| user       | /sign-out        | DELETE        | sign out api route         |
| user       | /change-password | PATCH         | change password route      |
| influencer | /influencers     | GET,POST      | get and post an post       |
| influencer | /influencers/:id | PATCH, DELETE | update, delete influencers |

# App Screenshots
Show Influencers Cards
![Show Influencers Cards](https://i.imgur.com/TqiNHHD.png)

cakemos homepage
![cakemos homepage](https://i.imgur.com/oy9Qg19.png)