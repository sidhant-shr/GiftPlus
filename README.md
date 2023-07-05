
There are three folders in this repository:

## Client

You can run the client from the top-level directory with `node client/index`. This file is a script which will send an HTTP request to the server.

 

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request. Enter the names from nicelist as command line arguments . Eg: node server/index John Block.

 

## Utils

There are a few files in utils:

- The `niceList.json` which contains all the names of the people who deserve a gift this year (this is randomly generated, feel free to add yourself and others to this list)
- The `MerkleTree.js` 
- The `verifyProof.js` 
