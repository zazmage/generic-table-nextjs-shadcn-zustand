# Generic Table

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Next.js](https://img.shields.io/badge/Next.js-20232A?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-222222?style=for-the-badge&logo=zustand&logoColor=white)

A powerful and flexible table component built with Next.js and Zustand for managing user data.

## Project Description

Generic Table is designed to seamlessly integrate into Next.js projects, offering robust state management with Zustand and elegant UI components using ShadCN and Lucid-react. It facilitates efficient user data operations, including creation, reading, updating, and deletion, all while ensuring a responsive and intuitive user experience.

## Features

- **User Management**: Create, read, update, and delete users.
- **Pagination**: Navigate through multiple pages of users.
- **Filtering**: Filter users by name, email, or role.
- **Modals**: Intuitive modals for adding and editing user information.
- **Responsive Design**: Fully responsive layout for all devices.

## Technologies Used

- [Next.js](https://nextjs.org): React framework for server-side rendering and building web applications.
- [Zustand](https://github.com/pmndrs/zustand): Small, fast, and scalable bearbones state management solution.
- [TypeScript](https://www.typescriptlang.org): Strongly typed programming language that builds on JavaScript.
- [Lucide-react](https://lucide.dev): 100% open source icons for React.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/generic-table.git
    cd generic-table
    ```

2. **Install dependencies**

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

Import and use the `UserTable` component in your Next.js pages:

```tsx
import UserTable from "@/components/userTable/UserTable";

export default function Home() {
  return (
    <div>
      <UserTable />
    </div>
  );
}
```

## Project Structure

- `src/app/components/userTable`: Contains the UserTable component and related modals.
- `src/lib/api`: API functions for fetching and manipulating user data.
- `src/app/store`: Zustand store for managing application state.

## Available Scripts

- `dev`: Runs the app in development mode.
- `build`: Builds the app for production.
- `start`: Starts the production server.
- `lint`: Lints the codebase.
- `test`: Runs the test suite.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Lucide Icons](https://lucide.dev/)
