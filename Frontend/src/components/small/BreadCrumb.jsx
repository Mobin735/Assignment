import styled from "styled-components";
import languageIMG from "../../assets/language.png";
import { useMemo } from "react";

const BreadCrumbContainer = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    width: 100%;
    justify-content: space-between;
`
const BreadCrumbLeft = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;

    p {
        font-size: 20px;
        font-weight: 500;
    }
`

const BreadCrumbRight = styled.div`
    display: flex;
    column-gap: 18px;

    div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        column-gap: 10px;

        p {
            font-weight: 700;
            font-size: 20px;
        }
    }
`

function BreadCrumbFunction({current_location, project_name}) {
    const projectname = project_name;
    const location = current_location;
    return (
        <BreadCrumbContainer>
            <BreadCrumbLeft>
                <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.0002 13.4116L36.8335 23.1616V40.0833H32.5002V27.0833H19.5002V40.0833H15.1668V23.1616L26.0002 13.4116ZM26.0002 7.58325L4.3335 27.0833H10.8335V44.4166H23.8335V31.4166H28.1668V44.4166H41.1668V27.0833H47.6668L26.0002 7.58325Z" fill="#7E22CE" />
                </svg>
                /
                <p style={{ color: "#999999" }}>{projectname}</p>
                /
                <p style={{ color: "var(--primaryColor)" }}>{location}</p>
            </BreadCrumbLeft>
            <BreadCrumbRight>
                <div>
                    <svg width="20" height="20" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.666748 0.333252L14.0001 13.6666L27.3334 0.333252H0.666748Z" fill="#1E1E1E" />
                    </svg>
                    <p>EN</p>
                    <img style={{ width: "35px", height: "35px" }} src={languageIMG} alt="img" />
                </div>
                <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.9998 58C34.9332 58 37.3332 55.6 37.3332 52.6667H26.6665C26.6665 55.6 29.0665 58 31.9998 58ZM47.9998 42V28.6667C47.9998 20.48 43.6532 13.6267 35.9998 11.8133V10C35.9998 7.78667 34.2132 6 31.9998 6C29.7865 6 27.9998 7.78667 27.9998 10V11.8133C20.3732 13.6267 15.9998 20.4533 15.9998 28.6667V42L10.6665 47.3333V50H53.3332V47.3333L47.9998 42ZM42.6665 44.6667H21.3332V28.6667C21.3332 22.0533 25.3598 16.6667 31.9998 16.6667C38.6398 16.6667 42.6665 22.0533 42.6665 28.6667V44.6667Z" fill="#3C3C3C" />
                </svg>
            </BreadCrumbRight>
        </BreadCrumbContainer>
    )
}

const BreadCrumb = ({current_location, project_name}) => {
    return useMemo(() => <BreadCrumbFunction current_location={current_location} project_name={project_name}/>)
}

export default BreadCrumb;