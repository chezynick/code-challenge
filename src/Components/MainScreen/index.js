import React, {useEffect, useState} from 'react'
import { DATENEWOLD, DATEOLDNEW, NAMEAZ, NAMEZA } from '../../Constants';
import getAllAbsences from '../../Services/getAllAbsences';
import AbsenceContainer from '../AbsenceContainer';
import ErrorScreen from '../ErrorScreen';
import Header from '../Header';
import LoadingScreen from '../LoadingScreen';
import { isAfter, isBefore } from 'date-fns';

  const sortAbsences = (arr, sortValue) => {
        if (sortValue === DATENEWOLD) {
            return  arr.sort((a, b) => isBefore(new Date(a.startDate), new Date(b.startDate)) ? 1 : -1);
        }
          if (sortValue === DATEOLDNEW) {
            return   arr.sort((a, b) => isAfter(new Date(a.startDate), new Date(b.startDate)) ? 1 : -1);
          }
           if (sortValue === NAMEAZ) {
            return    arr.sort((a, b) => a.employee.firstName > b.employee.firstName ? 1 : -1);
           }
         if (sortValue === NAMEZA) {
            return   arr.sort((a, b) => a.employee.firstName > b.employee.firstName ? -1 : 1);
           }
        return arr
    }
const MainScreen = () => {
    const [absences, setAbsences] = useState([])
    const [absencesToDisplay, setAbsencesToDisplay] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [sortValue, setSortValue] = useState(DATENEWOLD);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
     useEffect(() => {
         getAllAbsences().then((res) => {
             console.log(res.data)
             const sortedArray = sortAbsences(res.data, sortValue)
            setAbsences(sortedArray);
            setAbsencesToDisplay(sortedArray);
            setIsLoading(false);
        }).catch(() => {
            setIsError(true)
             setIsLoading(false)
        })
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
    useEffect(() => {
        if (selectedEmployee) {
            return setAbsencesToDisplay(absences.filter(abs => abs.employee.id === selectedEmployee))
        }
        return setAbsencesToDisplay(absences)
    }, [absences, selectedEmployee])
    useEffect(() => {
        setAbsencesToDisplay(_absencesToDisplay => sortAbsences(absencesToDisplay, sortValue))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortValue])
   
    if (isLoading) {
        return (
            <LoadingScreen />
        )
    }
     if (isError) {
        return (
            <ErrorScreen />
        )
    }
    return ( 
        <div className=' flex flex-col items-start py-10 w-screen px-10 '>
            <h1 className=' text-red-600 text-3xl'>Absences</h1>
            <Header setAbsencesToDisplay={setAbsencesToDisplay} setSortValue={setSortValue} absences={absences} setSelectedEmployee={setSelectedEmployee} />
            <AbsenceContainer absencesToDisplay={sortAbsences( absencesToDisplay, sortValue)} setSelectedEmployee={setSelectedEmployee} setSortValue={setSortValue} sortValue={sortValue} />
        </div>
     );
}
 
export default MainScreen;