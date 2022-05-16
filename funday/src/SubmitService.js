const axios = require('axios');

const url = 'http://localhost:5000/api/rents';


class ProjectService {
    static addRent(fname,fsurname,phoneNum, project_id)
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {name: fname, surname: fsurname, phone: phoneNum, project_id: project_id });
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

export default ProjectService;