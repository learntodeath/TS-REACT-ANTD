import React from 'react'
import Button from './button'
import {render} from '@testing-library/react'


describe('test Button component', ()=>{
    it('should render the correct default button',()=>{
        const wrap = render(<Button>Nice</Button>)
        const element = wrap.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })
    it('should render the correct component base on different props',()=>{
    })
    it('should render a link when btnType equals link and href is provided',()=>{
    })
    it('should render disabled button when disabled set to true',()=>{
    })
})