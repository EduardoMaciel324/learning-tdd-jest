test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeUndefined();
})