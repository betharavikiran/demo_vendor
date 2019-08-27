import loginCall from './src/methods/loginCall';
import { getConfig } from './src/utils/getConfig';
//import { KarmaVendor } from './src/KarmaVendor';

function getKarmaVendorInstance(env, loginId, password){
   console.log(env);
   console.log(loginId);
   console.log(password);
   const config = getConfig(env);
   console.log(config);
   const loginResult = loginCall(config, loginId, password);
   console.log(loginResult);
   const { status, jwt, userId } = loginResult;
   return true;
}

module.exports = getKarmaVendorInstance;
