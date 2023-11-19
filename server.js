
const { app } = require('./app')
const port = 5000;
let server;
async function main() {
    try {
        server = app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}

main()