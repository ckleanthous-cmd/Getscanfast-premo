# GetScan

A Vite + React landing page for private MRI and CT lead generation.

## Run locally
```bash
npm install
npm run dev
```

## HubSpot setup
Create a `.env` file based on `.env.example` and add:

- `VITE_HUBSPOT_PORTAL_ID`
- `VITE_HUBSPOT_FORM_ID`
- `VITE_HUBSPOT_REGION` (usually `eu1`)

If the env values are not set, the page shows a fallback contact form design.
