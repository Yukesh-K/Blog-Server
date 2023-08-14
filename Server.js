const Express = require("express")
const App = Express()
const cors = require("cors")
const Routes = require("./Route/Route")

App.use(cors())
App.use(Routes)

App.get("/",(req,res)=>{
    res.send("Hi I am from Server 😍")
})

App.listen(process.env.PORT || 4545, () => console.log("Server started at 4545"))