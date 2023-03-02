import React from 'react'
import { DATENEWOLD, DATEOLDNEW, NAMEAZ, NAMEZA } from '../../Constants';
import Absence from '../Absence';
import SortValueContainer from '../SortValueContainer';


const AbsenceContainer = ({ absencesToDisplay, setSelectedEmployee, setSortValue, sortValue }) => {

    return ( 
        <div className="mt-6 border  border-slate-500 w-full p-4">
        <table className='table-auto w-full'>
            <thead>
            <tr>
                        <th>Start date{' '}<SortValueContainer topValue={DATENEWOLD} bottomValue={DATEOLDNEW} setSortValue={setSortValue} currentSortValue={sortValue} /></th>
                <th>Absence type </th>
                <th>name {' '}<SortValueContainer topValue={NAMEAZ} bottomValue={NAMEZA} setSortValue={setSortValue} currentSortValue={sortValue} /></th>
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