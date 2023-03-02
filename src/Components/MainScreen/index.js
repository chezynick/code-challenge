import React, {useEffect, useState} from 'react'
import getAllAbsences from '../../Services/getAllAbsences';
import AbsenceContainer from '../AbsenceContainer';
import ErrorScreen from '../ErrorScreen';
import Header from '../Header';
import LoadingScreen from '../LoadingScreen';

const filterEmployeeAbsences = (abs, emp) => {
    return abs.filter(ab => ab.employee.id === emp)
}
const MainScreen = () => {
    const [absences, setAbsences] = useState([])
    const [absencesToDisplay, setAbsencesToDisplay] = useState([])
    const [selectedEmployee, setSelectedEmployee] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
     useEffect(() => {
         getAllAbsences().then((res) => {
            console.log(res.data)
            setAbsences(res.data);
            setAbsencesToDisplay(res.data);
            setIsLoading(false);
        }).catch(() => {
            setIsError(true)
             setIsLoading(false)
        })
    }, [])
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
            <Header setAbsencesToDisplay={setAbsencesToDisplay} absences={absences} setSelectedEmployee={setSelectedEmployee} />
            <AbsenceContainer absencesToDisplay={selectedEmployee ? filterEmployeeAbsences(absencesToDisplay, selectedEmployee): absencesToDisplay} setSelectedEmployee={setSelectedEmployee} />
        </div>
     );
}
 
export default MainScreen;