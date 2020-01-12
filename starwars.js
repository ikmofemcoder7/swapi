async function starwars() {
    let url = await fetch("https://swapi.co/api/people/");
    let response = await url.json();
    console.log(response);
    let arrayName = response.results;
    console.log(arrayName);
    arrayName.find((result) => {
        let name = document.getElementById("name");
        let dob = document.getElementById("dob");

        console.log(name.value);
        if (name.value === result.name) {
            if (dob.value === result.birth_year)
                return document.getElementById("flims").innerHTML = result.films;
        } else {
            return document.getElementById("flims").innerHTML = "Name and birthyear not found";
        }
    })
}