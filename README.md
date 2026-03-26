# Todo List App

A modern todo list application built with React 19, Vite, and Material-UI.

## Features

- Create, view, and manage todo items
- Detailed todo information display
- Fast development with Vite HMR
- Material-UI components for consistent design
- Emotion styling support

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling
- **ESLint** - Code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── todo-item/       # Individual todo item component
│   └── todo-details/    # Todo details view component
├── App.jsx              # Main app component
├── main.jsx             # React entry point
├── index.css            # Global styles
└── style.module.css     # CSS modules
```

## License

MIT
