# Lumera Code Test


## Getting set up
clone this repo and set it up with the following commands:

```
git clone https://biotickhealth@bitbucket.org/biotickhealth/lumera_codetest.git
cd lumera_codetest
./setup.sh
docker-compose up
```

This should get it to a stage where the database seeds have been run and the backend is running within docker containers. You can then open up another terminal tab and run the following commands to get the frontend running:

```
cd frontend
npm run dev
```

## The task

The aim of the test is to communicate between the front and back ends of the website. I've provided most of the boilerplate to get you started. Your tasks will involve:

  * Making a request for all posts in the backend, using redux to handle this as an asynchronous action.
  * Allow for the user to create a new post.
  * Allow the user to delete a post.

Don't worry if you aren't able to complete all the tasks within the time - the test has been designed to put a strong time pressure on it. If you are able to complete everything, maybe add some styling or other features to improve it beyond this.