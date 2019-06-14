// TODO: - Abstract away the DynamoDB implementation (pass in all information needed for request) (should not be obvious that Dynamo is used)
import dynamodb from '../../util/dynamodb';
import formatErrors from '../../util/formatErrors';
import decorateLambda from '../../util/decorateLambda';
import { OK, NOT_FOUND } from '../../util/statusCodes';

export const getUser = decorateLambda(async (event, context) => {
    const res = await dynamodb.get({
        TableName: 'users', // TODO: - Get table name from config
        Key: {
            id: event.pathParameters.id,
        },
    }).promise();

    if (res.Item) {
        return { statusCode: OK, body: JSON.stringify(res.Item) }
    } else {
        return {
            statusCode: NOT_FOUND,
            body: formatErrors(context.localizedStrings.userMissing),
        };
    }
});