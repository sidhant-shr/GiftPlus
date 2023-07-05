const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // using command line argument to retrieve data in array format prior execution in node js
  const arg = process.argv
  if(arg.length < 3){
    console.log('Invalid name , Use command line argument for entering name')
    return
  }

  const name = arg.splice(2).join(' ')

  const merkleTree = new MerkleTree(niceList);
  const index = niceList.findIndex(n => n===name);
  const proof = merkleTree.getProof(index); 


   

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: name,
    proof: proof
  });

  console.log({ gift });
}

main();