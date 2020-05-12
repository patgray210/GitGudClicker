const listControllers = function(){
    const displayButton = document.getElementById('display');
    displayButton.addEventListener('click', submitEvent);
}

const submitEvent = function(){
    const formData = new Object();
<<<<<<< HEAD
    formData[name] = useName();
    formData[score] = getScore();
=======
    formData[name] = playerName;
    formData[score] = score;
>>>>>>> d14de12985fcf96f5330a05a219319b2a56f15d6

    postToGoogleDB(formData);
}