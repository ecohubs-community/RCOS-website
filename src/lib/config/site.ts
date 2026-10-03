import { PUBLIC_APP_URL } from '$env/static/public';

/** The public site. Files that leave the site (the PDF) always link here. */
export const PUBLIC_SITE_URL = 'https://rcos.ecohubs.community';
/** This deployment (localhost in development). */
export const SITE_URL = PUBLIC_APP_URL || PUBLIC_SITE_URL;
export const SITE_NAME = 'RCOS - Regenerative Community Operating System';
export const SITE_DESCRIPTION =
	'RCOS is an open-source, shared system for organizing intentional communities. Clear, ready-to-use structures for decision-making, roles, resource sharing, and handling conflicts.';
export const DEFAULT_OG_IMAGE = '/og-image.png';
export const DEFAULT_OG_IMAGE_SIZE = { width: 1385, height: 782 };
