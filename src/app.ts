import express from 'express'
import RootRoute from './routes/root.route';
import AppDataSource from './database/db.config';

// Initialize 
const app = express()
const port = 8000;

// Middleware
app.use(express.json())

// Routes
app.use('/api', RootRoute)

AppDataSource.initialize().then(()=>{
    console.log(`Database Connected`)
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
}).catch((err) => {
    console.log("Database Connection Failed!!")
})

