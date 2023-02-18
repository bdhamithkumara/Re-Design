import { db } from '../db.js';

export const getDetails = (_,res) => {
    const q = "SELECT * FROM detailsall";

    db.query(q,(err,data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const insertDetails = (req,res) => {
    const q = "INSERT INTO detailsall (`name`, `phone`, `email`, `question`, `check1`, `check2`, `check3`, `check4`, `check5`, `check6`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.question,
        req.body.text1,
        req.body.text2,
        req.body.text3,
        req.body.text4,
        req.body.text5,
        req.body.text6,
        
    ];
    db.query(q,[values],(err) => {
        if(err) return res.json(err);
        return res.status(200).json("insert done");
    });
}