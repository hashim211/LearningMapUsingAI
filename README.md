Welcome to RoadmapMaker Using AI "using chatGPT API". In this project my friends and I done this project for the Selected Topics subject for my colleage.
This project can help to create a roadmap for the thing you need to learn.

Note : "You need to put your API KEY in the AUTHorization PArt in the options object bellow and then run the project."

  const options = {
          method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Your API here starting with Bearer.'
            },
            body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: `I want to learn ${query} in ${time}`}],
            temperature:1
            })
        }


