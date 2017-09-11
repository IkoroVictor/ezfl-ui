import URLS from '../config/urls';
import Request from './Request';

class FlightApi {

    static get HTTP_OPTIONS() {
        return {
            baseURL: `${URLS.API_BASE}`,
            isEncoded: false
        };
    }
    static getOneWayFlights(params = {}) {
        let options = Object.assign({}, FlightApi.HTTP_OPTIONS);
        options.url = `${URLS.FLIGHTS_ONEWAY}`;
        options.params = params;
        return Request.get(options);
    }
}

export default FlightApi;

