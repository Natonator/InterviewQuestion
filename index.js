(function(){
  var app = angular.module('letter-counter', []);

  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var alphabetList = {};

  alphabet.forEach(function(letter){
    alphabetList[letter] = 0;
  });

  app.controller('CountController', function(){
    this.submitted = false;

    this.text = '';

    this.letterList = alphabetList;

    this.submit = function(){
      this.list = this.text.split('');
      this.list.forEach(function(letRaw){
        var letter = letRaw.toLowerCase();
        if(this.letterList.hasOwnProperty(letter)){
          this.letterList[letter]++;
        }
        else {
          this.letterList[letter] = 1;
        }
      }, this);
    };


  });

})();
