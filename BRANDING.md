# Design System

## Color Palette

| Color Name     | CSS Variable          | Hex Code  | Usage Example                 | WCAG Contrast |
| -------------- | -------------------- | --------- | ----------------------------- | ------------- |
| Primary        | `--color-primary`    | `#2bdcd2` | Main buttons, primary actions | 4.5:1 |
| Primary Dark   | `--color-primary-dark`| `#1ab3aa` | Hover states, active states   | 5.2:1 |
| Secondary      | `--color-secondary`  | `#016968` | Secondary actions, accents    | 7.1:1 |
| Primary Content| `--color-primary-content` | `#171717` | Text on primary backgrounds  | 13.5:1 |
| Neutral 950    | `--color-neutral-950`| `#0a0a0a` | Dark backgrounds             | 21:1 |
| Neutral 900    | `--color-neutral-900`| `#171717` | Code backgrounds             | 18:1 |
| Neutral 800    | `--color-neutral-800`| `#262626` | Card backgrounds             | 16:1 |
| Neutral 700    | `--color-neutral-700`| `#404040` | Disabled button backgrounds  | 11:1 |
| Neutral 400    | `--color-neutral-400`| `#a3a3a3` | Disabled text                | 4.5:1 |
| Neutral 300    | `--color-neutral-300`| `#d4d4d4` | Input borders, dividers      | 3:1 |

## Typography

| Style        | Tailwind Class | Font Size | Line Height | Weight | Letter Spacing | Usage Example |
| ------------ | -------------- | --------- | ----------- | ------ | -------------- | ------------- |
| Display      | `text-5xl sm:text-6xl` | 3rem/3.75rem | 1.1 | 700 | -0.02em | Hero sections |
| Heading 1    | `text-4xl sm:text-5xl` | 2.25rem/3rem | 1.2 | 700 | -0.015em | Main page titles |
| Heading 2    | `text-2xl sm:text-3xl` | 1.5rem/2rem  | 1.3 | 700 | -0.01em | Section headers |
| Heading 3    | `text-xl`      | 1.25rem   | 1.4 | 600 | -0.005em | Subsections |
| Body Large   | `text-lg`      | 1.125rem  | 1.6 | 400 | normal | Lead paragraphs |
| Body Text    | `text-base`    | 1rem      | 1.6 | 400 | normal | Regular content |
| Button Text  | `text-sm`      | 0.875rem  | 1.4 | 600 | 0.01em | Button labels |
| Caption      | `text-xs`      | 0.75rem   | 1.4 | 500 | 0.02em | Helper text |

## Font Family

```css
--font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
```

## Buttons

```jsx
<button className="btn">Default Button</button>
<button className="btn btn-lg">Large Button</button>
<button className="btn btn-outline">Outline Button</button>
<button className="btn btn-secondary">Secondary Button</button>
<button className="btn" disabled>Disabled Button</button>
```

```css
.btn {
  /* Base styles */
  padding: 0.875rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 0.5rem;
  background: var(--color-primary);
  color: var(--color-primary-content);
  transition: all 0.2s ease-in-out;
  
  /* Hover state */
  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
  
  /* Active state */
  &:active {
    transform: translateY(0);
  }
  
  /* Disabled state */
  &:disabled {
    background: var(--color-neutral-700);
    color: var(--color-neutral-400);
    transform: none;
    cursor: not-allowed;
  }
}

/* Button variants */
.btn-lg {
  padding: 1.125rem 1.75rem;
  font-size: 1.125rem;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  
  &:hover {
    background: var(--color-primary);
    color: var(--color-primary-content);
  }
}

.btn-secondary {
  background: var(--color-secondary);
  color: white;
  
  &:hover {
    background: color-mix(in oklab, var(--color-secondary) 85%, black);
  }
}
```

## Form Elements

```jsx
<input className="input" type="text" placeholder="Enter text" />
<textarea className="input" placeholder="Enter long text" />
<select className="input">
  <option>Select an option</option>
</select>
```

```css
.input {
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  letter-spacing: 0.01em;
  border: 2px solid var(--color-neutral-300);
  border-radius: 0.5rem;
  color: var(--color-neutral-900);
  background: white;
  transition: all 0.2s ease-in-out;
  width: 100%;
  
  &::placeholder {
    color: var(--color-neutral-400);
  }
  
  &:hover {
    border-color: color-mix(in oklab, var(--color-neutral-300) 80%, var(--color-primary));
  }
  
  &:focus {
    border-color: var(--color-primary);
    outline: 3px solid color-mix(in oklab, var(--color-primary) 20%, transparent);
    box-shadow: 0 2px 4px color-mix(in oklab, var(--color-primary) 10%, transparent);
  }
  
  &:disabled {
    background: var(--color-neutral-100);
    border-color: var(--color-neutral-300);
    color: var(--color-neutral-400);
    cursor: not-allowed;
  }
}
```

## Spacing Scale

| Size | Tailwind Class | Rem  | Example Usage      |
| ---- | -------------- | ---- | ------------------ |
| xs   | `p-2`          | 0.5  | Icon spacing       |
| sm   | `p-3`          | 0.75 | Form field padding |
| base | `p-4`          | 1    | Container padding  |
| lg   | `p-6`          | 1.5  | Section spacing    |
| xl   | `p-8`          | 2    | Layout spacing     |
