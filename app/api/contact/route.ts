import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const service = formData.get('service') as string
    const suburb = formData.get('suburb') as string
    const message = formData.get('message') as string
    const privacy = formData.get('privacy') as string

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !privacy) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\(\)\+\-]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email to your business email
    // 2. Store the contact request in a database
    // 3. Send a confirmation email to the customer
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      service,
      suburb,
      message,
      privacy,
      timestamp: new Date().toISOString()
    })

    // TODO: Implement actual email sending
    // Example using a service like Resend, SendGrid, or Nodemailer
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you within 15-30 minutes.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
