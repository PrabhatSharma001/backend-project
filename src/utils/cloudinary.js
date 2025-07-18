import { v2 as cloudinary } from cloudinary;
//  node feature to read write edit and delete files
import fs from 'fs';

const uploadOnCloudinary=async(localFilePath)=>{
try{
    if(!localFilePath) return null
// upload the file on cloudinary
const response=await cloudinary.uploader.upload(localFilePath,{
    resource_type:'auto'
})
// file has been uploaded successfully now unlink it 
console.log("FIle uploaded on cloudinary",response)
return response;
}
catch(error){
    fs.unlinkSync(localFilePath) //remove the localy save temp file as the upload operation got failed 
    return null;
}
}


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});



