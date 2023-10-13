const db = require("../utils/db.connection");

exports.createitem = async (item) => {
  return await db.collection("items").doc("item").set(item);
};

exports.updateItem = async (item) => {
    const itemRef = db.collection('items').doc('item');
    return await itemRef.update({item: item});
};

exports.deleteitem = async (id) => {
  return await db.collection("items").doc("item").delete();
};

exports.getItem = async (id) => {
    const itemRef = db.collection('items');
    const snapshot = await itemRef.where('name', '==', id).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  
    
    return snapshot;
};
