import React from 'react';
import { DATENEWOLD } from '../../Constants';
const Header = ({ setSelectedEmployee,setSortValue, setAbsencesToDisplay, absences  }) => {
    return ( 
        <div className="w-full h-32 flex justify-between items-center bg-slate-50">
            <button className='bg-white border border-red-600 rounded-lg px-2 py-1 flex justify-center items-center' onClick={() => {
                setSelectedEmployee();
                setAbsencesToDisplay(absences);
                setSortValue(DATENEWOLD)
            }}>Clear selection</button>
        </div>
     );
}
 
export default Header;