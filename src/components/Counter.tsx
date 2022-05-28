import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [user, setUser] = useState<User | null>(null)

    interface User {
        name: string,
        job: string,
        address: string

    }

    const handleIncrease = (): void => {
        setCount(count + 1)
    }
    const handleUserSubmit = e => {
        e.preventDefault()
        const userData = {
            name: 'adam',
            job: 'dev',
            address: 'south donia',
        }
        setUser(userData)
    }

    return (
        <div>
            <h1>This Is Counter</h1>
            <h2>{count}</h2>
            <button
                onClick={handleIncrease}
            >Increase</button>
        </div>
    );
};

export default Counter;