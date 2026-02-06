import app from "./app"

const port = process.env.PORT || 5000



const main = () => {
    try {
        app.listen(port, () => {
            console.log(`PH Health Care Server is running on http://localhost:${port}`)
        })
    } catch (error) {
        console.error("Error on running PH Health Care server...", error)
    }
}

main()