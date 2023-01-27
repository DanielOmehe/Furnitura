import { Fragment } from 'react';
import Navigation from './navigation';
import Content from './content';

const Header = ()=>{
    return(
        <Fragment>
            <header id='header'>
                <Navigation />
                <Content />
            </header>
            <style jsx>{`
            #header{
                width: 100%;
                height: 120vh;
                background: #ffffff;
            }
            #header::before{
                content: '';
                height: 134px;
                width: 19px;
                left: 51px;
                top: 133px;
                position: absolute;
                border-radius: 0px;
                background: #D16A1D;
            }
            `}</style>
        </Fragment>
    )
}

export default Header