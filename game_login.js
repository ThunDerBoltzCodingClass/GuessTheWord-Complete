function logIn(){
    p1name = document.getElementById("p1").value;
    p2name = document.getElementById("p2").value;
    localStorage.setItem("P1Name", p1name);
    localStorage.setItem("P2Name", p2name);
    window.location="game_page.html";
}

