import { Fragment } from "react";

const Button = ({variant, children})=>{
    return(
        <Fragment>
            <button className={variant}> {children} </button>
            <style jsx>{`
            .discover{
                background: #D16A1D;
                border: 1px solid #D16A1D;
                height: 50px;
                width: 157px;
                left: 151px;
                top: 452px;
                color: white;
                cursor: pointer;
                border-radius: 32px;
                box-shadow:  0px 0px 30px 10px rgba(209, 106, 29, 0.24);
            }
            .scroll{
                height: 81px;
                width: 44px;
                left: 243px;
                top: 768px;
                border-radius: 50px;
                border: 2px solid black;
                background: transparent;
                position: relative;
            }
            .scroll::before{
                content: "";
                height: 20px;
                width: 2px;
                left: 20px;
                top: 21px;
                position: absolute;
                background: black;
            }
            `}</style>
        </Fragment>
    )
}

export default Button