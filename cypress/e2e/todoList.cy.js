describe('Test simple a TODO List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Load home', () => {
    cy.contains('No Task')
  })

  it('New Task form can be opened and closed', () => {
    cy.contains('TODO List')
    cy.get('button')
      .should('contain', 'Add New Task').click()
    cy.contains('Add New Task')

    cy.get('[placeholder="DD/MM/YYYY"]').click()
    cy.get('[type="button"]').click()

    cy.get('[alt="cross icon"]').click()
  })

  describe('With a New Task created', () => {
    beforeEach(() => {
      cy.newTask({taskTitle: 'Prueba Cypress'})
      cy.contains('Completed')
    })

    it('Can complete a new task', () => {
        cy.get('[type="checkbox"]').click()
        cy.contains('Prueba Cypress')
          .parent()
          .should('have.css', 'text-decoration-line', 'line-through')
    })
    //& uncomplete????
  })

})
