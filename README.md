# Movie Explorer - React App

A modern movie browsing application built with React and powered by The Movie Database (TMDB) API.

## Features

- 🎬 Browse popular movies from TMDB
- 🔍 Search movies by title
- 🔄 Sort movies by release date or rating (ascending/descending)
- 📄 Pagination with Previous/Next navigation
- 📱 Fully responsive design
- ⚡ Fast and modern UI with Vite

## Prerequisites

Before running this project, make sure you have installed:

- **Node.js** (version 16 or later)
- **npm** (comes with Node.js)

To verify installation, run:
```bash
node -v
npm -v
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get your TMDB API Key:**
   - Visit [TMDB Website](https://www.themoviedb.org/)
   - Sign up for a free account
   - Go to Settings > API > Request an API Key
   - Choose "Developer" option
   - Fill in the required information
   - Copy your API Key

3. **Configure API Key:**
   - Open `src/services/tmdbApi.js`
   - Replace the `API_KEY` value with your actual TMDB API key:
   ```javascript
   const API_KEY = 'your_api_key_here';
   ```

## Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
movie-explorer-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header with search and sort
│   │   ├── MovieCard.jsx       # Individual movie card
│   │   ├── MovieGrid.jsx       # Grid of movies
│   │   └── Pagination.jsx      # Pagination controls
│   ├── services/
│   │   └── tmdbApi.js         # TMDB API integration
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
└── README.md                   # This file
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TMDB API** - Movie data
- **CSS3** - Styling and responsive design

## Features Explanation

### Movie Display
- Fetches and displays 20 movies per page
- Shows movie poster, title, release date, and rating
- Responsive grid layout (5 columns on large screens, adaptive on smaller screens)

### Search Functionality
- Real-time search as you type
- Searches movies by title
- Automatically resets to page 1 on new search

### Sorting
- Sort by Release Date (Ascending/Descending)
- Sort by Rating (Ascending/Descending)
- Maintains current page when sorting

### Pagination
- Navigate through pages using Previous/Next buttons
- Current page number display
- Disabled buttons when at first/last page
- Smooth scroll to top on page change

## API Key Security Note

⚠️ **Important:** The API key in this project is hardcoded for simplicity. For production deployments:

1. Use environment variables
2. Never commit API keys to public repositories
3. Consider using a backend proxy to hide API keys
4. Rotate your API key if it's been exposed

## Deployment

This app can be deployed to various platforms:

- **Netlify:** `npm run build` → Deploy `dist` folder
- **Vercel:** Connect GitHub repo → Auto deploy
- **GitHub Pages:** Use `gh-pages` package
- **Railway/Render:** Connect repo and deploy

## License

This project is created for educational purposes (CPSC 349 - Web Front-End Engineering).

## Credits

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Built with React and Vite

