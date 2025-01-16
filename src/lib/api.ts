"use server"

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'User' },
  { id: 6, name: 'Eva Wilson', email: 'eva@example.com', role: 'User' },
  { id: 7, name: 'Frank Miller', email: 'frank@example.com', role: 'Admin' },
  { id: 8, name: 'Grace Lee', email: 'grace@example.com', role: 'Manager' },
  { id: 9, name: 'Henry Taylor', email: 'henry@example.com', role: 'User' },
  { id: 10, name: 'Ivy Chen', email: 'ivy@example.com', role: 'User' },
  { id: 11, name: 'Jack Brown', email: 'jack@example.com', role: 'User' },
  { id: 12, name: 'Kelly White', email: 'kelly@example.com', role: 'Manager' },
  { id: 13, name: 'Liam Harris', email: 'liam@example.com', role: 'User' },
  { id: 14, name: 'Mia Johnson', email: 'mia@example.com', role: 'Admin' },
  { id: 15, name: 'Noah Garcia', email: 'noah@example.com', role: 'User' },
  { id: 16, name: 'Oliver Smith', email: 'oliver@example.com', role: 'User' },
  { id: 17, name: 'Patricia Lee', email: 'patricia@example.com', role: 'Manager' },
  { id: 18, name: 'Quinn Jones', email: 'quinn@example.com', role: 'User' },
  { id: 19, name: 'Rachel Brown', email: 'rachel@example.com', role: 'Admin' },
  { id: 20, name: 'Samuel Wilson', email: 'samuel@example.com', role: 'User' },
  { id: 21, name: 'Tara Davis', email: 'tara@example.com', role: 'Manager' },
  { id: 22, name: 'Uma Patel', email: 'uma@example.com', role: 'User' },
  { id: 23, name: 'Victor Martinez', email: 'victor@example.com', role: 'User' },
  { id: 24, name: 'Wendy Taylor', email: 'wendy@example.com', role: 'Admin' },
  { id: 25, name: 'Xavier Rodriguez', email: 'xavier@example.com', role: 'User' },
  { id: 26, name: 'Yara Anderson', email: 'yara@example.com', role: 'Manager' },
  { id: 27, name: 'Zack Thompson', email: 'zack@example.com', role: 'User' },
  { id: 28, name: 'Amy Chen', email: 'amy@example.com', role: 'User' },
  { id: 29, name: 'Brian Wilson', email: 'brian@example.com', role: 'Admin' },
  { id: 30, name: 'Carla Murphy', email: 'carla@example.com', role: 'User' },
]

let users = [...initialUsers];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getUsers(page: number, perPage: number, filter: string = '') {
  await delay(500);
  const lowercasedFilter = filter.toLowerCase();
  const filtered = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(lowercasedFilter)
    )
  );

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    users: filtered.slice(start, end),
    totalPages,
    totalItems
  };
}

export async function createUser(userData: Omit<User, 'id'>) {
  await delay(2000);
  const newId = Math.max(...users.map(user => user.id)) + 1;
  const newUser = { ...userData, id: newId };
  users = [...users, newUser];
  return newUser;
}

export async function updateUser(userData: User) {
  await delay(2000);
  users = users.map(user =>
    user.id === userData.id ? userData : user
  );
  return userData;
}

export async function deleteUser(id: number) {
  await delay(2000);
  users = users.filter(user => user.id !== id);
  return id;
}