# Quotes REST API

A lightweight RESTful API built with **Express.js** for managing a collection of inspirational quotes. Supports full CRUD operations over an in-memory data store.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd quotes-api
npm install
```

### Running the Server

```bash
node index.js
```

Server will be available at `http://localhost:3000`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Body Parsing | body-parser, express.json() |
| Data Store | In-memory array |

---

## API Endpoints

Base URL: `http://localhost:3000`

### Get All Quotes

```
GET /quotes
```

**Response** `200 OK`
```json
[
  { "id": 1, "text": "The only way to do great work is to love what you do." },
  ...
]
```

---

### Get Quote by ID

```
GET /quotes/:id
```

**Response** `200 OK`
```json
{ "id": 1, "text": "The only way to do great work is to love what you do." }
```

---

### Create a New Quote

```
POST /quotes
```

**Request Body**
```json
{ "text": "Your new quote here." }
```

**Response** `200 OK`
```json
{ "id": 100, "text": "Your new quote here." }
```

---

### Replace a Quote (Full Update)

```
PUT /quotes/:id
```

**Request Body**
```json
{ "text": "Updated quote text." }
```

**Response** `200 OK`
```json
{ "id": 1, "text": "Updated quote text." }
```

---

### Update a Quote (Partial Update)

```
PATCH /quotes/:id
```

**Request Body** *(all fields optional)*
```json
{ "text": "Partially updated text." }
```

**Response** `200 OK`
```json
{ "id": 1, "text": "Partially updated text." }
```

---

### Delete a Quote

```
DELETE /quotes/:id
```

**Response** `200 OK`
```json
{ "message": "Quote deleted complete." }
```

**Response** `404 Not Found`
```json
{ "error": "Quote with id 999 not found." }
```

---

## Project Structure

```
quotes-api/
├── index.js        # Main server file (routes + data)
├── package.json
└── README.md
```

---

## Notes & Limitations

- **No persistent storage** — all data is stored in memory. Changes are lost on server restart.
- **No authentication** — all endpoints are publicly accessible.
- **ID generation** — new quote IDs are based on `quotes.length + 1`, which can produce duplicate IDs after deletions.


