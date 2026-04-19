Signal board - A review queue for an AI-assisted product team. 

## Features

- Search, filter, and sort 25 review items
- A Card-based responsive layout
- Detail modal with metadata and actions like adding notes
  
- Keyboard shortcuts:
  - `Esc` → close modal
  
- Empty state and loading state handling
- Reset filters via logo click

## Tradeoffs & Limitations

- Used a static dataset instead of a mocked API to keep implementation simple
- Did not implement full loading/error states with backend integration
- Local persistence (e.g., saving filters/sort) was skipped to avoid added complexity
- UI built using Bootstrap for speed instead of custom styling

These can be extended easily in a production environment.

## Setup Instructions
```bash
npm install
npm run dev
```

## tech - html, css, bootstrap, react.js.
## AI usage - 
- The code structure is handled and reviewed manually but i used claude to assist with functionality of loading and empty state, debugging, understanding concepts.
