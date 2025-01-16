import { Skeleton } from "@/components/ui/skeleton"
import { TableCell, TableRow } from "@/components/ui/table"

export function TableSkeleton() {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <TableRow key={i}>
          <TableCell><Skeleton className="h-6 w-[140px]" /></TableCell>
          <TableCell><Skeleton className="h-6 w-[200px]" /></TableCell>
          <TableCell><Skeleton className="h-6 w-[80px]" /></TableCell>
          <TableCell className="text-right">
            <Skeleton className="h-8 w-[100px] ml-auto" />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

