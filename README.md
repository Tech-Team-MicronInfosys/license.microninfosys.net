# Micron Infosys Legal Registry

Small static site for publishing licenses and legal standards.

## Structure

```
.
├── index.html                      # Main license listing page
├── viewer.html                     # Secondary viewer page
├── script.js                       # Main page license cards logic
├── viewer.js                       # Viewer page loading logic
├── styles.css                      # Shared styling
├── robots.txt                      # Search engine crawl rules
├── sitemap.xml                     # Search engine URL map
├── licenses/                       # License and policy text files
│   ├── LICENSE-PROPRIETARY-CLIENT-PROJECT.txt
│   ├── LICENSE-PROPRIETARY-INHOUSE.txt
│   ├── LICENSE-APACHE-2.0.txt
│   ├── OPEN-SOURCE-GOVERNANCE-STANDARD-MICRON-INFOSYS.txt
│   ├── CODE-OF-CONDUCT-UNIVERSAL-MICRON-INFOSYS.txt
│   └── SECURITY-POLICY-MICRON-INFOSYS.txt
└── README.md
```

## How to Use

### 1. Add or Edit License Entries

Edit `script.js` and add entries to the `licenses` array:

```javascript
{
    id: 'unique-id',
    name: 'License Name',
    type: 'In-House' or 'Open Source',
    description: 'Brief description of license scope and usage',
    file: 'licenses/LICENSE-NAME.txt'
}
```

The site is preconfigured with standard entries for:

- Proprietary client project license (`LICENSE-PROPRIETARY-CLIENT-PROJECT.txt`)
- Proprietary universal in-house license (`LICENSE-PROPRIETARY-INHOUSE.txt`)
- Apache 2.0 open source standard (`LICENSE-APACHE-2.0.txt`)
- Open source governance standard (`OPEN-SOURCE-GOVERNANCE-STANDARD-MICRON-INFOSYS.txt`)
- Universal code of conduct standard (`CODE-OF-CONDUCT-UNIVERSAL-MICRON-INFOSYS.txt`)
- Security policy (`SECURITY-POLICY-MICRON-INFOSYS.txt`)

### 2. Maintain License/Policy Files

Keep the following in the `licenses/` folder for public open source governance:

- `LICENSE-APACHE-2.0.txt`
- `OPEN-SOURCE-GOVERNANCE-STANDARD-MICRON-INFOSYS.txt`
- `CODE-OF-CONDUCT-UNIVERSAL-MICRON-INFOSYS.txt`
- `SECURITY-POLICY-MICRON-INFOSYS.txt`

### 3. Deploy to cPanel

1. Upload entire folder to your subdomain's public_html
2. Set permissions:
   - Files: 644
   - Folders: 755
3. Access at: `https://license.yourdomain.net`

## Features

- Responsive grid layout
- Single neutral, color-blind-friendlier palette
- Registry metadata per document (status, scope, citation ID, version, effective date)
- Download and viewer pages for each document
- No build tools or dependencies
- Mobile-friendly
- SEO basics in place (metadata, canonical URLs, robots, sitemap)

## Customization

- Edit `styles.css` to change colors (see `:root` variables)
- Edit header text in `index.html` (currently set to Micron Infosys)
- Update company name in footer

## Notes

- No database needed
- Works on any web host (cPanel, shared hosting, etc.)
- Super lightweight and fast
- All data in JavaScript is easy to manage

## Recommended Open Source Usage

For Micron Infosys public repositories:

1. Use `LICENSE-APACHE-2.0.txt` as the project `LICENSE`
2. Include `OPEN-SOURCE-GOVERNANCE-STANDARD-MICRON-INFOSYS.txt` in the project root or docs
3. Keep proprietary/internal projects on `LICENSE-PROPRIETARY-CLIENT-PROJECT.txt` or `LICENSE-PROPRIETARY-INHOUSE.txt`

## Public Citation Workflow

Use this registry as your legal quote-back source:

1. Reference the document by `Citation ID` shown on the card/viewer page.
2. Quote the `Status` value to indicate whether the item is Standard or Non-Standard.
3. Include `Version` and `Effective Date` in contracts, SOWs, proposals, and compliance notes.
4. For assignment/ownership questions, cite `MIS-LIC-INHOUSE-PROPRIETARY`.
