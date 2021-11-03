const express = require('express');
const cors=require('cors')
const app = express()
//const {client}=require('./database/db')
const http = require('http')
const server =http.createServer(app);


app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());
app.use(cors())



// app.get('/api/getbill/:year',async (req, res)=> {
//   var year=parseInt(req.params.year)
//   console.log(year)
//   try {
//     return await client.query(`SELECT * from hoadon h where EXTRACT(YEAR FROM ngaylap)=${year}`,(err,data)=>{
//       res.status(200).json({result:data.rows,success:true})
//     })
//   }catch(err){
//     res.status(400).json({error:"loi",success:false})
//   }
// })
// app.get('/api/getbill', async(req, res)=> {
//   try{
//     return await client.query(`SELECT * FROM HOADON`,(err,data)=>{
//       console.log(data.rows)
//       res.status(200).json({result:data.rows,success:true})
//     })
//   }catch(err){
//     res.status(400).json({error:"loi",success:false})
//   } 
// })
// app.post('/api/add',async(req,res)=>{
//   const data=req.body
//   data.sum=parseFloat(data.sum)
//   console.log(data)

//   try{
//     return await client.query(`INSERT INTO HOADON("mahd","makh","ngaylap","tongtien") values ('${data.mahoadon}','${data.makhachhang}','${data.ngaylap}',${data.sum}); `,(err,data)=>{
//       if(data){
//         res.status(200).json({success:true})
//       }else{
//         res.status(200).json({success:false,message:'khachhang'})
//       }
//     })
//   }catch(err){
//     res.status(400).json({error:"loi",success:false})

//   }
  
// })
app.get('/',(req,res)=>{
  res.send('Hello world')
})


server.listen(process.env.PORT||3000,()=>{
  console.log('Server listening on port 3000')
})