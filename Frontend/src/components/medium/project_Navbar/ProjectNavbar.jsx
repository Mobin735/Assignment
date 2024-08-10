import { NavLink, useLocation } from "react-router-dom";
import Navlogo from "../../small/NavLogo";
import "./ProjectNavbar.css";
import { useLayoutEffect, useMemo, useState } from "react";

function ProjectNavbarFunction() {
    const location = useLocation();
    const [projectID, setProjectID] = useState('');
    
    useLayoutEffect(() => {
        const pathSegments = location.pathname.split('/');
        const secondLastSegment = pathSegments[pathSegments.length - 2];
        setProjectID(secondLastSegment)
    }, [location]);
    
    return (
        <div className="ProjectNavbarContainer">
            <div className="ProjectNavbarContainerUpper">
                <NavLink style={{textDecoration: "none"}} to='/'><Navlogo font_size="25px" logo_size="40"/></NavLink>
                <p style={{ color: "var(--textColor)", fontWeight: "500", fontSize: "13px" }}>Podcast Upload Flow</p>
                <div className="ProjectNavbarMenu">
                    <NavLink to={`/project/${projectID}/projects`} className="PNBMContainer">
                        <p className="PNBMIcon">1</p>
                        <p style={{fontWeight: "500", fontSize: "14px" }}>Projects</p>
                    </NavLink>
                    <NavLink to={`/project/${projectID}/widgetconfiguration`} className="PNBMContainer">
                        <p className="PNBMIcon">2</p>
                        <p style={{fontWeight: "500", fontSize: "14px" }}>Widget Configurations</p>
                    </NavLink>
                </div>
            </div>
            <div className="ProjectNavbarContainerLower">
                <NavLink to={`/project/${projectID}/settings`} className="PNBMContainer">
                    <svg className="PNBMIcon" style={{ padding: "6px", width: "35px", height: "35px" }} width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.38">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.3102 21.03C15.2102 21.71 14.5902 22.25 13.8502 22.25H10.1502C9.41023 22.25 8.79023 21.71 8.70023 20.98L8.43023 19.09C8.16023 18.95 7.90023 18.8 7.64023 18.63L5.84023 19.35C5.14023 19.61 4.37023 19.32 4.03023 18.7L2.20023 15.53C1.85023 14.87 2.00023 14.09 2.56023 13.65L4.09023 12.46C4.08023 12.31 4.07023 12.16 4.07023 12C4.07023 11.85 4.08023 11.69 4.09023 11.54L2.57023 10.35C1.98023 9.90001 1.83023 9.09001 2.20023 8.47001L4.05023 5.28001C4.39023 4.66001 5.16023 4.38001 5.84023 4.65001L7.65023 5.38001C7.91023 5.21001 8.17023 5.06001 8.43023 4.92001L8.70023 3.01001C8.79023 2.31001 9.41023 1.76001 10.1402 1.76001H13.8402C14.5802 1.76001 15.2002 2.30001 15.2902 3.03001L15.5602 4.92001C15.8302 5.06001 16.0902 5.21001 16.3502 5.38001L18.1502 4.66001C18.8602 4.40001 19.6302 4.69001 19.9702 5.31001L21.8102 8.49001C22.1702 9.15001 22.0102 9.93001 21.4502 10.37L19.9302 11.56C19.9402 11.71 19.9502 11.86 19.9502 12.02C19.9502 12.18 19.9402 12.33 19.9302 12.48L21.4502 13.67C22.0102 14.12 22.1702 14.9 21.8202 15.53L19.9602 18.75C19.6202 19.37 18.8502 19.65 18.1602 19.38L16.3602 18.66C16.1002 18.83 15.8402 18.98 15.5802 19.12L15.3102 21.03ZM10.6202 20.25H13.3802L13.7502 17.7L14.2802 17.48C14.7202 17.3 15.1602 17.04 15.6202 16.7L16.0702 16.36L18.4502 17.32L19.8302 14.92L17.8002 13.34L17.8702 12.78L17.8733 12.7531C17.9023 12.5027 17.9302 12.2607 17.9302 12C17.9302 11.73 17.9002 11.47 17.8702 11.22L17.8002 10.66L19.8302 9.08001L18.4402 6.68001L16.0502 7.64001L15.6002 7.29001C15.1802 6.97001 14.7302 6.71001 14.2702 6.52001L13.7502 6.30001L13.3802 3.75001H10.6202L10.2502 6.30001L9.72023 6.51001C9.28023 6.70001 8.84023 6.95001 8.38023 7.30001L7.93023 7.63001L5.55023 6.68001L4.16023 9.07001L6.19023 10.65L6.12023 11.21C6.09023 11.47 6.06023 11.74 6.06023 12C6.06023 12.26 6.08023 12.53 6.12023 12.78L6.19023 13.34L4.16023 14.92L5.54023 17.32L7.93023 16.36L8.38023 16.71C8.81023 17.04 9.24023 17.29 9.71023 17.48L10.2402 17.7L10.6202 20.25ZM15.5002 12C15.5002 13.933 13.9332 15.5 12.0002 15.5C10.0672 15.5 8.50023 13.933 8.50023 12C8.50023 10.067 10.0672 8.50001 12.0002 8.50001C13.9332 8.50001 15.5002 10.067 15.5002 12Z" fill="#1D1B20" />
                        </g>
                    </svg>
                    <p style={{fontWeight: "500", fontSize: "14px" }}>Settings</p>
                </NavLink>
            </div>
        </div>
    )
}

const ProjectNavbar = () => {
    return useMemo(() => <ProjectNavbarFunction />)
}

export default ProjectNavbar;
