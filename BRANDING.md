# Design System

## Color Palette

| Color Name     | CSS Variable          | Hex Code  | Usage Example                 |
| -------------- | -------------------- | --------- | ----------------------------- |
| Primary        | `--color-primary`    | `#2bdcd2` | Main buttons, primary actions |
| Secondary      | `--color-secondary`  | `#016968` | Secondary actions, accents    |
| Primary Content| `--color-primary-content` | `#171717` | Text on primary backgrounds  |
| Neutral 950    | `--color-neutral-950`| -         | Dark backgrounds             |
| Neutral 900    | `--color-neutral-900`| -         | Code backgrounds             |
| Neutral 700    | `--color-neutral-700`| -         | Disabled button backgrounds  |
| Neutral 400    | `--color-neutral-400`| -         | Disabled text                |
| Neutral 300    | `--color-neutral-300`| -         | Input borders               |

## Typography

| Style        | Tailwind Class | Font Size | Line Height | Weight | Usage Example |
| ------------ | -------------- | --------- | ----------- | ------ | ------------- |
| Heading 1    | `text-4xl sm:text-5xl` | 2.25rem/3rem | - | 700 | Main page titles |
| Heading 2    | `text-2xl sm:text-3xl` | 1.5rem/2rem  | - | 700 | Section headers |
| Heading 3    | `text-xl`      | 1.25rem   | - | 700 | Subsections |
| Body Text    | -             | 1rem      | - | 400 | Regular content |
| Button Text  | -             | 0.875rem  | - | 700 | Button labels |

## Font Family

```css
--font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'
```

## Buttons

```jsx
<button className="btn">Default Button</button>
<button className="btn btn-lg">Large Button</button>
<button className="btn" disabled>Disabled Button</button>
```

```css
.btn {
  /* Base styles */
  padding: 0.875rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.25rem;
  background: var(--color-primary);
  color: var(--color-primary-content);
  
  /* Hover state */
  &:hover {
    background-opacity: 85%;
  }
  
  /* Disabled state */
  &:disabled {
    background: var(--color-neutral-700);
    color: var(--color-neutral-400);
  }
}

/* Large button variant */
.btn-lg {
  padding: 1.125rem 1.5rem;
  font-size: 1.125rem;
}
```

## Form Elements

```jsx
<input className="input" type="text" />
```

```css
.input {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  border: 1px solid var(--color-neutral-300);
  border-radius: 0.125rem;
  color: var(--color-neutral-900);
  
  &:focus {
    border-color: var(--color-primary);
    outline: 3px solid color-mix(in oklab, var(--color-primary) 30%, transparent);
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
