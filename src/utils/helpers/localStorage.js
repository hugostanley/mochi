export function updateLocalStorage(key, newValue) {
    localStorage.setItem(key, JSON.stringify(newValue))
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || "null")
}
