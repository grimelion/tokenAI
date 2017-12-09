# tokenAI
The first Artificial Intelligence (AI) Driven Decentralized, Democratized Permissionless Organization

Server start:
PORT=3001 node bin/www

Client start:
npm start

# How to deploy?

1. Install Heroku:
  - MacOS: `brew install heroku/brew/heroku`;
  - Windows: 
    - x32: `https://cli-assets.heroku.com/heroku-cli/channels/stable/heroku-cli-x86.exe`;
    - x64: `https://cli-assets.heroku.com/heroku-cli/channels/stable/heroku-cli-x64.exe`;
  - Linux:
    - Snap: `sudo snap install heroku`
    - Debian/Ubuntu: `wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh`
  - npm: `npm install -g heroku-cli`
2. Clone repo: `git clone https://github.com/ilana/tokenAI`
3. Go to your directory: `cd tokenAI`
4. Login into Heroku: `heroku login`
5. Create new Heroku application: `heroku create`
6. Push your changes: `git push heroku master`
7. (optional) Check if application is running: `heroku ps:scale web=1 worker=1`
8. Open application: `heroku open`
