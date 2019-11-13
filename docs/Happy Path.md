User Login -> Jump to OAuth -> Login Successful -> Jump to Main calendar -> User create events -> Event created succesfully and logged to database -> Time passes until Event happens -> Reminder Window for the user created Event 

Error during Login: Prompt user to either register or change password. Ask user to login again afterwards.  
Error during creating events: Prompt user to try again and check internet connections. 

FOR EACH SPECIFIC USER STORY:  
Primary-Log-in_register: User Login -> Jump to OAuth -> Login Successful -> Jump to Main calendar 
If the login fails. Either ask the user to try again/change password or register a new account.  

Primary-Reminder_screen: Reminder screen pop up -> User accepts 
If the user doesn't accept then either keep sending notifications (say every 5-10 minutes) or give the user an option to ignore this reminder.  

Primary-Schedule-Calendar_main_window: User enter this page -> events loaded from database and displayed successfully 
If not loaded or displayed correctly we should ask the user to either try again later or check internet connection. If the user is connected to internet maybe we can implement error report function.  

Primary-Settings_profile: Users changes settings  -> Successfully saved to database 
If not successful ask the user to either try again later or check internet connection. If the user is connected to internet maybe we can implement error report function.  

Primary-create_event: User adds events -> Successfully added to database 
If not successful ask the user to either try again later or check internet connection. If the user is connected to internet maybe we can implement error report function.  
