const axios = require('axios');

const url = 'http://localhost:5000/api/admins';

class AdminService {
    static checkAdminData(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url + '/authorize', { email, password });

                resolve(true);
            }
            catch (e)
            {
                if(e.response.status === 401) {
                    resolve(false);
                }
                reject(e);
            }
        })
    }
}

export default AdminService;