const {Client}=require('pg')
const client= new Client({
  connectionString:"postgres://pecxkydvwnhhww:d2227b6b03ac5959ef67647525c424d0f1cb45b7fc4c06873e564b0edfbbf6d9@ec2-44-198-196-169.compute-1.amazonaws.com:5432/d11m91rg965fs1",
  ssl: {
    rejectUnauthorized: false
  }
})
const a=async()=>{
  await client.connect()
}
a()

module.exports={
  client,
}
