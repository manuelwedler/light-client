import { getAddress } from '@ethersproject/address';

import type { Capabilities } from '../constants';
import { CapsFallback } from '../constants';
import { jsonParse } from '../utils/data';
import type { Address } from '../utils/types';
import type { Caps, CapsPrimitive } from './types';

const userRe = /^@(0x[0-9a-f]{40})[.:]/i;

/**
 * Extract the address in a matrix userId and returns it, or undefined it none
 *
 * @param userId - matrix user identifier
 * @returns address contained in userId
 */
export function getAddressFromUserId(userId: string): Address | undefined {
  let address: Address | undefined;
  try {
    const match = userRe.exec(userId);
    if (match) address = getAddress(match[1]) as Address;
  } catch (e) {}
  return address;
}

/**
 * Stringify a caps mapping to a caps url
 * E.g.'mxc://raiden.network/cap?k1=true&k2=v2&k2=v3&k4=null&k5=123'
 *
 * @param caps - Capabilities object/mapping
 * @returns stringified version of caps
 */
export function stringifyCaps(caps: Caps): string {
  const url = new URL('mxc://raiden.network/cap');
  // URLSearchParams.append can handle all primitives
  const appendParam = (key: string, value: CapsPrimitive) =>
    url.searchParams.append(key, value as string);
  for (const [key, value] of Object.entries(caps)) {
    if (Array.isArray(value)) value.forEach(appendParam.bind(null, key));
    else appendParam(key, value);
  }
  return url.href;
}

/**
 * Parse a caps string in the format 'mxc://raiden.network/cap?k1=true&k2=v2&k2=v3&k4=null&k5=123'
 * to a { k1: true, k2: ['v2','v3'], k4: null, k5: 123 } object
 *
 * @param caps - caps string
 * @returns Caps mapping object
 */
export function parseCaps(caps?: string | null): Caps | undefined {
  if (!caps) return;
  const result: Mutable<Caps> = {};
  try {
    const url = new URL(caps);
    url.searchParams.forEach((value, key) => {
      let resValue: Caps[string] = value;
      // interpret *some* types of values
      if (/^\d+$/.test(value)) resValue = jsonParse(value) as number | string;
      else {
        const lowValue = value.toLowerCase();
        if (lowValue === 'none' || lowValue === 'null') resValue = null;
        else if (lowValue === 'false') resValue = false;
        else if (lowValue === 'true') resValue = true;
      }
      if (!(key in result)) {
        result[key] = resValue;
      } else {
        let prevValues = result[key];
        if (!Array.isArray(prevValues)) result[key] = prevValues = [prevValues];
        prevValues.push(resValue);
      }
    });
    return result;
  } catch (err) {}
}

/**
 * @param caps - Our or partner caps object (possibly empty/undefined)
 * @param cap - Cap to fetch from
 * @returns Specified capability, with proper fallback
 */
export function getCap<C extends Capabilities>(caps: Caps | undefined | null, cap: C): Caps[C] {
  return caps?.[cap] ?? CapsFallback[cap];
}

/**
 * Return addresses sorted in lexical order
 *
 * @param addresses - Addresses to sort
 * @returns Addresses sorted in lexical order
 */
export function getSortedAddresses<A extends Address[]>(...addresses: A) {
  return addresses.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) as A;
}
