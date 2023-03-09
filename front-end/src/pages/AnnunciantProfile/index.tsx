import AdShowcase from "../../components/AdShowcase";
import AppHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ProfileViewUserContainer } from "./styles";
import api from "../../services";
import { IUser } from "../../context/interfaces";

const AnnuncianteProfile = () => {
  const { initialLetters, announciantId } = useContext(AuthContext);
  const [annunciant, setAnnunciant] = useState<IUser>();

  useEffect(() => {
    const requestAnnunciantProfile = async () => {
      try {
        const res = await api.get(`/user/annunciant/profile/${announciantId}`);
        setAnnunciant(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    requestAnnunciantProfile();
  }, []);
  return (
    <>
      <AppHeader />
      <ProfileViewUserContainer>
        <div className="azul">
          <section className="ContainerUser">
            <div className="ContainerInfos">
              <div className="divInitials">
                <p className="pInitials">
                  {initialLetters(annunciant?.name || "")}
                </p>
              </div>
              <div className="TypeUser">
                <h2>{annunciant?.name}</h2>
                <span>{annunciant?.type}</span>
              </div>
              <p>{annunciant?.description}</p>
            </div>
          </section>
        </div>
        {annunciant?.announcement && (
          <>
            <AdShowcase
              type="car"
              title="Carros"
              announcements={annunciant!.announcement}
            ></AdShowcase>
            <AdShowcase
              type="motocycle"
              title="Motos"
              announcements={annunciant!.announcement}
            ></AdShowcase>
          </>
        )}
      </ProfileViewUserContainer>
      <Footer />
    </>
  );
};

export default AnnuncianteProfile;
