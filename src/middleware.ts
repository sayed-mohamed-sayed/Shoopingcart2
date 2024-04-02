import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  localePrefix,
 
  // Used when no locale matches
  defaultLocale: 'ar'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};