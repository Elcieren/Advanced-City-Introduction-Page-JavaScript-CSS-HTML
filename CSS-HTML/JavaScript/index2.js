 const sorularData = [
    {
    question:"Malatya Şehrinin Meşhur Meyvesi Nedir ?",
    a:"elma",
    b:"çilek",
    c:"kayısı",
    d:"portakal",
    correct:"c",
    },
    {
    question:"Kayısı dünyada yaklaşık 60 ülkede üretilebilen bir meyve olsada dünyanın kayısı ihtiyacını yaklaşık yüzde kaçı Malatyada üretilen kayısılardır ?",
    a:"%10-%20",
    b:"%30-%40",
    c:"%40-%60",
    d:"%70-%80",
    correct:"d",
    },
    {
    question:"Malatya Türkiyenin en Kalabalık Kaçıncı Şehiridir ?",
    a:"25",
    b:"27",
    c:"30",
    d:"33",
    correct:"b",
    },
    {
        question:"2021 TÜİK verilerine göre Malatya kaç kişilik nüfusa sahiptir ?",
        a:"306.435",
        b:"507,363",
        c:"808.692",
        d:"904,245",
        correct:"c",
    },
    {
        question:"Aşşağıdaki Ünlülerden Hangisi Malatyalıdır ?",
        a:"ilyas Salman",
        b:"Kıvanç Tatlıtuğ ",
        c:"Kenan İmirzalıoğlu",
        d:"Halit Ergenç ",
        correct:"a",
        },
 ];

 const quiz=document.getElementById('quiz');
 const answerEls=document.querySelectorAll('.answer');
 const questionEls=document.getElementById('question');
 const a_text=document.getElementById('a_text');
 const b_text=document.getElementById('b_text');
 const c_text=document.getElementById('c_text');
 const d_text=document.getElementById('d_text');
 const submitBtn=document.getElementById('submit')

 let currentQuiz=0;
 let score=0;
 loadQuiz();
  function loadQuiz(){
    deselectAnswers()
    const currentQuizData=sorularData[currentQuiz];
    questionEls.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
  }

  function deselectAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
  }

  function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer;
  }

  submitBtn.addEventListener('click', () => {
    const answer=getSelected();
    if(answer){
        if(answer === sorularData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz<sorularData.length){
            loadQuiz();
        }else{
            quiz.innerHTML=`
            <h2>Cevapladığın ${score}/${sorularData.length} doğru sayısı</h2>
            
            <button onclick="location.reload()">Yeniden Dene</button>
            `
        }
    }
  });
  

