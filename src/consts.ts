// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// N.B. THIS FILE IS IMPORTED IN BOTH SERVER- AND CLIENT-SIDE CODE.
// THINK TWICE BEFORE ADDING STUFF AS IT WILL GET SHIPPED TO THE CLIENT.

import { slugify } from './js/slugify';

export const SITE_TITLE = 'Avalanche Hardwood Floors';
export const SITE_DESCRIPTION = 'The best hardwood floor company in Colorado Springs!';
export const SITE_URL = 'https://springshardwood.com/';
export const SITE_EMAIL = 'rickmutz@yahoo.com';
export const SITE_UTM_SOURCE = slugify(SITE_TITLE);
export const SITE_DEFAULT_IMAGE = '/nice-bedroom.jpg';
export const SITE_PHONE = '(719) 492-8134'
export const SITE_PHONE_HREF = 'tel:7194928134'

export const UI_THEME = 'system'; // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

export const ANALYTICS_GA4 = null;
