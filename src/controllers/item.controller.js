const { createItem, deleteItem, getItem, updateItem } = require('../services/item.service')

exports.createItem = async (req, res) => {

    if (req.body == null) {
        res.status(401).json({error: "You must send data here"}) }
    
    const { category, name, value } = req.body;

    const item = {
        category: category,
        name: name,
        value: value
    }

    const result = await createItem(item);
    res.status(201).json(result);
}

exports.updateItem = async (req, res) => {
    if (req.body == null) {
        res.status(401).json({error: "You must send data here"}) }
    
    const { category, name, value } = req.body;

    const item = {
        category: category,
        name: name,
        value: value
    }

    await updateItem(item);
    res.status(201);
}

exports.deleteItem = async (req, res) => {

    const {id} = req.body;

    await deleteItem(id);
    res.status(204);
}

exports.getItem = async (req, res) => {

    const {id} = req.body;

    await getItem(id);
    res.status(200);
}