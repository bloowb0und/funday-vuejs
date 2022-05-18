const axios = require('axios');

const url = 'http://localhost:5000/api/admins';

class AdminService {
    static getAdmins()
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const obj = res.data;
                console.log('res:');
                console.log(res);
                resolve(
                    obj.map(project => ({
                        ...project,
                    }))
                )
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static getAdminsId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + `/${id}`);
                const obj = res.data;
                console.log("res:");
                console.log(res);
                const fin = obj.map(project => ({
                    ...project
                }))
                resolve(fin[0]);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static getAdminsEmail(email) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url + `/getAdmin`, { email });
                const obj = res.data;
                console.log("res:");
                console.log(res);
                const fin = obj.map(project => ({
                    ...project
                }))
                resolve(fin[0]);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static postAdmin(email, password, status) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, { email: email, password: password, status: status });
                const obj = res.data;
                console.log("res:");
                console.log(res);

                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static putAdmin(id,email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(url + `/${id}`, {email: email, password: password});
                const obj = res.data;
                console.log("res:");
                console.log(res);
                const fin = obj.map(project => ({
                    ...project
                }))
                resolve(fin[0]);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static deleteAdmin(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(url+`/${id}`);
                const obj = res.data;
                console.log("res:");
                console.log(res);
                const fin = obj.map(project => ({
                    ...project
                }))
                resolve(fin[0]);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
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