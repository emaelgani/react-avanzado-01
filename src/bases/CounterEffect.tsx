import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'
import { time } from "console";

const MAXIMU_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, MAXIMU_COUNT))
    }

    useLayoutEffect(() => {
        if(counter < 10) return;

        console.log('Se llego al valor máximo')

        const timeLine = gsap.timeline();

        timeLine.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

    }, [counter])
    

    return (
        <>

            <h1>CounterEffect</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>+1</button>

        </>
    )
}
