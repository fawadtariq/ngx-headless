# @ngx-headless/ui: The Headless UI Library for Angular

[![npm version](https://img.shields.io/npm/v/@ngx-headless/ui.svg)](https://www.npmjs.com/package/@ngx-headless/ui)
[![npm downloads](https://img.shields.io/npm/dm/@ngx-headless/ui.svg)](https://www.npmjs.com/package/@ngx-headless/ui)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/fawadtariq/ngx-headless/blob/master/LICENSE)

Welcome to **@ngx-headless/ui** — a comprehensive library of unstyled, accessible, and composable UI primitives for [Angular](https://angular.dev/).

Inspired by the philosophy behind [headlessui.com](https://headlessui.com), this library brings the same level of **control, flexibility, and accessibility** to Angular developers without imposing any design or styling opinions.

## 🚀 Features

@ngx-headless/ui offers a modern approach to UI development:

- ✅ **Truly Headless Components** – no markup, no styling, just behavior and accessibility
- ✅ **Multiple Selector Support** – use tags, attributes, or custom selectors in templates
- ✅ **Full Styling Freedom** – seamlessly works with Tailwind CSS, Bootstrap, or any custom design system
- ✅ **Accessibility-First Design** – ARIA attributes, keyboard interactions, and best practices built-in
- ✅ **Angular-Native Implementation** – no external dependencies, full DI and Signals support
- ✅ **Tree-Shakable Architecture** – only include what you use, keeping your bundle size small
- ✅ **TypeScript-First** – full type safety and excellent IDE integration

## 🤔 Why @ngx-headless/ui?

Modern UI development demands total control over markup, styling, and behavior. Traditional component libraries are opinionated — they style and structure everything, which often clashes with custom designs or Tailwind-based workflows.

@ngx-headless/ui solves this by providing the behavior and accessibility while giving you complete control over the appearance.

## 🧩 Component Philosophy

Each component in `@ngx-headless/ui` is:

- Built using **standalone Angular components**
- Tree-shakable and small in size
- Designed for **composition** and **template freedom**
- Usable with any CSS framework

### Flexible Selectors

You can write components in multiple ways:

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

## 📦 Installation

```bash
# NPM
npm install @ngx-headless/ui

# Yarn
yarn add @ngx-headless/ui

# PNPM
pnpm add @ngx-headless/ui
```

## 🔍 Available Components

- **Disclosure** - An expandable/collapsible section with header
- **Menu** - A dropdown menu with support for keyboard navigation
- **Dialog** - A modal dialog with focus management
- **Popover** - A popup element that appears relative to another element
- **Switch** - A toggle switch with accessible markup
- **Tabs** - A tabbed interface with keyboard navigation
- **More components coming soon!**

## 📚 Documentation

For detailed documentation, examples, and API references:

- [Official Documentation](https://docs-ui.ngx-headless.com/)
- [ngx-headless.com Website](https://ngx-headless.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Fawad Tariq](https://fawadtariq.dev)

## 🔑 Keywords

angular, headless-ui, ui-components, angular-components, tailwindcss, bootstrap, unstyled-components, accessibility, a11y, typescript, angular-library, web-components, ui-library, frontend, design-system
