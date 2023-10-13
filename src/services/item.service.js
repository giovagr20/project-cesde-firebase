const {
  createitem,
  deleteitem,
  getItem,
  updateItem,
} = require("../models/item.model");

exports.createItem = async (item) => {
  return await createitem(item);
};

exports.updateItem = async (item) => {
  return await updateItem(item);
};

exports.deleteItem = async (id) => {
  return await deleteitem(id);
};

exports.getItem = async (id) => {
  return await getItem(id);
};
