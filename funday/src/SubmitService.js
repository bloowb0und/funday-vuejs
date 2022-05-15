const axios = require('axios');

const url = 'http://localhost:5000/api/rents';


class ProjectService {
    static addRent(fname,fsurname,phoneNum)
    {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(url, {name: fname, surname: fsurname, phone: phoneNum });
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
}

export default ProjectService;