import { render, screen } from '@test-utils'
import { LandingPage } from './LandingPage'
import { test, expect } from 'vitest'

test("Renders title", () => {
    render(<LandingPage />)
    const textElement = screen.getByText("This is the landing page")
    expect(textElement).toBeInTheDocument()
})
