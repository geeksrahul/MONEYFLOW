import React from 'react'
import AmountWrapper from './AmountWrapper';
function Bar({ percentage, name, amount }) {
    return (
        <div className="flex h-full flex-1 flex-col items-center gap-3">
            <AmountWrapper amount={amount} />

            <div className="flex flex-1 w-full items-end justify-center">
                <div
                    className="w-full max-w-12 rounded-t-md bg-purple-500"
                    style={{ height: `${percentage}%` }}
                />
            </div>

            <span className="text-xs text-gray-500">
                {name.slice(0, 3)}
            </span>
        </div>
    )
}

export default Bar