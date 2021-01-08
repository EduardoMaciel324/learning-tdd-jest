test('seven plus seven is fourteen',() => {
    expect(7+7).toBe(14)
})

test('object assignment',()=> {
    const data = {one:1};
    data['two'] = 2;
    expect(data).toEqual({one:1, two:2});
})

test('seven plus seven is not zero',()=> {
    expect(7+7).not.toBe(0);
})