import React from 'react';
const Header = ({setSelectedEmployee}) => {
    return ( 
        <div className="w-full h-32 flex justify-between items-center bg-slate-50">
            <button className='bg-white border border-red-600 rounded-lg px-2 py-1 flex justify-center items-center' onClick={() => setSelectedEmployee()}>Clear selection</button>
        </div>
     );
}
 
export default Header;