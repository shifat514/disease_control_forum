const express = require('express')
const router = express.Router()
const ReportModel = require('../Models/Report.js')

router.post('/submitReport', async (req, res)=>{
    let {post_id, description} = req.body;

    console.log(req.body)

    let report = new ReportModel({
        post_id,
        description
    })

    try{
        let savedPost = await report.save()
        
        res.json({message: 'reportsubmitted'})
        
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router