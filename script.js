function calc() {
   var input1 = userInput1.value;
   var input2 = userInput2.value;

   var ans = Math.random()*100;
   var result = `${Math.round(ans)}%`
   disp.style.display = "block"
      

   if (input1 == '' && input2 == '') {
      alert("Input your name.")

   }else if(ans >= 0 && ans <= 38){
      console.log(result)
      disp.innerHTML =`
      <div>
      <h2 class="text-danger">WARNING! Not a match.</h2>
      <p>${result}</>
      <h3 class="text-danger">${input1}, sorry, you need to take a U-turn.</h3>
      </div>`

   }else if (ans >= 39 && ans <= 58) {
      console.log(result)
      disp.innerHTML =`
      <h2 class="text-warning">Not too good for Consideration</h2>
      <p>${result}</>
      <h3 class="text-warning">${input1}, you need to think about this.</h3>`

   }else if (ans >= 59 && ans <= 78){
      console.log(result)
      disp.innerHTML =`
      <h2 class="text-primary">You two are Good Match</h2>
      <p>${result}</>
      <h3>${input1}, So go for it.</h3>`

   }else if (ans >= 79 && ans <= 100){
      console.log(result)
      disp.innerHTML =`
      <h2 class="text-success">YAY! Perfect Match</h2>
      <p>${result}</>
      <h3 class="text-success">CONGRATULATIONS ${input1}, you are super lucky to have ${input2}.</h3> `
   }
   userInput1.value = "";
   userInput2.value = ""
}