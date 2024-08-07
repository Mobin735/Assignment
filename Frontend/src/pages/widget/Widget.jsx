import ProjectNavbar from "../../components/medium/project_Navbar/ProjectNavbar";
import BreadCrumb from "../../components/small/BreadCrumb";

export default function widget(params) {
    return (
        <div className="ProjectsContainer">
            <ProjectNavbar />
            <div className="ProjectsSubContainer">
                <BreadCrumb project_name={"projectname"} current_location={"Widget Configuration"} />
                <div className="ProjectDetailsTitle">
                    <p style={{ color: "var(--primaryColor)" }}>{"Configuration"}</p>
                </div>
                
            </div>
        </div>
    )
};
