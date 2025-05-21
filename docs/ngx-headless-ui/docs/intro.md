---
title: Getting Started
description: Introduction to @ngx-headless/ui and its philosophy.
sidebar_label: Getting Started
sidebar_position: 0
---

# The Headless UI library Angular always deserved.

Welcome to **@ngx-headless/ui** — a library of unstyled, accessible, and composable UI primitives for Angular.

Inspired by the philosophy behind [headlessui.com](https://headlessui.com), this library aims to bring the same level of **control, flexibility, and accessibility** to Angular developers without imposing any design or styling opinions.

---

## Why @ngx-headless/ui?

Modern UI development often requires total control over markup, styling, and behavior. Traditional component libraries are opinionated — they style and structure everything, which often clashes with custom designs or Tailwind-based workflows.

@ngx-headless/ui offers:

- ✅ **Headless components** – no markup, no styling, just behavior and accessibility
- ✅ **Multiple selector support** – use tags, attributes, or custom selectors in templates
- ✅ **Full styling freedom** – apply Tailwind, Bootstrap, or your custom design system
- ✅ **Accessibility-first** – ARIA attributes, keyboard interactions, and best practices
- ✅ **Angular-native** – no external dependencies, full DI and Signals support

---

## Component Philosophy

Each component in `@ngx-headless/ui` is:

- Built using **standalone Angular components**
- Tree-shakable and small in size
- Designed for **composition** and **template freedom**
- Usable with any CSS framework

You can write:

```html
<Disclosure>
  ...
</Disclosure>

<!-- or -->

<div ngxDisclosure>
  ...
</div>

<!-- or -->

<ngx-headlessui-disclosure>
  ...
</ngx-headlessui-disclosure>
```

All three work out of the box because components support **multiple selectors**:

```ts
selector: 'Disclosure, [ngxDisclosure], ngx-headlessui-disclosure'
```

---

## Installation

```bash
npm install @ngx-headless/ui
```

---

## What's Next?

Check out the available components starting with [`Disclosure →`](./components/disclosure). More components will follow.

---

## License

MIT © @ngx-headless/ui

