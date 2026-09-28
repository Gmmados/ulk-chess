# ULK Chess Club

A small static landing page in English and Arabic. No framework, account system, database or build step is required.

## Preview

Open `dist/index.html`, or serve `dist` with any static HTTP server. For example:

```sh
python -m http.server 4173 --directory dist
```

## Editing

- English content and page structure: `dist/index.html`
- Arabic translations, language switch and WhatsApp message: `dist/script.js`
- Responsive layout and theme: `dist/styles.css`
- Both supplied logos and all six tournament photographs: `dist/assets/`

English is the initial language. The language button switches text, page direction, image descriptions and the prepared WhatsApp message. The browser remembers the chosen language when local storage is available.

The WhatsApp contact is Mohamed, +250 796 883 243. Links prepare a message; the visitor decides whether to send it. The site does not collect form submissions.

The quote is attributed to Anatoly Karpov by the [FIDE Open Chess Museum](https://museum.fide.com/champions/anatoly-karpov). The Arabic version is a translation for this site. Photographs and logos were supplied by the user. No tournament dates, rankings, membership counts or management roles are invented.

DM Sans and Noto Sans Arabic are loaded from Google Fonts; system fonts are used when unavailable. All photographs and logos are local WebP assets. The page itself works without a server-side runtime.

The `dist` folder can be uploaded to any static host. `.openai/hosting.json` identifies the associated Sites project; it contains no credentials. Sites access remains private unless explicitly changed.
