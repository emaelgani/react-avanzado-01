import { useReducer, useState } from "react"
import { CounterState } from "./interfaces/interfaces";
import { CounterAction, doReset, increasyBy } from "./actions/actions";
import { counterReducer } from "./state/counterReducer";


const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}


export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)


    const increaseBy = (value: number) => {
        dispatch(increasyBy(value))
    }

    const handleReset = () => {
        dispatch(doReset())
    }

    return (
        <>

            <h1>Counter Reducer Segment: {counterState.counter}</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>


            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>10</button>
            <button onClick={handleReset}>Reset</button>

        </>
    )
}
