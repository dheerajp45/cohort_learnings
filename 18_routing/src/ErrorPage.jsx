import {useNavigate  } from "react-router-dom";


function ErrorPage(){
  const navigate = useNavigate()

function redirectToHome(){
navigate('/')
}
return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            margin: "0",
            color: "red",
          }}
        >
          404
        </h1>

        <h2>Page Not Found</h2>

        <p style={{ color: "gray" }}>
          The page you are looking for does not exist.
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            background: "black",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={redirectToHome}
        >
          Move Back To Home 
        </button>
      </div>
    </div>
  );
}
export {ErrorPage}