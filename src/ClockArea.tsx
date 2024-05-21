import { FC, ReactElement, useRef } from 'react'

export type ClockProps = {
  timer: number;
}

const ClockArea: FC<ClockProps> = (props): ReactElement => {
  const hour = useRef('' as string);
  const min = useRef('' as string);
  const sec = useRef('' as string);
  const formatTime = ((timer: number) => {
    hour.current = Math.floor(timer/3600).toString().padStart(2, '0');
    min.current = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
    sec.current = Math.floor((timer % 60)).toString().padStart(2, '0');
  });
  formatTime(props.timer);
    return (
      <div className="clockArea flex flex-row w-full justify-evenly h-1/3 font-semibold">
       
        <div className='timeSection'>
        <span>Hours</span>
            <div>
              {hour.current}
            </div>
        </div>
        <div className='timeSection'>
        <span>Minutes</span>  
            <div>
              {min.current}
            </div>
        </div>
        <div className='timeSection'>
        <span>Seconds</span>
            <div>
              {sec.current}
            </div>
        </div>
      </div>
    );
}
export default ClockArea;