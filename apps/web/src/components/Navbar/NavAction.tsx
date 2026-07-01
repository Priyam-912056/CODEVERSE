import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom"
import Button from "../../ui/Button"
export default function NavAction () {
    return (
          <div className="hidden lg:flex items-center gap-5">
            <Button to="/dashboard">Dashboard</Button>

            <Link
              to="/login"
              className="
                flex
                items-center
                gap-2
                text-zinc-300
                transition
                hover:text-white
              "
            >
              <FaUserCircle className="text-xl" />
              <span>Sign In</span>
            </Link>
          </div>
    )
}