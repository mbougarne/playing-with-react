const checkIfExists = require('../helpers/checkIfExists');

it("Testing checking if documents exists module", async () => {

    let exists = await checkIfExists({title: 'Olive, Again'});
    let notExists = await checkIfExists({title: 'Again'});

    expect(exists).toBeTruthy();
    expect(notExists).not.toBeTruthy();
});

it("Testing checking if documents exists module - ISBN", async () => {

    let isbnExists = await checkIfExists({isbn: '0812996542'});
    let isbnNotExists = await checkIfExists({isbn: '12996542'});

    expect(isbnExists).toBeTruthy();
    expect(isbnNotExists).not.toBeTruthy();
});
