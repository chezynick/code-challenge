import axios from "axios"

const getAbsenceConflicts = (guid) => {
    return axios.get(`https://front-end-kata.brighthr.workers.dev/api/conflict/${guid}`);
}
export default getAbsenceConflicts;