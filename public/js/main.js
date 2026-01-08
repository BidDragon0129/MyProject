fetch("config.json")
    .then(response => response.json())
    .then(config => {

        //Apply theme color
        document.documentElement.style.setProperty(
            "--primary-color",
            config.theme.primeColor
        );


        //Youtube embed
        document.getElementById("youtube").innerHTML = `
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed?listType=user_uploads&list=${config.youtube.channelName}"
                allowfullscreen>
            </iframe>
            `;

        //Twitch embed
        document.getElementById("twitch").innerHTML = `
            <iframe
                width="560"
                height="315"
                src="https://player.twitch.tv/?channel=${config.twitch.channelName}&parent=localhost"
                allowfullscreen>
            <iframe>
            `;
    })
    .catch(err => console.error("config load failed: ", err))