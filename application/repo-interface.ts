interface IRepo {
    
    /**
     * get new ID for a record. 
     * Because IRepo knows best which ID is already in database. 
     * It can give new ID and make sure no two IDs are the same.
     * @returns {number} - id exists in format of number
     */
    getNewID() : number;
    
    create(arg: any) : any;

    get(id: any) : any;

    all() : any;

    remove(id: any) : any;
}

export default IRepo;