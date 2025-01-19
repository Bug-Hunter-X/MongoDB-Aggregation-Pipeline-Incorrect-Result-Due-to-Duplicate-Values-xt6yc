```javascript
//Corrected Aggregation Pipeline
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
      count: { $sum: 1 },
      uniqueCount: { $addToSet: "$relatedDocuments.someField" }
    }
  },
  {
    $project: {
      _id: 1,
      count: 1,
      uniqueCount: { $size: "$uniqueCount" }
    }
  }
])
```