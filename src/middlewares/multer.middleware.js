import multer from "multer";


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"/public/temp")
    },
    // filename:function(req,file,cb){

        // const uniqueSuffix=Date.now() + '_' + Math.round(Math.random()*1E9)
        // cb(null,file.filename + '_' + uniqueSuffix)

        // or
                // cb(null,file.originalname)
    // }
    filename: function(req, file, cb) {
    const ext = file.originalname.split('.').pop(); // file extension
    const name = file.originalname.split('.')[0];
    const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9);
    cb(null, name + '_' + uniqueSuffix + '.' + ext);
}
})

export const upload=multer({storage:storage})
