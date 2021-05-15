import { IRepository } from "./repository-interface";
import prismaClient from "../lib/prisma";
import { Contact } from "../entity/contact";

export class ContactRepository implements IRepository {

    async create(arg: Contact) : Promise<Contact> {

        const result = await prismaClient.contact.create({
            data: arg
        });

        return result;
    }

    async get(id: number): Promise<Contact> {
        const result = await prismaClient.contact.findUnique({
            where: {id}
        });

        return result;
    }

    async all(): Promise<Contact[]> {
        const result = await prismaClient.contact.findMany({
            
        });

        return result;
    }

    async remove(id: number): Promise<Contact> {
        const result = await prismaClient.contact.delete({
            where: {id}
        });

        return result;
    }
}