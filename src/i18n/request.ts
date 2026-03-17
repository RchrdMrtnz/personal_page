import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = await requestLocale;

    // Ensure that a valid locale is used
    const finalLocale = (!locale || !(routing.locales as readonly string[]).includes(locale))
        ? routing.defaultLocale
        : locale;

    return {
        locale: finalLocale,
        messages: (await import(`../../messages/${finalLocale}.json`)).default
    };
});
