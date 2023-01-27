import { Fragment } from "react";

const Column = ({variant, children})=>{
    return(
        <Fragment>
            <div className={variant}>
            {children}
            </div>
            <style jsx> {`
            .column1{
                width: 756px;
                height: 100%;
                position: relative;
                border-right: 2px solid rgba(0, 0, 0, 0.2);
            }
            .column1::before{
                content: "";
                height: 84px;
                position: absolute;
                width: 11px;
                left: 732px;
                top: 544px;
                background: #c4c4c4;
            }
            .column2{
                width: 342px;
                height: 100%;
                position: relative;
                border-right: 2px solid #F0C7B1;
            }
            .column2::before{
                content: "";
                height: 84px;
                width: 12px;
                left: 325px;
                top: 224px;
                position: absolute;
                border-radius: 0px;
                background: #F0C7B1;
            }
            .column3{
                width: 472px;
                height: 100%;
                position: relative;
            }
            `} </style>
        </Fragment>
    )
}

export default Column