import { render } from '@test-utils'
import { getLocalStorage } from '..'
import { expect } from 'vitest'

test("Should return null when localStorage key is not existing", ()=> {
    const result = getLocalStorage("something that does not exists")
    expect(result).toBeNull()
})


