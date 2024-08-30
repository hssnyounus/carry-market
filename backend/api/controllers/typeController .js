import models from '../models';
// import { ProductRepo } from '../repositories/ProductRepo';
const { type } = models;
// const {Category} = models;
const types = {
    async create(req, res, next) {
        try {

            const { name } = req.body;
            console.log(req.body);
            const typeCreate = await type.create({
                name
            });

            return res.status(201).send({ typeCreate, message: { success: 'type created' } })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async getAll() {
        try {
            const data = await type.findAll();

            return res.status(200).send({ data, message: { success: "type all data" } })
        } catch (error) {

        }
    },

    async getOne() {
        try {
            const data = await type.findOne();

            return res.status(200).send({ data, message: { success: "type one data" } })
        } catch (error) {

        }
    }

}

export default types;
