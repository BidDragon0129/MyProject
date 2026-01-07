# My Project: Streaming Paradise Website
Welcome to **Streaming Paradise Website**!

This is a customly built web page for centeralizing my streaming content,
combining **YouTube** and **Twitch** in one semi-professional, and user-friendly website. Fans can see latest streams, highlights, schedules, updates-all in one place, and possibly even some sneak-peak videos I might be working on. 


---


## Table of Content


[Features](#features)
[Installation](#installation)
[Usage](#usage)
[Configuration](#configuration)
[Node.js & API Integration](#nodejs--api-integration)
[Screenshots](#screenshots)
[Contributing](#contributing)
[License](#license)
[Contact](#contact)


---


## Features


🎥 *Stream Integration* - Embedded Twitch and Youtube streams using the channels defined in `config.json`.

📆 *Schedule Display* - Shows upcoming streams and events to viewers.

🖼 *Highlights Section* - Showcase clips and past streams.

🌐 *Responsive Design* - Looks great on any device.

🛠️ *Customizable Layout* - Update colors and branding using the `themeColor` in `config.json`.

📎 *Social Media Links* - Automatically links twitter, discord or other platforms defined in `socialLinks`.

⚡ *Optimized Performance* - Fast-loading pages to keep audience engagement.


---


## Installation
No installation is required. 

If you would like to install 

1. **Clone the repository**:
    ```bash
    git clone <repository url>

2. Navigate to the project folder:
    cd MyProject

3. Install dependencies
    npm install 

4. Run the website locally:
    npm start

5. Open your browser at https://localhost:3000 .

alternitively you can use github to post websites
using git commands fetch, push, pull, commit making repositories and branches

for more information on how to do this go to https://docs.github.com/en/pages --> **GitHub Pages**
https://www.geeksforgeeks.org/git/how-to-host-a-website-on-github-for-free/ --> **Geek for geeks How to web page**

https://github.com/orgs/community/discussions/160361 --> **Github HTML discussion boards**

These are only some of the few you can find there are also tutorials on Youtube about how github works and how you can host websites and more.


---


## Usage
After starting the website, it will automatically:
    Embed your Youtube channel from `config.json`
    Embed your Twitch channel from  `config.json`
    Apply your theme color dynamically
    Display any social links from `socialLinks` section
Tip: Keep `config.json` updated so the site always shows the latest streams and links.

---
## Configuration
Example `config.json`:

{
    "youtubeChannel": "YourChannelID",
    "twitchChannel": "YourTwitchUsername",
    "themeColor": "yourThemeColor",
    "socialLinks": {
        "twitter": "yourHandle"
        "discord": "yourServer"
    }
}

### Node.js & API Integration
Node.js is used for:

    1. Serving the website - Using Express.js to handle requests and serve static files.
    2. Dynamic API integration - Fetching live content from YouTube and Twitch automatically.

    Example:

    const fetch = require('node-fetch');

    async function getLatestYouTubeVid(channelId, apiKey) {
        const url = `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&order=date&part=snippet&type=video&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.items[0].snippet.title;
    };

    3. Real-time features - Optionally integrate live chat or notifications
    4. Automation - Node.js can build or generate pages dynamically based on
    `config.json`.

---


## Screenshots
preview of the web page(s).

---

## Contributing
We welcome contributions! 🫱🏼‍🫲🏼

1. Fork the repository
2. Create a new branch: git checkout -b `new branch`
3. Make changes
4. Commit: git commit -m `comment`
5. Push: git push origin `new branch`
6. Open a Pull Request forum.

Please read the code of conduct before contributing and make sure to 
follow all of githubs TOS rules.

as of right now the forking option will be unavalible until I can get the template for the website up and running.

## License

This project is licensed under the BSD 3-Clause (Non-Endorsement Clause) License - See the LICENSE file for details.

# Contact

You can contact me on discord @TTVJayGaming or through my email dovahkiinsarmy@gmail.com

