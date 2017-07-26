import AWS from 'aws-sdk';

// todo::instead of using string, using variable from serverless.yml if possible
// or, create an environment yml file to do it
AWS.config.update({region:'ap-southeast-1'});

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}