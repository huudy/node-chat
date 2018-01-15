var expect = require('expect');
var {generateMsg} = require('./message')
describe('generateMessage',()=>{
    it('should generate correct message',()=>{
        var from = "Me";
        var text = "FOSDIFJDOIFJ";
        var message = generateMsg(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    })
})