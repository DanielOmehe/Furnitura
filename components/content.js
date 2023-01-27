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
                </Column>
                <Column variant='column3'></Column>
            </div>
            <style jsx> {`
            .content{
                height: 100%;
                width: 100%;
                display: grid;
                grid-template-column: 500px auto 400px;
                position: relative;
                top: -90px;
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
                left: 515px;
            }
            .banner2{
                top: 498px;
                left: 59px;
                position: absolute;
            }
            `} </style>
        </Fragment>
    )
}

export default Content