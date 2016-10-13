
function handleFileSelect(evt) {

    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
     var reader = new FileReader();
       reader.onload = function (theFile) {
           //This is your coding task, write a function to to do your task
            task(theFile.target.result);
            return function (e) {
            };
        };
        reader.readAsText(f);
    }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);



