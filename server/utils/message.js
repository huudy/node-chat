var generateMsg = (from,text)=>{
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMsg = (from,lat,lng)=>{
    return {
        from,
        url:`http://google.com/maps?q=${lat},${lng}`,
        createdAt: new Date().getTime()
    };
};

module.exports = {generateMsg,generateLocationMsg}