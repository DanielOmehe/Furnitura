import Navigation from './navigation';
import Content from '../content/content';

const Header = ({children})=>{
    return(
        <>
            <header id='header'>
                {children}
            </header>
            <style jsx>{`
                #header{
                    width: 100%;
                    height: 80px;
                    background: #ffffff;
                }
            `}</style>
        </>
    )
}

export default Header