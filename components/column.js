import { Fragment } from "react";

const Column = ({variant, children})=>{
    return(
        <Fragment>
            <div className={variant}>
            {children}
            </div>
            <style jsx> {`
            .column1{
                flex: 3;
                height: 100%
                position: relative;
                border-right: 1px solid rgba(0, 0, 0, 0.2);
            }
            .column1::before{
                content: "";
                height: 84px;
                position: absolute;
                width: 11px;
                left: 725px;
                top: 450px;
                background: #c4c4c4;
            }
            .column2{
                height: 100%;
                position: relative;
                border-right: 1px solid #F0C7B1;
            }
            .column3{
            }
            `} </style>
        </Fragment>
    )
}

export default Column