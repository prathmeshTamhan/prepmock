const redisClient = require("./redis");
const { createClient }  = require('redis');

// exports.saveCallId = (key, value) => {
//   return new Promise((resolve, reject) => {
//     redisClient.SET(key, JSON.stringify(value), "EX", 86400, (err, res) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(res);
//     });
//   });
// };

exports.saveCallId = async (key, value) => {

  const client = createClient()
  client.connect( async (key, value)=>{
    return await redisClient.SET(key, JSON.stringify(value), 'EX', 86400, () => { })
  })


};

exports.getCallId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.GET(key, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(res));
    });
  });
};