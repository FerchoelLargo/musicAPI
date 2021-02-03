const fs = require('fs');
const nodemailer = require('nodemailer');
const ejs = require('ejs')
const {mailTransporter} = require('./../globals.json');

const saveFile = (file,newpath,__callBack) => {
  const oldpath = file.path;
  fs.rename(oldpath, newpath,__callBack);
}

const readViewAsString = (path,data) =>{
  const file = fs.readFileSync(path,'utf-8')
  return ejs.render(file,data);
}

const sendMail = async(from,to,subject, text,html) =>{
  const transporter = nodemailer.createTransport(mailTransporter);
  return new Promise(async(resolve,reject) => {
    try{
      const info = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        text:text,
        html: html,
      });
      resolve(info)
    }catch(e){
      reject(e)
    }
  })
}


module.exports = { saveFile , readViewAsString, sendMail};