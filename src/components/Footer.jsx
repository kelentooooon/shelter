import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="footer bg-base-200/60 p-10"
        style={{ backgroundColor: "#fbb714" }}
      >
        <aside className="gap-0">
          <p className="text-base-content font-title text-black text-sm">
            Work from 9:00am to 3:00am <br />7 days a week
          </p>
        </aside>
        <aside className="gap-0">
          <p className="text-base-content font-title text-black text-sm">
            Mansoura, behind the university stadium <br />
            <p className="text-xl font-title pt-1">
              <a
                href="https://www.google.com/maps/dir/31.080124,31.543913/31.0351265,31.3586766/@31.0463072,31.5910554,11z/"
                target="_blank"
                className="link text-black"
                aria-label="Google Map Link"
                style={{ textDecoration: "none" }}
              >
                Location{" "}
                <span className="icon-[tabler--brand-google-maps] size-5" />
              </a>
            </p>
          </p>
        </aside>
        <aside className="gap-0">
          <h6 className="text-base-content footer-title font-title text-black text-base">
            Contact Us
          </h6>
          <div className="flex h-5 gap-4">
            <a
              href="https://www.instagram.com/shelter.egy/"
              target="_blank"
              className="link text-black"
              aria-label="instagram Link"
            >
              <span className="icon-[tabler--brand-instagram] size-7" />
            </a>
            <a
              href="https://www.facebook.com/Shelterhouseofcheese"
              target="_blank"
              className="link text-black"
              aria-label="Facebook Link"
            >
              <span className="icon-[tabler--brand-facebook] size-7" />
            </a>
            <a
              href="https://www.tiktok.com/@shelterhouseofcheese"
              target="_blank"
              className="link text-black"
              aria-label="tiktok Link"
            >
              <span className="icon-[tabler--brand-tiktok] size-7" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=201033030430"
              target="_blank"
              className="link text-black"
              aria-label="whatsapp Link"
            >
              <span className="icon-[tabler--brand-whatsapp] size-7" />
            </a>
          </div>
        </aside>
      </footer>
      <aside className="flex justify-center w-full pb-5">
        <p className="font-title text-sm capitalize text-black font-black ">
          power by shorbagy agency.
        </p>
      </aside>
    </>
  );
};

export default Footer;
