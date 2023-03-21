const {By} = require('selenium-webdriver')


const movie = "Unbroken"

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath("//input")).sendKeys(movie + "\n")
    const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    await newMovie.click()
    const crossedMovie = await driver.findElement(By.className("checked"))
    expect(crossedMovie.isDisplayed).toBeTruthy()
}

const uncrossMovie = async (driver) => {
    // await driver.findElement(By.xpath("//input")).sendKeys(movie + "\n")
    // const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    // await newMovie.click()
    const crossedMovie = await driver.findElement(By.className("checked"))
    await crossedMovie.click()
    const uncrossedMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    expect(uncrossedMovie.isDisplayed).toBeTruthy()
}

const watchMessage = async (driver) => {
    await driver.findElement(By.xpath("//input")).sendKeys(movie + "\n")
    const newMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
    await newMovie.click()
    const watched = await driver.findElement(By.id("message"))
    expect(watched.isDisplayed).toBeTruthy()

}


// const deleteMovie = async (driver) => {
//     await driver.findElement(By.xpath("//input")).sendKeys(movie + "\n");
//     await driver.findElement(By.xpath("//button[text()='x']")).click()
//     const deletedMovie = await driver.findElement(By.xpath(`//li/span[text()='${movie}']`))
//     expect(deletedMovie).toBeFalsy()
// }

module.exports = {
    crossOffMovie,
    uncrossMovie,
    watchMessage
    // deleteMovie
}