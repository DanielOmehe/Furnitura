const Header = ({variant, children})=>{
    return(
        <>
            <h3 className={variant}> {children} </h3>
            <style jsx>{`
                .column-head{
                    font-weight: 100;
                    font-size: 46px;
                }
                .column-sub-head{
                    font-weight: 800;
                    font-size: 45px;
                    margin-bottom: 32px;
                }
            `}</style>
        </>
    )
}

export default Header