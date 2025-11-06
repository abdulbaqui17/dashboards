# Dashboard Application

This is a modern, multi-purpose dashboard application built with React and TypeScript, featuring four specialized analytics dashboards for different business needs.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or using bun
   bun install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or using bun
   bun run dev
   ```

## Dashboards Overview

### 📊 Analytics Dashboard (`/`)
Track your key metrics and user engagement in real-time.

**Key Metrics:**
- Total Visitors
- Page Views
- Click Rate
- Average Session Duration

**Visualizations:**
- Visitors & Page Views Line Chart
- Monthly Conversions Bar Chart
- Bounce Rate Pie Chart
- Live Visitor Map (coming soon)

### 🛍️ E-commerce Dashboard (`/ecommerce`)
Manage your online store and track performance.

**Key Metrics:**
- Total Orders
- Total Sales
- Conversion Rate
- Active Customers

**Features:**
- Monthly Sales Bar Chart
- Sales by Category Pie Chart
- Recent Orders Table with status tracking
- Low Stock Alert System

### 💰 Finance Dashboard (`/finance`)
Track your finances and budget progress.

**Key Metrics:**
- Total Balance
- Monthly Income
- Monthly Expenses
- Savings Rate

**Features:**
- Income vs Expenses Line Chart with multiple views
- Expenses Breakdown Pie Chart
- Savings Goals Tracker with progress bars
- Recent Transactions History

### 💻 Developer Dashboard (`/developer`)
Track your code, deployments, and team activity.

**Features:**
- Weekly Commits Bar Chart
- Animated Terminal with command history
- Pull Requests Table with status
- Build Status Monitoring
- System Status with CPU usage
- Repositories Overview with GitHub stats
- Deployment Tracking

## API Integration Recommendations

### Analytics Dashboard
**Recommended APIs:**
- **Google Analytics 4 (GA4) API** - Visitor tracking, page views, session duration
- **Mixpanel API** / **Amplitude Analytics API** - User behavior analytics
- **Plausible Analytics API** / **Matomo API** - Privacy-focused alternatives
- **IP Geolocation APIs** (ipapi.co, MaxMind) - For visitor map
- **Hotjar API** - Heatmaps and user recordings

### E-commerce Dashboard
**Recommended APIs:**
- **Shopify API** / **WooCommerce REST API** - Orders, customers, products, inventory
- **Stripe API** / **PayPal API** - Payment processing, transaction data
- **Square API** - Point of sale data
- **SendGrid API** / **Mailchimp API** - Customer communications
- **ShipStation API** - Shipping and fulfillment
- **Amazon MWS API** - If selling on Amazon

### Finance Dashboard
**Recommended APIs:**
- **Plaid API** ⭐ (Best choice) - Bank connections, transactions, balances
- **Yodlee API** - Financial data aggregation
- **Teller API** - Modern banking API
- **QuickBooks API** / **Xero API** - Accounting and invoicing
- **Alpha Vantage API** - Stock market data for investments

### Developer Dashboard
**Recommended APIs:**
- **GitHub REST API / GraphQL API** ⭐ - Repositories, commits, PRs, issues
- **GitLab API** - Similar to GitHub with CI/CD pipelines
- **CircleCI API** / **Travis CI API** / **GitHub Actions API** - Build status
- **Vercel API** / **Netlify API** - Deployment metrics
- **Datadog API** / **New Relic API** - Server monitoring, CPU usage
- **Sentry API** - Error tracking
- **Jira API** - Issue tracking and sprint data

## Features

- ✨ Modern UI with responsive design
- 📊 Real-time data visualization with Recharts
- 🎨 Beautiful animations with Framer Motion
- 🎯 Interactive components with hover effects
- 🌙 Dark theme optimized
- 📱 Fully responsive grid layouts
- 🎪 Smooth page transitions
- 🔔 Status badges with contextual colors
- 📈 Multiple chart types (Line, Bar, Pie)
- 🎭 Collapsible sidebar navigation
- 🎨 Consistent color theming per dashboard

## Tech Stack

### Core
- **React** 18.3.1
- **TypeScript** 5.3.3
- **Vite** 5.1.4

### UI & Styling
- **Tailwind CSS** 3.4.1
- **Shadcn UI** - Complete component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

### Data & State
- **TanStack React Query** 5.56.2 - Server state management
- **React Router DOM** 6.26.2 - Client-side routing
- **Recharts** 2.12.7 - Data visualization

### Form & Validation
- **React Hook Form** 7.53.0
- **Zod** 3.23.8 - Schema validation

### Additional Libraries
- **date-fns** - Date utility library
- **clsx** / **class-variance-authority** - Conditional styling
- **sonner** - Toast notifications

## Development

The project structure:
```
src/
├── components/       # Reusable components
│   ├── ui/          # Shadcn UI components
│   ├── DashboardLayout.tsx
│   └── Sidebar.tsx
├── pages/           # Dashboard pages
│   ├── Index.tsx    # Analytics
│   ├── Ecommerce.tsx
│   ├── Finance.tsx
│   ├── Developer.tsx
│   ├── Settings.tsx
│   └── NotFound.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
└── main.tsx         # Entry point
```

## Building for Production

To build the application for production:

```bash
npm run build
# or using bun
bun run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
# or using bun
bun run preview
```

## Environment Variables

Create a `.env` file in the root directory for API keys:

```env
# Analytics
VITE_GA_MEASUREMENT_ID=
VITE_MIXPANEL_TOKEN=

# E-commerce
VITE_SHOPIFY_API_KEY=
VITE_STRIPE_PUBLIC_KEY=

# Finance
VITE_PLAID_CLIENT_ID=
VITE_PLAID_SECRET=

# Developer
VITE_GITHUB_TOKEN=
VITE_GITHUB_USERNAME=
```

## License

MIT
