const should = require('should');
const supertest = require('supertest');
const path = require('path');
const app = require(path.resolve('./app'));
const agent = supertest(app);

 describe("create a wish", ()=>{
   it("return 201", async ()=> {
     await agent.post('/wishes/create')
      .send({wish: "Global peace", email: "1@mail.com"})
      .expect(201);
    })

  });


  describe("list of wishes", ()=>{
    it("return 200", async ()=> {
      await agent.get('/wishes')
       .expect(200);
     })

   });
