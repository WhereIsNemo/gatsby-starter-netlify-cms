const AWS = require('aws-sdk');
const axios = require('axios');

exports.handler = function (event, context, callback) {
  // processing 
  const body = JSON.parse(event.body);

  // Default response parameters
  const responseBody = {};
  const response = {
    "headers": {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain; charset=UTF-8",
    },
    "body": JSON.stringify(responseBody),
    "isBase64Encoded": false,
  };

  // server response
  const phoneNumber = body.phoneNumber;

  if (phoneNumber) {
    const sns = new AWS.SNS();
    const params = {
      Message: `Телефонный номер ${phoneNumber} заказал обратный звонок`,
      Subject: "Обратный звонок",
      TopicArn: "arn:aws:sns:us-east-1:605133187339:220PlusCallbackSMS",
    };
    sns.publish(params, context.done);

    response["statusCode"] = 200;
  } else {
    response["statusCode"] = 400;
    responseBody["message"] = "phoneNumber is invalid";
  }

  callback(null, response);
};