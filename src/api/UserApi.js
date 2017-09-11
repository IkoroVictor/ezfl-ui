import URLS from '../config/urls';
import Request from './Request';

class UserApi {

    static get HTTP_OPTIONS() {
        return {
            baseURL: `${URLS.API_BASE}`,
            isEncoded: false
        };
    }
    static getUser(params = {}) {
        let options = Object.assign({}, UserApi.HTTP_OPTIONS);
        options.url = `${URLS.USER}`;
        options.params = params;
        return Request.get(options);
    }
}

export default UserApi;

