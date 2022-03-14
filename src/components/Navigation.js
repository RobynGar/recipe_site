const Navigation = () => {
    const nav = ["Home", "Recipes", "Contact"];
   const navBar = nav.map(elements => {
       return <li>{elements}</li>})

    return(
        <>
        <ul>
            {navBar}
        </ul>
        </>
    )
}
export default Navigation;