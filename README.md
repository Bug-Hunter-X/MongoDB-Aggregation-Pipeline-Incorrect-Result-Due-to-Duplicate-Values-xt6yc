# MongoDB Aggregation Pipeline Bug
This repository demonstrates a subtle bug in a MongoDB aggregation pipeline that can lead to incorrect results. The bug arises from an oversight in handling duplicate values within a related collection.

## Bug Description
The provided aggregation pipeline aims to count occurrences of specific values in a related collection. However, if the related collection contains duplicate values for the same `_id`, the aggregation will produce an inflated count.

## Bug Reproduction
The `bug.js` file contains the erroneous aggregation pipeline. Running this script against a MongoDB database with appropriate data will reproduce the incorrect result. 

## Solution
The corrected aggregation pipeline in `bugSolution.js` addresses the issue by using the `$addToSet` operator within the `$group` stage. This ensures that only unique values are counted, thus providing an accurate result. 

## Usage
1. Clone this repository.
2. Ensure that you have a MongoDB instance running.
3. Populate your database with data to reflect the issue.
4. Run the `bug.js` and then `bugSolution.js` files using MongoDB shell or a Node.js driver to observe the difference in results.