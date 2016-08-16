#Instructions

###Setup
1. npm install

###Running
1. From root directory of project in terminal / CLI type: 'node index.js'
2. Use curl requests to make get and post requests to /messages.

Example curl requests:

$ curl $domain/messages/ -d 'message=my test message to store'

response =\> {"id":12345}


$ curl $domain/messages/12345

response =\> my test message to store

###Testing
1.  Make sure the server is running (I need to make the before method of mocha boot up / down the server).
2.  Type "mocha test/backend/\*\*/*.test.js"

###Additional information
A file based database was chosen over mongodb / postgres as I felt this would be easier for a quick and simple deployment. In production I would use a full database.

I noticed during development that the curl command sends the message to store as it is, my implementation expects this to be a key value pair.

Most examples I have seen of using curl to post data use a key value pair method. Hopefully this is what you were expecting. Early implementations used the Object.keys($_POST)\[0\] to retrieve the first piece of information entered. 
 
UUID format generator was used to generate ID fields for simplicity, I didn't want to have to rewrite a database system that has IDs with auto increments as this is out there already.

For testing I would prefer to spin up an instance of the app before running tests and then halt execution of that instance. I don't know how to do this with the code I have written but can learn this. Usually when I use an MVC framework there are ready made methods for this.