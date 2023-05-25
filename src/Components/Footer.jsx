import React from "react";
import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    items: ["About", "Service", "Team", "Privacy Policy", "Testimonial", "Support"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl bg-black" style={{ padding: 25 }}>
        <div className="grid grid-cols-1 text-center md:grid-cols-3 justify-between md:text-left">
          <div className="mb-6">
            
            <img src="/LOGO3.png" alt="INSD Nanded" className="w-40 h-auto" style={{ paddingTop: "22px", marginLeft: "50px", marginRight: "62px" }} />
            <p
              className="text-white text-xs"
              style={{
                position: "relative",width: "90%",left: "45px",top: "50px",fontFamily: 'Inter',fontStyle: "normal",fontWeight: "400",fontSize: "12px",lineHeight: "15px",

                // Responsive styles
                "@media (max-width: 375px)": {
                  width: "90%",left: "50%",transform: "translateX(-50%)",right: "40%",top: "50%",fontFamily: 'Inter',fontStyle: "normal",fontSize: "10px",lineHeight: "12px",
                }
              }}
            >At INSD, Nanded we strongly believe in providing quality education by setting high academic standards and providing hands-on learning experiences to its students.</p>
          </div>

          <div className="grid grid-cols-1 text-center md:grid-cols-1 justify-between gap-3 md:ml-40  md:text-left">
            {LINKS.map(({ items }) => (
              <ul className="mb-6" >
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                >

                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="py-1.5 font-normal transition-colors hover:text-blue-600 "
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="text-white">
            <h1>Register Now</h1>
            <p style={{ paddingTop: "20px", paddingBottom: "20px" }}> The wide variety of entrepreneurial programs offered to students makes sure the current needs of the industry are met.</p>
            <input type="email" name="email@email.com" style={{ height: "35px", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }} />
            <button type="submit" value="Submit" style={{ background: "linear-gradient(90deg, rgba(233,68,132,1) 0%, rgba(230,143,92,1) 100%)", height: "36px", width: "80px", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>Submit</button>
          </div>


        </div>
      </div>



      <div className="flex flex-col items-center justify-center border-blue-gray-50 py-4 px-5 md:flex-row md:justify-between" style={{
        background: 'linear-gradient(90deg, rgba(233,68,132,1) 0%, rgba(230,143,92,1) 100%)'
      }}>
        <Typography
          variant="small"
          color="white"
          className="mb-4 text-center font-normal md:mb-0"
        >
          &copy; {currentYear} INSDnanded |<a href="https://google.com/"> Web Development By ...</a>
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </Typography>
          <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </Typography>
          <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Typography>
        </div>
      </div>

    </footer >
  );
}
