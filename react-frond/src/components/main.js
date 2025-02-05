import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
 
    navigate("/login"); 
  };

  return (
    <div className="container">
      <h2>Welcome Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
