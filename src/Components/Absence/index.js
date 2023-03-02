import React, {useState, useEffect} from 'react'
import { format } from 'date-fns';
import getAbsenceConflicts from '../../Services/getAbsenceConficts';

const Absence = ({ absence, setSelectedEmployee }) => {
    const [hasConflict, setHasConflict] = useState(false);
    const { absenceType, id, employee, approved, startDate } = absence;
    useEffect(() => {
        getAbsenceConflicts(employee.id).then((res) => {
            setHasConflict(res.data.conflicts)
        })
    },[employee])
    return (
        <tr key={id} className="odd:bg-slate-100 h-10 ">
            <td >{format(new Date(startDate), 'dd MMM yyyy')}</td>
            <td>{absenceType}</td>
            <td>
                <button type="button" onClick={() => setSelectedEmployee(employee.id)}>{employee.firstName} {employee.lastName}</button>
            </td>
            <td>{approved ? 'Approved' : 'Pending'}</td>
            <td className="flex justify-center h-10 items-center w-full">{hasConflict ? (
                <div className="h-4 w-4 rounded-full bg-red-600"/>
            ): null}</td>
        </tr>
      );
}
 
export default Absence;