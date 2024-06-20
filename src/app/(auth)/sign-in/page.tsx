'use client'
import { useDebounceValue } from 'usehooks-ts'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z  from "zod"
import Link from "next/link"
import axios, {AxiosError} from 'axios'
import { useToast } from "@/components/ui/use-toast"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { signUpSchema } from '@/schemas/signUpSchema'
import { ApiResponse } from '@/types/ApiResponse'
const page = () => {
  const [username, setUsername] = useState('') // field
  const [usernameMessage, setUsernameMessage] = useState('') // request from backend
  const [isCheckingUsername, setIsCheckingUsername] = useState('false') // loader state,  boolean
  const [isSubmitting, setIsSubmitting] = useState(false) // form state response, boolean
  const debouncedUsername = useDebounceValue(username, 300)
  const { toast } = useToast();
  const router = useRouter();

  // zod implementation 

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  useEffect(() => {
 const CheckUsernameUnique = async () => {
  if (debouncedUsername) {
    setIsCheckingUsername(true)
    setUsernameMessage('')
    try {
     const response = await axios.get(`/api/c-uniqueUsername?username=${debouncedUsername}`)
      setUsernameMessage(response.data.message)
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      
      
    }
  }
 }
  }, [debouncedUsername])
  return (
    <div>page</div>
    // hook

  )
}

export default page