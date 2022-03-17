const controller={};

controller.index=(req,res)=>{

    const data={
        name:"Adam Mohammed",
        age:20,
        city:"Cairo"
    };

    res.json(data)
}

module.exports= controller;