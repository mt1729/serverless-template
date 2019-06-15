import formatErrors from '../util/formatErrors';
import { NOT_FOUND } from '../util/statusCodes';
import decorateLambda from '../util/decorateLambda';

export const unmatchedRoute = decorateLambda(async (_, context) => {
  return {
    statusCode: NOT_FOUND,
    body: formatErrors(context.localizedStrings.unmatchedRoute),
  };
});