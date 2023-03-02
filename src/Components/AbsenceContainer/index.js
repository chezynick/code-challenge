import React from 'react'
import Absence from '../Absence';


const AbsenceContainer = ({absencesToDisplay, setSelectedEmployee}) => {
    return ( 
        <div className="mt-6 border  border-slate-500 w-full p-4">
        <table className='table-auto w-full'>
            <thead>
            <tr>
                <th>Start date</th>
                <th>Absence type</th>
                <th>name</th>
                        <th>authorised</th>
                        <th>Has conflict</th>
             </tr>
            </thead>
            <tbody className='space-y-2'>
            {absencesToDisplay.map(absence => (
                <Absence absence={absence} setSelectedEmployee={setSelectedEmployee} />
            ))}
            </tbody>
        </table></div>
     );
}
 
export default AbsenceContainer;