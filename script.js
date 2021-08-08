const king = document.getElementById('king');
const princess =  document.getElementById('princess');
const queen = document.getElementById('queen');


function openModal() {
    alert("message has been send!")
};
function kingOver() {
    king.style.transform ='translateX(200px)';
    document.getElementById('aeetes').style.display = 'block';
    princess.style.visibility = 'hidden';
    queen.style.visibility = 'hidden';

};
function kingLeave() {
    king.style.transform ='translateX(0px)';
    document.getElementById('aeetes').style.display = 'none';
    princess.style.visibility = 'visible';
    queen.style.visibility = 'visible';
};

function princessOver() {
    princess.style.transform ='translateX(-100px)';
    document.getElementById('madeas').style.display = 'block';
    king.style.visibility = 'hidden';
    queen.style.visibility = 'hidden';
};
function princessLeave() {
    princess.style.transform ='translateX(0px)';
    document.getElementById('madeas').style.display = 'none';
    king.style.visibility = 'visible';
    queen.style.visibility = 'visible';
};

function queenOver() {
    queen.style.transform ='translateX(-250px)';
    document.getElementById('idyia').style.display = 'block';
    princess.style.visibility = 'hidden';
    king.style.visibility = 'hidden';
};
function queenLeave() {
    queen.style.transform ='translateX(0px)';
    document.getElementById('idyia').style.display = 'none';
    princess.style.visibility = 'visible';
    king.style.visibility = 'visible';
};

function aboutKingdom() {
    document.getElementById("aboutKingdom")?.scrollIntoView({behavior: 'smooth'});
}

