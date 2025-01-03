# OrgTionary

**OrgTionary** is a platform where users can search and find word definitions tailored to their organizational needs. It helps teams maintain a shared vocabulary with custom definitions, usage examples, and related terms—all centrally managed in a single, dynamic glossary.

---

## Live Demo

Visit the **live** OrgTionary app, deployed on Vercel:  
[**OrgTionary on Vercel**](https://orgtionary-frontend.vercel.app/)  

>No local setup is required to explore OrgTionary. Simply open the link above and start browsing or searching the glossary!

---

## Technology Stack

### Frontend

- **[Next.js + React (App Router)](https://nextjs.org/)**  
  - React-based framework for server rendering, static site generation, and route handling.  
  - **TypeScript** for type safety and improved developer experience.  
  - Deployed on **Vercel** for a seamless CI/CD pipeline.
-  **Tailwind CSS + Global Styles**  
    - Utility-first styling using [Tailwind CSS](https://tailwindcss.com/).
   - Additional global styles are defined in `globals.css`.

- **Context API (`GlossaryDataContext`)**  
  - Provides a global data store for glossary terms, definitions, usage examples, etc.

### Backend

- **[Node.js](https://nodejs.org/)**  
  - Custom server logic and RESTful endpoints (if applicable) to handle data requests.

- **[PostgreSQL via Supabase](https://supabase.com/)**  
  - In production, the OrgTionary database is hosted on Supabase, which provides a managed PostgreSQL database (and additional features like authentication if needed).
  - Locally, you can run a Postgres instance to mirror production behavior, or use Supabase's free tier for development.

>**Architecture**: The frontend (Next.js) may fetch data from a Node server, which in turn communicates with a PostgreSQL database. This clean separation allows for scalable, maintainable code.

---

## How It Works

1. **User Interface**  
   - Users can browse or search for specific words in the **OrgTionary**.  
   - Each word has a dedicated detail page: definition, usage examples, and related terms.

2. **Global Data Management**  
   - The **`GlossaryDataContext`** provides a unified source of truth for the glossary data.  
   - Components across the app can easily consume the data without repeated fetching.

3. **Backend & Database**  
   - When the user fetches a particular word, the Node backend queries the PostgreSQL database for the matching record.  
   - The data is returned to Next.js for server-side or client-side rendering (depending on your implementation).

4. **Deployed on Vercel**  
   - The Next.js app is continuously deployed to Vercel, so each push to the main branch updates the live site almost instantly.

## Contributing
If you want to contribute (e.g., fix a bug or add a feature):

- Fork the repository.
- Create a feature branch with your changes.
- Submit a Pull Request describing the changes.


## Data Disclaimer

The words, definitions, and examples in this demo are **dummy data** used solely for illustration. They may not reflect accurate or official definitions for real organizations or industries. 

## MVP Status & Future Features

**OrgTionary** is currently at a **minimal viable product (MVP)** stage. It demonstrates the core functionality of defining and searching for words within an organizational context. 

### Potential Enhancements
- **User Favorites**: Allow users to bookmark or “favorite” words for quick reference.
- **User-Generated Content**: Let authenticated users add or edit definitions, examples, and related terms directly in the app.
- **Tags & Categories**: Introduce a tagging system or categories for more nuanced grouping of words.
- **Permissions & Roles**: Define different access levels (e.g., admin, editor, viewer).
- **Collaboration Tools**: Let team members comment on or discuss specific definitions.
- **Analytics**: Track word usage, search frequency, or trending terms.

*Feel free to suggest or contribute any new features by opening an issue or submitting a pull request!* 

## More Info
- Next.js Docs: https://nextjs.org/docs
- Node.js: https://nodejs.org/
- PostgreSQL: https://www.postgresql.org/
- Deploying on Vercel: https://vercel.com/docs