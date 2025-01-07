import { expect, describe,test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResponsiveNavbar } from "@/components/responsiveNavbar";


describe('<ResponsiveNavbar/>', () => {
    test('should render the responsive navbar', () => {
        render(<ResponsiveNavbar />)
    })
})