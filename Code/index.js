
async function fetchGPTResponse() {
    const query = document.getElementById('userQuery').value;
    const time = document.getElementById('time').value;
    const container = document.getElementById('sticky-container');
    if (query != "" && time != ""){
      container.innerHTML = "Your Roadmap";
      container.style.fontSize = "x-large"
        const options = {
          method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `I want to learn ${query} in ${time}`}],
            temperature:1
            })
        }
      
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        
        console.log(data);
        var res = data.choices[0].message.content;
            splitStringOnNumberDot(res);                              
      } else {
        
        container.innerHTML = "Please fill all inputs!!";
        container.style.fontSize = "x-large";
      }
    }

     function splitStringOnNumberDot(inputString) {
      // This regex matches sequences starting with one or more digits followed by a dot,
      // and captures everything up to just before the next sequence of digit followed by a dot.
      const regex = /\d+..*?(?=\d+.|$)/gs;
      const parts = inputString.match(regex);
      console.log(parts);
      for (var i = 0; i < parts.length; i++){
        addCard(parts[i]);
      }
      return parts || [];  // Return an empty array if no matches are found
  }

    function addCard(res){
             const container = document.getElementById('sticky-container');
             const note = document.createElement('div');
             note.className = 'sticky-note';
             note.textContent = res;
             container.appendChild(note);
    }