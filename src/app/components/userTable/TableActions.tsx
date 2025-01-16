import { Button } from "@/components/ui/button"
import { AddUserModal } from './AddUserModal'
import { useUserStore } from './store/store'

export function TableActions() {
  const { isAddUserModalOpen, setIsAddUserModalOpen, users } = useUserStore()

  const handleDownloadCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Role']
    const csvContent = [
      headers.join(','),
      ...users.map(user => [user.id, user.name, user.email, user.role].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', 'users.csv')
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="space-x-2">
      <Button onClick={() => setIsAddUserModalOpen(true)}>Add User</Button>
      <Button onClick={handleDownloadCSV}>Download CSV</Button>
      {isAddUserModalOpen && <AddUserModal />}
    </div>
  )
}

