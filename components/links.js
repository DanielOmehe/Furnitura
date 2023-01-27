import { Fragment } from "react";

const Links = ({Links})=>{
    return(
        <Fragment>
        {
            Links.map((link) => {
                return(
                    <li className="listItem">
                        <a href="/">{link}</a>
                    </li>
                )
            })
        }
        <style jsx> {`
        .listItem{
            list-style: none;
            margin-left: 58px;
        }
        .listItem a{
            text-decoration: none;
            font-size: 19px;
            font-weight: 800;
            color: black;
        }
        `} </style>
        </Fragment>
    )
}

export default Links