# automation-POM

So here I'll be logging my process in creating my first automation framework from scratch. 

## Creating a repo in Github

Just went to Github page, register and created a new private repo. It's pretty straightforward.

## Cloning the repo to my machine failed

The first blocker was to clone this repo to my machine. I thought user-password would do it, but I found out that it's been deprecated since 2013. How to solve it:

1. Go to https://github.com/settings/tokens
2. Generate New Token
3. Personal access tokens (classic)
4. Checked 'repo' only
5. Input a note (this is kinda like a tag for you to remember the token)
6. Click `Generate`.

After this, I went back to terminal and cloned the repo successfully. So...first victory! :D

## Starting out the thing

Since I'm gonna be using a NodeJS project as basis, first I installed Node and NPM. Usually, when installing Node, npm is installed also.

1. Be sure you have Node: `node -v` if you get an error here, install it. Otherwise, keep on going.
2. Check npm: `npm -v`
3. Go ahead and initialize the project: `npm init` (hit enter to everything)
4. Install Selenium: `npm install selenium-webdriver`

## test1.js

This is the very first test I created. I made it using a sample page from LambdaTest. It pretty much goes to the sample page, adds a new item to the todo list, and then asserts if the item was indeed created. That's it. 

1. Learned that `.sendKeys("This is a NEW Item",Key.RETURN)` is the way to input text or hitting keyboard keys.
2. `By.xpath("//li[last()]")` get the last item in the `<li>` element. Still don't understand quite well how to use the xpath, specially because it needs a `.then(function(value){return value;});` to actually work. Need some studying to do here. (!)
3. The assertions are made in two ways: NodeJS and Chai library. Loved the readbility of Chai assertions. I don't see much more difference than that between them.

## test2.js

Here is pretty much the same test as above, but it's encapsulated in a try-catch. I'm not sure how useful are these since the assertions actually return the failures of the test cases. (!)

## test3.js & test4.js

They're pretty much the same tests as test1 and test2, but they're organize in describe/it in order to check Mocha framework out. Turned out ot be interesting and I believe will be the framework for the actual purpose of this repo.

## POM 

Alright so first things first: folder structure. 

1. base: to put actions commons to everything 
2. pages: to put all the page-objects realted to each page
3. tests: to put all tests
4. utils: to put auxiliary functions, enums, jsons, etc. that help out the framework execution