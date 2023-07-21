import PlayIcon from '../assets/images/PlayIcon.svg'

export default function PlayMarketButton(){
    return(
    <div className='block'>
            <svg viewBox="0 0 218 54"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id='Android' d="M216.787 0.5L163.419 53.5H0.5V0.5H216.787Z"/>
            </svg>
            <img className='playIcon' src={PlayIcon} alt="svg"/>
            <div className='downloadPlayButton'>Download on</div>
            <div className='playText'>Google play</div>
    </div>
    )
}
