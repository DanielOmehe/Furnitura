import Links from "./links";

const Navigation = ()=>{
    return (
        <>
            <nav id="navbar">
                <h3 className="logo">Furnitura</h3>
                <ul className="listItems">
                    <Links Links={['About Us', 'Furniture', 'Our Service', 'Blog']}/>
                </ul>
            </nav>
            <style jsx> {`
                #navbar{
                    width: 80%;
                    height: 50px;
                    margin: 20px auto 0;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                .logo{ 
                    font-size: 27px;
                    font-weight: 800;
                    font-weight: bold;
                }
                .listItems{
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-left: 492px;
                }
                listItems:nth-child(1){
                    margin-left: 108px;
                }
            `} </style>
        </>
    )
}

export default Navigation