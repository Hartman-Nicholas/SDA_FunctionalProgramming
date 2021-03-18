# Installation Instructions

1.  Navigate to the folder where you would like to store the project.

2. Run the following command in your terminal 

   `git clone https://github.com/Hartman-Nicholas/SDA_FunctionalProgramming.git` 

   This will clone a copy of the repository to your computer

3. Once cloned run the following command in the terminal.
   `npm i`
   This will install all the packages that are needed to run the program.

4. Once installation is complete you can use 
   `npm run start `
   this will open up a dev server in your browser, if you navigate to http://localhost:8080 you will see the live server. If you right click on the browser window and choose inspect a dev tool side bar will open and you can see the console outputs there. 

   You will learn more about this in the next module.

5. Leave this terminal running it is a live reset terminal and will automatically detect any changes you make while editing the code after you save. It will then reload and display the changes.

6. Open up a new terminal window, you can use
   `npm run build`
   this command will build a production bundle for your code, this is usually used if you wish to deploy your code to a production enviroment.

7. If you wish to run Jest tests you can use 
   `npm t`
   This will run any test that are located in example.test.js style files.