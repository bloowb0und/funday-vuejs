const axios = require('axios');

const url = 'http://localhost:5000/api/rents';


class SubmitService {
    static addRent(fname, phoneNum, project_id)
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {fullname: fname, phone: phoneNum, project_id: project_id });
                const obj = res.data;
                console.log('res:');
                console.log(res);
                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static delRent(id)
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(url + `/${id}`);
                const obj = res.data;
                console.log('res:');
                console.log(res);
                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
    static getRents()
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const obj = res.data;
                console.log('res:');
                console.log(res);
                resolve(obj);
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
}

export default SubmitService;