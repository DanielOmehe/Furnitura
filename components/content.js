import { Fragment } from "react";
import Column from "./column";
import Button from "./utility/button";
import Header from "./utility/header";
import Text from "./utility/text";

const Content = ()=>{
    return(
        <Fragment>
            <div className="content">
                <Column variant='column1'>
                    <div className="column-box">
                        <Header variant='column-head'>Mid Century</Header>
                        <Header variant='column-sub-head'>Modern Furniture</Header>
                        <Text variant='column-text'>Modern High quality and comfortable
                        available on our stores</Text>
                        <Button variant='discover'>Discover Now</Button>
                    </div>
                    <div className="banner-container">
                        <div className="scroll">
                            <Text variant='scroll-down'>Scroll down</Text>
                            <Button variant='scroll'></Button>
                        </div>
                        <div className="banner1">
                            <img src="/images/chair.png" alt="chair" />
                        </div>
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
                height: 120vh;
                width: 100%;
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            }
            .column-box{
                width: 500px;
                height: 300px;
                position: absolute;
                left: 170px;
                top: 284px;
            }
            .banner1{
                position: absolute;
                top: 73%;
                left: 520px;
            }
            .banner2{
                top: 498px;
                left: 115px;
                position: absolute;
                z-index: 2;
            }
            .banner3{
                width: 230px;
                height: 700px;
                position: absolute;
                border-right: 2px solid #DFE7F2;
                left: 57px;
                top: 298px;
                z-index: 2;
            }
            .banner3::before{
                height: 85px;
                width: 100px;
                left: 230px;
                top: 1700px;
                position: absolute;
                background: #DFE7F2;
            }
            .path{
                position: absolute;
                top: 396px;
                z-index: 1;
                left: 152px;
            }
            `} </style>
        </Fragment>
    )
}

export default Content