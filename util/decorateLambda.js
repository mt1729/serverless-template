import formatErrors from '../util/formatErrors';
import { INTERNAL_SERVER_ERROR } from './statusCodes';
import getLocalizedStrings from '../locale/getLocalizedStrings';

export default (lambda) => async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const acceptLanguageHeader = event.headers['Accept-Language'];
  const localizedStrings = getLocalizedStrings(acceptLanguageHeader);
  context.localizedStrings = localizedStrings;

  try {
    return await lambda(event, context);
  } catch {
    return {
      statusCode: INTERNAL_SERVER_ERROR,
      body: formatErrors(localizedStrings.internalServerError),
    };
  }
};