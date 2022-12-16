import { Document } from "../models/document.entity";
import { Op } from 'sequelize';
import GenericController from './GenericController';

class DocumentController extends GenericController{
    constructor(){
        super();
    }

    async updateDocument(_id: string, data: any){
        console.log(data)
        await Document.findByIdAndUpdate(_id, data);
        return {
            status: 200
        }
    }

    async getDocument(_id: string){
        const document = await Document.findById(_id);

        return {
            document,
            status: 200
        }
    }

    async getDocuments(query: any){
        let { user_id, page, limit } = query;

        let res = this.generatePagination(limit, page)
        limit = res[0]
        page = res[1]

        const document = await Document.find({ user_id }).skip(page * limit).limit(limit)
        const total = await Document.find({ user_id });
        const count = Math.ceil(total.length / limit);

        return {
            rows: document,
            count,
            status: 200
        }
    }
}

export default DocumentController;