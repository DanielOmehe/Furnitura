import { Fragment } from "react";

const Text = ({variant, children})=>{
    return(
        <Fragment>
            <p className={variant}>{children}</p>
            <style jsx>{`
            .column-text{
                padding-right: 12rem;
                margin-bottom: 60px;
            }
            .scroll-down{
                position: absolute;
                left: 184px;
                font-size: 14px;
                top: 800px;
                transform: rotate(-90deg);
            }
            `}</style>
        </Fragment>
    )
}

export default Text