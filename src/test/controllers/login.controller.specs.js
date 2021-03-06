var assert = require('assert');
var loginController =  require('../../controllers/login.controller');

describe('LoginController', function () {

  describe('isValidUserId', function(){

    it('should return true if valid user id', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

  });


describe('LoginController',function(){
  describe('isvalidUserIdAsync',function(){
    it('should return true if valied user async',function(){
      loginController.isvalidUserIdAsync(['abc123','xyz123'],'abc123',function(isValid){
        assert.equal(isValid,true);
        done();
      });

    });
  });
});
