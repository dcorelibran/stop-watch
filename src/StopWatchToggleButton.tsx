import { FC, ReactElement } from 'react'
type Props = {
    timer: number,
    handler: () => void,
    isRunning: boolean
}

const StopWatchToggleButton: FC<Props> = (props): ReactElement =>  {
    return (
      <button className='toggleButton' onClick={props.handler}>{props.isRunning ? 'Stop' : 'Start'}</button>
    )
};

export default StopWatchToggleButton