import React from 'react'
import { format } from 'date-fns';
import getAbsenceConflicts from '../../Services/getAbsenceConficts';
 import {
   useQuery,
 } from 'react-query'

const Absence = ({ absence, setSelectedEmployee }) => {
    const { absenceType, id, employee, approved, startDate } = absence;
    const { data: hasConflict, isLoading: conflictsLoading } = useQuery(`conflictData - ${employee.id}`, () => getAbsenceConflicts(employee.id), {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        refetchOnMount: false
    });

    if (!conflictsLoading) {
        console.log(hasConflict)
    }
    return (
        <tr key={id} className="odd:bg-slate-100 h-10 ">
            <td >{format(new Date(startDate), 'dd MMM yyyy')}</td>
            <td>{absenceType}</td>
            <td>
                <button type="button" onClick={() => setSelectedEmployee(employee.id)}>{employee.firstName} {employee.lastName}</button>
            </td>
            <td>{approved ? 'Approved' : 'Pending'}</td>
            <td className="flex justify-center h-10 items-center w-full">{!conflictsLoading && hasConflict?.data?.conflicts === true ? (
                <div className="h-4 w-4 rounded-full bg-red-600"/>
            ): null}</td>
        </tr>
      );
}
 
export default Absence;