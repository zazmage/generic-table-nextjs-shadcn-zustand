import { useUserStore } from './store/store'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import { DialogDescription } from '@radix-ui/react-dialog'

export function AddUserModal() {
  const { setIsAddUserModalOpen, handleAddUser, isActionLoading } = useUserStore()
  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({ name: '', email: '', role: '' })

  const handleAdd = async () => {
    await handleAddUser(newUser)
    setNewUser({ name: '', email: '', role: '' })
    // Modal will close automatically via the store after action completes
  }

  return (
    <Dialog open onOpenChange={() => setIsAddUserModalOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new user.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input
              id="role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAdd} disabled={isActionLoading}>
            {isActionLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
            Add User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

