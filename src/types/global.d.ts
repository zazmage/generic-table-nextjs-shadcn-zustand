interface User {
  id: number
  name: string
  email: string
  role: string
}

interface UserState {
  users: User[]
  totalPages: number
  filter: string
  currentPage: number
  isAddUserModalOpen: boolean
  isLoading: boolean
  isActionLoading: boolean
  setFilter: (filter: string) => void
  setCurrentPage: (page: number) => void
  setIsAddUserModalOpen: (isOpen: boolean) => void
  fetchUsers: () => Promise<void>
  handleModify: (modifiedUser: User) => Promise<void>
  handleDelete: (userToDelete: User) => Promise<void>
  handleAddUser: (newUser: Omit<User, 'id'>) => Promise<void>
}