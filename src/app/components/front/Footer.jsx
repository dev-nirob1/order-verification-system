import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* company  */}
          <div className="md:col-span-2">
            <Link
              href="#"
              className="text-2xl font-bold tracking-[4px] text-white"
            >
              AUREX<span className="text-yellow-500">.</span>
            </Link>
            <p className=" text-white/70 mt-4">
              We are a team of passionate individuals dedicated to delivering
              high-quality products and services to our customers.
            </p>
          </div>

          {/* Navigation  */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow-500 transition duration-300"
                >
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow-500 transition duration-300"
                >
                  About{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow-500 transition duration-300"
                >
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/70 hover:text-yellow-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info  */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2">
              <li className="text-white/70">Email: example@email.com</li>
              <li className="text-white/70">Phone: +1 234 567 890</li>
              <li className="text-white/70">Address: 123 Main St, City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex justify-between">
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} AUREX. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              href="#"
              className="text-white/70 hover:text-yellow-500 transition duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-yellow-500 transition duration-300"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              className="text-white/70 hover:text-yellow-500 transition duration-300"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
