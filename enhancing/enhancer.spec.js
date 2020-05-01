const {repair, succeed, item, fail, newItemSucceed, newItemRepair} = require('./enhancer.js');
// test away!

const sword = {
  name: 'Grass Sword',
  durability: 30,
  enhancement: 20
}

const shield = {
  name: 'Hylian shield',
  durability: 50,
  enhancement: 15
}

const power = {
  name: 'Invisibility',
  durability: 100,
  enhancement: 14
}

describe('enhance item requests', () => {
  describe('Item to have name, durability and enhancement', () => {
    it('Item should have a name', () => {
      function name(){
        item({name:''})
      }
      expect(shield.name).toEqual(expect.stringContaining('Hylian shield'));
      expect(name).toThrowError();
    })
  })

  describe('succeed', () => {
      it('return enhancement + 1 ', () => {
        expect(succeed(shield).enhancement).toBe(16)
      })
      it('Should increment by 1 until it gets to 20', () => {
        expect(succeed(power).enhancement).toBeLessThanOrEqual(20);
        expect(succeed(shield).enhancement).toBeLessThanOrEqual(20);
      })
      it('Item should not increase by one when enhancement is at 20', () => {
        //Sword enhancement is already at 20
        expect(succeed(sword).enhancement).toBe(20);
      })
      it('new item !== old item', () => {
        const newItem = succeed(shield)
        expect(newItem).not.toBe(shield)
      })
  })
  describe('fail', () => {

    it('if item enhancement is < 15 ', () => {
      expect(fail(power).durability).toBe(95)
      expect(() => {fail({durability: 40 , enhancement: -1 })}).toThrowError()
    })

    it('if item enhancement is > 16 ', () => {
      expect(fail(sword).enhancement).toBe(19)
      expect(fail(sword).durability).toBe(30)
    })

    it('if item enhancement is >= 15 or <=16', () => {
      expect(fail(shield).durability).toBe(40);
      expect(fail({durability: 40 , enhancement: 15.5 }).durability).toBe(30)
    })
    it('new item !== old item', () => {
      const newItem = fail(sword)
      expect(newItem).not.toBe(sword)
      expect(fail(sword)).not.toBe(sword)
    })

  })

  describe('repair', () => {
    it('return durability of 100', () => {
      expect(repair(sword).durability).toBe(100);
      expect(repair(sword).enhancement).toBe(20);
      expect(repair({durability: 0 }).durability).toBe(100)
    })
    it('new item !== old item', () => {
      const newItem = repair(power)
      expect(newItem).not.toBe(power)
    })
  })
  describe('get', () => {
    it.todo('')
  })
})