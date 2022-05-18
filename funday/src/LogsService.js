import AdminService from "@/AdminService";

const axios = require('axios');

const url = 'http://localhost:5000/api/logs';

class LogsService {
    static getLogs()
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
    static postLog(adminId, logMsg) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, { adminId, logMsg });
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
}

export default LogsService;