import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDebounce } from 'use-debounce'
import { useUserStore } from './store/store'
import { useEffect } from 'react'

export default function Filter() {
  const { filter, setFilter } = useUserStore()
  const [debouncedFilter] = useDebounce(filter, 500)

  useEffect(() => {
    setFilter(debouncedFilter)
  }, [debouncedFilter, setFilter])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    useUserStore.getState().setFilter(e.target.value)
  }

  return (
    <div className="flex items-center space-x-2">
      <Input
        type="text"
        placeholder="Filter users..."
        value={useUserStore((state) => state.filter)}
        onChange={handleChange}
        className="max-w-sm"
      />
      <Button onClick={() => useUserStore.getState().setFilter('')} variant="outline">
        Clear
      </Button>
    </div>
  )
}

