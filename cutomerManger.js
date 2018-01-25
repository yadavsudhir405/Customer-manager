exports.insertCustomer = function(db) {
      var collection = db.collection('customers');
      var r = collection.insert(
          {
              name:'Sudhir',
              age: 29,
              sex: 'Male',
              orders: []
          });
      console.log("Customer is Added "+r);
  };




