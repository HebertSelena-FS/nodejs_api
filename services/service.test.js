const { getCharacter, getCharacterById } = require('./service');

jest.mock('./service');
describe("Character Service Tests", () => {
    test('As a user I want to get characters from service', async () => {
        const result = await getCharacter();
        expect(result.data.results[0].name).toEqual("Walter White");    
        expect(result.data.results[1].birthday).toEqual("09-24-1984");
        expect(result.data.results[2].char_id).toEqual(3);
        // expect(result.data.results[3].type).toEqual("Human with antennae");
    });

    test('As a user I should return a character object by Id', async () => {
        const result = await getCharacterById(4);
        
        expect(result.data.results.name).toEqual('Walter White Jr.');
        expect(result.data.results.birthday).toEqual('07-08-1993');
        expect(result.data.results.char_id).toEqual(4);

    });
});