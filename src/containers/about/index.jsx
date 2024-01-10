import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Nama:",
    value: "Aqshal Laula Aulia",
  },
  {
    label: "Umur:",
    value: "17",
  },
  {
    label: "Alamat:",
    value: "Jombang,Sariono",
  },
  {
    label: "Email:",
    value: "aqshaloffical123@gmail.com",
  },
  {
    label: "No Telp:",
    value: "085225648296",
  },
  {
    label: "Sekolah:",
    value: "Smkn 6 Jember",
  },
  {
    label: "Bidang Keahlian:",
    value: "Rekayasa Perangkat Lunak",
  },

];

const jobSummary =
  "Rekayasa Perangkat Lunak (RPL) adalah suatu bidang keahlian di tingkat Sekolah Menengah Kejuruan (SMK) yang fokus pada pengembangan, perancangan, dan implementasi perangkat lunak. Program ini bertujuan untuk mempersiapkan siswa dengan pengetahuan dan keterampilan yang dibutuhkan untuk menjadi seorang ahli dalam menciptakan solusi perangkat lunak yang efisien dan inovatif."

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="Tentang"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>BIODATA</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
           
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              REKAYASA PERANGKAT LUNAK
            </h3>
            <p>{jobSummary}</p>
           
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
