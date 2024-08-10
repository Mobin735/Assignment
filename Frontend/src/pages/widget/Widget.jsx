import { useEffect, useState } from "react";
import ProjectNavbar from "../../components/medium/project_Navbar/ProjectNavbar";
import BreadCrumb from "../../components/small/BreadCrumb";
import Display from "./tabs/display/Display";
import General from "./tabs/general/General";
import './Widget.css'
import { useParams } from "react-router-dom";
import Loader from "../../components/small/Loader";
import axios from "axios";

const emptyData = {
    chatbot_name: "",
    welcome_message: "",
    input_holder: "",
    primary_color: "",
    font_color: "",
    font_size: "",
    chat_height: "",
    show_sources: false,
    chat_icon_size: "",
    position_screen: "",
    distance_bottom: "",
    horizontal_distance: "",
    chatbot_image: ""
}

export default function widget(params) {
    const [projectName, setProjectName] = useState('');
    const [activeTab, setActiveTab] = useState("General");
    const [widgetData, setWidgetData] = useState(emptyData)
    const [editWidget, setEditWidget] = useState(false)
    const [loaderToggle, setLoaderToggle] = useState(false);
    const { projectID } = useParams();

    useEffect(() => {
        getWidgetConfig();
    }, [])

    const getWidgetConfig = async () => {
        setLoaderToggle(true);
        const result = await axios.get(`${import.meta.env.VITE_APP_API}/api/widget/${projectID}`)
        if (result.data.widgetData) {
            setWidgetData(result.data.widgetData.config);
            setProjectName(result.data.widgetData.projectName);
        }
        setLoaderToggle(false);
    }
    
    const discardEdit = () => {
        setEditWidget(false);
        getWidgetConfig();
    }
    
    const saveEdit = async () => {
        setLoaderToggle(true);
        await axios.post(`${import.meta.env.VITE_APP_API}/api/widget/${projectID}/updateconfig`,{
            config: widgetData
        })
        setEditWidget(false);
        getWidgetConfig();
    }
    
    const handleChange = (field, value) => {
        setWidgetData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const renderTab = () => {
        switch (activeTab) {
            case "General":
                return <General editToggle={editWidget} properties={widgetData} editProperties={(field, value) => handleChange(field, value)} />;
            case "Display":
                return <Display editToggle={editWidget} properties={widgetData} editProperties={(field, value) => handleChange(field, value)} />;
            default:
                return <General editToggle={editWidget} properties={widgetData} editProperties={(field, value) => handleChange(field, value)} />;
        }
    };

    return (
        <div className="WidgetContainer">
            <ProjectNavbar />
            {
                loaderToggle && <Loader />
            }
            <div className="WidgetSubContainer">
                <BreadCrumb project_name={projectName} current_location={"Widget Configuration"} />
                <div className="ProjectDetailsTitle">
                    <p style={{ color: "var(--primaryColor)" }}>{"Configuration"}</p>
                    <div className="ProjectDetailsEditButton">
                        {
                            editWidget ?
                                <>
                                    <button onClick={discardEdit} style={{ border: "1px solid var(--highlightColor)", color: "var(--highlightColor)" }}>Discard</button>
                                    <button onClick={saveEdit} style={{ background: "var(--secondaryColor)", color: "white" }} >Save & exit</button>
                                </>
                                :
                                <button onClick={() => setEditWidget(true)} style={{ background: "#4c4c4c", color: "white" }}>Edit</button>
                        }
                    </div>
                </div>
                <div className="WidgetBar">
                    <p
                        className={activeTab === "General" ? "activeWidget" : ""}
                        onClick={() => setActiveTab("General")}
                    >
                        General
                    </p>
                    <p
                        className={activeTab === "Display" ? "activeWidget" : ""}
                        onClick={() => setActiveTab("Display")}
                    >
                        Display
                    </p>
                    <p>Advance</p>
                </div>
                <div className="TabContainer">{renderTab()}</div>
            </div>
        </div>
    )
};
