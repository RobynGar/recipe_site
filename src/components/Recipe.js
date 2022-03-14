const Recipe = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]
    
    const recipes = cakes.map(cake => {
        return (
         <>
            <li>{cake.cakeName}</li>
            <p>{cake.rating}</p>
            {/* the join, joins all the items in the array by a , and a space*/}
            <p>{cake.ingredients.join(', ')}</p>
            
        </>
        )
    })
        
    return(
        <ul>
            {recipes}
        </ul>
    );

    
}
export default Recipe;

