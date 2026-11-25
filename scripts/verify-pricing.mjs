import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(resolve(root, 'pricing-2026-11.json'), 'utf8'));
const csvLines = readFileSync(resolve(root, 'pricing-2026-11.csv'), 'utf8').trim().split('\n');

if (data.verifiedAt !== '2026-11-25') {
  throw new Error(`Unexpected verifiedAt: ${data.verifiedAt}`);
}
if (data.vendors.length !== 7) {
  throw new Error(`Expected 7 vendors, got ${data.vendors.length}`);
}

const totalPlans = data.vendors.reduce((acc, v) => acc + v.plans.length, 0);
if (csvLines.length !== totalPlans + 1) {
  throw new Error(`Expected ${totalPlans + 1} CSV lines, got ${csvLines.length}`);
}

for (const v of data.vendors) {
  if (!v.officialPricingUrl.startsWith('https://')) {
    throw new Error(`Invalid officialPricingUrl for ${v.id}`);
  }
  if (v.verifiedAt !== '2026-11-25') {
    throw new Error(`Vendor ${v.id} verifiedAt mismatch`);
  }
  for (const p of v.plans) {
    if (!csvLines.some((line) => line.includes(`,${p.id},`))) {
      throw new Error(`Missing plan ${p.id} in pricing-2026-11.csv`);
    }
  }
}

console.log(`OK: Verified ${data.vendors.length} vendors and ${totalPlans} plans audited on ${data.verifiedAt}.`);
