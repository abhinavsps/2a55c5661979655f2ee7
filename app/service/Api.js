import axios from 'axios';
const instance = axios.create();

export class ApiConfig {
    getJSON(URL) {
        console.log(URL)
        return new Promise((resolve, reject) => {

                instance({
                    method: 'GET',
                    headers: {   'Content-Type': "application/json"},
                    url: URL
                }).then((res) => {
                    resolve(res)
                }).catch((ERROR) => {
                    reject(ERROR)
                });
            });
    }

}