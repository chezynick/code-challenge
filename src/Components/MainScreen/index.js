import React, {useEffect, useState} from 'react'
import { ABSENCEAZ, ABSENCEZA, DATENEWOLD, DATEOLDNEW, NAMEAZ, NAMEZA } from '../../Constants';
import getAllAbsences from '../../Services/getAllAbsences';
import AbsenceContainer from '../AbsenceContainer';
import ErrorScreen from '../ErrorScreen';
import Header from '../Header';
import LoadingScreen from '../LoadingScreen';
import { isAfter, isBefore } from 'date-fns';
import { useQuery } from 'react-query';

const searchedForValue = (arr, value) => {
    if (value) {
        console.log(value, arr)
        return arr.filter(abs =>abs.employee.firstName.toLowerCase().includes(value.toLowerCase()) || abs.employee.lastName.toLowerCase().includes(value.toLowerCase()))
    }
    return arr
}
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
       if (sortValue === ABSENCEAZ) {
            return   arr.sort((a, b) => a.absenceType > b.absenceType ? 1 : -1);
       }
      if (sortValue === ABSENCEZA) {
            return   arr.sort((a, b) => a.absenceType > b.absenceType ? -1 : 1);
           }
        return arr
    }
const MainScreen = () => {
    const [absences, setAbsences] = useState([])
    const [absencesToDisplay, setAbsencesToDisplay] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [searchValue, setSearchValue] = useState('');
    const [sortValue, setSortValue] = useState(DATENEWOLD);
    const { isLoading, isError } = useQuery('initial absence data', () => getAllAbsences(), {
        onSuccess: (res) => {
               const sortedArray = sortAbsences(res.data, sortValue)
            setAbsences(sortedArray);
            setAbsencesToDisplay(sortedArray);
        }
    } )
    
    useEffect(() => {
        if (selectedEmployee) {
            return setAbsencesToDisplay(absences.filter(abs => abs.employee.id === selectedEmployee))
        }
        return setAbsencesToDisplay(absences)
    }, [absences, selectedEmployee])
   
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
            <Header
                setAbsencesToDisplay={setAbsencesToDisplay}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setSortValue={setSortValue}
                absences={absences}
                setSelectedEmployee={setSelectedEmployee}
            />
            <AbsenceContainer
                absencesToDisplay={searchedForValue(sortAbsences(absencesToDisplay, sortValue), searchValue)}
                setSelectedEmployee={setSelectedEmployee}
                setSortValue={setSortValue}
                sortValue={sortValue} />
        </div>
     );
}
 
export default MainScreen;