export const getRecommendations = (cartItems, menuItems) => {
    if (!cartItems || cartItems.length === 0) {
        return menuItems.slice(0, 3); // default suggestions
    }


    const categories = cartItems.map(item => item.category);


    const recommended = menuItems.filter(item =>
        categories.includes(item.category) &&
        !cartItems.some(cartItem => cartItem.id === item.id)
    );

    return recommended.slice(0, 4); // limit results
};