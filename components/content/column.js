const Column = ({variant, children})=>{
    return(
        <>
            <div className={variant}>
            {children}
            </div>
            <style jsx> {`
                .column1{
                    width: 726px;
                    height: 100%;
                    position: relative;
                    border-right: 1px solid rgba(0, 0, 0, 0.2);
                }
                .column1::before{
                    content: "";
                    height: 84px;
                    position: absolute;
                    width: 11px;
                    left: 715px;
                    top: 344px;
                    background: #c4c4c4;
                }
                .column2{
                    width: 315px;
                    height: 100%;
                    position: relative;
                    border-right: 1px solid #F0C7B1;
                }
                .column2::before{
                    content: "";
                    height: 84px;
                    width: 12px;
                    left: 302px;
                    top: 124px;
                    position: absolute;
                    border-radius: 0px;
                    background: #F0C7B1;
                }
                .column3{
                    width: 472px;
                    height: 100%;
                    position: relative;
                }
                .column3::before{
                    content: "";
                    height: 85px;
                    width: 11px;                
                    position: absolute;
                    top: 704px;
                    left: 280px;
                    background: #DFE7F2;
                }
            `} </style>
        </>
    )
}

export default Column