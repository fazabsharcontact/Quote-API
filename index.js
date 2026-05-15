import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/quotes", (req, res) => {
    res.json(quotes);
})

app.get("/quotes/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const findQuote = quotes.find((quote) => quote.id === id);
    res.json(findQuote);
})

app.listen(port, () => {
    console.log("Server running on port 3000...");
})

var quotes = [
    {
    "id": 1,
    "text": "The only way to do great work is to love what you do."
  },
  {
    "id": 2,
    "text": "In the middle of every difficulty lies opportunity."
  },
  {
    "id": 3,
    "text": "It does not matter how slowly you go as long as you do not stop."
  },
  {
    "id": 4,
    "text": "Life is what happens when you're busy making other plans."
  },
  {
    "id": 5,
    "text": "The future belongs to those who believe in the beauty of their dreams."
  },
  {
    "id": 6,
    "text": "It is during our darkest moments that we must focus to see the light."
  },
  {
    "id": 7,
    "text": "Whoever is happy will make others happy too."
  },
  {
    "id": 8,
    "text": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
  },
  {
    "id": 9,
    "text": "If life were predictable it would cease to be life, and be without flavor."
  },
  {
    "id": 10,
    "text": "If you look at what you have in life, you'll always have more."
  },
  {
    "id": 11,
    "text": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
  },
  {
    "id": 12,
    "text": "Life is not measured by the number of breaths we take, but by the moments that take our breath away."
  },
  {
    "id": 13,
    "text": "If you want to live a happy life, tie it to a goal, not to people or things."
  },
  {
    "id": 14,
    "text": "Never let the fear of striking out keep you from playing the game."
  },
  {
    "id": 15,
    "text": "Money and success don't change people; they merely amplify what is already there."
  },
  {
    "id": 16,
    "text": "Your time is limited, so don't waste it living someone else's life."
  },
  {
    "id": 17,
    "text": "Not how long, but how well you have lived is the main thing."
  },
  {
    "id": 18,
    "text": "If life is predictable, it ceases to be life."
  },
  {
    "id": 19,
    "text": "You only live once, but if you do it right, once is enough."
  },
  {
    "id": 20,
    "text": "The secret of getting ahead is getting started."
  },
  {
    "id": 21,
    "text": "It's not the years in your life that count. It's the life in your years."
  },
  {
    "id": 22,
    "text": "Never let the fear of striking out keep you from playing the game."
  },
  {
    "id": 23,
    "text": "Many of life's failures are people who did not realize how close they were to success when they gave up."
  },
  {
    "id": 24,
    "text": "You have to be odd to be number one."
  },
  {
    "id": 25,
    "text": "Dream big and dare to fail."
  },
  {
    "id": 26,
    "text": "Success is not final, failure is not fatal: it is the courage to continue that counts."
  },
  {
    "id": 27,
    "text": "Believe you can and you're halfway there."
  },
  {
    "id": 28,
    "text": "The best time to plant a tree was 20 years ago. The second best time is now."
  },
  {
    "id": 29,
    "text": "An unexamined life is not worth living."
  },
  {
    "id": 30,
    "text": "Spread love everywhere you go. Let no one ever come to you without leaving happier."
  },
  {
    "id": 31,
    "text": "When you reach the end of your rope, tie a knot in it and hang on."
  },
  {
    "id": 32,
    "text": "Always remember that you are absolutely unique. Just like everyone else."
  },
  {
    "id": 33,
    "text": "Don't judge each day by the harvest you reap but by the seeds that you plant."
  },
  {
    "id": 34,
    "text": "The road to hell is paved with good intentions."
  },
  {
    "id": 35,
    "text": "We must be the change we wish to see in the world."
  },
  {
    "id": 36,
    "text": "A person who never made a mistake never tried anything new."
  },
  {
    "id": 37,
    "text": "You can never cross the ocean until you have the courage to lose sight of the shore."
  },
  {
    "id": 38,
    "text": "I have learned over the years that when one's mind is made up, this diminishes fear."
  },
  {
    "id": 39,
    "text": "I alone cannot change the world, but I can cast a stone across the water to create many ripples."
  },
  {
    "id": 40,
    "text": "Nothing in life is to be feared, it is only to be understood."
  },
  {
    "id": 41,
    "text": "In this life we cannot do great things. We can only do small things with great love."
  },
  {
    "id": 42,
    "text": "Only a life lived for others is a life worthwhile."
  },
  {
    "id": 43,
    "text": "The purpose of our lives is to be happy."
  },
  {
    "id": 44,
    "text": "You will face many defeats in life, but never let yourself be defeated."
  },
  {
    "id": 45,
    "text": "The most wasted of all days is one without laughter."
  },
  {
    "id": 46,
    "text": "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  {
    "id": 47,
    "text": "Strive not to be a success, but rather to be of value."
  },
  {
    "id": 48,
    "text": "Two roads diverged in a wood, and I took the one less traveled by."
  },
  {
    "id": 49,
    "text": "I attribute my success to this: I never gave or took any excuse."
  },
  {
    "id": 50,
    "text": "You miss 100% of the shots you don't take."
  },
  {
    "id": 51,
    "text": "I've missed more than 9000 shots in my career. And that's why I succeed."
  },
  {
    "id": 52,
    "text": "The most difficult thing is the decision to act, the rest is merely tenacity."
  },
  {
    "id": 53,
    "text": "Every strike brings me closer to the next home run."
  },
  {
    "id": 54,
    "text": "Definiteness of purpose is the starting point of all achievement."
  },
  {
    "id": 55,
    "text": "Life isn't about getting and having, it's about giving and being."
  },
  {
    "id": 56,
    "text": "A winner is a dreamer who never gives up."
  },
  {
    "id": 57,
    "text": "When everything seems to be going against you, remember that the airplane takes off against the wind."
  },
  {
    "id": 58,
    "text": "It's not whether you get knocked down, it's whether you get up."
  },
  {
    "id": 59,
    "text": "People who are crazy enough to think they can change the world are the ones who do."
  },
  {
    "id": 60,
    "text": "Failure will never overtake me if my determination to succeed is strong enough."
  },
  {
    "id": 61,
    "text": "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk."
  },
  {
    "id": 62,
    "text": "We may encounter many defeats but we must not be defeated."
  },
  {
    "id": 63,
    "text": "Knowing is not enough; we must apply. Wishing is not enough; we must do."
  },
  {
    "id": 64,
    "text": "Imagine your life is perfect in every respect; what would it look like?"
  },
  {
    "id": 65,
    "text": "We generate fears while we sit. We overcome them by action."
  },
  {
    "id": 66,
    "text": "Whether you think you can or think you can't, you're right."
  },
  {
    "id": 67,
    "text": "Security is mostly a superstition. Life is either a daring adventure or nothing."
  },
  {
    "id": 68,
    "text": "The man who has confidence in himself gains the confidence of others."
  },
  {
    "id": 69,
    "text": "The only way to do great work is to love what you do."
  },
  {
    "id": 70,
    "text": "Innovation distinguishes between a leader and a follower."
  },
  {
    "id": 71,
    "text": "I wake up every morning and think to myself, how far can I push this company in the next 24 hours."
  },
  {
    "id": 72,
    "text": "You don't have to be great to start, but you have to start to be great."
  },
  {
    "id": 73,
    "text": "Nothing great was ever achieved without enthusiasm."
  },
  {
    "id": 74,
    "text": "The way to get started is to quit talking and begin doing."
  },
  {
    "id": 75,
    "text": "Don't wait. The time will never be just right."
  },
  {
    "id": 76,
    "text": "Start where you are. Use what you have. Do what you can."
  },
  {
    "id": 77,
    "text": "Fall seven times, stand up eight."
  },
  {
    "id": 78,
    "text": "Hardships often prepare ordinary people for an extraordinary destiny."
  },
  {
    "id": 79,
    "text": "Challenges are what make life interesting and overcoming them is what makes life meaningful."
  },
  {
    "id": 80,
    "text": "If opportunity doesn't knock, build a door."
  },
  {
    "id": 81,
    "text": "Success usually comes to those who are too busy to be looking for it."
  },
  {
    "id": 82,
    "text": "Don't be afraid to give up the good to go for the great."
  },
  {
    "id": 83,
    "text": "I find that the harder I work, the more luck I seem to have."
  },
  {
    "id": 84,
    "text": "Success is walking from failure to failure with no loss of enthusiasm."
  },
  {
    "id": 85,
    "text": "Just when the caterpillar thought the world was ending, it became a butterfly."
  },
  {
    "id": 86,
    "text": "Successful entrepreneurs are givers and not takers of positive energy."
  },
  {
    "id": 87,
    "text": "Whenever you find yourself on the side of the majority, it is time to pause and reflect."
  },
  {
    "id": 88,
    "text": "The successful warrior is the average man with laser-like focus."
  },
  {
    "id": 89,
    "text": "Take up one idea. Make that one idea your life, think of it, dream of it, live on that idea."
  },
  {
    "id": 90,
    "text": "I used to want the words 'She tried' on my tombstone. Now I want 'She did it.'"
  },
  {
    "id": 91,
    "text": "Really it comes down to your philosophy. Do you want to play it safe and be good or do you want to take a chance and be great?"
  },
  {
    "id": 92,
    "text": "It is never too late to be what you might have been."
  },
  {
    "id": 93,
    "text": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him."
  },
  {
    "id": 94,
    "text": "No one can make you feel inferior without your consent."
  },
  {
    "id": 95,
    "text": "Life is about making an impact, not making an income."
  },
  {
    "id": 96,
    "text": "Whatever the mind of man can conceive and believe, it can achieve."
  },
  {
    "id": 97,
    "text": "You become what you believe."
  },
  {
    "id": 98,
    "text": "The most common way people give up their power is by thinking they don't have any."
  },
  {
    "id": 99,
    "text": "The mind is everything. What you think you become."
  },
];

