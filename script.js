function magicWish() {
    const wishes = [
        "Lumos! May your year shine bright!",
        "Accio Happiness! Joy is coming your way!",
        "Wingardium Leviosa! Let your dreams fly high!",
        "Expecto Patronum! Magic and protection always with you!",
        "Happy Birthday, Young Witch Adira!"
    ];

    const random = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("wish").innerText = random;
}
