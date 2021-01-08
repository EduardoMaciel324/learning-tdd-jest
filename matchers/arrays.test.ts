
let shoppingList = [
    'shoes',
    't-shirt',
    'coffe',
    'milk'
];
test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
})