// Required imports
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  // Initialise the provider to connect to the local node
  const provider = new WsProvider('wss://rpc.polkadot.io');

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });

  // get latest header
  const lastHeader = await api.rpc.chain.getHeader();

  // print the latest block number
  console.log(`Latest block number: ${lastHeader.number}`);
}

main().catch(console.error).finally(() => process.exit());
