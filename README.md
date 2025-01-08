# automation-POM

So here I'll be logging my process in creating my first automation framework from scratch. 

## Creating a repo in Github

Just went to Github page, register and created a new private repo. It's pretty straightforward.

## Cloning the repo to my machine failed

The first blocker was to clone this repo to my machine. I thought user-password would do it, but I found out that it's been deprecated since 2013. So here're the first findings in the process and how to solve them:

1. Go to https://github.com/settings/tokens
2. Generate New Token
3. I chose Personal access tokens (classic)
4. Checked 'repo' only
5. Input a note (this is kinda like a tag for you to remember the token)
6. That's it.

After this, I went back to terminal and cloned the repo successfully. So...first victory! :D

## Starting out the thing

Since I'm gonna be using a NodeJS project as basis, first I installed Node and NPM. Usually, when installing Node, npm is installed also.

1. Be sure you have Node: `node -v` if you get an error here, install it. Otherwise, keep on going.
2. Check npm: `npm -v`
3. Go ahead and initialize the project: `npm init` (hit enter to everything)
4. Install Selenium: `npm install selenium-webdriver`
