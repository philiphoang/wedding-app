import { NextResponse } from 'next/server'
import { createServerClient } from '@/utils/supabase/client'

export async function POST(req: Request) {
  try {
    const supabase = createServerClient()
    const body = await req.json()

    const { name, contact, attending } = body

    const { data, error } = await supabase
      .from('rsvp')
      .insert([{ name, contact, attending }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
