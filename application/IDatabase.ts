interface IDatabase{
    
    /**
     * getData() is for getting data from database
     * @returns {Object[]} array of Object
     */
    getData() : Object[];
    
    /**
     * persistData() is for persisting an Object to database
     * @returns {boolean} determine whether the transaction is successful or not
     */                    
    persistData() : boolean;

    /**
     * removeData() is for removing an Object in database
     * @returns {boolean} determine whether the transaction is successful or not
     */
    removeData() : boolean;

}