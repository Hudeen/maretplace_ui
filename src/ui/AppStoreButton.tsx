import AppIcon from '../assets/images/AppIcon.svg'

export default function AppStoreButton(){
    return(
    <div className='block'>
            <svg viewBox="0 0 218 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='Apple' d="M1.21303 53.5L54.5807 0.5H217.5V53.5H1.21303Z" />
            </svg>
            <img className='appIcon' src={AppIcon} alt="svg"/>
            <div className='downloadAppButton'>Download on</div>
            <div className='appText'>Apple Store</div>
    </div>
    )
}
