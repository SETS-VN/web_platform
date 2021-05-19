import prismaClient from "../../../infrastructure/adapter/prisma";
import IRepo from "../../repo-interface"
import Contact from "../Contact";

class ContactRepository implements IRepo{

    getNewID() {
        throw new Error("Method not implemented.");
    }

    async create(arg: Contact) : Promise<Contact> {
        const result = await prismaClient.contact.create({
            data: arg
        });

        return result;
    }

    async get(id: any) {
        const result = await prismaClient.contact.findUnique({
            where: {id}
        });

        return result;
    }

    async all() : Promise<Contact[]> {
        const result = await prismaClient.contact.findMany({
            
        });

        return result;
    }

    async remove(id: any) {
        const result = await prismaClient.contact.delete({
            where: {id}
        });

        return result;
    }
}

export default ContactRepository;