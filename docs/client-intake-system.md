# Client Intake System

P18 establishes the first universal client intake structure for all Showcase Engine industries.

## Scope

The intake system is intentionally separate from the current homepage, detail pages, and template UI. It provides:

- A universal schema in `data/client-intake/client-schema.ts`
- A simple form component in `components/intake/ClientIntakeForm.tsx`
- A documentation baseline for future routing, storage, validation, and submission work

No route is created in this phase.

## Universal Schema

The schema is defined as `ClientIntake` and includes:

```text
clientName
industry
template
logo
companyDescription
services
products
address
city
country
phone
whatsapp
email
website
googleMaps
facebook
instagram
linkedin
languages
images
```

`services`, `products`, `languages`, and `images` are arrays. The other fields are strings.

## Supported Industries

The first form version supports:

```text
Hospitality
Restaurant
Construction
Mining
Import & Wholesale
Logistics
Agriculture
Professional Services
```

## Form Steps

`ClientIntakeForm` is a simple structural form with seven sections:

```text
Step 1: Choose Industry
Step 2: Choose Template
Step 3: Company Information
Step 4: Contact Information
Step 5: Upload Images
Step 6: Language Selection
Step 7: Review
```

Language options:

```text
Chinese
English
Swahili
```

## Image Intake

The form accepts:

- One logo file
- Multiple image files

Later production work can map uploaded images into the Showcase image asset system under:

```text
public/template-assets/{industry}/{template}/clients/{clientSlug}/
```

## Future Integration Notes

Future phases can add:

- A route for the intake form
- Form validation
- Storage or API submission
- Client slug generation
- Direct integration with template image replacement
- Review screen state

The current phase only establishes the reusable schema and simple component.
