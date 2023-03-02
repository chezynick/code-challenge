import React, {useEffect, useState} from 'react'
import getAllAbsences from '../../Services/getAllAbsences';
import AbsenceContainer from '../AbsenceContainer';
import ErrorScreen from '../ErrorScreen';
import Header from '../Header';
import LoadingScreen from '../LoadingScreen';

const MainScreen = () => {
    const [absences, setAbsences] = useState([])
    const [absencesToDisplay, setAbsencesToDisplay] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
     useEffect(() => {
        getAllAbsences().then((res) => {
            setAbsences(res);
            setIsLoading(false)
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
            <Header  setAbsencesToDisplay={setAbsencesToDisplay} absences={absences} />
            <AbsenceContainer absencesToDisplay={absencesToDisplay} />
        </div>
     );
}
 
export default MainScreen;