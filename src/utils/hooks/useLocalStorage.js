import { useState } from "react"

export function useLocalStorage(key, defaultValue) {
    const [data, setData] = useState(() => {
        const value = localStorage.getItem(key)

        if (value) {
            return JSON.parse(value)
        } else {
            localStorage.setItem(key, JSON.stringify(defaultValue))

            return defaultValue
        }
    })

    const setLocalStorage = (newValueOrFunc) => {
        let updatedValue

        if (typeof updatedValue === 'function') {
            updatedValue = newValueOrFunc(data)
        } else {
            updatedValue = newValueOrFunc
        }

        localStorage.setItem(key, JSON.stringify(updatedValue))
        setData(updatedValue)
    }

    return [data, setLocalStorage]
}
