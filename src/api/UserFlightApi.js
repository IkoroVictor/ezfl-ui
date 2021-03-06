import URLS from '../config/urls';
import Request from './Request';

class UserFlightApi {

    static get HTTP_OPTIONS() {
        return {
            baseURL: `${URLS.API_BASE}`,
            isEncoded: false
        };
    }
    static getUserFlights(params = {}) {
        let options = Object.assign({}, UserFlightApi.HTTP_OPTIONS);
        options.url = `${URLS.USER_FLIGHTS}`;
        options.params = params;
        return Request.get(options);
    }

    static saveUserFlight(data = {}){
        let options = Object.assign({}, UserFlightApi.HTTP_OPTIONS);
        options.url = `${URLS.USER_FLIGHTS}`;
        options.data = data;
        return Request.post(options);
    }

    static deleteUserFlight(flightId){
        let options = Object.assign({}, UserFlightApi.HTTP_OPTIONS);
        options.url = `${URLS.USER_FLIGHTS}/${flightId}`;
        return Request.delete(options);
    }
}

export default UserFlightApi;

