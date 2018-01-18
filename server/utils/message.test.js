var expect = require('expect');
var {generateMsg,generateLocationMsg} = require('./message')
describe('generateMessage',()=>{
    it('should generate correct message',()=>{
        var from = "Me";
        var text = "FOSDIFJDOIFJ";
        var message = generateMsg(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    })
});

describe('generateLocationMessage',()=>{
    it('should generate correct message',()=>{
        var from = "Me";
        var lat = 1;
        var lng = 2;
        var url = 'https://www.google.com/maps?q=1,2'
        var message = generateLocationMsg(from,lat,lng);

        expect(typeof message.createdAt).toBe('number');
        
        expect(message).toMatchObject({from,url});
    })
})