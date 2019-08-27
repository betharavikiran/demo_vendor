import dev from '../config/dev.env';
import qa from '../config/qa.env';
import prod from '../config/prod.env';

function getConfig(env) {
    const config = {HTTP_ENDPOINT: "", WS_ENDPOINT: ""};
    switch (env) {
        case "dev":
            config.HTTP_ENDPOINT = dev.HTTP_ENDPOINT;
            config.WS_ENDPOINT = dev.WS_ENDPOINT;
            break;
        case "qa":
            config.HTTP_ENDPOINT = qa.HTTP_ENDPOINT;
            config.WS_ENDPOINT = qa.WS_ENDPOINT;
            break;
        case "prod":
            config.HTTP_ENDPOINT = prod.HTTP_ENDPOINT;
            config.WS_ENDPOINT = prod.WS_ENDPOINT;
            break;
    }
    return config;
}


export { getConfig }
