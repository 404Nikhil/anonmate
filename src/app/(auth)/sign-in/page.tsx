'use client'
import { useDebounceValue } from 'usehooks-ts'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z  from "zod"
import Link from "next/link"
import { useState } from "react"
const page = () => {
  const [username, setUsername] = useState('') // field
  const [usernameMessage, setUsernameMessage] = useState('') // request from backend
  const [isCheckingUsername, setIsCheckingUsername] = useState('false') // loader state,  boolean
  const [isSubmitting, setIsSubmitting] = useState(false) // form state response, boolean
  const debouncedUsername = useDebounceValue(username, 300)
  
  return (
    <div>page</div>
    // hook

  )
}

export default page