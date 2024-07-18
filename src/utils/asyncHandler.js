
//using promise resolve and reject
const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err)) 
    }
}



export {asyncHandler}


// const asyncHandler = (fn) =>{ () =>{ } } //niche wale code ms bs curly braces hta diye , both functions are same only


// using try catch
// const asyncHandler = (fn) => async (req,res,next) => { 
//     try{

//     }
//     catch{
//         res.status(err.code || 500).json(
//             {
//                 success:false,
//                 message:err.message
//             }
//         )
//     }
// }