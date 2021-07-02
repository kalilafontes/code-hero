export default interface DataCharacters {
    id: string;
    name: string;
    description: string;
    thumbnail:{
        path: string;
        extension: string;
    };
    comics: {
        items: [{
            name: string;
            resourceURI: string;
        }]
    }

}