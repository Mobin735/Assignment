import { useState } from "react";
import ProjectNavbar from "../../components/medium/project_Navbar/ProjectNavbar";
import BreadCrumb from "../../components/small/BreadCrumb";
import './Projects.css'
import Youtube from '../../assets/youtube.png'
import Spotify from '../../assets/spotify.png'
import RSS from '../../assets/rss.png'

const serviceImages = {
    Youtube: Youtube,
    Spotify: Spotify,
    RSS: RSS,
};

export default function Projects(params) {
    const [editDesc, setEditDesc] = useState(false);
    const [activeButton, setActiveButton] = useState('');
    const [subProjects, setSubProjects] = useState('asasa', "sasas");

    const handleUploadButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        const modalTitle = UploadModalCenter.querySelector('.modal-title')
        const modalBodyInput = UploadModalCenter.querySelector('.modal-body input')
        modalTitle.innerHTML = `<img style="width: 55px; height: 55px; margin-right: 5px" src="${serviceImages[buttonName]}" alt="Recipient Image"> Upload from ${buttonName}`;
        modalBodyInput.value = recipient
    };

    return (
        <div className="ProjectsContainer">
            <ProjectNavbar />
            <div className="ProjectsSubContainer">
                <BreadCrumb project_name={"projectname"} current_location={"Upload"} />
                <div className="ProjectDetailsTitle">
                    <p style={{ color: "var(--primaryColor)" }}>{"Upload"}</p>
                    {
                        editDesc &&
                        <div className="ProjectDetailsEditButton">
                            <button style={{ border: "1px solid var(--highlightColor)", color: "var(--highlightColor)" }}>Discard</button>
                            <button style={{ background: "var(--secondaryColor)", color: "white" }} >Save & exit</button>
                        </div>
                    }
                </div>
                <div className="modal fade" style={{ background: '#dddddd73', paddingRight: "0px" }} id="UploadModalCenter" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "700px" }}>
                        <div className="modal-content" style={{ borderRadius: "20px", border: "none", padding: "5px 20px" }}>
                            <div className="modal-header" style={{ borderBottom: "none" }}>
                                <p style={{ color: "var(--textColor)", fontSize: "23px", fontWeight: "700" }} className="modal-title" id="exampleModalLongTitle">Create Project</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" style={{ display: "flex", flexDirection: "column", rowGap: "7px", padding: "0px 1rem" }}>
                                <div>
                                    <p style={{ color: "var(--textColor)" }}>Name</p>
                                    <input style={{ width: "100%", border: "1px solid #c2c2c2", borderRadius: "8px", padding: "7px 15px", fontSize: "17px" }} type='text' placeholder='Type here'></input>
                                </div>
                                <div>
                                    <p style={{ color: "var(--textColor)" }}>Description</p>
                                    <textarea rows="9" cols="50" style={{ resize: "none", width: "100%", border: "1px solid #c2c2c2", borderRadius: "8px", padding: "7px 15px", fontSize: "17px" }} placeholder='Type here'></textarea>
                                </div>
                            </div>
                            <div className="modal-footer" style={{ borderTop: "none", columnGap: "15px" }}>
                                <button style={{ background: "#211935", border: "none", borderRadius: "7px", color: "white", padding: "10px 20px", fontWeight: "600" }} type="button" data-bs-dismiss="modal">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ProjectUpload">
                    <div className="ProjectUploadSocial">
                        <div className="MediaUploadIcons" type="button" data-bs-toggle="modal" data-bs-target="#UploadModalCenter" onClick={() => handleUploadButtonClick("Youtube")}>
                            <img style={{ width: "58px", height: "58px" }} src={Youtube} alt="youtube" />
                            <div>
                                <p>Upload</p>
                                <p>Youtube Video</p>
                            </div>
                        </div>
                        <div className="MediaUploadIcons" type="button" data-bs-toggle="modal" data-bs-target="#UploadModalCenter" onClick={() => handleUploadButtonClick("Spotify")}>
                            <img style={{ width: "58px", height: "58px" }} src={Spotify} alt="youtube" />
                            <div>
                                <p>Upload</p>
                                <p>Spotify Podcast</p>
                            </div>
                        </div>
                        <div className="MediaUploadIcons" type="button" data-bs-toggle="modal" data-bs-target="#UploadModalCenter" onClick={() => handleUploadButtonClick("RSS")}>
                            <img style={{ width: "58px", height: "58px" }} src={RSS} alt="youtube" />
                            <div>
                                <p>Upload</p>
                                <p>RSS Feed</p>
                            </div>
                        </div>
                        {/* <div className="MediaUploadIcons" type="button" data-bs-toggle="modal" data-bs-target="#UploadModalCenter" onClick={() => handleUploadButtonClick("Youtube")}>
                            <img style={{ width: "58px", height: "58px" }} src={Youtube} alt="youtube" />
                            <div>
                                <p>Upload</p>
                                <p>Youtube Video</p>
                            </div>
                        </div> */}
                        {/* <div className="MediaUploadIcons" type="button" data-bs-toggle="modal" data-bs-target="#UploadModalCenter" onClick={() => handleUploadButtonClick("Spotify")}>
                            <img style={{ width: "58px", height: "58px" }} src={Spotify} alt="youtube" />
                            <div>
                                <p>Upload</p>
                                <p>Spotify Podcast</p>
                            </div>
                        </div> */}
                        {/* <div className="MediaUploadIcons" type="button" data-bs-toggle="modal" data-bs-target="#UploadModalCenter" onClick={() => handleUploadButtonClick("RSS")}>
                            <img style={{ width: "58px", height: "58px" }} src={RSS} alt="youtube" />
                            <div>
                                <p>Upload</p>
                                <p>RSS Feed</p>
                            </div>
                        </div> */}
                    </div>
                    {
                        subProjects.length <= 0 ?
                            <>
                                <p style={{ textAlign: "center", padding: "15px 0", fontWeight: "500", fontSize: "25px", color: "#999999" }}>or</p>
                                <div className="ProjectUploadFile">
                                    <svg width="110" height="110" viewBox="0 0 128 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M103.2 54.4666C99.5733 36.0666 83.4133 22.2533 64 22.2533C48.5867 22.2533 35.2 31 28.5333 43.8C12.48 45.5066 0 59.1066 0 75.5866C0 93.24 14.3467 107.587 32 107.587H101.333C116.053 107.587 128 95.64 128 80.92C128 66.84 117.067 55.4266 103.2 54.4666ZM101.333 96.92H32C20.2133 96.92 10.6667 87.3733 10.6667 75.5866C10.6667 64.6533 18.8267 55.5333 29.6533 54.4133L35.36 53.8266L38.0267 48.76C43.0933 39 53.0133 32.92 64 32.92C77.9733 32.92 90.0267 42.84 92.7467 56.5466L94.3467 64.5466L102.507 65.1333C110.827 65.6666 117.333 72.6533 117.333 80.92C117.333 89.72 110.133 96.92 101.333 96.92ZM42.6667 70.2533H56.2667V86.2533H71.7333V70.2533H85.3333L64 48.92L42.6667 70.2533Z" fill="#7E22CE" />
                                    </svg>
                                    <div style={{ textAlign: "center" }}>
                                        <p style={{ fontSize: "17px", fontWeight: "500", color: "#49454F" }}>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                                        <p style={{ fontSize: "14px", fontWeight: "500", color: "#00000066" }}>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
                                    </div>
                                    <button>Select File</button>
                                </div>
                            </> :
                            <>
                                <div className="WidgetRedirect">
                                    <p>All files are processed! Your widget is ready to go!</p>
                                    <button>Try it out!</button>
                                </div>
                                <div className="ProjectFiles">
                                    <table className="FilesTable">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Upload Date & Time</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sample Name</td>
                                                <td>12 Jun 24 | 15:67</td>
                                                <td>Done</td>
                                                <td>
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sample Name</td>
                                                <td>12 Jun 24 | 15:67</td>
                                                <td>Done</td>
                                                <td>
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sample Name</td>
                                                <td>12 Jun 24 | 15:67</td>
                                                <td>Done</td>
                                                <td>
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Sample Name</td>
                                                <td>12 Jun 24 | 15:67</td>
                                                <td>Done</td>
                                                <td>
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
};
