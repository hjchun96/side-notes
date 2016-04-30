(function () {
    function storeData() {
        localStorae.setItem('data', data.value);
        var height = parseInt(data.style.height) - 100;
        if (height < 100) height = 100;
        data.style.height = height + 'px';
        data.style.height = parseInt(data.scrollHeight) + 'px';   
    }
    
    function initialize() {
        var data = document.getElementByID('data');
        data.value = localStorage.getItem('data');
        data.onkeyup = storeData;
        storeData();   
    }
    initialize();
}());
