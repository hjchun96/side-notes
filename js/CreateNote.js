document.addEventListener('DOMContentLoaded', function(){ 
	   

	var link = document.getElementById('addButton');
	link.addEventListener('click', function () {

	    var count = localStorage.getItem("node index");  

	    var userInput = document.getElementById('userInput').value;
	    if (!userInput || 0 === userInput.length) {
	   		return;
	   	}
	    var newTextBoxDiv = $(document.createElement('div')).attr("id", userInput);
	    var data_id = "data" + count;
        newTextBoxDiv.after().html('<h4>' + userInput + ' </h4>' 
        + '<div class="button-panel"><input type="button" name="Delete Note" class="save-button btn"' 
        + ' value="Delete Note" id="Delete ' + data_id + '" ></div>'
        + '<div class="button-panel"><input type= "button"' + 'name= "Export as docx" class="save-button btn"' 
        + 'value="Export Note"' + 'id='+ '"Export ' + data_id + '" ></div>'
        + '<div class="button-panel"><input type= "button"' + 'name= "Save to Drive" class="save-button btn"' 
        + 'value="Save to Drive"' + 'id='+ '"Save ' + data_id + '"></div>'
          +'<textarea class="note-txt" spellcheck=false id="' + data_id + '">');

			
		newTextBoxDiv.appendTo("#NotesGroup");
		
		clearField();
		count++;
		localStorage.setItem("node index", count); 
	    localStorage.setItem(data_id, JSON.stringify({'title':userInput, 'value': ""}));

		
	    var toRemove = document.getElementById('Delete ' + data_id);
			toRemove.addEventListener('click', function () {
				
			var data_id= this.id.split(" ")[1];
            var userInput = JSON.parse(localStorage.getItem(data_id)).title;

            var el = document.getElementById( userInput );
			el.parentNode.removeChild( el );
            // $("#" + userInput).remove();
            localStorage.removeItem(data_id);
		});
				 	
		var toExport = document.getElementById('Export ' + data_id);
			toExport.addEventListener('click', function () {
		});
		 
		var toSave = document.getElementById('Save ' + data_id);
		toSave.addEventListener('click', function () {
							
		});

		var store = document.getElementById(data_id);
		store.addEventListener('keyup', function () {
			store_data(this);
		});

	});

	function store_data(origin){
		var data_id = origin.id;
		var userInput = JSON.parse(localStorage.getItem(data_id)).title;

		var content = origin.value;
		localStorage.setItem(data_id, JSON.stringify({'title':userInput, 'value': content}));

	}
		    
});



function clearField() {
     document.getElementById("userInput").value = "";
}




