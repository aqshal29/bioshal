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
    value: "Krisna Gion Bayu M",
  },
  {
    label: "Umur:",
    value: "17",
  },
  {
    label: "Alamat:",
    value: "Tanggul,Manggisan",
  },
  {
    label: "Email:",
    value: "krisnagion95@gmail.com",
  },
  {
    label: "No Telp:",
    value: "+62 82231349229",
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
  "Rekayasa Perangkat Lunak di Indonesia dijadikan disiplin ilmu yang dipelajari mulai tingkat Sekolah Menengah Kejuruan sampai tingkatan Perguruan Tinggi. Di tingkat SMK, jurusan ini sudah memiliki kurikulum materi pelajaran sendiri yang sudah ditentukan oleh Dinas Pendidikan. Rekayasa Perangkat Lunak di tingkat SMK biasanya mempelajari materi-materi seperti Bahasa Pemrograman, Desain Web, Pengetahuan tetang Undang Undang HAKI dan ITE, dan sebagainya, tergantung dari sekolah dan kurikulum tiap tahunnya."

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
