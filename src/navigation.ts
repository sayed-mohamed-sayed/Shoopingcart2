// import {createSharedPathnamesNavigation} from 'next-intl/navigation';

// export const locales = ['en', 'ar'] as const;
// export const localePrefix = 'always'; // Default

// export const {Link, redirect, usePathname, useRouter} =
//   createSharedPathnamesNavigation({locales, localePrefix});

import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "ar"] as const;
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",
  "/blog": "/blog",

  // If locales use different paths, you can
  // specify each external path per locale.
  "/products/control": {
    en: "/products/control",
    ar: "/products/control",
  },
  "/products/Producthome": {
    en: "/products/Producthome",
    ar: "/products/Producthome",
  },
  "/products/Clothes": {
    en: "/products/Clothes",
    ar: "/products/Clothes",
  },
  "/products/Shoes": {
    en: "/products/Shoes",
    ar: "/products/Shoes",
  },
  "/register/Login": {
    en: "/register/Login",
    ar: "/register/Login",
  },
  "/register/Signin": {
    en: "/register/Signin",
    ar: "/register/Signin",
  },
  "/contact": {
    en: "/contact",
    ar: "/contact",
  },
  "/products/cart": {
    en: "/products/cart",
    ar: "/products/cart",
  },

  // Dynamic params are supported via square brackets
  '/products/[id]': {
    en: '/products/[id]',
    ar: '/products/[id]'
  }
,
  // Also (optional) catch-all segments are supported
  "/categories/[...slug]": {
    en: "/categories/[...slug]",
    ar: "/kategorien/[...slug]",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
