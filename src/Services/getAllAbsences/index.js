import axios from "axios"

const getAllAbsences = () => {
    return axios.get('https://front-end-kata.brighthr.workers.dev/api/absences');
}
export default getAllAbsences;