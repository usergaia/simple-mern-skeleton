const itemModel = require('../models/item.model')


const getItems = async (req,res) => {
    try {
        const items = await itemModel.find().sort({age: 1});
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

const getItem = async (req,res) => {
    try {
        const { id } = req.params;
        const item =  await itemModel.findById(id)
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//post
const postItem = async (req,res) => {
    try {
      const item = await itemModel.create(req.body);
      res.status(200).json(item);
    } catch (error) {
        res.status(500).send({message:error.message});
    }
};


//put
const updItem = async (req,res) => {
    try {
        const {id} = req.params;
        const item = await itemModel.findByIdAndUpdate(id, req.body)
        if(!item){
            return res.status(404).json({message:`cannot find any item with ID ${id}`})
        }
        const updatedItem = await itemModel.findById(id);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//del
const delItem = async (req,res) => {
    try {
        const {id} = req.params;
        const item = await itemModel.findByIdAndDelete(id);
        if(!item){
            return res.status(404).json({message:`cannot find any item with ID ${id}`})
        }
        res.status(200).json(item, {message: "Item deleted successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


module.exports = {
    getItems,
    getItem,
    postItem,
    updItem,
    delItem
};