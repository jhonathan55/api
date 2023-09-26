import * as express from "express"
import { AppDataSource } from "./data-source"
import routes from "./routes"
import * as cors from "cors"

const PORT=process.env.PORT || 3000
AppDataSource.initialize().then(async () => {
    // create express app
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/',routes)
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
}).catch(error => console.log(error))
