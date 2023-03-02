import React from 'react'
import cn from 'classnames';

    const SortValueContainer = ({ topValue, bottomValue, setSortValue, currentSortValue }) =>{ return(
        <div className="space-x-2">
            <button onClick={() => setSortValue(topValue)} className={cn('outline px-1', {
                'outline-blue-500': topValue === currentSortValue,
                'outline-transparent': topValue !== currentSortValue
            })}>🔼</button>
            <button onClick={() => setSortValue(bottomValue)} className={cn('outline px-1', {
                'outline-blue-500': bottomValue === currentSortValue,
                'outline-transparent': bottomValue !== currentSortValue
            })}>🔽</button>
        </div>
    )};
  export default SortValueContainer