// import app from "./index.js";


// app.listen(process.env.PORT,()=>{

// });



import app from "./index.js";

const PORT = process.env.PORT ||4000; // Fallback to 3000 if PORT is not set

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
