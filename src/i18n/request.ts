import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    let finalLocale = locale;

    // Ensure that a valid locale is used
    if (!finalLocale || !routing.locales.includes(finalLocale as any)) {
        finalLocale = routing.defaultLocale;
    }

    return {
        locale: finalLocale,
        messages: (await import(`../../messages/${finalLocale}.json`)).default
    };
});
