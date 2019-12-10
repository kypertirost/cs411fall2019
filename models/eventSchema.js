var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  attendees: {
      type: String,
      required: true
  },
  place: {
      type: String,
      required: true
  },
  date: {
      type: String,
      required: true
  },
  userid: {
      type: String
  }
});


const Event = mongoose.model('event', eventSchema);

module.exports = Event;
