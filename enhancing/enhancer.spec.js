const {repair, succeed} = require('./enhancer.js');
// test away!

const sword = {
  name: 'Grass Sword',
  durability: 50,
  enhancement: 20
}

const shield = {
  name: 'Hylian shield',
  durability: 50,
  enhancement: 15
}

describe('enhance item requests', () => {
  describe('succeed', () => {
      it('return enhancement + 1 ', () => {
        expect(succeed(shield).enhancement).toBe(16)
      })
      it('Item should have a name', () => {
        expect(succeed(shield).name).toBe('Hylian shield')
      })
  })
  describe('fail', () => {
    it.todo('')
  })
  describe('repair', () => {
    it('return durability of 100', () => {
      expect(repair(sword).durability).toBe(100)
    })
  })
  describe('get', () => {
    it.todo('')
  })
})