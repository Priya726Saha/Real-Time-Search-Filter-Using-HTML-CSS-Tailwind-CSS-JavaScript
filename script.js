const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌫️ | not for everyone"
    },
    {
        name: "kiara mehta",
        pic: "https://images.unsplash.com/photo-1763996147774-522014c41e74?w=1000&auto=format&fit=crop&q=60",
        bio: "main character energy 🖤 | coffee > everything ☕✨"
    },
    {
        name: "isha oberoi",
        pic: "https://images.unsplash.com/photo-1756143058670-e6619eab06cb?w=1000&auto=format&fit=crop&q=60",
        bio: "walking through dreams in doc martens 👢💭 | late night thinker"
    },
    {
        name: "ishani Oklawa",
        pic: "https://images.unsplash.com/photo-1764683062206-e60d4ced6abc?w=1000&auto=format&fit=crop&q=60",
        bio: "too glam to give a damn 💅 | filter free soul ✨"
    },
    {
        name: "rehan siddiqui",
        pic: "https://plus.unsplash.com/premium_photo-1764569229924-87aac03ee1b1?w=1000&auto=format&fit=crop&q=60",
        bio: "vibes over words 💫 | headphones always on 🎧"
    },
    {
        name: "tanya verma",
        pic: "https://images.unsplash.com/photo-1764674112417-4f1a2a67e197?q=80&w=1064&auto=format&fit=crop",
        bio: "sunshine mixed with a little hurricane 🌪️☀️"
    },
    {
        name: "arjun sharma",
        pic: "https://images.unsplash.com/photo-1764584841950-bec1d54993df?w=1000&auto=format&fit=crop&q=60",
        bio: "dream big. stay grounded 🌍 | gym + music = life"
    }
    
];


// ---------- DEBOUNCE ----------
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}


// ---------- RENDER USERS ----------
function ShowUsers(arr) {
    const container = document.querySelector(".cards");
    container.innerHTML = "";  // keep as you wanted

    const fragment = document.createDocumentFragment();

    arr.forEach(function (user) {

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;

        const blurLayer = document.createElement("div");
        blurLayer.style.backgroundImage = `url(${user.pic})`;
        blurLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}


// show all users initially
ShowUsers(users);


// ---------- SEARCH WITH DEBOUNCE ----------
let inp = document.querySelector(".inp");

inp.addEventListener("input", debounce(function () {
    let val = inp.value.toLowerCase();

    let newUsers = users.filter(user =>
        user.name.toLowerCase().startsWith(val)
    );

    ShowUsers(newUsers);
}, 300));   // 300ms delay
