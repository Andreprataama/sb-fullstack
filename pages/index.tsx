/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'

const formSchema = z.object({
  url: z.string().min(1),
  title: z.string().min(1),
})

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingGet, setLoadingGet] = useState<boolean>(true)
  const [data, setData] = useState<any>([])
  console.log(data)

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/links/tampilkan')
      const data = await response.json()
      setData(data)

      setLoadingGet(false)
    }
    getData()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: '',
      title: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    try {
      setLoading(true)
      await fetch('/api/links/create', {
        method: 'POST',
        body: JSON.stringify(values),
      })
    } catch (error: any) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (loadingGet) {
    return (
      <div className="flex min-h-screen justify-center items-center">
        <span>LOADING</span>
      </div>
    )
  }

  return (
    <div className="p-4">
      <Card className="p-4">
        <CardHeader>
          <CardTitle>Share Link</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant={'outline'}
                className="mx-auto flex"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Submit'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {data.map((item: any, index: number) => {
        return (
          <Card className="mt-4" key={index}>
            <CardHeader>
              <CardTitle>User : {item.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>URL : {item.url}</p>
              <p>Title : {item.title}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
