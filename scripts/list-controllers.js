const listControllers = function(){
    const displayButton = document.getElementById('display');
    displayButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
    const formData = new Object();
    formData[Lname] = useName();
    formData[Lscore] = getScore();

    postToGoogleDB(formData);
}