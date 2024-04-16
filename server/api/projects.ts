import data from './projects.json';

export default defineEventHandler(async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, 2500)
    })
})