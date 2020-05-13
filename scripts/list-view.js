const initViews = function(){
    getFromGoogleDB();
}

const showData = function(sheetData){
    var i = 0;
    dataArray = new Array();
    clearChat();
    for (let row of sheetData.values){
        dataArray[i] = row;
        i++
    }
    dataArray.sort(compareSecondColumn);
    for (i=0;i<10;i++){
        row = dataArray[i];
        addData(row);
    }

    function compareSecondColumn(a, c) {
    if (a[2] === c[2]) {
        return 0;
    }
        else {
            return (a[2] > c[2]) ? -1 : 1;
        }
    }
    console.log(dataArray);
}


const addData = function(row){
    const [time, name, score] = row;
    const List = document.getElementById('leaderboardList');
    List.innerHTML += `<li>${time} ${name} ${score}</li>`;
}

const clearChat = function(){
    const List = document.getElementById('leaderboardList');
    List.innerHTML = '';
}

initViews();