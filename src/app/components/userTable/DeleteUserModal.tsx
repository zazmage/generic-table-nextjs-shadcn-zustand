import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useUserStore } from "./store/store"
import { Loader2 } from "lucide-react"

export function DeleteUserModal() {
  const isOpen = useUserStore((state) => state.isDeleteUserModalOpen)
  const selectedUser = useUserStore((state) => state.selectedUser)
  const onClose = () => useUserStore.getState().setIsDeleteUserModalOpen(false)
  const handleDelete = useUserStore((state) => state.handleDelete)
  const isActionLoading = useUserStore((state) => state.isActionLoading)

  const confirmDelete = async () => {
    if (selectedUser) {
      await handleDelete(selectedUser)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isActionLoading}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={confirmDelete} disabled={isActionLoading}>
            {isActionLoading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : null}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

