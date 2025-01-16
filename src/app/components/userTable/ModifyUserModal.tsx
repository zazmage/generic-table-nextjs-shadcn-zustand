import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useUserStore } from './store/store'
import { Loader2 } from 'lucide-react'


export function ModifyUserModal() {
  const isOpen = useUserStore((state) => state.isModifyUserModalOpen)
  const selectedUser = useUserStore((state) => state.selectedUser)
  const onClose = () => useUserStore.getState().setIsModifyUserModalOpen(false)
  const handleModify = useUserStore((state) => state.handleModify)
  const isActionLoading = useUserStore((state) => state.isActionLoading)

  const [modifiedUser, setModifiedUser] = useState(selectedUser || { id: 0, name: '', email: '', role: '' })

  useEffect(() => {
    if (selectedUser) {
      setModifiedUser(selectedUser)
    }
  }, [selectedUser])

  const saveChanges = async () => {
    await handleModify(modifiedUser)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modify User</DialogTitle>
          <DialogDescription>
            Modify the user details below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={modifiedUser.name}
              onChange={(e) => setModifiedUser({ ...modifiedUser, name: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={modifiedUser.email}
              onChange={(e) => setModifiedUser({ ...modifiedUser, email: e.target.value })}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Role
            </Label>
            <Input
              id="role"
              value={modifiedUser.role}
              onChange={(e) => setModifiedUser({ ...modifiedUser, role: e.target.value })}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={saveChanges} disabled={isActionLoading}>
            {isActionLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

