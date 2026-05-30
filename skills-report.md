# Repository Skills Intelligence Report

Generated on: 2026-05-29

Analysis scope: `C:\Users\dheer\OneDrive\Desktop\web dev\cohort\code_practice`

Ignored during analysis: `node_modules`, `.git`, `dist`, `build`, `coverage`, `.next`, `vendor`, minified assets, and generated dependency artifacts unless they contributed unique evidence.

---

# Executive Summary

## Overall Learning Stage

This repository shows an early-to-intermediate full-stack JavaScript learning journey. The strongest evidence is around Node.js, Express.js, REST-style APIs, JWT authentication, React fundamentals, React hooks, client-server communication, MongoDB/Mongoose basics, and Recoil state management. The learning appears course-like and progressive: each numbered folder introduces or reinforces one concept before the next folder combines it with a larger application pattern.

The current stage is best described as:

- Backend: practical beginner moving toward intermediate.
- Frontend: practical beginner moving toward intermediate React.
- Database: introduced and applied, but not yet deeply reinforced.
- Architecture: clear movement from single-file scripts to modular route/middleware/model separation.
- Production readiness: not yet evidenced. Security, testing, CI/CD, deployment, and robust error handling are the largest gaps.

## Estimated Course Progression

The repository strongly suggests this progression:

1. Node.js CLI and filesystem basics.
2. Express.js HTTP server basics.
3. REST-like CRUD with in-memory data.
4. Middleware and request logging.
5. Browser API calls with Fetch/Axios.
6. Frontend-backend communication and CORS concepts.
7. JWT authentication with in-memory users.
8. Auth middleware and token storage in browser localStorage.
9. Todo CRUD with authorization.
10. MongoDB/Mongoose, bcrypt, and Zod validation.
11. Larger backend architecture with routers, middlewares, schemas, env config, and role-based admin/user APIs.
12. React with Vite, JSX, components, props, state, effects, cleanup, and async fetches.
13. React Router, nested layouts, links, navigation, and 404 handling.
14. useRef, timers, DOM focus, and custom hooks.
15. Context API and cross-component state.
16. Recoil atoms, selectors, atomFamily, selectorFamily, async selectors, and loadables.
17. Tailwind CSS and utility-first UI experiments.

## General Strengths

- Repeated hands-on Express practice across 10 backend projects.
- Strong progression through authentication: raw JWT, auth middleware, localStorage token usage, user-scoped todos, and admin/user separation.
- Repeated React practice across 16 Vite React apps plus one static frontend.
- Good conceptual isolation: separate projects for middleware, useEffect cleanup, useRef, Context API, custom hooks, routing, Recoil selectors, Recoil async selectors, and Tailwind.
- Evidence of self-review through TODOs and notes, especially in `13_course_selling\README.md` and route comments.
- Comfort with APIs and JSON: many examples using request bodies, params, headers, and JSON responses.

## General Weaknesses

- No tests or test framework evidence.
- No CI/CD, Docker, deployment config, or production infrastructure evidence.
- Multiple hardcoded secrets and one committed `.env` file. The report intentionally does not copy secret values.
- Error handling is inconsistent; several async routes do not use try/catch.
- Validation is introduced with Zod but only applied in one signup path.
- Password hashing appears in `12_todo_mongoDB`, but plaintext passwords remain in several earlier/later auth examples.
- Some code has correctness issues: undeclared variables, duplicate exports, unused state, inconsistent response field names, and a broken debounce hook.
- No TypeScript implementation evidence despite template READMEs mentioning TypeScript.

## Overall Assessment

This is a serious practice repository, not just copied boilerplate. It shows repeated implementation of core full-stack concepts and a visible learning progression. The owner is ready to build beginner and many intermediate full-stack projects using React, Express, MongoDB, JWT, and Tailwind. For portfolio or team readiness, the next step is to convert these isolated drills into polished applications with validation, security hygiene, tests, reliable error handling, env management, and deployable structure.

---

# Repository Statistics

## Scan Totals

| Metric | Count | Notes |
|---|---:|---|
| Top-level numbered folders | 24 | `01_...` through `25_...`, with no `02_...` folder present |
| Actual projects discovered | 28 | 27 package-managed projects plus one static HTML/JS project |
| Non-generated files scanned | 325 | Excludes dependency/build artifacts |
| Implementation files analyzed | 169 | `.js`, `.jsx`, `.html`, `.css` |
| Folders analyzed | 114 | Excludes ignored generated/dependency folders |
| `package.json` files | 27 | Independent npm projects |
| Markdown files | 18 | Mostly Vite READMEs plus custom backend notes |
| `.js` files | 59 | Node, config, hooks, atoms, browser scripts |
| `.jsx` files | 58 | React components/apps |
| `.html` files | 20 | Static pages and Vite entry pages |
| `.css` files | 32 | Vite CSS and Tailwind import |

## Project Classification

| Category | Count | Evidence |
|---|---:|---|
| Frontend-focused projects | 17 | `05_posts_fetch_API`, React/Vite projects `14` through `25`, including 5 subprojects under `24_fe_be` |
| Backend/API projects | 10 | Express projects `03`, `04`, `06`, `07`, `08`, `09`, `10`, `11`, `12`, `13` |
| Full-stack local projects | 2 | `09_auth_middleware`, `10_calc_cors_FE_BE` include both Express and browser frontend |
| Database-related projects | 2 | `12_todo_mongoDB`, `13_course_selling` |
| CLI projects | 1 | `01_txt_file_cli` |
| State-management focused React projects | 8 | Context/Recoil/custom hooks across `20`, `21`, `22`, `23`, and `24_fe_be` |

## Main Languages Used

- JavaScript: dominant language across CLI, backend, browser scripts, React, hooks, and Recoil.
- JSX: heavily used in React/Vite projects.
- HTML: used in static pages, served frontend pages, and Vite entry files.
- CSS: Vite CSS files plus Tailwind import and utility classes.
- JSON: package manifests and lockfiles.
- Markdown: project notes and generated template docs.

No implemented TypeScript or SQL source files were found.

## Most Common Libraries and Frameworks

| Package | Projects Installed In | Evidence |
|---|---:|---|
| React / React DOM | 16 | Vite React apps from `14` through `25` |
| Vite | 16 | React project `vite.config.js` files and package scripts |
| ESLint / React Hooks plugins | 16 | React project package manifests and `eslint.config.js` files |
| Express | 10 | Backend projects `03` through `13` |
| Recoil | 7 | `22_recoil`, `23_recoil_In_Depth`, and five `24_fe_be` subprojects |
| jsonwebtoken | 5 | `08`, `09`, `11`, `12`, `13` |
| Axios | 3 npm projects plus CDN usage | `24_fe_be` packages, `05`, `09`, `10` HTML/browser usage |
| Mongoose | 2 | `12_todo_mongoDB`, `13_course_selling` |
| Nodemon | 2 | `11_To_Do_Auth`, `13_course_selling` |
| Commander | 1 | `01_txt_file_cli` |
| Zod | 1 | `12_todo_mongoDB` |
| bcrypt | 1 | `12_todo_mongoDB` |
| dotenv | 1 | `13_course_selling` |
| react-router-dom | 1 | `18_routing` |
| Tailwind CSS | 1 | `25_tailwind_css` |
| cors | 1 | `10_calc_cors_FE_BE`, installed and documented; actual middleware is commented |

## Most Frequently Used Concepts

Pattern scan evidence:

| Concept Pattern | Hits |
|---|---:|
| `useState` | 50 |
| `useEffect` | 28 |
| `useRef` | 10 |
| Express references | 54 |
| `app.get` | 19 |
| `app.post` | 17 |
| `jwt.verify` | 7 |
| `jwt.sign` | 6 |
| Mongoose references | 20 |
| Recoil root/value/state references | 50+ combined |
| `atom(` | 10 |
| `selector(` | 5 |
| `atomFamily` | 7 |
| `selectorFamily` | 5 |
| Axios references | 21 |
| Fetch calls | 4 |
| React Router route/link/navigation references | 17+ combined |

---

# Learning Timeline Reconstruction

## Phase 1: Node.js and CLI Fundamentals

Evidence:

- `01_txt_file_cli\index.js` imports `commander`, `fs`, defines `countWords` and `countLines`, reads files asynchronously with callbacks, and parses CLI args.

Inferred learning:

- Node runtime basics.
- CommonJS `require`.
- Filesystem reads.
- CLI command parsing.
- Callback-style async programming.
- Basic string processing.

Level: introductory but implemented.

## Phase 2: Express and HTTP Basics

Evidence:

- `03_hospital_backend_expressHTTP_CRUD\index.js` creates an Express app, uses `express.json`, implements GET/POST/PUT/DELETE routes, returns JSON, and mutates in-memory arrays.
- `06_http calc\app.js` implements route params such as `/sum/:firstArg/:secondArg`.

Inferred learning:

- HTTP methods.
- Route handlers.
- Request params and request bodies.
- JSON responses.
- In-memory state.
- Status codes introduced through `res.status(411)` and later `403`, `401`, `404`.

Level: practical beginner.

## Phase 3: Middleware, Logging, and Request Flow

Evidence:

- `04_ticket_checker_middlewares\app.js` implements `isOldEnoughMiddleware(req,res,next)`.
- `07_middlewares_prac_01\index.js` implements `logger`, `counter`, `app.use(logger)`, and route-specific middleware.

Inferred learning:

- Middleware composition.
- `next()`.
- Global middleware vs route-level middleware.
- Request logging.
- Simple counters and shared process state.

Level: practical beginner, repeated.

## Phase 4: Browser Fetch/Axios and DOM Manipulation

Evidence:

- `05_posts_fetch_API\app.js` uses Axios to fetch `jsonplaceholder` data and assigns `innerHTML`.
- `05_posts_fetch_API\app.js` also contains commented Fetch API practice.
- `10_calc_cors_FE_BE\public\index.html` reads input values with `document.getElementById`, sends Axios POST requests, and updates result divs.

Inferred learning:

- Async/await in browser JavaScript.
- Fetch/Axios comparison.
- DOM selection and mutation.
- API-driven UI updates.

Level: introductory to practical.

## Phase 5: Frontend-Backend Communication and CORS

Evidence:

- `10_calc_cors_FE_BE\index.js` serves `public/index.html` with `res.sendFile` and exposes `/sum`, `/sub`, `/mul`.
- `10_calc_cors_FE_BE\readme.md` explains same-origin vs cross-origin CORS behavior and shows `cors` middleware usage.
- `10_calc_cors_FE_BE\index.js` has `cors` import and `app.use(cors())` commented out.

Inferred learning:

- Same-origin frontend served from backend.
- Browser CORS restrictions.
- JSON request body parsing.
- Client-to-server POST requests.

Level: practical beginner.

## Phase 6: Authentication with JWT

Evidence:

- `08_auth_express_app\index.js` implements `/signup`, `/signin`, and `/me` with `jwt.sign` and `jwt.verify`.
- `09_auth_middleware\index.js` extracts auth into middleware and adds try/catch around token verification.
- `09_auth_middleware\public\index.html` stores tokens in `localStorage`.
- `11_To_Do_Auth\index.js` uses auth middleware for user-scoped todos.

Inferred learning:

- Token-based authentication.
- Protected routes.
- Headers.
- Local token storage.
- User-specific resources.
- Basic authorization.

Level: practical and repeated.

## Phase 7: MongoDB, Mongoose, Hashing, and Validation

Evidence:

- `12_todo_mongoDB\db.js` defines Mongoose schemas/models for users and todos.
- `12_todo_mongoDB\index.js` connects to MongoDB, uses `bcrypt.hash`, `bcrypt.compare`, `z.object`, `safeParse`, `UserModel.create`, `findOne`, and `TodoModel.find`.
- `13_course_selling\db.js` defines user, admin, course, and purchase schemas with ObjectId relationships.

Inferred learning:

- MongoDB document modeling.
- Mongoose schemas and models.
- Unique indexes.
- ObjectId relationships.
- Password hashing.
- Basic input validation.

Level: introduced and applied, but needs reinforcement.

## Phase 8: Modular Backend Architecture

Evidence:

- `13_course_selling\index.js` mounts routers at `/user`, `/course`, `/admin`.
- `13_course_selling\routes\user.js`, `routes\admin.js`, `routes\course.js` separate route concerns.
- `13_course_selling\middlewares\user.js` and `middlewares\admin.js` separate authorization logic.
- `13_course_selling\config.js` centralizes env-derived config.

Inferred learning:

- Router-based Express architecture.
- Role-based route separation.
- Middleware modules.
- Environment config with dotenv.
- Larger API domain modeling.

Level: intermediate-introductory.

## Phase 9: React Fundamentals

Evidence:

- `14_react_usestate&useeffect\src\App.jsx` practices `useState`, `useEffect`, component mount/unmount, interval cleanup, counters, and conditional rendering.
- `16_react_practice\src\App.jsx`, `post.jsx`, `follow.jsx` map arrays into components, pass props, and build reusable UI pieces.
- `17_mini_Concepts_React\src\card.jsx` uses `children`.

Inferred learning:

- JSX.
- Components.
- Props.
- State.
- Conditional rendering.
- Lists/maps.
- Event handlers.
- Basic component composition.

Level: practical and repeated.

## Phase 10: Effects, Async UI, Timers, and Cleanup

Evidence:

- `15_useEffect\useEffect_practice\src\App.jsx` demonstrates dependency arrays and cleanup.
- `16_react_practice\src\todo.jsx` fetches JSONPlaceholder data when tab changes.
- `16_react_practice\src\clock.jsx` and `19_useRef\src\Clock.jsx` manage intervals and cleanup.
- `21_Custom_Hooks\hooks\useFetch.js` refetches data on URL changes and on a 10-second interval.

Inferred learning:

- Effect lifecycle.
- Cleanup functions.
- Dependency arrays.
- Fetching data based on state.
- Loading states.

Level: practical beginner to intermediate.

## Phase 11: Routing

Evidence:

- `18_routing\src\App.jsx` uses `BrowserRouter`, `Routes`, nested `Route`, and wildcard route.
- `18_routing\src\Layout.jsx` uses `Outlet`.
- `18_routing\src\Header.jsx` and `Footer.jsx` use `Link`.
- `18_routing\src\Johnbury.jsx` and `ErrorPage.jsx` use `useNavigate`.

Inferred learning:

- Client-side routing.
- Nested layout routes.
- 404 pages.
- Declarative links and programmatic navigation.

Level: introduced and implemented.

## Phase 12: Advanced React State Patterns

Evidence:

- `20_state_experiments\src\Components.jsx` uses `createContext`, `useContext`, provider components, and child state sharing.
- `21_Custom_Hooks\src\Counter.jsx` defines a custom `useCounter`.
- `21_Custom_Hooks\hooks\usePrev.js`, `useFetch.js`, and `useDeBounce` demonstrate custom hook experiments.
- `22_recoil`, `23_recoil_In_Depth`, and `24_fe_be` subprojects use Recoil atoms, selectors, atom families, selector families, async defaults, and loadables.

Inferred learning:

- Context API.
- Custom hooks.
- Reusable state logic.
- Recoil global state.
- Derived state.
- Async state loading.

Level: intermediate-introductory with strong repetition in Recoil.

## Phase 13: Tailwind CSS and UI Utility Styling

Evidence:

- `25_tailwind_css\src\index.css` imports Tailwind.
- `25_tailwind_css\vite.config.js` includes `@tailwindcss/vite`.
- `25_tailwind_css\tailwind.config.js` defines content globs and custom color extension.
- `25_tailwind_css\src\Intro.jsx`, `Age.jsx`, `components\Otp.jsx`, `Input.jsx`, and `button.jsx` use utility classes.

Inferred learning:

- Utility-first CSS.
- Tailwind responsive classes.
- Tailwind grid/flex classes.
- Custom Tailwind theme colors.
- Reusable styled components.

Level: introduced and practiced.

---

# Languages Learned

## JavaScript

Evidence:

- CLI: `01_txt_file_cli\index.js`
- Express APIs: `03_hospital_backend_expressHTTP_CRUD\index.js`, `08_auth_express_app\index.js`, `12_todo_mongoDB\index.js`, `13_course_selling\index.js`
- Browser scripts: `05_posts_fetch_API\app.js`, `10_calc_cors_FE_BE\public\index.html`, `09_auth_middleware\public\index.html`
- React/Recoil: all `src\App.jsx`, `hooks`, `atoms.js`, and component files.

Usage examples:

- CommonJS modules: `require("express")`, `require("jsonwebtoken")`, `module.exports`.
- ESM imports: `import { useState } from "react"`, `import { atom } from "recoil"`.
- Async code: `async/await`, callbacks, promises, `fetch`, `axios`.
- Array operations: `map`, `filter`, manual loops.
- Browser APIs: `document.getElementById`, `localStorage`.

Skill observations:

- JavaScript is the primary working language.
- The repo shows transition from callback-based Node to async/await and React functional programming.
- More practice is needed with variable declaration discipline, error handling, and avoiding global/implicit variables.

Level: repeated practical use.

## JSX

Evidence:

- React components across `14_react_usestate&useeffect`, `16_react_practice`, `18_routing`, `20_state_experiments`, `21_Custom_Hooks`, `22_recoil`, `23_recoil_In_Depth`, `24_fe_be`, and `25_tailwind_css`.

Usage examples:

- Component composition: `16_react_practice\src\App.jsx`
- Props: `16_react_practice\src\post.jsx`, `17_mini_Concepts_React\src\hi.jsx`
- Children: `17_mini_Concepts_React\src\card.jsx`
- Conditional rendering: `16_react_practice\src\todo.jsx`, `24_fe_be\loadables\src\App.jsx`

Skill observations:

- JSX is used frequently and practically.
- Styling is mostly inline CSS at first, then Tailwind utilities later.

Level: repeated practical use.

## HTML

Evidence:

- Static frontend: `05_posts_fetch_API\index.html`
- Auth frontend: `09_auth_middleware\public\index.html`
- Calculator frontend: `10_calc_cors_FE_BE\public\index.html`
- Vite entry files: all React projects have `index.html`.

Usage examples:

- Inputs/buttons and inline scripts in `09_auth_middleware\public\index.html` and `10_calc_cors_FE_BE\public\index.html`.
- Axios CDN script tags.
- Root div mounting for Vite React apps.

Skill observations:

- HTML is used for simple forms and script-driven interactions.
- No advanced accessibility or semantic structure evidence.

Level: practical beginner.

## CSS

Evidence:

- Vite CSS files across React projects.
- Inline style-heavy React components: `16_react_practice\src\post.jsx`, `18_routing\src\Header.jsx`, `ErrorPage.jsx`.
- Tailwind utility classes in `25_tailwind_css`.

Usage examples:

- Inline layout styles.
- Button/card styling.
- Tailwind responsive grid and flex classes.

Skill observations:

- CSS is mostly used for basic visual layout and practice UI.
- Tailwind indicates newer utility-first styling exploration.
- No advanced CSS architecture, design system, or accessibility styling evidence.

Level: introductory to practical.

## JSON

Evidence:

- 27 `package.json` files.
- API request/response bodies across Express projects.
- JSONPlaceholder and remote API handling.

Skill observations:

- Strong everyday use through package management and API payloads.

Level: practical.

## Markdown

Evidence:

- `03_hospital_backend_expressHTTP_CRUD\README.md`
- `10_calc_cors_FE_BE\readme.md`
- `13_course_selling\README.md`
- `13_course_selling\notes.md`
- Vite template READMEs.

Skill observations:

- Documentation and learning notes are present.
- The strongest custom documentation is in CORS and course-selling backend notes.

Level: introductory practical documentation.

## SQL

Evidence:

- No SQL files, SQL schemas, query code, or SQL database config found.

Skill observation:

- SQL should not be claimed from this repository.

Level: not evidenced.

## TypeScript

Evidence:

- `@types/react` and `@types/react-dom` appear as dev dependencies in React templates.
- Vite READMEs mention TypeScript templates.
- No `.ts` or `.tsx` implementation files found.

Skill observation:

- TypeScript is not evidenced as a learned/used implementation language.

Level: not evidenced beyond dependency/template exposure.

---

# Frontend Skills

| Skill | Level | Evidence | Observations |
|---|---|---|---|
| DOM manipulation | Practical beginner | `05_posts_fetch_API\app.js`, `09_auth_middleware\public\index.html`, `10_calc_cors_FE_BE\public\index.html` | Uses `document.getElementById`, reads inputs, writes `innerHTML`. |
| Event handling | Repeated practical | HTML `onclick` handlers in `09`, `10`; React `onClick`, `onChange`, `onKeyUp` in many components | Demonstrated in auth forms, calculators, counters, tabs, OTP input, follow toggles. |
| Form/input handling | Practical beginner | `09_auth_middleware\public\index.html`, `10_calc_cors_FE_BE\public\index.html`, `25_tailwind_css\src\components\Otp.jsx` | Inputs are read and submitted, but full validation UX is limited. |
| Async browser programming | Repeated practical | `05_posts_fetch_API\app.js`, `10_calc_cors_FE_BE\public\index.html`, `16_react_practice\src\todo.jsx`, `21_Custom_Hooks\hooks\useFetch.js` | Uses Axios and Fetch with async/await or promise chains. |
| Axios | Practical | CDN in `05`, `09`, `10`; npm in `24_fe_be` async projects | Used for external APIs and local backend calls. |
| Fetch API | Practical beginner | Commented and active usage in `05_posts_fetch_API\app.js`, `16_react_practice\src\todo.jsx`, `21_Custom_Hooks\hooks\useFetch.js` | Fetch is practiced but Axios appears more often. |
| Local storage | Introduced/practical | `09_auth_middleware\public\index.html` | Stores JWT token, retrieves it for `/me`, removes it on logout. |
| Session storage | Not evidenced | None | No sessionStorage usage found. |
| React setup with Vite | Repeated practical | 16 Vite React projects with `vite.config.js`, `main.jsx`, `index.html` | Very repeated scaffold usage. |
| JSX components | Repeated practical | `16_react_practice\src\post.jsx`, `17_mini_Concepts_React\src\card.jsx`, many `App.jsx` files | Component-driven UI is a major theme. |
| Props | Practical | `16_react_practice\src\post.jsx`, `17_mini_Concepts_React\src\hi.jsx`, `21_Custom_Hooks\src\Counter.jsx` | Props are used for data and default values. |
| Children composition | Introduced | `17_mini_Concepts_React\src\card.jsx`, `20_state_experiments\src\Components.jsx` | `children` is practiced in card and provider patterns. |
| useState | Repeated practical | 50 pattern hits across React projects | Strongest React hook evidence. Used for counters, toggles, arrays, tabs, forms, timers. |
| useEffect | Repeated practical | 28 pattern hits | Used for lifecycle, dependency changes, timers, fetching, cleanup. |
| Effect cleanup | Practical | `14_react_usestate&useeffect\src\App.jsx`, `15_useEffect\useEffect_practice\src\App.jsx`, `16_react_practice\src\clock.jsx`, `21_Custom_Hooks\hooks\useFetch.js` | Demonstrates cleanup for intervals and dependency-driven effects. |
| useRef | Practical | `19_useRef\src\Clock.jsx`, `19_useRef\src\Signup.jsx`, `21_Custom_Hooks\hooks\usePrev.js`, `25_tailwind_css\src\components\Otp.jsx` | Used for timer ids, input focus, previous values, and OTP focus arrays. |
| useMemo | Introduced | `23_recoil_In_Depth\src\Navbar.jsx`, `24_fe_be\7.4-easy-bits\src\App.jsx` | Imported/commented as comparison to Recoil selectors. |
| useCallback | Not evidenced | None | No useCallback implementation found. |
| Context API | Practical intro | `20_state_experiments\src\Components.jsx` | Provider and consumers share bulb state without prop drilling. |
| Custom hooks | Practical intro | `21_Custom_Hooks\src\Counter.jsx`, `hooks\useFetch.js`, `hooks\usePrev.js`, `hooks\useDeBounce` | Good concept exposure; debounce hook has a bug referencing `update` instead of the argument. |
| Routing | Introduced/practical | `18_routing\src\App.jsx`, `Layout.jsx`, `Header.jsx`, `Johnbury.jsx`, `ErrorPage.jsx` | Uses nested routes, outlet, links, navigation, and wildcard 404. |
| Protected frontend routes | Not evidenced | None | Auth exists on backend, but no React protected route implementation found. |
| Conditional rendering | Repeated practical | `14`, `16`, `20`, `24_fe_be\loadables`, `25_tailwind_css` | Used for toggles, loading states, states, and optional content. |
| List rendering | Practical | `16_react_practice\src\App.jsx` maps posts; `24_fe_be\atom-family` renders todo ids manually | Array mapping is used at least once meaningfully. |
| Loading states | Practical intro | `16_react_practice\src\todo.jsx`, `21_Custom_Hooks\hooks\useFetch.js`, `24_fe_be\loadables\src\App.jsx` | Has explicit loading branches and loadable state handling. |
| Error states | Introduced | `24_fe_be\loadables\src\App.jsx` | Handles `hasError` for Recoil loadables. Broader frontend error handling not widespread. |
| Responsive design | Introductory | `25_tailwind_css\src\Intro.jsx` uses `sm:grid-cols-8` and `grid-cols-1` | Present but limited. |
| Tailwind CSS | Introductory/practical | `25_tailwind_css\src\index.css`, `vite.config.js`, `tailwind.config.js`, `Intro.jsx`, `Age.jsx`, `Otp.jsx` | Uses utilities, custom colors, grid/flex, hover classes. |
| Recoil atoms/selectors | Repeated practical | `22_recoil\store\atoms\counter.js`, `23_recoil_In_Depth\src\atoms.js`, `24_fe_be\7.4-easy-bits\src\atoms.js` | Repeated global and derived state practice. |
| Recoil atomFamily/selectorFamily | Practical intro | `24_fe_be\atom-family\src\atoms.js`, `selector-family\src\atoms.js`, `loadables\src\atoms.js` | Good exposure to parameterized state and async selectors. |
| Recoil loadables | Introduced | `24_fe_be\loadables\src\App.jsx` | Handles loading/value/error branches. |
| Performance optimization | Introductory only | useMemo imports/comments in Recoil projects | No measured optimization or memoized components; mostly conceptual comparison. |

---

# Backend Skills

| Skill | Level | Evidence | Implementation Notes |
|---|---|---|---|
| Node.js runtime | Repeated practical | `01_txt_file_cli`, all Express apps | Uses CommonJS, npm scripts, filesystem, and server runtime. |
| Express.js | Repeated practical | 10 package manifests and many `index.js`/`app.js` files | Core backend framework throughout the repo. |
| HTTP route handling | Repeated practical | `03`, `06`, `07`, `08`, `09`, `10`, `11`, `12`, `13` | GET/POST/PUT/DELETE route handlers used across projects. |
| REST/CRUD | Practical | `03_hospital_backend_expressHTTP_CRUD\index.js`, `11_To_Do_Auth\index.js`, `13_course_selling\routes\admin.js` | CRUD appears first in-memory, then course admin operations. |
| Request params | Practical intro | `06_http calc\app.js`, `11_To_Do_Auth\index.js` | Uses route params for calculator and todo ids. |
| Request bodies | Repeated practical | `03`, `08`, `09`, `10`, `11`, `12`, `13` | `express.json()` used repeatedly. |
| Request headers | Practical | `08`, `09`, `11`, `12`, `13` | JWT token read from `req.headers.token`. |
| Middleware | Repeated practical | `04_ticket_checker_middlewares\app.js`, `07_middlewares_prac_01\index.js`, `09_auth_middleware\index.js`, `13_course_selling\middlewares` | Learner understands `next()` and route/global middleware. |
| Logging | Practical intro | `07_middlewares_prac_01\index.js`, `09_auth_middleware\index.js` | Custom logger prints method, URL, date/time. |
| Authentication | Repeated practical | `08`, `09`, `11`, `12`, `13` | JWT signup/signin/me flows repeated and expanded. |
| Authorization | Practical | `11_To_Do_Auth\index.js`, `13_course_selling\middlewares\user.js`, `middlewares\admin.js` | User-scoped todos and admin/user course routes. |
| JWT | Repeated practical | `jwt.sign` in 5 projects; `jwt.verify` in 5 projects | Strong repetition, but secrets are hardcoded or committed in several places. |
| Password hashing | Introduced/practical | `12_todo_mongoDB\index.js` | Uses bcrypt hash/compare. Not yet applied to `13_course_selling`. |
| Validation | Introduced | `12_todo_mongoDB\index.js` | Zod object validates email/name/password in signup. TODOs in `13_course_selling` show planned validation. |
| Error handling | Introductory | `09_auth_middleware\index.js`, `11_To_Do_Auth\index.js`, `12_todo_mongoDB\index.js`, `13_course_selling\index.js` | Try/catch appears, but route-level async error handling is inconsistent. |
| Status codes | Practical intro | `03`, `08`, `09`, `11`, `12`, `13` | Uses 401, 403, 404, 411. Needs more consistent semantic use. |
| Static file serving | Practical intro | `09_auth_middleware\index.js`, `10_calc_cors_FE_BE\index.js` | Serves HTML using `res.sendFile`. |
| CORS concepts | Conceptual/practical intro | `10_calc_cors_FE_BE\readme.md`, `index.js` commented `cors` usage | Understands when CORS applies; middleware installed but not actively used. |
| Environment variables | Introduced/practical | `13_course_selling\index.js`, `config.js`, `.env.example` | Uses dotenv and process.env. `.env` is committed, which is a security gap. |
| Modular routers | Practical intro | `13_course_selling\routes\*.js` | Separates user/admin/course routes. |
| API design | Practical beginner | `11_To_Do_Auth`, `13_course_selling` | Resource routes exist, though naming and response consistency can improve. |
| Rate limiting | Not implemented | `13_course_selling\README.md` lists express-rate-limit as good-to-have | Not evidenced in code. |
| Cookies/sessions | Not implemented | `13_course_selling\README.md` notes cookies as future work | No cookie/session auth in code. |
| File uploads | Not evidenced | None | No multer or upload handling. |
| Security hardening | Weak evidence | bcrypt and dotenv introduced; secrets/password gaps remain | Needs focused reinforcement. |

---

# Database Skills

| Skill | Level | Evidence | Usage Analysis |
|---|---|---|---|
| MongoDB | Practical intro | `12_todo_mongoDB`, `13_course_selling` | Uses MongoDB connection strings and document collections. |
| Mongoose | Practical intro | `12_todo_mongoDB\db.js`, `13_course_selling\db.js` | Defines schemas and models; uses create/find/findOne/updateOne/deleteOne. |
| Schema design | Practical intro | `12_todo_mongoDB\db.js`, `13_course_selling\db.js`, `13_course_selling\db_schema.png` | Models users, todos, admins, courses, purchases. |
| Unique constraints | Introduced | `email: {type: String, unique:true}` in both DB projects | Basic uniqueness for user/admin emails. |
| Relationships/ObjectId | Practical intro | `Todo.userId`, `Course.creatorId`, `Purchase.userId`, `Purchase.courseId` | Uses ObjectId fields to connect documents. |
| Querying | Practical | `findOne`, `find`, `create`, `updateOne`, `deleteOne` | Basic Mongoose CRUD is evidenced. |
| `$in` queries | Introduced | `13_course_selling\routes\user.js` maps purchases to course ids and queries `_id: {$in: ...}` | Shows relational thinking in document DB. |
| Population | Not evidenced | None | Relationships are manually queried, not populated. |
| Aggregation | Not evidenced | None | No aggregation pipelines. |
| Index design beyond unique email | Not evidenced | None | No explicit indexes besides unique constraints. |
| Query optimization | Not evidenced | None | No pagination, projection, indexing strategy, or performance tuning. |
| SQL/PostgreSQL/MySQL | Not evidenced | None | Database work is MongoDB-only. |

Important security evidence:

- `12_todo_mongoDB\index.js` contains a hardcoded MongoDB URI.
- `13_course_selling\.env` is present in the repo despite `.gitignore` including `.env`.
- `13_course_selling\.env.example` shows the right pattern, but the actual `.env` should not be committed.

The report does not reproduce the secret values.

---

# Dev Tools & Workflow Skills

| Skill | Level | Evidence | Observations |
|---|---|---|---|
| Git repository usage | Practical intro | `.git` exists; root `.gitignore` and project `.gitignore` files | Git workflow is present. No branch/PR evidence inside files. |
| npm package management | Repeated practical | 27 `package.json` files and many `package-lock.json` files | Strong npm usage evidence. |
| npm scripts | Repeated practical | `start`, `dev`, `build`, `lint`, `preview` scripts across packages | Vite and Node scripts are used. |
| Vite | Repeated practical | 16 `vite.config.js` files | Main frontend build/dev tool. |
| ESLint | Installed/configured | React `eslint.config.js` files | Configs exist, but no evidence lint was run or issues fixed. |
| Nodemon | Intro/practical | `11_To_Do_Auth`, `13_course_selling` package manifests | Used for backend dev reload. |
| dotenv | Practical intro | `13_course_selling` | Env config used, but committed `.env` weakens workflow. |
| Environment examples | Practical intro | `13_course_selling\.env.example` | Good habit introduced. |
| Postman/API clients | Not directly evidenced | README references browser/Postman CORS behavior in `10_calc_cors_FE_BE\readme.md` | Conceptual mention only. |
| Prettier | Not evidenced | None | No Prettier config. |
| CI/CD | Not evidenced | No `.github`, YAML, workflow, Docker, or deployment config found | Major next-step gap. |
| Testing | Not evidenced | No test/spec files found; npm test placeholders remain | Major next-step gap. |
| Deployment | Conceptual only | Vite preview scripts and CORS README production note | No actual deployment config. |
| Debugging | Practical informal | Console logs throughout backend and React | Console debugging is common. Needs structured logging/tests next. |

---

# Frameworks & Libraries Inventory

| Framework/Library | Purpose | Where Used | Actual Usage Assessment |
|---|---|---|---|
| Node.js | Runtime | All CLI/backend projects | Core runtime used repeatedly. |
| Commander | CLI command parsing | `01_txt_file_cli` | Actually used to define `countWords` and `countLines`. |
| fs | File I/O | `01_txt_file_cli` | Actually used for `fs.readFile`. |
| Express | HTTP server/API framework | `03` through `13` backend projects | Actually used heavily. |
| jsonwebtoken | JWT signing/verification | `08`, `09`, `11`, `12`, `13` | Actually used heavily. |
| cors | CORS middleware | `10_calc_cors_FE_BE` | Installed and documented; import/use is commented in code. |
| Axios | HTTP client | `05`, `09`, `10`, `24_fe_be` async projects | Actually used via CDN and npm imports. |
| bcrypt | Password hashing | `12_todo_mongoDB` | Actually used for signup/signin hashing/compare. |
| Zod | Runtime validation | `12_todo_mongoDB` | Actually used once for signup validation. |
| Mongoose | MongoDB ODM | `12_todo_mongoDB`, `13_course_selling` | Actually used for schemas/models/queries. |
| dotenv | Env variable loading | `13_course_selling` | Actually used with `require("dotenv").config()`. |
| Nodemon | Dev server reload | `11_To_Do_Auth`, `13_course_selling` | Used in package scripts/deps. |
| React | UI framework | 16 React/Vite projects | Actually used heavily. |
| React DOM | React rendering | 16 React/Vite projects | Used in `main.jsx` with `createRoot`. |
| Vite | Frontend build/dev | 16 React/Vite projects | Used through configs/scripts. |
| ESLint | Linting | React projects | Configured, but no result evidence. |
| react-router-dom | Client routing | `18_routing` | Actually used for routes, links, outlet, navigate. |
| Recoil | State management | `22`, `23`, `24_fe_be` subprojects | Actually used with atoms/selectors/families/loadables. |
| Tailwind CSS | Utility CSS | `25_tailwind_css` | Actually used through Vite plugin and utility classes. |
| @tailwindcss/vite | Tailwind/Vite integration | `25_tailwind_css` | Actually configured in `vite.config.js`. |

---

# Architectural & Engineering Concepts

## Separation of Concerns

Evidence:

- `13_course_selling` separates `index.js`, `db.js`, `config.js`, route modules, and middleware modules.
- React projects split components into files such as `16_react_practice\src\post.jsx`, `follow.jsx`, `clock.jsx`, `todo.jsx`.

Assessment:

- This is one of the clearest architectural improvements across the repo. Earlier projects are single-file; later work begins modular separation.

Level: practical beginner to intermediate-intro.

## Layered Backend Structure

Evidence:

- `13_course_selling\index.js` is the server entry.
- `routes\*.js` handle endpoints.
- `middlewares\*.js` handle auth.
- `db.js` defines models.
- `config.js` reads env values.

Assessment:

- Good move toward layered architecture.
- Still missing service layer, controller layer, centralized error handling, and validation layer.

Level: introduced/practical.

## MVC-like Thinking

Evidence:

- `13_course_selling` has route/controller-like files and model definitions.

Assessment:

- Not formal MVC, but the structure shows route/model separation.

Level: introduced.

## Reusable Components

Evidence:

- `16_react_practice\src\post.jsx`
- `17_mini_Concepts_React\src\card.jsx`
- `21_Custom_Hooks\src\Counter.jsx`
- `25_tailwind_css\src\components\Input.jsx`, `button.jsx`, `Otp.jsx`

Assessment:

- Reusable component thinking is present.
- Component APIs and design polish need more practice.

Level: practical beginner.

## Abstraction

Evidence:

- Custom middleware in `04`, `07`, `09`, `13`.
- Custom hooks in `21_Custom_Hooks`.
- Recoil selectors derive notification totals in `22`, `23`, `24`.

Assessment:

- Abstraction is used when learning concepts, not yet consistently applied across full applications.

Level: practical beginner to intermediate-intro.

## Encapsulation

Evidence:

- Auth logic in middleware files in `13_course_selling`.
- Recoil atoms in `atoms.js` files.
- Context provider in `20_state_experiments`.

Assessment:

- Encapsulation is emerging, especially in state and middleware.

Level: practical intro.

## Dependency Management

Evidence:

- 27 `package.json` files, lockfiles, npm scripts.

Assessment:

- Strong repeated exposure to npm dependencies.
- Some dependencies are installed but not actively used, such as `cors` middleware in `10`.

Level: practical.

## Security Practices

Evidence:

- JWT auth repeated.
- bcrypt hashing in `12_todo_mongoDB`.
- dotenv/env example in `13_course_selling`.
- Auth middleware with try/catch in `09`, `12`, `13`.

Weakness evidence:

- Hardcoded JWT secrets in earlier projects.
- Hardcoded MongoDB connection string in `12_todo_mongoDB\index.js`.
- Committed actual `.env` in `13_course_selling`.
- Plaintext passwords in `08`, `09`, `11`, and `13`.
- No rate limiting, CSRF protection, cookie security, helmet, or refresh-token design.

Level: introduced but needs serious reinforcement.

## Async Data Loading

Evidence:

- Browser Axios in `05`, `09`, `10`.
- React Fetch in `16_react_practice\src\todo.jsx`.
- Custom hook Fetch in `21_Custom_Hooks\hooks\useFetch.js`.
- Recoil async selectors in `24_fe_be`.

Assessment:

- Async data loading is repeated across frontend and state-management contexts.

Level: practical.

## Known Correctness Issues Worth Learning From

Evidence:

- `21_Custom_Hooks\hooks\useDeBounce` calls `sendDataToBackend(update)`, but `update` is not defined; it should likely pass `value`.
- `24_fe_be\selector-family\src\atoms.js` exports `todosAtomFamily` twice in the same file, which will cause a module syntax/build problem.
- `12_todo_mongoDB\index.js` validates `email` but then reads `req.body.username`, so validation and data extraction are inconsistent.
- `11_To_Do_Auth\index.js` deletes todos by id without checking `username` in the filter, so a user can delete another user's todo if they know the id.
- `25_tailwind_css\src\components\Otp.jsx` defines `values` and `disabled` but does not fully wire OTP completion to enable the button.
- Several files assign undeclared variables such as `ans`, `todo`, and `username`.

Assessment:

- These are normal learning-stage issues, but they mark the boundary between practice code and production-quality code.

---

# Projects and Applications Found

## 01_txt_file_cli

### Purpose

CLI utility for counting words and lines in a text file.

### Technologies Used

Node.js, Commander, filesystem `fs`.

### Key Features

- `countWords <file>`
- `countLines <file>`
- Reads files with `fs.readFile`.

### Concepts Demonstrated

CLI commands, arguments, callbacks, file I/O, string splitting.

### Architecture Notes

Single-file CLI script. Simple and focused.

### Learning Value

Good starting point for Node runtime and command-line thinking.

### Estimated Difficulty

Introductory.

### Evidence

- `01_txt_file_cli\index.js`
- `01_txt_file_cli\package.json`

## 03_hospital_backend_expressHTTP_CRUD

### Purpose

In-memory hospital/kidney health API.

### Technologies Used

Node.js, Express.

### Key Features

- GET kidney counts.
- POST new kidney health state.
- PUT all kidneys healthy.
- DELETE unhealthy kidneys.

### Concepts Demonstrated

HTTP methods, CRUD, JSON body parsing, arrays, loops, response status.

### Architecture Notes

Single-file backend with in-memory data.

### Learning Value

Strong first Express CRUD exercise.

### Estimated Difficulty

Beginner.

### Evidence

- `03_hospital_backend_expressHTTP_CRUD\index.js`
- `03_hospital_backend_expressHTTP_CRUD\README.md`

## 04_ticket_checker_middlewares

### Purpose

Practice route-level middleware for age-gated ride routes.

### Technologies Used

Express.

### Key Features

- `isOldEnoughMiddleware`.
- Protected `/ride1` and `/ride2` routes.
- Older non-middleware implementation preserved in comments.

### Concepts Demonstrated

Middleware, query params, `next()`, route reuse.

### Architecture Notes

Single-file middleware drill.

### Learning Value

Shows recognition that repeated checks should be abstracted into middleware.

### Estimated Difficulty

Beginner.

### Evidence

- `04_ticket_checker_middlewares\app.js`

## 05_posts_fetch_API

### Purpose

Static frontend fetching a remote post and rendering it to the page.

### Technologies Used

HTML, JavaScript, Axios CDN, Fetch API in comments.

### Key Features

- Fetches JSONPlaceholder post.
- Updates DOM using `innerHTML`.

### Concepts Demonstrated

Async/await, external API calls, DOM mutation, Axios.

### Architecture Notes

Static HTML plus separate `app.js`.

### Learning Value

Introduces frontend API consumption before React.

### Estimated Difficulty

Beginner.

### Evidence

- `05_posts_fetch_API\index.html`
- `05_posts_fetch_API\app.js`

## 06_http calc

### Purpose

Calculator API using URL parameters.

### Technologies Used

Express.

### Key Features

- `/sum/:firstArg/:secondArg`
- `/multiply/:firstArg/:secondArg`
- `/divide/:firstArg/:secondArg`
- `/subtract/:firstArg/:secondArg`
- Global request counter middleware.

### Concepts Demonstrated

Route params, parsing integers, JSON responses, global middleware.

### Architecture Notes

Single-file Express app.

### Learning Value

Reinforces HTTP route params and simple API design.

### Estimated Difficulty

Beginner.

### Evidence

- `06_http calc\app.js`

## 07_middlewares_prac_01

### Purpose

Middleware practice for logging and request counting.

### Technologies Used

Express.

### Key Features

- `logger` middleware with method, URL, date/time.
- `counter` middleware.
- `/reqs` endpoint to show count.

### Concepts Demonstrated

Global middleware, route-specific middleware, request lifecycle, logging.

### Architecture Notes

Single-file Express app.

### Learning Value

Better middleware practice than `04` because it combines logging and metrics.

### Estimated Difficulty

Beginner.

### Evidence

- `07_middlewares_prac_01\index.js`

## 08_auth_express_app

### Purpose

In-memory JWT authentication API.

### Technologies Used

Express, jsonwebtoken.

### Key Features

- `/signup`
- `/signin`
- `/me`
- JWT issuance and verification.

### Concepts Demonstrated

Authentication flow, token signing, headers, protected user info.

### Architecture Notes

Single-file auth app using in-memory users.

### Learning Value

First clear JWT authentication implementation.

### Estimated Difficulty

Beginner to beginner-intermediate.

### Evidence

- `08_auth_express_app\index.js`

## 09_auth_middleware

### Purpose

JWT authentication with extracted middleware and browser frontend.

### Technologies Used

Express, jsonwebtoken, HTML, Axios CDN, localStorage.

### Key Features

- Serves `public/index.html`.
- Signup/signin frontend.
- Stores token in localStorage.
- Auth middleware protects `/me`.
- Logger middleware.

### Concepts Demonstrated

Frontend-backend auth flow, token persistence, middleware-based protection.

### Architecture Notes

Simple full-stack project with backend serving frontend.

### Learning Value

Important bridge from backend-only auth to browser-visible auth.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `09_auth_middleware\index.js`
- `09_auth_middleware\public\index.html`

## 10_calc_cors_FE_BE

### Purpose

Calculator with frontend-backend integration and CORS learning notes.

### Technologies Used

Express, HTML, Axios CDN, cors package.

### Key Features

- Serves frontend from backend.
- POST `/sum`, `/sub`, `/mul`.
- Browser sends Axios requests.
- README explains CORS scenarios.

### Concepts Demonstrated

Same-origin serving, JSON POST bodies, CORS theory, frontend/backend communication.

### Architecture Notes

Backend serves static HTML directly.

### Learning Value

Very useful for understanding why browser requests differ from Postman/API clients.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `10_calc_cors_FE_BE\index.js`
- `10_calc_cors_FE_BE\public\index.html`
- `10_calc_cors_FE_BE\readme.md`

## 11_To_Do_Auth

### Purpose

JWT-authenticated in-memory todo API.

### Technologies Used

Express, jsonwebtoken, nodemon.

### Key Features

- Signup/signin.
- Auth middleware.
- Create/list/update/delete todos.
- User-scoped todo listing.

### Concepts Demonstrated

Auth-protected CRUD, route params, status codes, todo ownership.

### Architecture Notes

Single-file API using arrays.

### Learning Value

Good step from auth basics to resource authorization.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `11_To_Do_Auth\index.js`
- `11_To_Do_Auth\index.html`

## 12_todo_mongoDB

### Purpose

MongoDB-backed todo/auth API.

### Technologies Used

Express, Mongoose, MongoDB, JWT, bcrypt, Zod.

### Key Features

- MongoDB connection.
- User and todo models.
- Zod signup validation.
- Password hashing and compare.
- JWT auth using user id.
- Create/list todos from DB.

### Concepts Demonstrated

Database persistence, schemas, validation, hashing, async/await, auth middleware.

### Architecture Notes

Split between `index.js` and `db.js`; still exposes hardcoded DB connection in code.

### Learning Value

Major backend milestone because it combines auth, validation, hashing, and persistence.

### Estimated Difficulty

Intermediate-introductory.

### Evidence

- `12_todo_mongoDB\index.js`
- `12_todo_mongoDB\db.js`
- `12_todo_mongoDB\package.json`

## 13_course_selling

### Purpose

Course-selling backend API with user/admin roles, courses, and purchases.

### Technologies Used

Express, Mongoose, MongoDB, JWT, dotenv, nodemon.

### Key Features

- User signup/signin.
- Admin signup/signin.
- Admin course create/update/delete/list.
- Course preview and purchase.
- User purchase history with course lookup.
- Separate routers and middlewares.
- Env-based config.

### Concepts Demonstrated

Role-based APIs, modular Express routing, Mongoose schema modeling, ObjectId relationships, `$in` queries, env config.

### Architecture Notes

Best architecture in the repo: entrypoint, config, DB models, route modules, and middleware modules are separated.

### Learning Value

Strong capstone-style backend compared with earlier drills.

### Estimated Difficulty

Intermediate.

### Evidence

- `13_course_selling\index.js`
- `13_course_selling\db.js`
- `13_course_selling\config.js`
- `13_course_selling\routes\user.js`
- `13_course_selling\routes\admin.js`
- `13_course_selling\routes\course.js`
- `13_course_selling\middlewares\user.js`
- `13_course_selling\middlewares\admin.js`
- `13_course_selling\db_schema.png`
- `13_course_selling\README.md`

## 14_react_usestate&useeffect

### Purpose

React practice for state, effects, counters, toggles, and stopwatch lifecycle.

### Technologies Used

React, Vite.

### Key Features

- Counter with increment/decrement/reset.
- Mount/unmount logs.
- Stopwatch interval and cleanup.
- Conditional rendering with toggled component.

### Concepts Demonstrated

`useState`, `useEffect`, dependency arrays, cleanup, component lifecycle.

### Architecture Notes

Single App file with multiple local components.

### Learning Value

Strong first React hook practice.

### Estimated Difficulty

Beginner.

### Evidence

- `14_react_usestate&useeffect\src\App.jsx`
- `14_react_usestate&useeffect\src\main.jsx`

## 15_useEffect/useEffect_practice

### Purpose

Focused `useEffect` dependency and cleanup practice.

### Technologies Used

React, Vite.

### Key Features

- Two counters.
- Effect on mount.
- Effect on `props.count` changes with cleanup.

### Concepts Demonstrated

Props, effects, cleanup, dependency arrays.

### Architecture Notes

Small single-file practice app.

### Learning Value

Reinforces lifecycle mental model.

### Estimated Difficulty

Beginner.

### Evidence

- `15_useEffect\useEffect_practice\src\App.jsx`

## 16_react_practice

### Purpose

Multi-component React practice with posts, notifications, navbar tabs, todos, and stopwatch.

### Technologies Used

React, Vite, Fetch API.

### Key Features

- Post list rendered from array.
- Add post button.
- Follow toggle component.
- Notifications component with badge.
- Navbar tab state.
- Todo fetch by selected tab.
- Stopwatch with interval cleanup.

### Concepts Demonstrated

Components, props, maps, state arrays, conditional rendering, effects, fetch, timers, inline styles.

### Architecture Notes

Good file separation into feature components.

### Learning Value

Strong React practice project because it combines many basics in one workspace.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `16_react_practice\src\App.jsx`
- `16_react_practice\src\post.jsx`
- `16_react_practice\src\follow.jsx`
- `16_react_practice\src\notify.jsx`
- `16_react_practice\src\nav.jsx`
- `16_react_practice\src\todo.jsx`
- `16_react_practice\src\clock.jsx`

## 17_mini_Concepts_React

### Purpose

Mini React concept drills for props and children.

### Technologies Used

React, Vite.

### Key Features

- `Hello` component with props.
- `Card` component with `children`.
- Small component composition examples.

### Concepts Demonstrated

Props, children, reusable wrappers, inline styles.

### Architecture Notes

Simple file-split concept practice.

### Learning Value

Useful abstraction practice.

### Estimated Difficulty

Beginner.

### Evidence

- `17_mini_Concepts_React\src\App.jsx`
- `17_mini_Concepts_React\src\card.jsx`
- `17_mini_Concepts_React\src\hi.jsx`

## 18_routing

### Purpose

React Router practice app.

### Technologies Used

React, Vite, react-router-dom.

### Key Features

- BrowserRouter.
- Nested routes.
- Layout with Outlet.
- Header/Footer links.
- Programmatic navigation.
- 404 error page.

### Concepts Demonstrated

Routing, nested layouts, links, wildcard routes, navigation.

### Architecture Notes

Clear component split by route/page/layout.

### Learning Value

Important frontend routing milestone.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `18_routing\src\App.jsx`
- `18_routing\src\Layout.jsx`
- `18_routing\src\Header.jsx`
- `18_routing\src\Footer.jsx`
- `18_routing\src\Johnbury.jsx`
- `18_routing\src\ErrorPage.jsx`

## 19_useRef

### Purpose

React `useRef` practice for timers and DOM input focus.

### Technologies Used

React, Vite.

### Key Features

- Clock with start/stop interval id stored in ref.
- Signup input focus using ref.

### Concepts Demonstrated

Refs for mutable values and DOM nodes.

### Architecture Notes

Small focused hook practice.

### Learning Value

Good distinction between state and refs.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `19_useRef\src\Clock.jsx`
- `19_useRef\src\Signup.jsx`
- `19_useRef\src\App.jsx`

## 20_state_experiments

### Purpose

React Context API state experiment.

### Technologies Used

React, Vite.

### Key Features

- Bulb state provider.
- Light bulb display component.
- Light switch component.
- Shared state without prop drilling.

### Concepts Demonstrated

`createContext`, provider, `useContext`, component tree state sharing.

### Architecture Notes

Context provider colocated with related components.

### Learning Value

Introduces shared state before Recoil.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `20_state_experiments\src\Components.jsx`
- `20_state_experiments\src\App.jsx`

## 21_Custom_Hooks

### Purpose

Custom hooks practice.

### Technologies Used

React, Vite, Fetch API.

### Key Features

- `useCounter`.
- `useFetch`.
- `usePrev`.
- `useDeBounce`.
- Search input intended to debounce backend calls.

### Concepts Demonstrated

Hook extraction, reusable state logic, previous value tracking, polling/refetch interval, debounce concept.

### Architecture Notes

Hooks are stored in a top-level `hooks` folder.

### Learning Value

Very useful for moving beyond basic React usage.

### Estimated Difficulty

Intermediate-introductory.

### Evidence

- `21_Custom_Hooks\src\App.jsx`
- `21_Custom_Hooks\src\Counter.jsx`
- `21_Custom_Hooks\hooks\useFetch.js`
- `21_Custom_Hooks\hooks\usePrev.js`
- `21_Custom_Hooks\hooks\useDeBounce`

## 22_recoil

### Purpose

First Recoil counter and derived even/odd selector.

### Technologies Used

React, Vite, Recoil.

### Key Features

- RecoilRoot.
- Counter atom.
- Even selector.
- Increment/decrement via setters.

### Concepts Demonstrated

Global state atom, derived state selector, Recoil hooks.

### Architecture Notes

Atoms stored in `store\atoms\counter.js`.

### Learning Value

Good first Recoil abstraction after Context API.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `22_recoil\src\App.jsx`
- `22_recoil\src\components.jsx`
- `22_recoil\store\atoms\counter.js`

## 23_recoil_In_Depth

### Purpose

Recoil notification count aggregation.

### Technologies Used

React, Vite, Recoil.

### Key Features

- Multiple atoms for network/jobs/messages/notifications.
- Selector for total notifications.
- Navbar displays derived total.

### Concepts Demonstrated

Multiple atoms, selector-derived state, comparison with `useMemo`.

### Architecture Notes

Atom definitions separated into `atoms.js`.

### Learning Value

Reinforces selector value over local memoization for global derived state.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `23_recoil_In_Depth\src\atoms.js`
- `23_recoil_In_Depth\src\Navbar.jsx`
- `23_recoil_In_Depth\src\App.jsx`

## 24_fe_be/7.4-easy-bits

### Purpose

Recoil atoms/selectors for notification UI.

### Technologies Used

React, Vite, Recoil.

### Key Features

- Static notification atoms.
- Total notification selector.
- 99+ display logic.

### Concepts Demonstrated

Derived global state, selector vs useMemo.

### Architecture Notes

Focused Recoil drill.

### Learning Value

Repeated Recoil selector practice.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `24_fe_be\7.4-easy-bits\src\App.jsx`
- `24_fe_be\7.4-easy-bits\src\atoms.js`

## 24_fe_be/7.4-async-queries

### Purpose

Recoil async selector default fetching notifications from remote API.

### Technologies Used

React, Vite, Recoil, Axios.

### Key Features

- Atom default is async selector.
- Axios request to remote notifications endpoint.
- Selector sums notification fields.

### Concepts Demonstrated

Async Recoil state, derived state from remote data.

### Architecture Notes

Focused async state drill.

### Learning Value

Important step toward server-state handling.

### Estimated Difficulty

Intermediate-introductory.

### Evidence

- `24_fe_be\7.4-async-queries\src\App.jsx`
- `24_fe_be\7.4-async-queries\src\atoms.js`

## 24_fe_be/atom-family

### Purpose

Recoil atomFamily practice with local todos.

### Technologies Used

React, Vite, Recoil.

### Key Features

- Local `TODOS` array.
- `atomFamily` returns todo by id.
- Multiple Todo components read independent atom instances.

### Concepts Demonstrated

Parameterized state with atom families.

### Architecture Notes

Clean separation of `todos.js` and `atoms.js`.

### Learning Value

Good conceptual bridge to entity state.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `24_fe_be\atom-family\src\App.jsx`
- `24_fe_be\atom-family\src\atoms.js`
- `24_fe_be\atom-family\src\todos.js`

## 24_fe_be/selector-family

### Purpose

Recoil selectorFamily practice for remote todo fetching.

### Technologies Used

React, Vite, Recoil, Axios.

### Key Features

- `atomFamily` with `selectorFamily` async default.
- Fetch todo by id from remote API.

### Concepts Demonstrated

Parameterized async state.

### Architecture Notes

The file currently has two duplicate `export const todosAtomFamily` declarations, which should be fixed before running.

### Learning Value

Good concept exposure, but implementation needs cleanup.

### Estimated Difficulty

Intermediate-introductory.

### Evidence

- `24_fe_be\selector-family\src\App.jsx`
- `24_fe_be\selector-family\src\atoms.js`

## 24_fe_be/loadables

### Purpose

Recoil loadable state handling practice.

### Technologies Used

React, Vite, Recoil, Axios.

### Key Features

- Async selectorFamily with artificial delay.
- `useRecoilStateLoadable`.
- Branches for `loading`, `hasValue`, and `hasError`.

### Concepts Demonstrated

Async state UX, loading/error/value branching.

### Architecture Notes

Focused state-loading drill.

### Learning Value

Strongest evidence for frontend async state handling beyond basic `loading` booleans.

### Estimated Difficulty

Intermediate-introductory.

### Evidence

- `24_fe_be\loadables\src\App.jsx`
- `24_fe_be\loadables\src\atoms.js`

## 25_tailwind_css

### Purpose

Tailwind CSS and reusable UI component practice.

### Technologies Used

React, Vite, Tailwind CSS, @tailwindcss/vite.

### Key Features

- Tailwind setup.
- Responsive grid experiment.
- Age verification UI.
- OTP input component with focus movement.
- Styled Input/Button components.

### Concepts Demonstrated

Tailwind utility classes, responsive utilities, refs array, keyboard handling, reusable UI components.

### Architecture Notes

Component folder introduced for UI pieces.

### Learning Value

Good styling milestone after functional React practice.

### Estimated Difficulty

Beginner-intermediate.

### Evidence

- `25_tailwind_css\src\App.jsx`
- `25_tailwind_css\src\Intro.jsx`
- `25_tailwind_css\src\Age.jsx`
- `25_tailwind_css\src\components\Otp.jsx`
- `25_tailwind_css\src\components\Input.jsx`
- `25_tailwind_css\src\components\button.jsx`
- `25_tailwind_css\src\index.css`
- `25_tailwind_css\vite.config.js`
- `25_tailwind_css\tailwind.config.js`

---

# Strong Skills

## 1. Express.js Fundamentals

Evidence:

- 10 Express projects.
- Route handlers across `03`, `04`, `06`, `07`, `08`, `09`, `10`, `11`, `12`, `13`.

Reasoning:

- Express is used repeatedly for routing, JSON parsing, middleware, auth, file serving, and database-backed APIs.

Level: strong practical beginner.

## 2. JWT Authentication Basics

Evidence:

- `08_auth_express_app`, `09_auth_middleware`, `11_To_Do_Auth`, `12_todo_mongoDB`, `13_course_selling`.

Reasoning:

- JWT signing/verifying appears across multiple progressively harder apps.

Level: repeated practical.

## 3. React Hooks Fundamentals

Evidence:

- `useState` appears heavily across React projects.
- `useEffect` appears across lifecycle, timer, fetch, and cleanup examples.

Reasoning:

- Repetition across many projects indicates more than one-off exposure.

Level: strong practical beginner.

## 4. Middleware Thinking

Evidence:

- `04_ticket_checker_middlewares`, `07_middlewares_prac_01`, `09_auth_middleware`, `13_course_selling\middlewares`.

Reasoning:

- The repository shows learning from duplicated route checks to reusable middleware.

Level: practical.

## 5. API Request/Response Handling

Evidence:

- Browser API calls in `05`, `09`, `10`, `16`, `21`, `24`.
- Express JSON responses across backend projects.

Reasoning:

- Both client and server sides of API communication are practiced.

Level: practical.

## 6. React Component Composition

Evidence:

- `16_react_practice`, `17_mini_Concepts_React`, `18_routing`, `20_state_experiments`, `25_tailwind_css`.

Reasoning:

- Components are split, props are passed, children are used, and reusable UI pieces are attempted.

Level: practical beginner.

## 7. Recoil State Management

Evidence:

- `22_recoil`, `23_recoil_In_Depth`, five `24_fe_be` subprojects.

Reasoning:

- Recoil concepts are repeated across atoms, selectors, families, async defaults, and loadables.

Level: intermediate-introductory.

## 8. MongoDB/Mongoose Basics

Evidence:

- `12_todo_mongoDB`, `13_course_selling`.

Reasoning:

- Real schemas/models and CRUD queries are implemented.

Level: practical intro.

## 9. Async Programming

Evidence:

- Node callbacks in `01`.
- Async/await in browser and backend.
- React effects and Recoil async selectors.

Reasoning:

- Async appears in several contexts, not one isolated example.

Level: practical.

## 10. npm/Vite Workflow

Evidence:

- 27 npm package projects.
- 16 Vite React apps.

Reasoning:

- Repeated use of modern JS tooling.

Level: practical.

---

# Intermediate Skills

These skills are demonstrated but not yet reinforced enough to call advanced.

| Skill | Evidence | Reasoning |
|---|---|---|
| Modular backend architecture | `13_course_selling` | Strong single project, but not repeated elsewhere. |
| Mongoose relationships | `13_course_selling\db.js`, `routes\user.js` | ObjectId relationships and `$in` query are present. |
| Password hashing | `12_todo_mongoDB` | Correctly introduced with bcrypt, but not applied consistently across later app. |
| Runtime validation | `12_todo_mongoDB` | Zod used once; TODOs show awareness to add more. |
| React Router | `18_routing` | Good implementation but isolated to one project. |
| Context API | `20_state_experiments` | Correct concept, single project. |
| Custom hooks | `21_Custom_Hooks` | Several hooks attempted; one has a bug. |
| Async Recoil | `24_fe_be\7.4-async-queries`, `loadables`, `selector-family` | Good concept coverage, but some implementation issues. |
| Tailwind CSS | `25_tailwind_css` | Setup and utilities used, but only one project. |
| CORS reasoning | `10_calc_cors_FE_BE\readme.md` | Well-explained concept; middleware not actively used in final code. |

---

# Beginner Skills

These are introduced but have limited implementation depth.

| Skill | Evidence | Notes |
|---|---|---|
| TypeScript | Only template README/dev type dependencies | No TS implementation. |
| Testing | None | No tests found. |
| CI/CD | None | No workflows found. |
| Deployment | Vite preview and README mentions only | No deployed config. |
| Cookies/sessions | `13_course_selling\README.md` future note | Not implemented. |
| Rate limiting | `13_course_selling\README.md` future note | Not implemented. |
| Secure env workflow | `.env.example` exists | Actual `.env` and hardcoded secrets weaken evidence. |
| Pagination | `13_course_selling\README.md` suggestion | Not implemented. |
| Query optimization | None | Not evidenced. |
| Advanced CSS/responsive design | Tailwind intro only | Needs more full-page practice. |

---

# Hidden Strengths

## Concept Isolation

The repo repeatedly isolates one concept per folder: middleware, useEffect, useRef, routing, Context, custom hooks, Recoil selectors, Recoil families, loadables, Tailwind. This is a strong learning strategy because it reduces noise and builds mental models.

Evidence:

- `04_ticket_checker_middlewares`
- `15_useEffect\useEffect_practice`
- `19_useRef`
- `20_state_experiments`
- `21_Custom_Hooks`
- `22_recoil`
- `24_fe_be\loadables`

## Progressive Refactoring Instinct

You move from duplicated logic to middleware, from single-file APIs to routers, and from prop/state drilling to Context/Recoil.

Evidence:

- `04` comments preserve duplicated age checks, then uses middleware.
- `13_course_selling` separates routers, middleware, models, and config.
- `20_state_experiments` and `22/23/24` move beyond local state.

## Full-Stack Mental Model

Even though polished full-stack apps are limited, the repo repeatedly shows both sides of request/response thinking.

Evidence:

- `10_calc_cors_FE_BE` includes frontend Axios and backend Express.
- `09_auth_middleware` stores a JWT in localStorage and sends it to backend `/me`.
- `12_todo_mongoDB` connects auth to persisted user/todo data.

## Self-Auditing Through TODOs

The comments and README in `13_course_selling` correctly identify missing production concerns: Zod validation, bcrypt, try/catch, cookies, rate limiting, React frontend, pagination, and error messages.

This is a hidden strength because the learner can already see the next engineering improvements.

---

# Knowledge Gaps

Based only on repository evidence, these areas are missing or weak.

## High-Priority Gaps

1. Automated testing.
   - No test/spec files found.
   - `npm test` is still the default placeholder in many backend package files.

2. Secret management.
   - Hardcoded secrets and a committed `.env` are present.
   - `.env.example` exists, but actual secret hygiene needs correction.

3. Consistent validation.
   - Zod appears once in `12_todo_mongoDB`.
   - `13_course_selling` has TODOs for validation but does not implement it.

4. Password security consistency.
   - bcrypt is used in `12_todo_mongoDB`.
   - `13_course_selling` still stores/checks plaintext passwords.

5. Centralized error handling.
   - Some try/catch exists, but async routes often lack consistent error handling.

6. Authorization edge cases.
   - `11_To_Do_Auth` delete route filters only by todo id, not username.
   - Course purchase duplicate prevention is not evidenced.

7. Frontend auth architecture.
   - Backend auth exists, but React protected routes and auth context are not evidenced.

8. Production deployment.
   - No Docker, CI/CD, deployment config, or environment-based production setup.

9. TypeScript.
   - No TS source files.

10. Data modeling depth.
   - No population, aggregation, pagination, indexes beyond unique email, or query optimization.

## Medium-Priority Gaps

- Accessibility and semantic HTML.
- Responsive design beyond first Tailwind experiments.
- Form UX and client-side validation.
- API response consistency.
- Structured logging.
- Error boundaries in React.
- Reusable service/client API layer in frontend.
- State management comparison and choosing simpler patterns when Recoil is not needed.
- Code formatting with Prettier.
- GitHub workflow, PRs, issues, and collaboration artifacts.

---

# Project Readiness Assessment

| Target | Readiness | Reasoning |
|---|---|---|
| Beginner Full-Stack Projects | Ready | Express, React basics, forms, Axios/fetch, auth basics, and MongoDB basics are evidenced. |
| Intermediate Full-Stack Projects | Mostly ready with guidance | You can build them, but need stronger validation, error handling, security, and frontend auth structure. |
| Advanced Full-Stack Projects | Not yet evidenced | Missing tests, CI/CD, deployment, TypeScript, advanced DB patterns, and production auth hardening. |
| Portfolio Projects | Ready to start, needs polishing discipline | The skill base is enough, but portfolio code must be cleaner than the practice drills. |
| Freelance Projects | Limited readiness | Good for small internal tools or prototypes; not yet for security-sensitive production work. |
| Team Collaboration Projects | Emerging | Modular code appears, but no tests, PR workflow, code style, or issue/CI evidence. |
| Open Source Contributions | Beginner-ready | Can contribute docs, small React/Express fixes, or starter issues; larger contributions need tests and codebase navigation practice. |

---

# Personalized Project Recommendations

Recommendations use technologies already evidenced in this repo. Optional extensions are explicitly marked.

## 10 Beginner Projects

### 1. File Stats CLI Plus

- Difficulty: Beginner.
- Skills Practiced: Node.js, Commander, fs, string processing.
- Why It Fits Current Skill Level: Extends `01_txt_file_cli`.
- Expected Learning Outcomes: Count characters, words, lines, empty lines, and most common words.

### 2. Express Calculator API v2

- Difficulty: Beginner.
- Skills Practiced: Express, route params, request bodies, status codes.
- Why It Fits Current Skill Level: Builds directly from `06_http calc` and `10_calc_cors_FE_BE`.
- Expected Learning Outcomes: Cleaner route naming, validation of numeric inputs, consistent responses.

### 3. Middleware Playground

- Difficulty: Beginner.
- Skills Practiced: Express middleware, logging, counters, auth-like checks.
- Why It Fits Current Skill Level: Reinforces `04` and `07`.
- Expected Learning Outcomes: Compose global and route-level middleware confidently.

### 4. Static API Search Page

- Difficulty: Beginner.
- Skills Practiced: HTML, DOM, Axios/Fetch, async/await.
- Why It Fits Current Skill Level: Extends `05_posts_fetch_API`.
- Expected Learning Outcomes: Search remote posts/users, show loading/error UI.

### 5. Browser Calculator with Backend

- Difficulty: Beginner.
- Skills Practiced: HTML forms, Axios POST, Express JSON APIs.
- Why It Fits Current Skill Level: Improves `10_calc_cors_FE_BE`.
- Expected Learning Outcomes: Form reset, input validation, result history.

### 6. JWT Notes API In Memory

- Difficulty: Beginner.
- Skills Practiced: JWT, middleware, in-memory CRUD.
- Why It Fits Current Skill Level: Similar to `11_To_Do_Auth`.
- Expected Learning Outcomes: User-specific CRUD with proper ownership checks.

### 7. React Counter Lab

- Difficulty: Beginner.
- Skills Practiced: useState, props, effects.
- Why It Fits Current Skill Level: Reinforces `14` and `15`.
- Expected Learning Outcomes: Better component splitting and cleaner state updates.

### 8. React Profile Cards

- Difficulty: Beginner.
- Skills Practiced: Props, maps, reusable components, conditional rendering.
- Why It Fits Current Skill Level: Extends `16_react_practice`.
- Expected Learning Outcomes: Render lists cleanly and avoid duplicate UI code.

### 9. React Stopwatch and Timer

- Difficulty: Beginner.
- Skills Practiced: useEffect, useRef, intervals, cleanup.
- Why It Fits Current Skill Level: Combines `14`, `16`, and `19`.
- Expected Learning Outcomes: Reliable start/stop/reset logic without duplicate intervals.

### 10. Tailwind OTP Form

- Difficulty: Beginner.
- Skills Practiced: Tailwind, useRef, controlled inputs, keyboard events.
- Why It Fits Current Skill Level: Completes ideas in `25_tailwind_css`.
- Expected Learning Outcomes: Fully wire OTP completion and disabled button state.

## 10 Beginner-to-Intermediate Projects

### 1. Mongo Todo API v2

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: Express, Mongoose, JWT, bcrypt, Zod.
- Why It Fits Current Skill Level: Directly improves `12_todo_mongoDB`.
- Expected Learning Outcomes: Full validation, secure password flow, ownership checks.

### 2. Course Selling API v2

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: Express routers, Mongoose relationships, admin/user auth.
- Why It Fits Current Skill Level: Refines `13_course_selling`.
- Expected Learning Outcomes: Add Zod, bcrypt, try/catch, consistent responses, duplicate-purchase prevention.

### 3. React Router Mini Site

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: React Router, nested layouts, error pages, navigation.
- Why It Fits Current Skill Level: Extends `18_routing`.
- Expected Learning Outcomes: Build a real multi-page app shell.

### 4. Auth Frontend for Existing JWT API

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: React, Axios, localStorage, forms, conditional rendering.
- Why It Fits Current Skill Level: Bridges `09_auth_middleware` and React projects.
- Expected Learning Outcomes: Login/signup screens, token persistence, logout, protected UI.

### 5. Custom Hooks Toolkit

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: `useFetch`, `usePrev`, `useDebounce`, `useCounter`.
- Why It Fits Current Skill Level: Fixes and strengthens `21_Custom_Hooks`.
- Expected Learning Outcomes: Create reliable, reusable hooks with loading/error states.

### 6. Recoil Notification Dashboard

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: Recoil atoms, selectors, derived totals.
- Why It Fits Current Skill Level: Combines `22`, `23`, `24_fe_be\7.4-easy-bits`.
- Expected Learning Outcomes: Organize global state cleanly.

### 7. Recoil Remote Todos

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: atomFamily, selectorFamily, Axios, loadables.
- Why It Fits Current Skill Level: Cleans up `selector-family` and `loadables`.
- Expected Learning Outcomes: Parameterized async state with loading/error UX.

### 8. Tailwind Responsive Landing/Form Page

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: Tailwind grid/flex, custom colors, forms.
- Why It Fits Current Skill Level: Builds from `25_tailwind_css`.
- Expected Learning Outcomes: Responsive layout beyond isolated utility experiments.

### 9. Full-Stack Todo with React + Express + Mongo

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: React forms, Express API, MongoDB, JWT, Axios.
- Why It Fits Current Skill Level: Uses only already evidenced technologies.
- Expected Learning Outcomes: Connect frontend auth and CRUD to real persistence.

### 10. API Documentation and README Upgrade

- Difficulty: Beginner-to-intermediate.
- Skills Practiced: Markdown, API design, examples, environment setup.
- Why It Fits Current Skill Level: Extends existing README habits.
- Expected Learning Outcomes: Make projects easier for mentors/recruiters to run.

## 10 Portfolio-Worthy Projects

### 1. Course Marketplace MVP

- Difficulty: Intermediate.
- Skills Practiced: React, React Router, Express, MongoDB, JWT, admin/user roles.
- Missing Skills Gained: Full frontend auth flow, secure backend validation, polished API responses.
- Why Recruiters Would Care: Shows real role-based full-stack architecture.

### 2. Authenticated Task Manager

- Difficulty: Intermediate.
- Skills Practiced: React, Tailwind, Express, Mongoose, bcrypt, Zod, JWT.
- Missing Skills Gained: Production-style ownership checks, frontend protected routes.
- Why Recruiters Would Care: Classic full-stack CRUD with security basics.

### 3. Developer Notes App

- Difficulty: Intermediate.
- Skills Practiced: React components, custom hooks, Express APIs, MongoDB.
- Missing Skills Gained: Search, filters, autosave debounce, loading/error states.
- Why Recruiters Would Care: Demonstrates useful product thinking and reusable hooks.

### 4. Recoil Dashboard with Remote Data

- Difficulty: Intermediate.
- Skills Practiced: Recoil atoms/selectors/families/loadables, Axios, Tailwind.
- Missing Skills Gained: Clean async state architecture.
- Why Recruiters Would Care: Shows advanced frontend state beyond basic useState.

### 5. Learning Progress Tracker

- Difficulty: Intermediate.
- Skills Practiced: React, Express, MongoDB, charts using plain React/CSS or simple components.
- Missing Skills Gained: Data modeling, progress aggregation, dashboard UI.
- Why Recruiters Would Care: Meta-project that demonstrates self-directed learning.

### 6. Mini LMS Admin Panel

- Difficulty: Intermediate.
- Skills Practiced: Course CRUD, admin auth, Tailwind UI, Mongo relationships.
- Missing Skills Gained: Pagination, filtering, edit forms, validation.
- Why Recruiters Would Care: Closely maps to real SaaS admin interfaces.

### 7. API Playground App

- Difficulty: Intermediate.
- Skills Practiced: React, Axios/fetch, Express, route testing UI.
- Missing Skills Gained: Error display, request history, reusable API client.
- Why Recruiters Would Care: Shows understanding of HTTP from both user and developer sides.

### 8. Secure Auth Starter Kit

- Difficulty: Intermediate.
- Skills Practiced: Express, JWT, bcrypt, Zod, dotenv, React login UI.
- Missing Skills Gained: Consistent auth architecture and secret hygiene.
- Why Recruiters Would Care: Security-conscious starter projects are practical and reusable.

### 9. Tailwind Component Library

- Difficulty: Intermediate.
- Skills Practiced: React components, props, children, Tailwind, form components.
- Missing Skills Gained: Reusable UI API design and responsive polish.
- Why Recruiters Would Care: Shows frontend craft and component thinking.

### 10. Full-Stack Calculator/Utility Hub

- Difficulty: Intermediate.
- Skills Practiced: Express APIs, React Router, Tailwind, custom hooks.
- Missing Skills Gained: Multi-tool app organization, reusable API layer.
- Why Recruiters Would Care: Turns beginner drills into a cohesive polished product.

Optional extensions for portfolio projects, not currently evidenced in the repo: automated tests, TypeScript, CI/CD, deployment, Docker.

---

# Evidence Index

| Skill | Evidence File(s) | Evidence Type | Notes |
|---|---|---|---|
| Node CLI | `01_txt_file_cli\index.js` | Implementation | Commander commands and fs reads. |
| File I/O | `01_txt_file_cli\index.js` | Implementation | `fs.readFile` callback. |
| Express basics | `03_hospital_backend_expressHTTP_CRUD\index.js` | Implementation | App setup, JSON, CRUD routes. |
| CRUD | `03_hospital_backend_expressHTTP_CRUD\index.js`, `11_To_Do_Auth\index.js`, `13_course_selling\routes\admin.js` | Implementation | In-memory and DB-backed operations. |
| Middleware | `04_ticket_checker_middlewares\app.js`, `07_middlewares_prac_01\index.js`, `09_auth_middleware\index.js`, `13_course_selling\middlewares\*.js` | Implementation | Custom middleware and auth checks. |
| Request logging | `07_middlewares_prac_01\index.js`, `09_auth_middleware\index.js` | Implementation | Console logging middleware. |
| Route params | `06_http calc\app.js`, `11_To_Do_Auth\index.js` | Implementation | URL params parsed and used. |
| Request body parsing | `03`, `08`, `09`, `10`, `11`, `12`, `13` backend files | Implementation | `app.use(express.json())`. |
| Axios | `05_posts_fetch_API\app.js`, `09_auth_middleware\public\index.html`, `10_calc_cors_FE_BE\public\index.html`, `24_fe_be\*\src\atoms.js` | Implementation | CDN and npm usage. |
| Fetch API | `05_posts_fetch_API\app.js`, `16_react_practice\src\todo.jsx`, `21_Custom_Hooks\hooks\useFetch.js` | Implementation | Remote API calls. |
| CORS | `10_calc_cors_FE_BE\readme.md`, `10_calc_cors_FE_BE\index.js` | Documentation/code | Concept documented; middleware commented. |
| JWT auth | `08_auth_express_app\index.js`, `09_auth_middleware\index.js`, `11_To_Do_Auth\index.js`, `12_todo_mongoDB\index.js`, `13_course_selling\routes\*.js` | Implementation | Repeated sign/verify. |
| localStorage token | `09_auth_middleware\public\index.html` | Implementation | Token set/get/remove. |
| Auth middleware | `09_auth_middleware\index.js`, `11_To_Do_Auth\index.js`, `12_todo_mongoDB\index.js`, `13_course_selling\middlewares\*.js` | Implementation | Protected route pattern. |
| bcrypt | `12_todo_mongoDB\index.js` | Implementation | Hash and compare. |
| Zod | `12_todo_mongoDB\index.js` | Implementation | Signup schema and safeParse. |
| MongoDB/Mongoose | `12_todo_mongoDB\db.js`, `13_course_selling\db.js` | Implementation | Schemas/models/queries. |
| ObjectId relationships | `12_todo_mongoDB\db.js`, `13_course_selling\db.js`, `13_course_selling\db_schema.png` | Implementation/design | userId, creatorId, courseId. |
| dotenv/env config | `13_course_selling\index.js`, `config.js`, `.env.example` | Implementation/config | Env loading and config export. |
| Modular Express routers | `13_course_selling\index.js`, `routes\user.js`, `routes\admin.js`, `routes\course.js` | Implementation | Route modules mounted by prefix. |
| React/Vite | React project `package.json`, `vite.config.js`, `src\main.jsx` files | Config/implementation | Repeated setup. |
| JSX components | `16_react_practice\src\*.jsx`, `17_mini_Concepts_React\src\*.jsx`, `25_tailwind_css\src\components\*.jsx` | Implementation | Reusable components. |
| Props | `16_react_practice\src\post.jsx`, `17_mini_Concepts_React\src\hi.jsx` | Implementation | Component inputs. |
| Children | `17_mini_Concepts_React\src\card.jsx`, `20_state_experiments\src\Components.jsx` | Implementation | Wrapper/provider patterns. |
| useState | Many React files | Implementation | 50 pattern hits. |
| useEffect | `14`, `15`, `16`, `21` React files | Implementation | Lifecycle, fetch, timers. |
| useRef | `19_useRef\src\Clock.jsx`, `Signup.jsx`, `21_Custom_Hooks\hooks\usePrev.js`, `25_tailwind_css\src\components\Otp.jsx` | Implementation | Timers, focus, previous value, OTP refs. |
| Custom hooks | `21_Custom_Hooks\src\Counter.jsx`, `hooks\useFetch.js`, `hooks\usePrev.js`, `hooks\useDeBounce` | Implementation | Reusable hook logic. |
| Context API | `20_state_experiments\src\Components.jsx` | Implementation | Provider and useContext. |
| React Router | `18_routing\src\App.jsx`, `Layout.jsx`, `Header.jsx`, `Johnbury.jsx`, `ErrorPage.jsx` | Implementation | BrowserRouter, Routes, Outlet, Link, useNavigate. |
| Recoil atoms | `22_recoil\store\atoms\counter.js`, `23_recoil_In_Depth\src\atoms.js`, `24_fe_be\7.4-easy-bits\src\atoms.js` | Implementation | Global state. |
| Recoil selectors | `22_recoil\store\atoms\counter.js`, `23_recoil_In_Depth\src\atoms.js`, `24_fe_be\7.4-easy-bits\src\atoms.js` | Implementation | Derived state. |
| Recoil atomFamily | `24_fe_be\atom-family\src\atoms.js`, `24_fe_be\selector-family\src\atoms.js`, `24_fe_be\loadables\src\atoms.js` | Implementation | Parameterized state. |
| Recoil selectorFamily | `24_fe_be\selector-family\src\atoms.js`, `24_fe_be\loadables\src\atoms.js` | Implementation | Parameterized async state. |
| Recoil loadables | `24_fe_be\loadables\src\App.jsx` | Implementation | Loading/value/error states. |
| Tailwind CSS | `25_tailwind_css\src\index.css`, `vite.config.js`, `tailwind.config.js`, `src\*.jsx` | Config/implementation | Tailwind plugin, utilities, custom colors. |
| ESLint | React project `eslint.config.js` files | Config | Lint tooling configured. |
| Testing | None found | Absence | No test/spec files. |
| CI/CD | None found | Absence | No workflows or deployment configs. |
| Security gaps | `12_todo_mongoDB\index.js`, `13_course_selling\.env`, `08/09/11/13` auth files | Implementation/config | Hardcoded or committed secrets; plaintext passwords in several apps. |

---

# Final Skill Summary

## Languages

- JavaScript: repeated practical use.
- JSX: repeated practical use.
- HTML: practical beginner.
- CSS: practical beginner.
- JSON: practical use.
- Markdown: introductory practical.
- TypeScript: not evidenced as implementation.
- SQL: not evidenced.

## Frontend

- Strongest: React fundamentals, useState, useEffect, components, props, event handling, simple async UI.
- Growing: React Router, Context API, custom hooks, Recoil, Tailwind.
- Weak/missing: protected React routes, robust forms, accessibility, polished responsive layouts, error boundaries, frontend test coverage.

## Backend

- Strongest: Express routes, middleware, JSON APIs, JWT auth basics.
- Growing: modular routers, role-based APIs, Mongoose integration, validation, password hashing.
- Weak/missing: centralized error handling, production security, rate limiting, cookies/sessions, tests, deployment.

## Databases

- Evidenced: MongoDB, Mongoose schemas/models, ObjectId relationships, unique email constraints, basic CRUD queries.
- Weak/missing: population, aggregation, indexing strategy, pagination, query optimization, SQL.

## Tools

- Evidenced: npm, package-lock workflow, Vite, ESLint config, nodemon, dotenv, Git ignore patterns.
- Weak/missing: Prettier, tests, CI/CD, Docker, deployment automation.

## Frameworks

- Express.js.
- React.
- Vite.
- Recoil.
- React Router.
- Tailwind CSS.
- Mongoose.

## Strongest Skills

Top 10 strongest demonstrated skills:

1. Express route handling.
2. Express middleware.
3. JWT authentication basics.
4. React `useState`.
5. React `useEffect`.
6. Component composition with props.
7. API calls with Axios/Fetch.
8. Recoil atoms/selectors.
9. MongoDB/Mongoose basics.
10. npm/Vite project workflow.

## Skills Requiring More Practice

Top 10 skills needing reinforcement:

1. Automated testing.
2. Secret management and secure environment handling.
3. Consistent validation with Zod.
4. Password hashing everywhere auth exists.
5. Centralized async error handling.
6. Authorization edge cases and ownership checks.
7. React protected routes and auth context.
8. TypeScript.
9. Deployment/CI/CD workflow.
10. Database pagination, indexing, and deeper querying.

## Recommended Next Learning Roadmap

1. Clean up security basics immediately.
   - Remove committed `.env`.
   - Rotate exposed secrets.
   - Replace hardcoded Mongo/JWT secrets with env variables.

2. Upgrade `13_course_selling`.
   - Add bcrypt, Zod validation, try/catch, consistent status codes, and duplicate purchase checks.

3. Build a React frontend for `13_course_selling`.
   - Use React Router, forms, Axios, localStorage token handling, and protected UI.

4. Strengthen custom hooks.
   - Fix `useDeBounce`.
   - Build reliable `useFetch` with loading/error/refetch.

5. Create one polished full-stack project.
   - React + Tailwind + Express + MongoDB + JWT + bcrypt + Zod.

6. Add tests.
   - Start with backend route tests and hook/component tests as optional new tooling.

7. Add production workflow.
   - Use `.env.example`, clean scripts, README setup, and later CI/CD/deployment.

8. Learn TypeScript after one polished JavaScript full-stack app.
   - Not evidenced yet, but high-value next step.

9. Practice database depth.
   - Add pagination, indexes, relationship lookup patterns, and query error handling.

10. Refactor for maintainability.
   - Move repeated backend logic into controllers/services/middlewares.
   - Move frontend API calls into a small client module.

---

# Closing Assessment

This repository tells a coherent learning story: from isolated JavaScript/Express drills to increasingly realistic full-stack patterns, then into React state management and UI styling. The owner has enough demonstrated skill to build useful beginner and intermediate projects. The next transformation is from "I can implement the concept" to "I can ship a reliable app": validation everywhere, secrets handled correctly, tests, clean error handling, secure auth, and one polished end-to-end project.
