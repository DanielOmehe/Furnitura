import HeaderComponent from "../components/header"
import ContentComponent from "../components/content"

const Home = ()=>{
    return(
        <>
            <div className="container">
                <HeaderComponent />
                <ContentComponent />
            </div>
            <style jsx>
                {
                    `
                        .container{
                            width: 100%;
                            height: 100vh;
                            background: #ffffff;
                            overflow-y: hidden;
                            position: relative;
                        }
                    `
                }
            </style>
        </>
    )
}

export default Home