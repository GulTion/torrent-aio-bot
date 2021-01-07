const fs = require('fs')
const http = require('http');
const axios = require('axios')
const { uploadFileStream } = require("../utils/gdrive");
var request = require('request');
var progress = require('request-progress');
 
// The options argument is optional so you can omit it





const urlFileDownload = (url , dest,_name, cb, callback) =>{
    const intr = url.split("/");
    let name = intr[intr.length - 1];
    if(_name) name = _name

    if (name.length>30&&!_name){
      name = new Date().toTimeString()
      cb('File Name is Too large');
      return;
    }
  try{
    progress(request(url), {
})
.on('progress', function (state) {
    console.log('progress', state);
})
.on('error', function (err) {
  console.log("ERROR http ::", err);
  fs.unlinkSync(`./downloads/${name}`);
  cb("Someting Wrong in URL")
})
.on('end', function () {
  cb('File is Downloaded On Server');
  _file = fs.createReadStream(`./downloads/${name}`);
  
  uploadFileStream(name, _file).then(id=>{
   console.log(id.data)
   const driveLink = `https://drive.google.com/file/d/${id.data.id}/view?usp=sharing`;
   cb(`Name: ${name}\nDrive Link: ${driveLink}`)

  }).catch(err=>{
    _file.close();
    fs.unlinkSync(`./downloads/${name}`);
  })
  _file.on('end',()=>{
    _file.close();
    fs.unlinkSync(`./downloads/${name}`);
  })
  
})
.pipe(fs.createWriteStream(`./downloads/${name}`));
  }catch(err){
    console.log("FROM :" ,err)
  }
}
module.exports = urlFileDownload