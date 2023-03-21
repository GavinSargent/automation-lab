const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {crossOffMovie, uncrossMovie, watchMessage} = require('../testFunctions/functions')

beforeAll( async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll( async () => {
    await driver.quit()
})

describe('cross off and uncross functionality', () => {
    test('check if crossed off', async () => {
        await crossOffMovie(driver)
        await driver.sleep(1000)
    })

    test('check if crossed movie gets uncrossed', async () => {
        await uncrossMovie(driver)
        await driver.sleep(1000)
    })

    test('check to see if the move watched message displays', async () => {
        await watchMessage(driver)
    })
})

// test('check to see if a movie is deleted', async () =>{
//     await deleteMovie(driver)
// })

