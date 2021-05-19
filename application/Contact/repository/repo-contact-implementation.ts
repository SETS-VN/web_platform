import IRepo from "../../repo-interface"

class ContactRepository implements IRepo{

    private constructor(){}

    public static getContactRepository() : ContactRepository{
        let obj = new ContactRepository();

        return obj;
    }

}

export default ContactRepository;