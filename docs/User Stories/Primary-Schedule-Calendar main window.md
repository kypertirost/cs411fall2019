  * User is shown a default view of their projected schedule, can be today, this week, or this month view based on their preference. This view can also be changed to one of the other view types by using a drop-down menu
  * Shows all scheduled events with their titles and with important additional notes or location info, etc, if the user has input this kind of info for that particular event, some info may be hidden if too much is present to display easily
  * Quick edit: selecting a specific event will open a quick edit drop-down for that event
    * Input boxes for all characteristics for this event’s type that would be present at event creation are displayed. Any previously input data is of course displayed here as well. This will include things like title, notes, location, weather requirements, reminder/alarm types, etc
    * Inputs for settings that are always present for that event type or events in general, like reminder types, event icon color, etc will have a checkbox that allows the user to set this as a default setting for all events of that type or for all events in general (if applicable). This will alter the general settings of the app, but will only alter the settings of that individual event otherwise.
    * When the user has multiple events with the same name as the selected event, the option will be presented to edit all events with this name at once
    * A “save” and “cancel” button at the bottom of the drop-down will allow the user to save their edits or to discard all of their edits. If the user selects “cancel” and they have edited or added information in the event they will be asked if they are sure they want to discard their changes.
  * Event shifting/splitting/length change/duplication/deletion/date change: selecting a specific event in a different manner (maybe a long press or a certain button) will allow the user to edit their events from a schedule-blocking perspective. A tray will appear next to the day’s schedule. The user can temporarily move events to this tray in order to complete shifts which would require multiple events to be shifted since moving one event at a time could cause time conflicts. For example, this feature would allow the user to swap the order of two events so that no time conflicts are incurred in intermediate shifting steps
    * Shifting: 
      * the user can slide the event box to open blocks of time that can fit the event. 
      * For events that do not have a rigid time length, the user can move the event to a smaller block of time that does not fit the event and will be prompted to length change and/or split the event.
    * Splitting: 
      * while the user is in splitting mode, pressing within the event box will create a cutting line in the middle of the event icon. Pressing additional times will add more cutting lines, dividing the event icon evenly by default. 
      * These lines can be deleted by pressing an x button on the end of each line. 
      * The time lengths of each segment of the event icon are displayed inside each segment, and the times the start, end, and cutting lines are displayed on one side of the event icon. 
      * The cutting lines can be dragged around within the event icon in order to alter the length of each segment. The length and time labels are updated as the user drags the cutting lines. 
      * The user can press “split” or “cancel” to either save the changes or discard them.
    * Length change: 
      * event block icons will be able to be shortened by dragging the start and/or end edges of the event. 
      * The user can also use a button to auto-shorten the event to fit the currently open space. 
      * As the user drags the start/end edge, the new start/end time will be displayed next to the edge. 
      * The time/length can be selected and manually edited in order to set an exact time/length
    * Duplication: 
      * The user inputs the number of copies they wish to make and presses “duplicate” and that number of exact copies of that event are moved to the temporary tray and can be shifted from there
    * Deletion
      * Users can press “delete events” and press one or more events to select them. 
        * When an event that shares a title with other events is selected, an option will appear to select all events with that name. 
        * The user will be prompted to choose whether they want to select all of the events with that title for the current day, week, or month, or to select all across the entire schedule, or to do a custom select where each day is individually chosen and all events of that title in the selected days will be selected. 
      * Any selected events can be deselected by pressing them again. 
      * The user then presses either the “delete” or “cancel” button to save or discard the changes. If “delete” is chosen, the user is asked if they are sure they want to delete the events before actually deleting them.
    * Date change: 
      * the user presses the “date change” button. 
      * By pressing events they will be moved into the temporary tray. Any events already in the temporary tray before pressing “date change” will remain there. Advanced selection can also be performed in the same way as described for the deletion function. 
      * The user’s view will be changed to monthly view. 
      * Events can also be pulled from other days in the month by selecting a day. 
        * A window with a list of the events for that day will be displayed, and events can be dragged from the list into the temporary tray. 
        * The user then must press the x button on the window to close it and access the monthly view again. 
      * The user can drag events in the temporary tray into the days they want their events to be placed in. 
      * If the schedule has already been generated for the date an event is being moved to and there is not a suitable open space, the user will be sent to the view for that day and be prompted to use shifting, splitting, or length change in order to fit the event into the day. After any number of the events have been moved
    * Create event
      * The user presses the “create event” button and a pop-up window appears for event editing
      * A list of existing event types is presented and the user must choose one of these types or choose “create new event type” button. Each event type has a drop-down that lists the input parameters available for that event type
        * Create new event type:
          * The window changes to the create new event type window
          * All possible event parameters are prompted/guided by a series of questions with drop-down menus or input boxes. The questions are short and designed to clearly convey to the user which parameters they should have for their desired event. Many of them will give suggestions of potential use cases that might not be immediately obvious. These aim to inspire the user to become better at using the app and to compel them to explore all of the possible functions of the app
          * The user will also be required to provide a unique name for the event type
          * The user presses “save event type” or cancel to save or discard the changes
          * The window changes back to the create event window, and the new event type will already be selected if the user chose to save it
