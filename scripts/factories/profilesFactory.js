class ProfilesFactory {

    constructor(data, id) {
        if(id === 'newApi') {
    return new Photographer(data)
        } else {
            throw 'Aucun id ne correspond'
        }        
    }    
}