import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-start space-y-4 md:w-1/2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo.png"
              alt="Acme Inc."
              className="h-32 w-auto"
            />
          </Link>
          <p className="text-xs text-gray-600 max-w-xs">
            Aura Homes LLC is a real estate investment company, trusted by
            homeowners and investors to provide the best solutions for their
            real estate needs.
          </p>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-primary" />
            <Link
              to="mailto:service@auraproperties.us"
              className="hover:underline"
            >
              service@auraproperties.us
            </Link>
          </div>
          <div className="flex items-start space-x-2">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <address className="not-italic">Hiiliard, Ohio</address>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <Link to="tel:+1 (313) 960-3654" className="hover:underline">
              +1 (313) 960-3654
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
