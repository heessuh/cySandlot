 describe('my testing', ()=>{

     before((()=>{
         console.log('running my test....')
     }))

     beforeEach(()=>{
         cy.visit('https://www.google.com/');
     })

   it.skip('open in mac-15', ()=>{
       cy.viewport('macbook-15')
       cy.screenshot()
       cy.wait(200)
   })

   it.skip('open in mac-13', ()=>{
     cy.viewport('macbook-13')
     cy.screenshot()
     cy.wait(200)
 })

 it('open in ipad-2', ()=>{
     cy.viewport('ipad-2')
     cy.screenshot()
     cy.wait(200)
 })

 it('open in iphone-x', ()=>{
     cy.viewport('iphone-x')
     cy.screenshot()
     cy.wait(200)
 })

 it('open in iphone-x', ()=>{
     cy.viewport('iphone-x')
     cy.screenshot()
     cy.wait(200)
  
  it('open in 550 and 750', ()=>{
     cy.viewport(550, 750)
     cy.screenshot()
     cy.wait(200)
 })
 })
