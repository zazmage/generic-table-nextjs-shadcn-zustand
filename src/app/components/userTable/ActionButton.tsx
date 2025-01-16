'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from 'lucide-react'

import { useUserStore } from './store/store'
import { ModifyUserModal } from "./ModifyUserModal"
import { DeleteUserModal } from "./DeleteUserModal"

interface User {
  id: number
  name: string
  email: string
  role: string
}

export default function ActionButton({ user }: { user: User }) {
  const openModifyModal = () => {
    useUserStore.getState().setSelectedUser(user)
    useUserStore.getState().setIsModifyUserModalOpen(true)
  }

  const openDeleteModal = () => {
    useUserStore.getState().setSelectedUser(user)
    useUserStore.getState().setIsDeleteUserModalOpen(true)
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={openModifyModal}>Modify</DropdownMenuItem>
          <DropdownMenuItem onClick={openDeleteModal}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* No need to pass props, modals will use the store directly */}
      <ModifyUserModal />
      <DeleteUserModal />
    </>
  )
}

