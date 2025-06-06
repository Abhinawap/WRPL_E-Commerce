"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type ColorsColumn = {
  id: string
  name : string
  value : string
  createdAt: string
}

export const columns: ColumnDef<ColorsColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  
  },
  {
    accessorKey: "value",
    header: "Value",
    cell : ({ row }) => <div className="flex items-center">
      {row.original.value}
      <div className="w-4 h-4 rounded-full border" 
      style={{backgroundColor: row.original.value}}
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
