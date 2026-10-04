import { getContext, setContext } from 'svelte';
import type { StandardPage } from '$lib/server/standard';

/** What rule text needs from its page: term definitions and layer names. */
export type StandardContext = Pick<StandardPage, 'terms' | 'layerTitles' | 'glossaryPath'>;

const KEY = Symbol('standard-page');

/** Set by the page; a getter, so it follows client-side navigation. */
export const setStandardContext = (get: () => StandardContext) => setContext(KEY, get);

export const standardContext = () => getContext<() => StandardContext>(KEY);
