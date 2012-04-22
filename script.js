/*Creation du plugin JQuery*/
$.fn.submitKey = function(btns,fn){
        var that = $(this),
            btns = $(btns);       
    
    that.bind("keydown",function(e){
     if (e.keyCode === 13 && e.ctrlKey) {  
            console.log('toto');
            performAction(e);  
            e.preventDefault();  
          }  
    });   
    
    function performAction(e){
    fn.call(that,e)
    }

};

              
              
$("#msg").submitKey("button", function () {  
  $("<p></p>").append(this.val().replace(/\n/g, "<br />")).prependTo(document.body);  
  this.val("");  
});  