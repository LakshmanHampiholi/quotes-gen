document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "none"; // Initially hide the copy button
});

const quotes = [
    "Are you depressed? Just don't be sad.",
    "How to stop gambling? Just don't quit.",
    "Common sense is like deodorant, those who need it the most never use it.",
    "Suit up!",
    "It's gonna be legend – wait for it – dary!",
    "When I get sad, I stop being sad and be awesome instead.",
    "A lie is just a great story that someone ruined with the truth.",
    "Challenge accepted!",
    "It's not a problem if you don't care.",
    "Ted, I believe you and I met for a reason. It's like the universe was saying, 'Hey, Barney, there's this dude, he's pretty cool, but it is your job to make him awesome.'",
    "In my body, where the shame gland should be, there's a second awesome gland.",
    "Haaaave you met Ted?",
    "I'm not a hero. I'm a high-functioning sociopath. Merry Christmas!",
    "Whatever you do in this life, it's not legendary unless your friends are there to see it.",
    "When I'm sad, I stop being sad and be awesome instead. True story.",
    "The only reason to wait a month for sex is if she's 17 years, 11 months old.",
    "I'm not saying I invented the turtleneck, but I was the first person to realize its potential as a tactical garment.",
    "Nothing suits me like a suit.",
    "It's like I'm addicted to a drug that makes me hate myself, and the only way to get more of that drug is to see you.",
    "I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
    "Suits are full of joy. They're the sartorial equivalent of a baby's smile.",
    "You can't spell 'awesome' without 'me.'",
    "When I'm dating someone, I have a list called my 'Oh No Nos.' If a woman commits a Oh No No, it can end the relationship. Not loving 'Magic,' 'the Gathering' is a deal-breaker.",
    "A bro is always entitled to do something stupid as long as the rest of his bros are all doing it.",
    "Love is the best thing we do.",
    "There are only two reasons to date a girl you've already dated: breast implants.",
    "You don’t need a reason to enjoy a good cigar. You just need a cigar.",
    "The three days rule is a myth, a say, a legend. In reality, it's closer to four days.",
    "When I'm sad, I stop being sad and start being awesome.",
    "If I'm gonna get married, I want a wife. Not a law firm.",
    "You don't bring a date to a wedding. That's like taking a deer on safari.",
    "Ted, the only blind date I’ve ever been on is when I went out with you.",
    "I'm not a saint. But I am awesome.",
    "You can't fire me. I'm your best employee. You know it, and I know it.",
    "Think of me like Yoda, but instead of being little and green, I wear suits and I'm awesome. I'm your bro. I'm Broda!",
    "There are a lot of little reasons why the big things in our lives happen.",
    "Dude, our friendship is gonna be legendary!",
    "I'm not gonna be some guy's wife.",
    "Every Halloween, I bring a spare costume, in case I strike out with the hottest girl at the party. That way, I have a second chance to make a first impression.",
    "I'm not gonna not have sex with someone I'm mad at.",
    "Suiting up is a state of mind.",
    "The only thing I want to be tied down to is the bed.",
    "I'm not gonna pout. Pouting is for women.",
    "You wanna know something about me? I'm in l,ove with a stripper.",
    "It's important to set clear guidelines, like no kissing on the lips.",
    "There's only one street where lightning can strike, and that street is Awesome Street.",
    "Laser tag. I'm on fire, and there's no way to stop the flames.",
    "I'm not gonna play your breakup games, Victoria. I'm gonna win them.",
    "When I'm old and dying, I plan to look back on my life and say, 'Wow, that was an adventure,' not, 'Wow, I sure felt safe.'",
    "I'm not just hitting on her. I'm teaching her to have confidence in herself.",
    "A true gentleman always makes his intentions clear.",
    "I'm not scared of commitment. I'm scared of not being able to commit.",
    "Dude, I've only been in love once, and it was with a girl who wasn't crazy.",
    "I'm not saying I'm gonna change the world, but I guarantee that I will spark the brain that will change the world.",
    "When you have to make a decision, flip a coin. Why? Because when that coin is in the air, you suddenly know what you're hoping for.",
    "A bro never wears a helmet when playing sports. A bro is not afraid to get a concussion.",
    "I'm not a fan of the ladies telling me I'm all about sex. It's like, 'Get to know me first. Then judge me.'",
    "Do you know what a successful relationship is? It's simple. It's two unconfused people.",
    "In my body, where the shame gland should be, there's a second, awesome gland.",
    "Ted, the future is scary. But you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.",
    "It's not how you look on the outside that matters, it's what's on the inside that counts. Like organs and stuff.",
    "I'm not gonna get you another beer. I want you to feel your pain.",
    "Sometimes we search for one thing but discover another.",
    "You can't spell 'thank you' without 'thnku.'",
    "It's not legendary unless your friends are there to see it.",
    "You're the love of my life. Everything I have and everything I am is yours. Forever.",
    "A lie is just a great story that someone ruined with the truth.",
    "It's not a problem if you don't care.",
    "Remember, you're not just learning how to pick up chicks. You're learning how to live.",
    "If you were gonna be some lame suburban dad, why couldn't you have been that for me?",
    "A lion does not concern itself with the opinion of sheep.",
    "You can't cling to the past. Because no matter how tightly you hold on, it's already gone.",
    "We're gonna hit this city like a tidal wave of justice!",
    "Whenever I'm sad, I stop being sad and start being awesome instead. True story.",
    "Dude, everybody's got a look. Jeans, cowboy boots, scarves, trucker hats. We all got our deal, you know?",
    "I'm not a 'have a few drinks and see where things go' kind of girl. I'm a 'have a few drinks and go exactly where I planned' kind of girl.",
    "The key to being a good wingman is not looking like you're trying to be a good wingman.",
    "You can't get the prize without paying the price.",
    "A suit is like a lighthouse of confidence in a sea of despair.",
    "The dream, wait for it, and I hope you're not lactose intolerant because the second half of that word is dairy!",
    "You can't trust graduation goggles. They make everything look all shiny and new, but then you get home, and you realize your life is a hellscape.",
    "Not everyone can be as awesomely confident as me, but everyone can pretend to be.",
    "Dude, get off your high horse. In this situation, I'm the one on the high horse.",
    "Do you know what the definition of insanity is? Doing the same thing over and over and expecting different results. That's love, Ted.",
    "Whenever I start feeling sick, I just stop being sick and be awesome instead.",
    "When I get sad, I stop being sad and be awesome instead.",
    "Every storm runs out of rain. Every dark night turns into day.",
    "One bro in the hand is worth two in the bush.",
    "In my body, where the shame gland should be, there's a second, awesome gland.",
    "My life is going down the drain. I need an adventure.",
    "Just because I'm not ready to settle down doesn't mean I can't be a good influence on my niece.",
    "Nothing suits me like a suit. Nothing makes me feel so cute.",
    "It's not a relationship. It's a chemical reaction.",
    "Are you depressed? Just don't be sad.",
    "How to stop gambling? Just don't quit.",
    "Any war on earth can end with sex.",
    "It's not a code, it's a feature.",
    "Life is short, smile while you still have teeth.",
    "I'm not lazy, I'm in energy-saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "Why be moody when you can shake your booty?",
    "I'm on a whiskey diet. I've lost three days already.",
    "Do I run? Yes, out of time, patience, and money.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "If at first, you don't succeed, redefine success.",
    "I'm not clumsy, the floor just hates me.",
    "I'm not shy, I'm just holding back my awesomeness.",
    "I'm not short, I'm concentrated awesome.",
    "Procrastinate now, don't put it off.",
    "I'm not a vegetarian because I love animals, I'm a vegetarian because I hate plants.",
    "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
    "Common sense is like deodorant, those who need it the most never use it.",
    "I'm not a complete idiot, some parts are missing.",
    "I only drink on two occasions: when it's my birthday and when it's not.",
    "I used to be indecisive. Now, I'm not sure.",
    "I'm not lazy, I'm in energy-saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "Why be moody when you can shake your booty?",
    "I'm not a baker because I like to knead, I knead because I'm a baker.",
    "I'm not a morning person, don't talk to me until I've had my second cup of coffee.",
    "I'm not ignoring you, I'm just on a deadline.",
    "I'm not a chef, but I can microwave like a boss.",
    "I'm not clumsy, the floor just hates me.",
    "I'm not lazy, I'm in energy-saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "Why be moody when you can shake your booty?",
    "I'm on a whiskey diet. I've lost three days already.",
    "I'm not a morning person, don't talk to me until I've had my second cup of coffee.",
    "I'm not a chef, but I can microwave like a boss.",
    "I'm not ignoring you, I'm just on a deadline.",
    "I'm not a baker because I like to knead, I knead because I'm a baker.",
    "I'm not old, I'm a classic.",
    "I'm not a complete idiot, some parts are missing.",
    "I only drink on two occasions: when it's my birthday and when it's not.",
    "I used to be indecisive. Now, I'm not sure.",
    "Common sense is like deodorant, those who need it the most never use it.",
    "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
    "Procrastinate now, don't put it off.",
    "I'm not short, I'm concentrated awesome.",
    "I'm not shy, I'm just holding back my awesomeness.",
    "I'm not a vegetarian because I love animals, I'm a vegetarian because I hate plants.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "If at first, you don't succeed, redefine success.",
    "I'm not clumsy, the floor just hates me.",
    "I'm not lazy, I'm in energy-saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "Why be moody when you can shake your booty?",
    "I'm not a complete idiot, some parts are missing.",
    "I only drink on two occasions: when it's my birthday and when it's not.",
    "I'm not old, I'm a classic.",
    "I used to be indecisive. Now, I'm not sure.",
    "Common sense is like deodorant, those who need it the most never use it.",
    "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
    "Procrastinate now, don't put it off.",
    "I'm not shy, I'm just holding back my awesomeness.",
    "I'm not a vegetarian because I love animals, I'm a vegetarian because I hate plants.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "If at first, you don't succeed, redefine success.",
    "I'm not clumsy, the floor just hates me.",
    "I'm not lazy, I'm in energy-saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "Why be moody when you can shake your booty?",
    "I'm not a complete idiot, some parts are missing.",
    "I only drink on two occasions: when it's my birthday and when it's not.",
    "I'm not old, I'm a classic.",
    "I used to be indecisive. Now, I'm not sure.",
    "Common sense is like deodorant, those who need it the most never use it.",
    "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
    "Procrastinate now, don't put it off.",
    "I'm not shy, I'm just holding back my awesomeness.",
    "I'm not a vegetarian because I love animals, I'm a vegetarian because I hate plants.",
    "My bed is a magical place where I suddenly remember everything I forgot to do.",
    "If at first, you don't succeed, redefine success.",
    "I'm not clumsy, the floor just hates me.",
    "I'm not lazy, I'm in energy-saving mode.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "Why be moody when you can shake your booty?",
    "I'm not a complete idiot, some parts are missing.",
    "There is only 2 reasons you date a girl you already dated 1.breast 2.implants"
];

let lastRandomIndex = -1; // Initialize with an invalid index

async function getQuote() {
    const quoteContainer = document.getElementById("quote");
    const quoteContent = document.getElementById("quoteContent");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const copyButton = document.getElementById("copyButton");

    quoteContainer.classList.remove("fade-in");
    quoteContent.innerHTML = ""; 
    quoteAuthor.innerHTML = "";
    copyButton.style.display = "none"; 

    try {
        let randomIndex;

        // Generate a new random index that is different from the last one
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === lastRandomIndex);

        lastRandomIndex = randomIndex;

        const randomQuote = quotes[randomIndex];

        
        const [content, author = "Anonymous"] = randomQuote.split('|');

        quoteContent.textContent = `"${content}"`;
        quoteAuthor.textContent = `- ${author}`;
        copyButton.style.display = "inline-block"; // Show the copy button
    } catch (error) {
        console.error("Error fetching data:", error);
        quoteContainer.innerHTML = "<p>An error occurred. Please try again later.</p>";
    } finally {
        quoteContainer.classList.add("fade-in");
    }
}
