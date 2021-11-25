import {screen,render} from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting Component', ()=>{
    test('should ', () => {
        // Arrange
        render(<Greeting/>);
    
        // Act
        ///nothing..
    
        //assert
        const gEl= screen.getByText(/hi there/i,{exact:false})
        expect(gEl).toBeInTheDocument();
        // expect(gEl).not.toBeInTheDocument();
    })
})

