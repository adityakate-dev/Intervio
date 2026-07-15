import multer from 'multer'

const storage = multer.memoryStorage();


export const upload = multer({
    storage,
    limits: {fileSize: 5 * 1024 * 1024} //It means only upto 5 MB upload is acceptable
})
