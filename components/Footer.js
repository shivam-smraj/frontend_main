import { Facebook, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ees-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Description */}
        <div className="mb-12 border-b border-ees-800 pb-8 text-center">
          <p className="text-lg md:text-xl font-light text-ees-50 max-w-4xl mx-auto">
            "The Electrical Engineers' Society is a segment of the Department of Electrical Engineering of IIEST Shibpur. 
            It is an independent organization of students, teachers, and several dilettantes in and around Kolkata."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Society Heads */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ees-100 uppercase mb-4">Leadership</h3>
            <div>
              <p className="font-bold">Prof-in-charge</p>
              <p>Prof. Bhaskaran Barman</p>
              <a href="mailto:bhaskaran.ee@faculty.iiests.ac.in" className="text-ees-100 text-sm hover:underline">bhaskaran.ee@faculty.iiests.ac.in</a>
            </div>
            <div className="pt-2">
              <p className="font-bold">General Secretary</p>
              <p>Sanjay Sharma</p>
              <a href="mailto:2021eeb077.sanjay@students.iiests.ac.in" className="text-ees-100 text-sm hover:underline">2021eeb077.sanjay@students.iiests.ac.in</a>
            </div>
             <div className="pt-2">
              <p className="font-bold">Treasurer</p>
              <p>Niloy Mondal</p>
              <a href="mailto:2022eeb013.niloy@students.iiests.ac.in" className="text-ees-100 text-sm hover:underline">2022eeb013.niloy@students.iiests.ac.in</a>
            </div>
          </div>

          {/* Column 2: Quick Contacts */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold text-ees-100 uppercase mb-4">Contact Us</h3>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <p>Contact No: <span className="font-mono">6376153144</span></p>
              <p>Email: <a href="mailto:iiest1981ees@gmail.com" className="underline">iiest1981ees@gmail.com</a></p>
              
              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Linkedin size={20} /></a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"><Youtube size={20} /></a>
              </div>
            </div>
          </div>

          {/* Column 3: Map/Location */}
          <div>
             <h3 className="text-xl font-bold text-ees-100 uppercase mb-4">Locate Us</h3>
             {/* Replace with your scraped Map Image or an Iframe */}
             <div className="rounded-lg overflow-hidden border-2 border-white/20 shadow-lg h-48 bg-gray-300 relative">
               {/* Use the Map image from your public/images/ folder here */}
               <img src="/images/home/map_image.png" className="w-full h-full object-cover opacity-80" alt="Map Location" />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-transparent transition">
                 <MapPin className="text-ees-500 drop-shadow-lg w-10 h-10" />
               </div>
             </div>
             <p className="mt-2 text-xs text-ees-100 text-center">Department of Electrical Engineering, IIEST Shibpur</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ees-800 text-center text-sm text-ees-200">
           &copy; {new Date().getFullYear()} Electrical Engineers' Society. Designed by EES Web Team.
        </div>
      </div>
    </footer>
  );
}