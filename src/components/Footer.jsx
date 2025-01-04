import React from "react";
import logo from "../assets/img/logo.jpg";

const Footer = () => {
  return (
    <>
      <footer
        className="footer bg-base-200/60 p-10"
        style={{ backgroundColor: "#fbb714" }}
      >
        <aside className="gap-6">
          <p className="text-base-content font-title text-black">
            Work from 9:00am to 3:00am <br />7 days a week
          </p>
        </aside>
        <aside className="gap-6">
          <p className="text-base-content font-title text-black">
            Mansoura, behind the university stadium <br />
            <p className="text-4xl font-title pt-5">
              Go{" "}
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D31.035126477093%252C31.358676552773%26fbclid%3DIwZXh0bgNhZW0CMTAAAR0QdRpV6D4ie760l8gq_0vpzMAS1RjM6UEuDwdzKzmMG9in_HmdtlSuUJ4_aem_39mynk4EPT_790mBf0WmoQ&h=AT3L-SS-0IcgtwvHCwcGwLK3ymlzq5vrQAjrjosWyG5x_JwHFA4DdEFR3TcOBioZzoLSx_Y9qPO9RCHD7PJv5DU3lBErrH4RUB8qSp5NlvNzBEnLKuBuidnpfzIDVE4Ph-cPig"
                target="_blank"
                className="link text-black"
                aria-label="Google Map Link"
              >
                <span className="icon-[tabler--brand-google-maps] size-8" />
              </a>
            </p>
          </p>
        </aside>
        <div className="flex h-5 gap-4">
          <a
            href="https://www.instagram.com/shelter.egy/"
            target="_blank"
            className="link text-black"
            aria-label="instagram Link"
          >
            <span className="icon-[tabler--brand-instagram] size-10" />
          </a>
          <a
            href="https://www.facebook.com/Shelterhouseofcheese"
            target="_blank"
            className="link text-black"
            aria-label="Facebook Link"
          >
            <span className="icon-[tabler--brand-facebook] size-10" />
          </a>
          <a
            href="https://www.tiktok.com/@shelterhouseofcheese"
            target="_blank"
            className="link text-black"
            aria-label="tiktok Link"
          >
            <span className="icon-[tabler--brand-tiktok] size-10" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=201033030430"
            target="_blank"
            className="link text-black"
            aria-label="whatsapp Link"
          >
            <span className="icon-[tabler--brand-whatsapp] size-10" />
          </a>
        </div>
        <aside>
          <p className="font-title capitalize text-black">power by el shorbagy agency.</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;

