var searchButton = document.querySelector("#searchButton")
var click=0;
const searchBox=document.createElement('input');
searchBox.className='searchBox';
searchBox.style.display='none';
searchBox.type='text';
searchBox.placeholder='Search';
const searchBoxContainer = document.getElementById('searchBoxContainer');
searchBoxContainer.appendChild(searchBox);
searchButton.addEventListener('click',function(){
    click+=1;
    if (click%2!=0){
            document.getElementById("searchBoxContainer1").style.display='block';
            document.getElementById("searchBoxIcon").style.display='block';
            searchBox.style.display='block';
            document.querySelector('.triangle').style.display='block';
            document.querySelector('.search>button').style.border='1px solid black';
    }
    else{
        document.getElementById("searchBoxContainer1").style.display='none';
        document.getElementById("searchBoxIcon").style.display='none';
        searchBox.style.display='none';
        document.querySelector('.triangle').style.display='none';
        document.querySelector('.search>button').style.border='0';

    }

});















