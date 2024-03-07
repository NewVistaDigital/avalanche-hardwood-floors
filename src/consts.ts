// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// N.B. THIS FILE IS IMPORTED IN BOTH SERVER- AND CLIENT-SIDE CODE.
// THINK TWICE BEFORE ADDING STUFF AS IT WILL GET SHIPPED TO THE CLIENT.

import { slugify } from './js/slugify';

export const SITE_TITLE = 'Avalanche Hardwood Floors';
export const SITE_DESCRIPTION = 'Colorado Springs best hardwood floor installation and repairs since 1999.';
export const SITE_URL = 'https://springshardwood.com/';
export const SITE_DEFAULT_IMAGE = '/new-vista-starterkit.jpg';
export const SITE_UTM_SOURCE = slugify(SITE_TITLE);
