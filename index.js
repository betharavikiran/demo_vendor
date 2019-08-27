import loginCall from './src/methods/login';
import {getConfig} from './src/utils/getConfig';
import { KarmaVendor } from './src/KarmaVendor';

function getKarmaVendorInstance(env, loginId, password){
   const config = getConfig(env);
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
