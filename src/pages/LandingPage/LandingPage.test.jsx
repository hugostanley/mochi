import '@testing-library/react'
import { render, screen } from '@testing-library/react'
import { LandingPage } from './LandingPage'
import { BrowserRouter } from 'react-router-dom'
import { test } from 'vitest'
import { expect } from 'vitest'

test("Renders title", () => {
    render(<BrowserRouter><LandingPage/></BrowserRouter>)
    const textElement = screen.getByText("This is the landing page")
    expect(textElement).toBeInTheDocument()
})
