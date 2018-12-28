var budgetController = (function() {

}();



var UIController = (function() {

})();



// Global app controller
var controler = (function(budgetCtrl, UICtrl) {

	document.querySelector('.add__btn').addEventListener('click', function() {
		console.log('Button was clicked')
	
		//1. Get the input data
		//2. Add the item to the budget controller
		//3. Add item to the user interface
		//4. Calculate the budget
		//5. Display the budget on the UI.

	});

	document.addEventListener('keypress',function () {

	})

})(budgetController, UIController);
