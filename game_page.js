player1_name= localStorage.getItem("P1Name");
player2_name= localStorage.getItem("P2Name");
p1_score= 0;
p2_score= 0;

document.getElementById("p1name").innerHTML= player1_name+": ";
document.getElementById("p2name").innerHTML= player2_name+": ";
document.getElementById("p1score").innerHTML= p1_score;
document.getElementById("p2score").innerHTML= p2_score;
document.getElementById("p_question").innerHTML= "Question Turn: "+player1_name;
document.getElementById("p_answer").innerHTML= "Answer Turn: "+player2_name;

function send(){
  get_word= document.getElementById("word").value;
  word= get_word.toLowerCase();
  console.log(word);
  charAt1= word.charAt(1);
  remove_charAt1= word.replace(charAt1, "_");
  length_divide_2= Math.floor(word.length / 2);
  charAt2= word.charAt(length_divide_2);
  remove_charAt2= remove_charAt1.replace(charAt2, "_")
  length_minus_1= word.length - 1;
  charAt3= word.charAt(length_minus_1);
  remove_charAt3= remove_charAt2.replace(charAt3, "_");
  question_word="<h4 id='word_display'>Question:"+remove_charAt3+"</h4>";
  input_box= "<br>Answer: <input type='text' id='input_check'> ";
  check_button= "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
  row= question_word+input_box+check_button;
  document.getElementById("output").innerHTML= row;
  document.getElementById("word").value= "";
}
question_turn= "player1";
answer_turn= "player2";

function check(){
  get_answer= document.getElementById("input_check").value;
  answer= get_answer.toLowerCase();
  console.log("answer is:" + answer);

  if(answer == word){
    if(answer_turn == "player1"){
      p1_score= p1_score + 1;
      document.getElementById("p1score").innerHTML= p1_score;
    }

    else{
      p2_score= p2_score + 1;
      document.getElementById("p2score").innerHTML= p2_score;
    }
  }

  if(question_turn == "player1"){
    question_turn="player2";
    document.getElementById("p_question").innerHTML= "Question Turn: "+player2_name;
  }

  else{
    question_turn="player1";
    document.getElementById("p_question").innerHTML= "Question Turn: "+player1_name;
  }

  if(answer_turn == "player1"){
    answer_turn="player2";
    document.getElementById("p_answer").innerHTML= "Answer Turn: "+player2_name;
  }

  else{
    answer_turn="player1";
    document.getElementById("p_answer").innerHTML= "Answer Turn: "+player1_name;
  }
  document.getElementById("output").innerHTML= "";
}