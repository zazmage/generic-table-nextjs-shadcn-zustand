'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Filter from './Filter'
import { TableSkeleton } from './TableSkeleton'
import { TableActions } from './TableActions'
import ActionButton from './ActionButton'
import Pagination from './Pagination'
import { useUserStore } from './store/store'
import { useEffect } from "react"

export default function UserTable() {
  const {
    users,
    filter,
    currentPage,
    isLoading,
    fetchUsers,
  } = useUserStore()

  useEffect(() => {
    fetchUsers()
  }, [filter, currentPage, fetchUsers])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users Table</h1>
      <div className="flex justify-between items-center mb-4">
        <Filter />
        <TableActions />
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableSkeleton />
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className="text-right">
                    <ActionButton
                      user={user}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4">
        <Pagination />
      </div>
    </div>
  )
}

