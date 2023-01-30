const links = [
    {name: 'About us', target: '/about'},
    {name: 'Furniture', target: '/furniture'},
    {name: 'Our Services', target: '/services'},
    {name: 'Blog', target: '/blog'},
];

const Links = ()=>{
    return(
        <>
            {
                links.map(({name, target}) => {
                    return(
                        <li className="listItem">
                            <a href={target}>{name}</a>
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
        </>
    )
}

export default Links