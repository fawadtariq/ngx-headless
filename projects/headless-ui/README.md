
# @ngx-headless/ui

A **Headless UI Component Library** for Angular — fully standalone, accessible, and style-agnostic primitives inspired by [Headless UI](https://headlessui.com).

## 🚀 Packages

This monorepo includes:

- **`@ngx-headless/ui`**  
  Angular headless UI component library published on [npm](https://www.npmjs.com/package/@ngx-headless/ui).

- **Demo App**  
  Interactive Angular app for showcasing library usage.

- **Documentation**  
  Built with Docusaurus, supports versioned docs with embedded code samples and live demos.

---

## 📦 Installation

```bash
npm install @ngx-headless/ui
```

Or with PNPM:

```bash
pnpm add @ngx-headless/ui
```

---

## 🛠️ Usage

Each component is fully style-agnostic and follows Angular’s recommended patterns:
```typescript
import { DisclosureModule } from '@ngx-headless/ui';

@NgModule({
  imports: [DisclosureModule],
})
export class MyModule {}
```

Refer to the [documentation site](https://ngx-headless.com) for examples and API details.

---

## 📝 Development

### 🗂️ Monorepo Structure

```
/
├── apps/demo/             # Demo Angular app
├── docs/                  # Docusaurus site
├── projects/headless-ui/  # Library package
├── pnpm-workspace.yaml
└── package.json           # Root package
```

### 🔧 Scripts

From the root:
- \`pnpm install\` — Install dependencies across all workspaces.
- \`pnpm build:lib\` — Build the headless UI library.
- \`pnpm build:docs\` — Build the Docusaurus site.

Inside \`docs/\`:
- \`pnpm docusaurus docs:version <version>\` — Create a new docs version.

---

## 📄 License

MIT © [Fawad Tariq](https://fawadtariq.dev)

---
