const Column = ({variant, children})=>{
    return(
        <>
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
                    top: 344px;
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