# Anime Provider

A Next.js app for exploring anime releases and managing a small catalog. Users can browse featured titles, authenticate with Google, and add or maintain anime listings through protected management tools.

## Setup & Installation
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase credentials**
   Create a `.env.local` file in the project root with your Firebase web config:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Route Summary
| Path | Description | Auth Required |
| --- | --- | --- |
| `/` | Landing page with the hero banner, testimonials, and trending anime cards fetched from the remote API. | No |
| `/Login` | Login screen with Google sign-in to establish a session. | No |
| `/About` | Auth-protected gallery of all anime entries with search and filtering controls. | Yes |
| `/Add-Product` | Protected form for creating a new anime entry, posting data to the backend service. | Yes |
| `/Manage-products` | Protected dashboard that lists every anime item with management actions. | Yes |

## Layouts & Components
- Layouts
  - `src/app/layout.js`

- Components
  - `src/app/Component/ClientLayout.jsx`
  - `src/app/Component/Dropdown.jsx`
  - `src/app/Component/ManageCards.jsx`
  - `src/app/Component/ProtectedRoute.jsx`
  - `src/app/Component/ViewBtn.jsx`
  - `src/app/Component/DeleteBtn.jsx`
  - `src/app/Component/Footer.jsx`
  - `src/app/Component/Navbar.jsx`
  - `src/app/Component/SearchBar.jsx`
  - `src/app/Component/Testimonials.jsx`
  - `src/app/Component/cardAll.jsx`
  - `src/app/Component/Sidebar/EffectCard.jsx`

## Available Scripts
- `npm run dev` – Start the development server.
- `npm run build` – Create an optimized production build.
- `npm start` – Run the production build locally.
- `npm run lint` – Lint the codebase with ESLint.
