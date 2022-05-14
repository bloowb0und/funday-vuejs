const axios = require('axios');

const url = 'http://localhost:5000/api/catalog';


class ProjectService {
    static getProjects()
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
    static getProjectsId(id) {
        return new Promise(async (resolve, reject) => {
            try {
                // const urL = url + `/${id}`;
                // console.log(urL);
                const res = await axios.get(url + `/${id}`);
                // console.log("res:");
                // console.log(res);
                const obj = res.data[0];
                const finObj = obj.map(project => ({
                    ...project,
                }))
                // console.log('obj:');
                console.log(finObj);
                resolve(finObj)
            }
            catch (e)
            {
                reject(e);
            }
        })
    }
}

export default ProjectService;