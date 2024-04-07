'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useIdContext } from '../context/context'
import React from 'react'

const testContext = () => {
    const { id, setId } = useIdContext()

    const params = useSearchParams()

    const urlId = params.get('id')

    setId(urlId) 
  return (
    <div>testContext</div>
  )
}

export default testContext