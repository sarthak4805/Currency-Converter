import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange, // Changed from onCurrecyChange to onCurrencyChange
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const id = useId();

    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex ${className} shadow-md`}>
            <div className='w-1/2 pr-2'> {/* Adjust padding for better spacing */}
                <label htmlFor={id} className='text-gray-600 mb-2 block'>{label}</label>
                <input
                    id={id}
                    type='number'
                    className='outline-none w-full bg-transparent py-1.5 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-300'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 pl-2'> {/* Adjust padding for better spacing */}
                <p className='text-gray-600 mb-2'>Currency Type</p>
                <select
                    className='rounded-md border border-gray-300 bg-gray-100 cursor-pointer outline-none w-full py-1.5'
                    value={selectedCurrency}
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }} // Changed here as well
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
