const cmdURL = 'http://localhost:9002/cmd';
const devNull = "0xEEFFEEFFEE";
//const futureAddress = "0x73349B30EA22B0B0867C6081EE7F6B014D3C9E88";
const futureAddress = "0xA9D9272A6D69466A2905796F7381F789DEE48C06";
//const tokenID = "0x03920C218E86F88456BF791B81FA6DEA5F5C2BAD726C6A3F5893ED2174A2AD6BE4D49434BE6543FC8B10BD61810994D375367A162E363F25A37181ACC7086F54";
//const tokenID = "0xBE5B985A1E6A8E37CEA610B87081513C4810987ACD872B52F8CF95A49466DB2EBC92F23B872B9360628AC21C6C389BCBD9DBF616E852B43D67C7AAABD312EB51";
//const tokenID = "0xCBDE084D0A44A8F6EBDBD2CBF448D448E88E06EC008F4A0E3C004EC234A50C21E59A9CE4D7C7ECE60351FE1E90A5D1E80DA816734C2BA2C3B5363448D9245B50";
const tokenID = "0x88F0210F46ADD23D9CA3CC78B43D4750F6557ACC6F8A1965FD1FA151C15D296BC8BF2C086516CC4A7E5892F6A47BE4B0B3B33AFC833D6C5F96080C6ECDA4B17A";
const defaultScaleFactor = 100000000000;
const defaultBlockTime = 122500;
const mainnetLaunch = new Date('October 1, 2021 09:00:00');
const tokensPerDay = 2;
const numDaysPerBatch = 5;
const tokenBatches = numDaysPerBatch * tokensPerDay;
const blockTimeSeconds = 20;
const blocksPerDay = 86400 / blockTimeSeconds;
//const blocksPerDay = 4;
const blocksPerBatch = numDaysPerBatch * blocksPerDay;
const blockWindow = 180;

const JSONRPCVERSION = "2.0";
const minimaRPC = "MinimaRPC";

const uRLs = {
  token: {
    url: "/token",
    index: 1
  },
  key: {
    url: "/key",
    index: 2
  },
  cmd: {
    url: "/cmd",
    index: 3
  },
  txn: {
    url: "/txn",
    index: 4
  },
  futureAddress: {
    url: "/futureAddress",
    index: 5
  },
  getKey: {
    url: "/getKey",
    index: 6
  },
  reward: {
    url: "/reward",
    index: 7
  },
  getReward: {
    url: "/getReward",
    index: 8
  },
  referral: {
    url: "/referral",
    index: 9
  },
  getReferral: {
    url: "/getReferral",
    index: 10
  },
  trigger: {
    url: "/trigger",
    index: 11
  },
  getTriggers: {
    url: "/getTriggers",
    index: 12
  }
}

const tables = {
  wallet: {
    table: "wallet",
    index: 1
  },
  reward: {
    table: "reward",
    index: 2
  },
  referral: {
    table: "referral",
    index: 3
  },
  log: {
    table: "log",
    index: 4
  },
  trigger: {
    table: "trigger",
    index: 5
  }
}

exports.cmdURL = cmdURL;
exports.devNull = devNull;
exports.futureAddress = futureAddress;
exports.tokenID = tokenID;
exports.defaultScaleFactor = defaultScaleFactor;
exports.defaultBlockTime = defaultBlockTime;
exports.mainnetLaunch = mainnetLaunch;
exports.tokensPerDay = tokensPerDay;
exports.numDaysPerBatch = numDaysPerBatch;
exports.tokenBatches = tokenBatches;
exports.blockTimeSeconds = blockTimeSeconds;
exports.blocksPerDay = blocksPerDay;
exports.blocksPerBatch = blocksPerBatch;
exports.blockWindow = blockWindow;
exports.uRLs = uRLs;
exports.tables = tables;
exports.JSONRPCVERSION = JSONRPCVERSION;
exports.minimaRPC = minimaRPC;
