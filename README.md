# :shopping_bags: ShopMate - Ad Conversion Test Site
A demo e-commerce app to test ad conversion tracking with Jabburr.
## :white_tick: How it works
1. **Landing page** shows a sample product.
2. Clicking **Buy Now** takes user to a thank-you page with tracking.
3. If `?saf=abc123` is in URL, the script will track the conversion.
### Example Test URL
```
https://your-vercel-app.vercel.app/?saf=abc123
```
### Sample Conversion Trigger (in thank-you.html)
```html
<script>
  saf('track', 'YToxOntpOjA7czoyOiI4OSI7fQ==');
</script>
```
## :rocket: Deploy on Vercel
1. Clone this repo.
2. Connect to [vercel.com](https://vercel.com/).
3. Deploy.
:white_tick: Done!
:white_tick: Your test e-commerce web app ShopMate is now ready with:
:jigsaw: Pages Included
index.html – Main product page with “Buy Now” button.
thank-you.html – Confirmation page triggering the saf() conversion function.
style.css – Clean responsive styling.
vercel.json – Vercel routing configuration for clean URLs.
:cog: Tracking Integrated
conversion.js from Jabburr is included.
saf('track', 'YToxOntpOjA7czoyOiI4OSI7fQ==') is triggered on thank-you page.
Appends the ?saf=abc123 param to the thank-you page for proper tracking.
---
:link: Test URL Format
Use a URL like:
https://your-vercel-site.vercel.app/?saf=test123
Then click “Buy Now” → conversion tracking fires.
---