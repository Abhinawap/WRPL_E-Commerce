"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"


export type CategoryColumn = {
  id: string
  name : string
  billboardlabel: string
  createdAt: string
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardlabel
  },

  {
    accessorKey: "createdAt",
    header: "Created At"
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original}/>
  }

]
