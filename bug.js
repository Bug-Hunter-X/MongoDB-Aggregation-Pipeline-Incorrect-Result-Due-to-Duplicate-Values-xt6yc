```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {
    $match: {status: "active"}
  },
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "relatedId",
      as: "relatedDocuments"
    }
  },
  {
    $unwind: "$relatedDocuments"
  },
  {
    $group: {
      _id: "$relatedDocuments.someField",
      count: { $sum: 1 }
    }
  }
])
```