const express= require('express')
const router= express.Router()
const Product = require ('../model/product')
const multer= require('multer')
const fs = require('fs');
const path = require('path');
const { constants } = require('os');




  // Get and Post Product

  router.get('/display', async(req,res)=>{

    Product.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.send(err))

  })

 
   /*  
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname )
        }
    });
     
   const upload = multer({ storage: storage });

     
   router.post('/upload', upload.single('image'), (req, res, next) => {
 
    var obj = {
        description: req.body.description,
        price: req.body.price,
        qte:req.body.qte,
        category:req.body.category,
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    Product.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            obj.save();
            res.redirect('/');
        }
    });
}); */
/* const storage = multer.diskStorage({
    destination:  function (req, file, cb) {
              const dirName =path.join(process.cwd(), './files/')
              console.log(dirName)
              if (!fs.existsSync(dirName)){
                      fs.mkdirSync(dirName);
              }
                  cb(null,dirName)
          },
    
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
  
router.post("/upload",upload.single('file'), async(req, res) => {
    var obj = {
        description: req.body.description,
        price: req.body.price,
        qte:req.body.qte,
        category:req.body.category,
        image: {
            data:  fs.readFileSync(path.join(__dirname + '/files/' + req.file.filename)),
            contentType: 'file/png'
        }
    }
    try {
        const newProduct = await new Product({ ...obj });
        console.log(newProduct)
        await newProduct.save();
        res.status(201).json({ msg: "Product added successfully" });
      } catch (error) {
        console.error("Error", error);
        res.status(401).json({ msg: "Product register failed" });
      }
}) */



const storage = multer.diskStorage({
    destination:  function (req, file, cb) {
              const dirName =path.join(process.cwd(), './routes/files/')
              console.log(dirName)
              if (!fs.existsSync(dirName)){
                      fs.mkdirSync(dirName);
              }
                  cb(null,dirName)
          },
    
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    }
  });
  
  router.post("/upload", upload.single('image'), async(req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        qte:req.body.qte,
        category:req.body.category,
        image: {
            data:  fs.readFileSync(path.join(__dirname +'\\files\\' + req.file.filename)),
            contentType: 'image/png'
        }
    });
    
        product.save()
        res.redirect('/client');

        
      
  });

  router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    Product.findByIdAndDelete({ _id })
        .then(() => res.send("Product has been deleted"))
        .catch(err => res.send(err))
  })

  router.get("/:category", (req, res) => {
    let { category } = req.params
    Product.find({ category})
    .then(search => res.status(200).json(search))
    .catch(err => res.send(err))
  })
module.exports=router