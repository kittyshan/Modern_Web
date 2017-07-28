var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb2", function (err, db) {
    
    db.collection('Persons', function (err, collection) {
        
        collection.update({ id: 1},{$set: {lastName:'chan'}},{multi:true}, {w:1},
                                                     function(err, result){
                                                                if(err) throw err;    
                                                                console.log('Document Updated Successfully');
                                                        });

        collection.remove({id:2}, {w:1}, function(err, result) {
        
            if(err) throw err;    
        
            console.log('Document Removed Successfully');
        });

    });
                
});