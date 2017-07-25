import uuid from 'uuid';
import AWS from 'aws-sdk';

// todo::instead of using string, using variable from serverless.yml if possible
// or, create an environment yml file to do it
AWS.config.update({region: 'ap-northeast-2'});
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export function main(event, context, callback) {
  // Request body is passed in as a JSON encoded string in 'event.body'
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'notes',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: new Date().getTime()
    }
  }

  // todo:: use promise instead
  dynamoDb.put(params, (error, data) => {
    // Set response headers to enable CORS (Cross-Origin Resource Sharing)
    const header = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    };

    // Return status code 500 on error
    if (error) {
      const response = {
        statusCode: 500,
        headers: header,
        body: JSON.stringify({status:false})
      }
      callback(null, response);
      return;
    }

    // Return status code 200 and the newly created item
    const response = {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify(params.Item)
    }
    callback(null, response);
  });
};