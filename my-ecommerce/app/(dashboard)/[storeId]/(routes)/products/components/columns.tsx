"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type ProductsColumn = {
  id: string
  name : string
  price : string
  category : string
  size : string
  color : string
  isFeatured : boolean
  isArchived : boolean
  createdAt: string
}

export const columns: ColumnDef<ProductsColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "isArchived",
    header: "Archived",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "size",
    header: "Size",
  },
  {
    accessorKey: "color",
    header: "Color",
    cell : ({ row }) => <div className="flex items-center">
      {row.original.color}
      <div className="w-4 h-4 rounded-full border" 
      style={{backgroundColor: row.original.color}}
      />
    </div>
  },

  {
    accessorKey: "createdAt",
    header: "Date",
  },
  

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}/>
  }

]
