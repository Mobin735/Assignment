import ProjectNavbar from "../../components/medium/project_Navbar/ProjectNavbar";
import BreadCrumb from "../../components/small/BreadCrumb";
import './Settings.css'
import ProfileICN from '../../assets/profile.png'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/small/Loader";
import GetCookie from "../../utils/GetCookie";
import axios from "axios";

export default function Settings(params) {
    const [userData, setUserData] = useState({
        userName: '',
        userEmail: '',
        projectName: ''
    })
    const [editProfile, setEditProfile] = useState(false)
    const [loaderToggle, setLoaderToggle] = useState(false);
    const { projectID } = useParams();

    useEffect(() => {
        getProfileData();
    },[])

    const getProfileData = async () => {
        const cookie = GetCookie();
        setLoaderToggle(true);
        const result = await axios.get(`${import.meta.env.VITE_APP_API}/api/project/${projectID}/profile`, {
            headers: {
                token: cookie
            }
        })
        result.data.userData && setUserData(result.data.userData);
        setLoaderToggle(false);
    }

    const discardEdit = () => {
        document.getElementById("userName").setAttribute("readOnly", true);
        setEditProfile(false);
        getProfileData();
    }

    const saveEdit = async () => {
        const cookie = GetCookie();
        await axios.post(`${import.meta.env.VITE_APP_API}/api/project/${projectID}/profile/updateusername`,{
            userName: userData.userName
        }, {
            headers: {
                token: cookie
            }
        })
        document.getElementById("userName").setAttribute("readOnly", true);
        setEditProfile(false);
    }

    const toggleEdit = () => {
        document.getElementById("userName").removeAttribute("readOnly");
        setEditProfile(true);
    }

    return (
        <div className="SettingsContainer">
            <ProjectNavbar />
            {
                loaderToggle && <Loader />
            }
            <div className="SettingsSubContainer">
                <BreadCrumb project_name={userData.projectName} current_location={"Account Settings"} />
                <div className="ProjectDetailsTitle">
                    <p style={{ color: "var(--primaryColor)" }}>{"Account Settings"}</p>
                    <div className="ProjectDetailsEditButton">
                        {
                            editProfile ?
                            <>
                                <button onClick={discardEdit} style={{ border: "1px solid var(--highlightColor)", color: "var(--highlightColor)" }}>Discard</button>
                                <button onClick={saveEdit} style={{ background: "var(--secondaryColor)", color: "white" }} >Save & exit</button>
                            </>
                            :
                            <button onClick={toggleEdit} style={{ background: "#4c4c4c", color: "white" }}>Edit</button>
                        }
                    </div>
                </div>
                <div className="ProfileContainer">
                    <img style={{ width: "8rem", height: "8rem" }} src={ProfileICN} alt="profile" />
                    <div>
                        <p style={{ fontSize: "23px", fontWeight: "600" }}>User Name</p>
                        <input autoComplete="off" id="userName" readOnly type="text" value={userData.userName} onChange={(el) => setUserData({ ...userData, userName: el.target.value})} />
                    </div>
                    <div>
                        <p style={{ fontSize: "23px", fontWeight: "600" }}>Email</p>
                        <p style={{ padding: "6px 10px", border: "1px solid #999999", borderRadius: "7px", fontSize: "20px" }}>{userData.userEmail}</p>
                    </div>
                </div>
                <div className="ProjectDetailsTitle">
                    <p style={{ color: "var(--primaryColor)" }}>{"Subscriptions"}</p>
                </div>
                <div className="Subscription">
                    <p>
                        You are currently on the{" "}
                        <span style={{ fontWeight: "bold", fontSize: "22px", textDecoration: "underline" }}>
                            Ques AI Basic Plan !
                        </span>
                    </p>
                    <button>Upgrade</button>
                </div>
                <a style={{ color: "var(--highlightColor)", fontSize: "17px", fontWeight: "700" }} href="">Cancel Subscription</a>
            </div>
        </div>
    )
};
