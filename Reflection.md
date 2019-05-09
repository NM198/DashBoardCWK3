UP876586


## Usage:

The purpose of this unattended display dashboard is to be used in a business or office lobby area for entertainment and useful information. It is intended for the entertainment of a client while waiting with youtube for media, news for reading , music and weather news.


## Design:

When designing the interface i have decided to go with a clean interface with nice compact widgets(apis) to keep the client feeling relaxed with subtle colours and light theme while waiting.
It is designed for businesses to promote their products and services. The company can change the banner to reflect their services and also add promotional videos and advertisements using the youtube api. Furthermore the footer can be extended to provide more contact information depending on the office.

## Drag & Drop:

Widgets have an option to be moved by clicking the left mouse button over the widget and dragging it to the desired location anywhere within the browser window. The Dashboard can be rearranged in the way the company prefers.

##API:

1.  News -- There is a news api embedded in the dashboard with slow autoscroll for the user to read the top news articles of the day

2. Weather -- shows todays weather with additional search panel to change weather to any city in the world

3. Clock -- there is a simple clock embedded for the user to be reminded of the time while sitting.

4. Youtube --  There is a youtube api interface where the company or office can use to display advertisments, promotional videos as well as general advertisments.

5. Quote -- Generates random quote to display.


##Key Features:

1. DarkMode  -- The user can toggle dark mode, the backround will change to black.

2. Change Backround Image -- the user can change the dashboards banner image by toggling this button.

3. Play Music -- when pressed, lobby music will start playing in the backround for entertainment.

4. Upload Image -- when pressed, the user can upload an image for later use as banner.

5. Google sign in -- Google sign in when pressed and sign out button when leaving.


##What went wrong?

Firstly i started this project without having a strong knowledge of Javascript, this has caused me to have to change the whole project layout a number of times.  Furthermore this lack of knowledge has caused me to make some poor decisions when it came to the settings page. Firstly i created the settings embedded inside the unattended display using divs and Javascript to hide and show it,  which i then realised  was not what the coursework specification was asking for (client-server). Then i tried to create the settings panel in a different page which caused other issues in that the data was being sent back to the index page using a POST method and HTML forms,  but i could not figure out how to actually change the appearance of the display by using this data. In the end i reverted back to the original embedded settings design which was a poor decision. I then realised after reverting that it can be done using LocalStorage but by that time i had spent too much time with the previous method which in turn caused me to not have have enough time to change the whole settings page and get it to work in order to meet the deadline. Also another issue i found during the designing of the display is that by using css as i was going along, this has caused issues with elements overwriting each other and i had to use some inline css in my html file to fix these issues, with my next project i will be using something like FlexBox to avoid these issues and create a neater display.  Lastly i encountered a problem with the news section, where the autoscroll code i had written only goes about 30% down and then stops, i could not figure out a way to fix this without increasing the height of the news div.


## Reflection:

When i first began developing this coursework, i have realised how little i actually knew when it came to using Javascript and the server in an actual project.  As the days passed, i could see how it all fit together to create a working project. It took a good amount of effort, persistence and research in order for the dashboard to be working and for me to be happy with it but i can say that it was all worth it, for me to more confident in future ideas and projects.

In future projects related to this idea,  i will make sure to have a better implementation plan and schedule. Also i am trying to get more practise in client - server by expanding this project and implementing the features mentioned below to avoid the issues i experienced during this coursework in future projects . This module has equipped me with the basics in order to start working on other projects and have a better understanding of how the industry works in a more practical manner.  Overall i have learned a lot from creating this Dashboard and i am happy with the result.


##Future:
The Dashboard can be expanded easily in the near future by adding a few extra functionalities for example:
1)Live information for the client to view e.g. approximate waiting time.
2)Extra News sources and for them to be shuffled through.
3)The banner image to become a slideshow and shuffle through images and advertisments.
