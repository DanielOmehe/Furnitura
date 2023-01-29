import { useState } from "react";
import Column from "./column";
import Button from "../utility/button";
import Header from "../utility/header";
import Text from "../utility/text";

const Content = ()=>{
    const [loading, setLoading] = useState(false)

    const handleClick = ()=>{
        setLoading(true)
        setInterval(() => {
            setLoading(false)
        }, 15000);
    }
    return(
        <>
            <div className="content">
                <Column variant='column1'>
                    <div className="column-box">
                        <Header variant='column-head'>Mid Century</Header>
                        <Header variant='column-sub-head'>Modern Furniture</Header>
                        <Text variant='column-text'>Modern High quality and comfortable
                        available on our stores</Text>
                        <Button variant='discover' onClickHandler={handleClick}>{loading ? 
                            <span className="spinner"></span>
                            :'Discover Now'}</Button>
                    </div>
                    <div className="scroll">
                        <Text variant='scroll-down'>Scroll down</Text>
                        <Button variant='scroll'></Button>
                    </div>
                    <div className="banner1">
                        <img src="/images/chair.png" alt="chair" />
                    </div>
                </Column>
                <Column variant='column2'>
                    <div className="banner2">
                        <img src="/images/furniture.png" alt="furniture" />
                    </div>
                    <img src='/images/path.svg' alt='path' className="path" />
                </Column>
                <Column variant='column3'>
                    <div className="banner3">
                        <img src="/images/vase.png" alt="furniture" />
                    </div>
                </Column>
            </div>
            <style jsx> {`
                .content{
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }
                .content::before{
                    content: "";
                    height: 134px;
                    width: 19px;
                    position: absolute;
                    left: 51px;
                    top: 113px;
                    background: #D16A1D;
                }
                .column-box{
                    width: 500px;
                    height: 300px;
                    position: absolute;
                    left: 170px;
                    top: 164px;
                }
                .banner1{
                    position: absolute;
                    top: 62%;
                    left: 520px;
                }
                .banner2{
                    height: 587px;
                    width: 286px;
                    left: 112px;
                    top: 295px;
                    border-radius: 0px;                    
                    position: absolute;
                    z-index: 2;
                }
                .banner3{
                    width: 230px;
                    height: 700px;
                    position: absolute;
                    border-right: 2px solid #DFE7F2;
                    left: 57px;
                    top: 95px;
                    z-index: 2;
                }
                .path{
                    position: absolute;
                    top: 180px;
                    z-index: 1;
                    left: 192px;
                }
                .spinner{
                    width: 30px;
                    height: 30px;
                    border: 3px solid white;
                    border-radius: 50px;
                    position: absolute;
                    top: 253px;
                    left: 60px;
                    border-right: 3px solid transparent;
                    animation: spinner 1s linear infinite;
                }
                @keyframes spinner{
                    100%{
                        transform: rotate(360deg)
                    }
                }
            `} </style>
        </>
    )
}

export default Content