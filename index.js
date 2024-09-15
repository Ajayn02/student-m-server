const jsonServer=require("json-server")

const smServer=jsonServer.create()

const middleware=jsonServer.defaults()
const router=jsonServer.router("db.json")

smServer.use(middleware)
smServer.use(router)

const PORT = 3000 || process.env.PORT

smServer.listen(PORT,()=>{
    console.log(`json server running @ port ${PORT}`);
    
})