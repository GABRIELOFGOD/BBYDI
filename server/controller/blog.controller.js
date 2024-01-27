const { con } = require("../config/mySql.config");
const crypto = require('crypto')

const postBlogContoller = async (req, res) => {
    const { title, content } = req.body;
    let imageUrl;
    try {
        
        // =============== VALIDATING INPUTS =================== //
        if(!title || !content) return res.status(401).json({success: false, error: 'All input fields are required'})

        // ========================== CHECKING IF BLOG EXISTS ============================= //
        const checkBlogExists = con.query(`SELECT * FROM blog WHERE content=${content}`, (err, response) => {
            if(response) return res.status(402).json({error: 'Blog Already Exists in the database', success: false, errorLog: err})
        })

        if(req.file){
            imageUrl = req.file.pathname
        }else{ imageUrl = '123jgdj.com'}

        const id = crypto.randomBytes(16).toString("hex");
        console.log(id)
        con.query(`INSERT INTO blog(id, title, content, dateCreated, postedBy, updatedAt, image_url) VALUES('${id.toString()}', '${title}', '${content}', '1de', '${imageUrl}')`, (err, response, data) => {
            if(err) return res.status(402).json({error: 'Unable to save data into database', success: false, errorLog: err})
            console.log(data)
            res.send('Inserted')
        })


    } catch (err) {
        return res.status(401).json({error: 'Somthing went Wrong', success: false, errorLog: err})
        
    }
}

module.exports = { postBlogContoller }