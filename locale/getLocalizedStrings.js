import strings from './strings';
import acceptLanguageParser from 'accept-language-parser';

const supportedLanguages = Object.keys(strings);

export default (acceptLanguageHeader) => {
    const locale = acceptLanguageParser.pick(
        supportedLanguages,
        acceptLanguageHeader,
        { loose: true },
    );

    return strings[locale] || strings['en-US'];
};