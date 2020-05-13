let listAmount;
const initViews = function(){
    getFromGoogleDB();
}

const showData = function(sheetData){
    
    listAmount =0;
    clearChat();
    
        for (let row of sheetData.values){
            addData(row);
            listAmount++;
        }
    
}


const addData = function(row){
    if(listAmount<11){
        const [time, name, score] = row;
        const List = document.getElementById('leaderboardList');
        List.innerHTML += `<li>${time} ${name} ${score}</li>`;
    }
}

const clearChat = function(){
    const List = document.getElementById('leaderboardList');
    List.innerHTML = '';
}

initViews();