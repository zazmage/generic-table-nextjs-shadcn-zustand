import { getUsers, createUser, updateUser, deleteUser } from '@/lib/api'
import { create } from 'zustand'

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
  isModifyUserModalOpen: boolean
  isDeleteUserModalOpen: boolean
  selectedUser: User | null
  isLoading: boolean
  isActionLoading: boolean
  setFilter: (filter: string) => void
  setCurrentPage: (page: number) => void
  setIsAddUserModalOpen: (isOpen: boolean) => void
  setSelectedUser: (user: User | null) => void
  setIsModifyUserModalOpen: (isOpen: boolean) => void
  setIsDeleteUserModalOpen: (isOpen: boolean) => void
  fetchUsers: () => Promise<void>
  handleModify: (modifiedUser: User) => Promise<void>
  handleDelete: (userToDelete: User) => Promise<void>
  handleAddUser: (newUser: Omit<User, 'id'>) => Promise<void>
}

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  totalPages: 1,
  filter: '',
  currentPage: 1,
  isAddUserModalOpen: false,
  isModifyUserModalOpen: false,
  isDeleteUserModalOpen: false,
  selectedUser: null,
  isLoading: false,
  isActionLoading: false,

  setFilter: (filter) => set({ filter }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setIsAddUserModalOpen: (isOpen) => set({ isAddUserModalOpen: isOpen }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  setIsModifyUserModalOpen: (isOpen) => set({ isModifyUserModalOpen: isOpen }),
  setIsDeleteUserModalOpen: (isOpen) => set({ isDeleteUserModalOpen: isOpen }),

  fetchUsers: async () => {
    set({ isLoading: true })
    try {
      const result = await getUsers(get().currentPage, 3, get().filter)
      set({ users: result.users, totalPages: result.totalPages })
    } finally {
      set({ isLoading: false })
    }
  },

  handleModify: async (modifiedUser: User) => {
    set({ isActionLoading: true })
    try {
      await updateUser(modifiedUser)
      get().fetchUsers()
      set({ isModifyUserModalOpen: false, selectedUser: null })
    } finally {
      set({ isActionLoading: false })
    }
  },

  handleDelete: async (userToDelete: User) => {
    set({ isActionLoading: true })
    try {
      await deleteUser(userToDelete.id)
      get().fetchUsers()
      set({ isDeleteUserModalOpen: false, selectedUser: null })
    } finally {
      set({ isActionLoading: false })
    }
  },

  handleAddUser: async (newUser: Omit<User, 'id'>) => {
    set({ isActionLoading: true })
    try {
      await createUser(newUser)
      get().fetchUsers()
      set({ isAddUserModalOpen: false })
    } finally {
      set({ isActionLoading: false })
    }
  },
}))
