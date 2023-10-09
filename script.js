document.addEventListener("DOMContentLoaded", function() {


const arrayFocus = [
    "Try breaking tasks into smaller, manageable steps.",
    "Use a timer or Pomodoro technique to work in short focused bursts.",
    "Create a daily schedule or to-do list to stay organized.",
    "Minimize distractions in your workspace.",
    "Consider mindfulness or meditation exercises to improve concentration.",
  ];
  
  const arrayCalm = [
    "Practice deep breathing exercises to reduce anxiety.",
    "Engage in regular physical activity to release pent-up energy.",
    "Explore relaxation techniques such as yoga or progressive muscle relaxation.",
    "Consider mindfulness meditation to promote a sense of calm and awareness.",
    "Limit caffeine intake, as it can increase anxiety and restlessness.",
  ];
  
  const arrayIDontKnow = [
    "Reach out to a healthcare professional or therapist for guidance.",
    "Experiment with different strategies to see what works best for you.",
    "Join a support group or community for individuals with ADHD.",
    "Educate yourself about ADHD and its management options.",
    "Consider keeping a journal to track your thoughts and feelings.",
  ];

  const buttonFocus = document.getElementById("buttonFocus");
  const buttonCalm = document.getElementById("buttonCalm");
  const buttonIDK = document.getElementById("buttonIDK");
  const ADHDadvice = document.getElementById("ADHDadvice");


function GetAdvice(adviceArray) {
    const randomI = Math.floor(Math.random() * adviceArray.length);
    return adviceArray[randomI];
  }

buttonFocus.addEventListener("click", function() { 
    const randomAdvice = GetAdvice(arrayFocus);
    ADHDadvice.textContent = randomAdvice;
});

buttonCalm.addEventListener("click", function() { 
    const randomAdvice = GetAdvice(arrayCalm);
    ADHDadvice.textContent = randomAdvice;
});

buttonIDK.addEventListener("click", function() { 
    const randomAdvice = GetAdvice(arrayIDontKnow);
    ADHDadvice.textContent = randomAdvice;
});

});