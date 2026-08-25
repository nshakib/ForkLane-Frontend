#Forkline-Order.ukgit  — Frontend

A food ordering platform frontend where diners browse restaurants, order food, and
track delivery status. Restaurant owners (Managers) manage their own restaurant's
menu and orders. Admins oversee the whole platform.

> This README documents the frontend plan, stack, and design references. It is not
> a build log — the UI is being assembled from the reference templates below and
> customized by hand.

---

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Component library | shadcn/ui |
| Icons | lucide-react |
| Forms | react-hook-form |
| Validation | Zod |
| Client state | Zustand |
| Notifications | Toast (sonner / shadcn toast) |

---

## Design references

The UI is being built by customizing two existing templates rather than
designing from scratch:

1. **Consumer-facing pages** — [Food Delivery Website & App Design UI Kit (Figma)](https://www.figma.com/community/file/1311333346304045465/food-delivery-website-app-design-ui-kit)
   Covers homepage/discovery, restaurant detail, ordering flow, cart, and checkout —
   both desktop and mobile.

2. **Manager & Admin dashboards** — [TailAdmin — Free Next.js Admin Dashboard](https://github.com/TailAdmin/free-nextjs-admin-dashboard)
   MIT-licensed, built in Next.js + Tailwind already. Provides the dashboard shell,
   sidebar, data tables, and line/bar charts. The free tier ships one dashboard
   layout — extra views (like the orders-by-status pie chart) are added on top of
   its existing component patterns.

Both are restyled to share one visual identity (colors, type, spacing) so the
consumer site and the dashboards don't feel like two stitched-together templates.

---

## Roles

| Role | Scope |
|---|---|
| **User** (diner) | Browse restaurants, order, track order status, cancel while `PENDING`, leave reviews |
| **Manager** | Everything a User can do, plus manage their own restaurant's profile, menu, and incoming orders |
| **Admin** | Platform-wide — all restaurants, all users, all orders, platform analytics, block/unblock accounts |

Demo logins (one-click, no typing) are available for all three roles.

---

## Planned page structure

```
/                        discovery — search, filter, sort, pagination
/login, /register         auth (+ demo login buttons per role)
/restaurants/[slug]       restaurant detail — menu, reviews, add to cart
/cart                     single-restaurant cart, simulated checkout
/orders                   diner's order history + live status tracking
/dashboard/manager        owner-scoped: restaurant + menu management, orders, analytics
/dashboard/admin          platform-wide: users, restaurants, orders, analytics
```

Order status flow shown to the diner and advanced (manually) by the Manager/Admin:

```
PENDING → CONFIRMED → PREPARING → OUT_FOR_DELIVERY → DELIVERED
   └──→ CANCELLED   (only from PENDING, only by the diner)
```

---

## Known scope limits (by design, not oversight)

Carried over from the product spec this frontend implements:

- No real payment gateway — "Place Order" simulates a successful payment.
- No delivery/driver role or live GPS tracking — `OUT_FOR_DELIVERY` is a status flag
  the restaurant sets manually.
- One restaurant per order (no cross-restaurant cart).
- No email verification or password-reset flow in v1.
- Reviews aren't gated on having a completed order at that restaurant.

---

## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.