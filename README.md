# 📚 Library MS

minimal library management system. This system will allow users to view 
a list of books, 
perform CRUD operations, 
borrow books, 
and view a simple borrow summary without authentication.

A functional and clean client-side application that interacts with a RESTful API, 
demonstrating proper state management, 
UI design, and core functionality.

A React-based book management system that allows users to view, borrow, and manage book data using **Redux Toolkit** and **RTK Query**. Built with a modern stack including **Tailwind CSS**, **React Router**, and **TypeScript**.

---

## 🚀 Features

- 📖 View a list of books
- 🔍 Get detailed book information
- 📥 Borrow book functionality
- 📊 Borrow summary tracking
- 🔁 Optimistic updates with RTK Query
- 🎨 Responsive and clean UI using Tailwind CSS

---

## 🔁 Page List

- ✅ /books – Displays a list of all books with options to view, edit, delete, and borrow.
- ✅ /create-book – Form interface to add a new book to the system.
- ✅ /books/:id – Detailed view of a single book’s information.
- ✅/edit-book/:id – Interface to update an existing book’s details
- ✅ /borrow/:bookId – Form to borrow a selected book.
- ✅ /borrow-summary – Displays an aggregated summary of all borrowed books.


## 🔁 Backend (MVC Pattern)

#### Database MongoBD

- 🔁 Books (with attributes like title, author, genre, isbn, description, copies, available)
- 🔁 Borrows (linked to book, quantity, dueDate etc)

#### Book Management:
- 🔁 Implement CRUD operations for book (create, read, update, delete).

#### Borrow Management
- 🔁 Execute CRUD operations for borrow (borrow, summery), ensuring copies levels before borrow are placed.

---

## 🛠️ Tech Stack

| Technology       | Description                                |
|------------------|--------------------------------------------|
| React            | Frontend UI framework                      |
| Redux Toolkit    | State management and API calls (RTK Query) |
| TypeScript       | Type safety throughout the project         |
| Tailwind CSS     | Utility-first CSS framework                |
| React Router     | Routing and navigation                     |
| React Hook Form  | Form management                            |          
| Shadcn           | Component Library                          |
| MongoDB          | Database                                   |
          
---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/akmal81/assingment-redux.git
cd assingment-redux

npm install

npm run dev


🔗 Connect
Author: Akmal Hossain
GitHub: @akmal81

