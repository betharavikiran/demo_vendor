import loginCall from './src/methods/loginCall';
import { getConfig } from './src/utils/getConfig';
import { KarmaVendor } from './src/KarmaVendor';

console.log(loginCall);

function getKarmaVendorInstance(env, loginId, password){
   console.log(env);
   console.log(loginId);
   console.log(password);
   const config = getConfig(env);
   console.log(config);
   const loginResult = loginCall(config, loginId, password);
   console.log(loginResult);
   const { status, jwt, userId } = loginResult;
   if(status==="SUCCESS"){
       const { HTTP_ENDPOINT, WS_ENDPOINT } = config;
       return new KarmaVendor(HTTP_ENDPOINT,WS_ENDPOINT, userId, jwt);
   }
   else{
       return null;
   }
}

module.exports = getKarmaVendorInstance;
