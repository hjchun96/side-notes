document.addEventListener('DOMContentLoaded', function(){ 
  function initialize() {
    localStorage.setItem("node index", 0);  
    
    if(localStorage.length !== 1) {  
      var savedNodes = [];
      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key !== "node index") {
          savedNodes.push(key);
        }
      }
      populate(savedNodes);
    } 
  }

  function populate(savedNodes) {
    savedNodes.sort();

    for (var i = 0; i < savedNodes.length; i++) { 
      var data_id = savedNodes[i];
      var data = JSON.parse(localStorage.getItem(data_id));
      var userInput = data.title;
      var content = data.value;
 
      var newTextBoxDiv = $(document.createElement('div')).attr("id", userInput);
       newTextBoxDiv.after().html('<h4>' + userInput + ' </h4>' 
        + '<div class="button-panel"><input type="button" name="Delete Note" class="save-button btn"' 
        + ' value="Delete Note" id="Delete ' + data_id + '" ></div>'
        + '<div class="button-panel"><input type= "button"' + 'name= "Export as docx" class="save-button btn"' 
        + 'value="Export Note"' + 'id='+ '"Export ' + data_id + '" ></div>'
        + '<div class="button-panel"><input type= "button"' + 'name= "Save to Drive" class="save-button btn"' 
        + 'value="Save to Drive"' + 'id='+ '"Save ' + data_id + '"></div>'
          +'<textarea class="note-txt" spellcheck=false id="' + data_id + '">');

      newTextBoxDiv.appendTo("#NotesGroup");
     
      var toRemove = document.getElementById('Delete ' + data_id);
      toRemove.addEventListener('click', function () {
        var data_id= this.id.split(" ")[1];
        var userInput = JSON.parse(localStorage.getItem(data_id)).title;
        var el = document.getElementById(userInput);
        el.parentNode.removeChild( el );
        localStorage.removeItem(data_id);
      });
            
      var toExport = document.getElementById('Export ' + data_id);
      toExport.addEventListener('click', function () {
      });
       
      var toSave = document.getElementById('Save ' + data_id);
      toSave.addEventListener('click', function () {
      });

      var store = document.getElementById(data_id);
      store.value = content;

      store.addEventListener('keyup', function () {
        var data_id = this.id;
        var content = this.value;
        var data = JSON.parse(localStorage.getItem(data_id));
        var userInput = data.title;
        localStorage.setItem(data_id, JSON.stringify({'title':userInput, 'value': content}));
      })
    }
    
    var highest = parseInt(savedNodes[savedNodes.length-1].substring(4),10);
    localStorage.setItem("node index", highest + 1);  


  }

  initialize();
});


