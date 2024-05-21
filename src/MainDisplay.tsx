import { FC, ReactElement, useEffect, useState } from "react";
import ClockArea from "./ClockArea";
import StopWatchToggleButton from "./StopWatchToggleButton";


interface MainDisplayProps {}
 
const MainDisplay: FC<MainDisplayProps> = (): ReactElement => {
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval : NodeJS.Timeout | null = null;
        
        if (timerStarted) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime + 1); 
            }, 1000);
        }
        else{
            clearInterval(interval as unknown as NodeJS.Timeout);
        }

        return () => clearInterval(interval as unknown as NodeJS.Timeout);

    }, [timerStarted]);


    const toggleClock = function()  {
       if (timerStarted) {
        setTimer(0);
        setTimerStarted((prev) => !prev);
       }
       else{
        setTimerStarted((prev) => !prev);
       }
    } 

    
    return (
        <div className="mainDisplay w-full flex flex-column flex-wrap justify-center h-1/2 text-2xl">
            <h1 className="w-full text-3xl">Stop Watch</h1>
            <ClockArea timer={timer}/>
            <StopWatchToggleButton timer={timer} handler={toggleClock} isRunning={timerStarted}/>
        </div>
    )
}

export default MainDisplay;