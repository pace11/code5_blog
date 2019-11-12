function MyDate(props) {
  var myDate = new Date(props)
  return myDate.toDateString()
}

export default MyDate
