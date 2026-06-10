# Showcase Image Asset System

This project uses a shared image asset convention for Showcase Engine industries, templates, and future client-specific replacements.

## Folder Structure

All assets live under:

```text
public/template-assets/
```

Each industry has its own folder:

```text
public/template-assets/
  hospitality/
  restaurant/
  construction/
  mining/
  import-wholesale/
  logistics/
  agriculture/
  professional-services/
```

Each industry contains template folders. Every template folder has this structure:

```text
template-name/
  default/
    hero.jpg
    about.jpg
    feature-1.jpg
    feature-2.jpg
    feature-3.jpg
    service-1.jpg
    service-2.jpg
    service-3.jpg
    contact.jpg
  clients/
```

Neutral placeholders live here:

```text
public/template-assets/_placeholder/
  hero.jpg
  about.jpg
  feature-1.jpg
  feature-2.jpg
  feature-3.jpg
  service-1.jpg
  service-2.jpg
  service-3.jpg
  contact.jpg
```

## Lookup Rule

Use `getShowcaseImage` from:

```text
lib/getShowcaseImage.ts
```

Call it with:

```ts
getShowcaseImage({
  industry: "hospitality",
  template: "luxury-hotel",
  clientSlug: "client-name",
  imageName: "hero.jpg",
});
```

The function returns:

```ts
{
  src: string;
  imageSourceStatus: "client" | "default" | "placeholder";
}
```

## Client Image Replacement Rule

Client assets override default template assets when a matching file exists:

```text
public/template-assets/{industry}/{template}/clients/{clientSlug}/{imageName}
```

Example:

```text
public/template-assets/hospitality/luxury-hotel/clients/acme-hotel/hero.jpg
```

If that file exists, `getShowcaseImage` returns it with:

```text
imageSourceStatus: client
```

## Default Image Fallback Rule

If no client image exists, the resolver falls back to:

```text
public/template-assets/{industry}/{template}/default/{imageName}
```

Example:

```text
public/template-assets/hospitality/luxury-hotel/default/hero.jpg
```

If that file exists, `getShowcaseImage` returns it with:

```text
imageSourceStatus: default
```

## Placeholder Fallback Rule

If neither a client image nor a default template image exists, the resolver returns:

```text
public/template-assets/_placeholder/{imageName}
```

with:

```text
imageSourceStatus: placeholder
```

## Add A New Client

1. Choose the industry folder.
2. Choose the template folder.
3. Create a client folder under `clients/`.
4. Add only the images that should replace the defaults.

Example:

```text
public/template-assets/logistics/freight-forwarder/clients/dar-freight/
  hero.jpg
  service-1.jpg
```

Any missing client images automatically fall back to the template defaults.

## Add A New Template

1. Add the template folder under the correct industry.
2. Create `default/` and `clients/` folders.
3. Add the nine default image names under `default/`.
4. Add a record in `data/templates.ts`.
5. Use the template folder name when resolving images.

Example:

```text
public/template-assets/agriculture/coffee-export/
  default/
  clients/
```

Then add the matching template record to the template database.
