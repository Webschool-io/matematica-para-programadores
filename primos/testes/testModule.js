const expect = require('chai').expect

const VALIDATORS_PATH = './validators'

module.exports = (testName, describes) => {

  const test = (values, valueToTest) => {
    values.forEach( (element) => {
      it('testando: '+element,  () => {
        expect(require(VALIDATORS_PATH+'/'+testName)(element)).to.equal(valueToTest)
      })
    })
  }
  const testArray = (values, valueToTest) => {
    // values.forEach( (element) => {
      it('testando: '+values,  () => {
        expect(require(VALIDATORS_PATH+'/'+testName)(values)).to.equal(valueToTest)
      })
    // })
  }

  describe(testName, () => {
    describes.forEach( (element, index) => {

      if (element.valueType == 'array') {
        describe(element.message,  () => {
          testArray(element.values, element.type)
        })
      }
      else {
        if(element.type) {
          describe(element.message,  () => {
            test(element.values, element.type)
          })
        }
        else {
          describe(element.message,  () => {
            test(element.values, element.type)
          })
        }
      }
    })
  })
}
