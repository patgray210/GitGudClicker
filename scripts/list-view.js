let listAmount=0;
var data;
const initViews = function(){
    getFromGoogleDB();
}

const showData = function(sheetData){
    clearChat();
    listAmount=0;
    data = sheetData.values;
    console.log(data);
    data.sort(compareScore)
        for (let row of data){
            console.log(row);
            addData(row);
            listAmount++;
        }
    }
const compareScore =function(a,b){
    console.log(b[2], a[2]);
   return b[2]- a[2];
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