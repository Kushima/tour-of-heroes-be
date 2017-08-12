module.exports = function(mongoose){
  return [{
    id: {type: Number, required: true},
    name: {type: String},

  }, {
    timestamps: true,
    strict: false
  }]
}
