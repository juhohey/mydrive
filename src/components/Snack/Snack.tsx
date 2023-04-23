import React from 'react'
import { useAppSelector } from '../../store/store'

export default function Snack() {
  const snack = useAppSelector((state) => state.snack)

  const last = snack[snack.length - 1]
  if (!last) return null

  return (
    <aside className="snack" key={snack.length.toString()}>
      {last}
    </aside>
  )
}
