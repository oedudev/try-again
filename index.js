module.exports = {
    retry: async function (funcToExec, options) {
        const {
            delays,
            logError
        } = options

        for (let idx = 0; idx < delays.length; idx++) {
            try {
                const res = await funcToExec()
                return res
            } catch (err) {
                if (logError) {
                    console.error(err)
                }
                if (idx == options.length - 1) {
                    throw err
                }
            }
        }
    }
}