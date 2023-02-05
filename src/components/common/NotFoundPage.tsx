import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <FontAwesomeIcon
        icon={faDoorOpen}
        className="text-primary text-[150px]"
      />
      <p className="text-3xl font-bold mt-8">
        {"Seems like you're getting lost. Let's head back to home!"}
      </p>
      <button className="bg-primary text-white font-bold text-2xl px-6 py-3 rounded-lg mt-8" onClick={() => navigate("/")}>
        Back to home
      </button>
    </div>
  );
}

export default ErrorPage;
