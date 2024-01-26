

const postBlogContoller = async (req, res) => {
    const { title, content } = req.body
    try {
        
        // =============== VALIDATING INPUTS =================== //
        if(!title || !content) return res.status(401).json({success: false, error: 'All input fields are required'})

        // 
    } catch (err) {
        return res.status(401).json({error: 'Somthing went Wrong', success: false, errorLog: err})
        
    }
}

module.exports = { postBlogContoller }