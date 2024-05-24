export async function getDataRepo (path) {
    const respositoryData = await fetch(`https://api.github.com/repos/${path}`)
    const newRepository = await respositoryData.json()

    return newRepository
}