import axios from "axios";

const url = "http://desktop-2nr33co.corp.ojas-it.com:8888/countries"

class CountryService{
    getCountries(){
        return axios.get(url);
    }
}

export default new CountryService()