const getCharacter = async () => {
    console.log("Fetching MOCKED Characters")
    return Promise.resolve({
        data: {
            results: [
                {
                    char_id: 1,
                    name: "Walter White",
                    birthday: "09-07-1958",
                },
                {
                    char_id: 2,
                    name: "Jesse Pinkman",
                    birthday: "09-24-1984",
                },
                {
                    char_id: 3,
                    name: "Skyler White",
                    birthday: "08-11-1970",
                },
            ],
        },
    });
};

const getCharacterById = async (id) => {
    console.log("Fetching Mocked Character by id");
    return Promise.resolve({
        data: {
            results: 
                {
                    char_id: 4,
                    name: "Walter White Jr.",
                    birthday: "07-08-1993",
                },
                
        },
    })
}
    module.exports =  { getCharacter, getCharacterById };