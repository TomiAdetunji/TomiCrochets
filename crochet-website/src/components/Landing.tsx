

function Landing() {
    return (
        <>
        <div 
            className="d-flex flex-column justify-content-center align-items-center text-white"
            style={{
                backgroundImage: "url('/HomepageBG.jpg')",
                backgroundSize: "cover",     // makes it stretch and fill
                backgroundPosition: "center", // keeps it centered
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",           // full viewport height
                width: "100%",                // full width
            }}
        >
            <h1 className="display-3 text-center p-3 rounded">
                Welcome to
            </h1> 
            <img src="/logo.jpg" alt="Tomi Crochets!" width="300" height="160"></img>
        </div>

        </>
    )
}

export default Landing;