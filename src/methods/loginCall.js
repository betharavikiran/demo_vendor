import getClient from './../utils/getClient';
import {login} from './../utils/operations';

async function loginCall(config, loginID, password)  {
    const client = getClient("", config.HTTP_ENDPOINT, config.WS_ENDPOINT);

    const {data} = await client.mutate({
        mutation: login,
        variables: {
            data: {
                loginID,
                password
            }
        }
    });
    const jwt = data.login.token;
    const userId = data.login.user.id;
    return {status: "SUCCESS", jwt, userId}
}

export { loginCall }
