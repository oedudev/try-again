const axios = require('axios')
const tryAgain = require('./index')

test('Test for 3 times', async () => {
    const options = {
        delays: [100, 200, 400],
        logError: true
    }

    try {
        const result = await tryAgain.retry(() => {
            return axios.get('http://www.slerpslerpslerp.com')
        }, options)
    } catch (err) {
        console.log("Fechou")
    }


})