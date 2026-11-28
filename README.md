# US Contractor Accounting & Field Service Pricing Dataset (Verified 2026-11-25)

Audited **US regular list-price dataset** (`JSON` & `CSV`) comparing **7 platforms** commonly evaluated by US plumbing, HVAC, electrical, remodeling, and general contractors looking to switch off QuickBooks Online.

- **Pricing Audit Date**: `2026-11-25`
- **Methodology**: Regular US list rates only (excludes temporary 90-day intro promos, state taxes, multi-state payroll surcharges, and custom enterprise contracts).
- **Independence Disclaimer**: Not affiliated with or endorsed by Intuit, Xero, FreshBooks, Zoho, Wave, Jobber, or Housecall Pro.

---

## 7 Audited Vendors (2026-11-25 US Standard List Pricing)

| Platform | Category | Entry / Mid / Pro Regular US Monthly List | Included Seats & Extra User Rate | Job Costing Tier | CPA Grade | Official Pricing Page |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| **QuickBooks Online** | Accounting | Simple Start `$38` · Essentials `$85` · Plus `$140` · Advanced `$340` | 1 / 3 / 5 / 25 users (`6+` forces `$340/mo` Advanced) | Plus (`$140/mo`) | `A+` | [quickbooks.intuit.com/pricing/](https://quickbooks.intuit.com/pricing/) |
| **Xero US** | Accounting | Early `$27` · Growing `$59` · Established `$97` | **Unlimited** users & CPA seats on all tiers | Established (`$97/mo`) | `A` | [xero.com/us/pricing-plans/](https://www.xero.com/us/pricing-plans/) |
| **FreshBooks** | Accounting | Lite `$23` (`$20.70` ann.) · Plus `$43` (`$38.70`) · Premium `$70` (`$63`) | 1 base user; `+$11/user/mo` | Premium (`$70` / `$63` ann.) | `B+` (Lite `C`) | [freshbooks.com/pricing](https://www.freshbooks.com/pricing) |
| **Zoho Books US** | Accounting | Standard `$20` (`$15` ann.) · Professional `$50` (`$40`) · Premium `$70` (`$60`) · Ultimate `$275` (`$240`) | 3 / 5 / 10 / 15 shared users (`+$3/mo` or `$2.50/mo` ann.) | Professional (`$50` / `$40` ann.) | `B+` | [zoho.com/us/books/pricing/](https://www.zoho.com/us/books/pricing/) |
| **Wave Accounting** | Accounting | Starter `$0` · Pro `$19/mo` (`$190/yr` annual) | 1 (Starter) / Unlimited (Pro) | None | `B` | [waveapps.com/pricing](https://www.waveapps.com/pricing) |
| **Jobber** | Field Service (FSM) | Core 1 `$49` (`$29`) · Connect 1/5/10 `$139–$299` (`$99–$229`) · Grow 1/5/10 `$199–$399` (`$149–$299`) | 1 / 5 / 10 users (`16+` Custom Quote) | Grow (`$199–$399/mo`) | `B+` (pairs w/ Xero Growing `$59/mo`) | [getjobber.com/pricing/](https://www.getjobber.com/pricing/) |
| **Housecall Pro** | Field Service (FSM) | Basic 1 `$79` (`$59`) · Essentials 5 `$189` (`$149`) · MAX 8 `$329` (`$299`) | 1 / 5 / 8 users (`+$35/extra user` on MAX) | Basic+ | `C` (pairs w/ QBO Simple Start `$38/mo`) | [housecallpro.com/pricing/](https://www.housecallpro.com/pricing/) |

### Key Accounting & Payroll Rules Modeled
1. **W-2 Payroll Add-ons** (modeled separately from base ledger fees):
   - QuickBooks Workforce Payroll Core: `$50/mo + $7/employee/mo`
   - Xero Payroll (powered by Gusto): `$36/mo + $6/person/mo`
   - FreshBooks Payroll (powered by Gusto): `$40/mo + $6/person/mo`
   - Zoho Payroll US Standard: `$39/mo + $6/emp/mo` monthly (`$29/mo + $5/emp/mo` annual)
   - Wave Payroll: `$40/mo + $6/person/mo`
   - Standalone Gusto Simple (for FSM stacks without embedded payroll): `$49/mo + $6/person/mo`
2. **Honest Hybrid FSM + Ledger Modeling**: Field service apps (`Jobber`, `Housecall Pro`) do not provide a standalone double-entry General Ledger. When CPA-ready books are required, `Jobber` pairs natively with `Xero Growing ($59/mo)` and `Housecall Pro` pairs natively with `QBO Simple Start ($38/mo)`.

---

## Files & Local Verification

- [`pricing-2026-11.csv`](./pricing-2026-11.csv) — Flat 26-plan CSV across all 7 platforms with verified date & official pricing URLs
- [`pricing-2026-11.json`](./pricing-2026-11.json) — Structured JSON including embedded/standalone payroll schedules
- [`contractor-chart-of-accounts-2026.csv`](./contractor-chart-of-accounts-2026.csv) — 20-account CPA-ready US Construction Chart of Accounts (`1210` Retainage, `1220` CIE Underbillings, `2150` BIE Overbillings, `5010–5040` Direct Trade COGS) importable into Xero, Zoho Books, or QBO
- [`wip-schedule-sample-2026.csv`](./wip-schedule-sample-2026.csv) — Worked 4-job Work-in-Progress (WIP) Overbilling / Underbilling schedule (`$570,000` backlog)
- [`scripts/verify-pricing.mjs`](./scripts/verify-pricing.mjs) — Zero-dependency parity and URL audit check:

```bash
bun scripts/verify-pricing.mjs
# or
node scripts/verify-pricing.mjs
```

---

## Interactive Switch Cost Calculator

Run these audited 2026 rates interactively across 6 trades, 4 crew sizes, monthly vs annual billing, W-2 payroll, and CPA access gates at **[TradeCostHQ](https://tradecosthq.com/)** (100% browser-local, zero login required):

- **By Trade & Exit Path**: [Plumbers](https://tradecosthq.com/quickbooks-alternative-for-plumbers/) · [HVAC](https://tradecosthq.com/quickbooks-alternative-for-hvac/) · [Electricians](https://tradecosthq.com/quickbooks-alternative-for-electricians/) · [General Contractors](https://tradecosthq.com/quickbooks-alternative-for-general-contractors/) · [QuickBooks Desktop Exit](https://tradecosthq.com/quickbooks-desktop-alternative-for-contractors/) · [QuickBooks Payroll Alternatives](https://tradecosthq.com/quickbooks-payroll-alternative-for-contractors/)
- **CPA & Construction Accounting Guides**: [Construction Chart of Accounts & WIP Report](https://tradecosthq.com/guides/construction-chart-of-accounts-and-wip-report/) · [AIA G702/G703 Progress Billing Guide](https://tradecosthq.com/guides/aia-billing-and-progress-invoicing-for-contractors/) · [T&M & Change Order Templates](https://tradecosthq.com/guides/time-and-materials-and-change-order-templates/) · [Construction Job Costing Guide](https://tradecosthq.com/guides/contractor-job-costing-software-guide/) · [Free & Cheap QBO Alternatives](https://tradecosthq.com/compare/free-and-cheap-quickbooks-alternatives-for-contractors/)

---

## License

[MIT](./LICENSE)
