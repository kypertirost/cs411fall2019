  * The user presses the “create event” button and a pop-up window appears for event editing
  * A list of existing event types is presented and the user must choose one of these types or choose “create new event type” button. Each event type has a drop-down that lists the input parameters available for that event type
    * Create new event type:
      * The window changes to the create new event type window
      * All possible event parameters are prompted/guided by a series of questions with drop-down menus or input boxes. The questions are short and designed to clearly convey to the user which parameters they should have for their desired event. Many of them will give suggestions of potential use cases that might not be immediately obvious. These aim to inspire the user to become better at using the app and to compel them to explore all of the possible functions of the app
      * The user will also be required to provide a unique name for the event type
      * The user presses “save event type” or cancel to save or discard the changes
      * The window changes back to the create event window, and the new event type will already be selected if the user chose to save it
    * The user puts in all of the required and optional parameters specified by the selected event type. These inputs are in the form of question prompts similar to the questions asked in the create event window
    * Potential parameters:
      * both a start and end date to allow them to describe the nature of any possible event (e.g. a school homework or project would be a range between an unspecific start date and a specific end date, going to work or school would be a single date event, club meetings for a club with inconsistent meeting days would be a list of dates event)
      * If the user wants to, we can also set the event as a recurring event, the user can customize the frequency (every day/week or every wednesday etc.) and when will the recursion end
      * Unspecific time/single time/date range/ list of dates: user gives this parameter for both a start and end date to allow them to describe the nature of any possible event (e.g. a school homework or project would be a range between an unspecific start date and a specific end date, going to work or school would be a single date event, club meetings for a club with inconsistent meeting days would be a list of dates event)
      * Location: If the location has a city attached, we can also gather information with API to show the weather of that location, if possible also show the weather forecast for the event period.
    * The user can also add notes or invite other people (via the friends function) to the event
