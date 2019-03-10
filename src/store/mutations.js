export default{
  changeCity: function (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
