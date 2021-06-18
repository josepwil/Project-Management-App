const LandingPage = () => {
  return(
    <div className="landingPageContainer">
         <div>
        <div className="landingPageImage"></div>
      </div>
      <div className="landingPageDescription">
        <h2 className="logo">Teamli</h2>
        <p>Teamli makes collaboration easy, with a wide range of features from calendars to kaban boards. Teamli seamlessly connects you with your team and keeps projects on track.</p>
        {/* takes you to sign up page */}
        <button className="btnTryItFree">Try it free</button>
      </div>
    </div>
  )
}

export default LandingPage