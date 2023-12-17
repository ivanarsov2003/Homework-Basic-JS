function tellStory (Name, mood, activity){
    if (typeof(Name, mood, activity) === "string"){
        alert(`This is ${Name}, ${Name} is a good person. Today they are ${mood}. They are ${activity}`);
    console.log(`This is ${Name}, ${Name} is a good person. Today they are ${mood}. They are ${activity}.`);
    }

}
tellStory("Ivan", "Good", "playing football");
