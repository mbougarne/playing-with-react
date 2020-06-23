it("Add key to object conditionally", () => {

    let hasCoverImage = true

    let ob = {
        name: 'John Doe',
        email: 'john.doe@example.org',
    }

    if(hasCoverImage) ob.cover = 'cover.jpg';
    
    expect(ob.cover).not.toBeUndefined()

})