let input = document.getElementById('tweet-input');
const btn = document.getElementById('tweet-btn');
const tweetContainer = document.getElementById('tweets');

let tweets = [];

btn.addEventListener('click', function(){
  if(input.value !== ""){

    let newTweet = {
      value: input.value,
      date: new Date()
    }
    tweets.push(newTweet);

    input.value = "";
    console.log(tweets);
    tweetContainer.innerHTML += `
      <div class="tweet">
        <p>${newTweet.value}</p>
        <span>${newTweet.date.getHours()}:${newTweet.date.getMinutes()}</span>
      </div>
    `
  }
})