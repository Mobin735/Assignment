import { useEffect, useState } from "react";
import ProjectNavbar from "../../components/medium/project_Navbar/ProjectNavbar";
import BreadCrumb from "../../components/small/BreadCrumb";
import './Projects.css'
import Youtube from '../../assets/youtube.png'
import Spotify from '../../assets/spotify.png'
import RSS from '../../assets/rss.png'
import { useParams } from "react-router-dom";
import Loader from "../../components/small/Loader";
import GetCookie from "../../utils/GetCookie";
import axios from "axios";

const serviceImages = {
    Youtube: Youtube,
    Spotify: Spotify,
    RSS: RSS,
};

export default function Projects(params) {
    
    const [file, setFile] = useState({
        fileID: '',
        fileName: '',
        fileDesc: ''
    })
    const [editDesc, setEditDesc] = useState(false);
    const [editDescBox, setEditDescBox] = useState(false);
    const [data, setData] = useState('asasa', "sasas");
    const [loaderToggle, setLoaderToggle] = useState(false);
    const { projectID } = useParams();

    useEffect(() => {
        getProjectsData();
    },[])

    const getProjectsData = async () => {
        const cookie = GetCookie();
        setLoaderToggle(true);
        const result = await axios.get(`${import.meta.env.VITE_APP_API}/api/project/${projectID}`, {
            headers: {
                token: cookie
            }
        })
        result.data.filesData && setData(result.data.filesData);
        setLoaderToggle(false);
    }

    const handleUploadButtonClick = (buttonName) => {
        const modalTitle = UploadModalCenter.querySelector('.modal-title')
        const modalBodyInput = UploadModalCenter.querySelector('.modal-body input')
        modalTitle.innerHTML = `<img style="width: 55px; height: 55px; margin-right: 5px" src="${serviceImages[buttonName]}" alt="Recipient Image"> Upload from ${buttonName}`;
    };

    const editFile = async (fileID) => {
        setLoaderToggle(true);
        const result = await axios.get(`${import.meta.env.VITE_APP_API}/api/file/${fileID}`);
        result.data.fileData && setFile(result.data.fileData);
        setLoaderToggle(false);
        setEditDesc(true);
    }

    const editButtonToggle = () => {
        document.getElementById('fileDescEdit').removeAttribute('readOnly');
        document.getElementById('fileNameEdit').removeAttribute('readOnly');
        setEditDescBox(true)
    }

    const discardEdit = () => {
        setEditDescBox(false);
        setEditDesc(false);
    }

    const saveEdit = async () => {
        setLoaderToggle(true);
        await axios.post(`${import.meta.env.VITE_APP_API}/api/file/updatefile`,{
            projectID: projectID,
            fileID: file.fileID,
            fileName: file.fileName,
            fileDesc: file.fileDesc
        })
        setEditDescBox(false);
        setEditDesc(false);
        getProjectsData();
    }

    const deleteFile = async (fileID) => {
        setLoaderToggle(true);
        await axios.post(`${import.meta.env.VITE_APP_API}/api/file/deletefile`,{
            fileID: fileID,
            projectID: projectID
        });
        getProjectsData();
    }

    const createFile = async () => {
        setLoaderToggle(true);
        const result = await axios.post(`${import.meta.env.VITE_APP_API}/api/file/createfile`,{
            projectID: projectID,
            fileName: file.fileName,
            fileDesc: file.fileDesc
        });
        result.data.filesData && setData(result.data.filesData);
        setFile({
            fileID: '',
            fileName: '',
            fileDesc: ''
        })
        setLoaderToggle(false);
    }

    const getUploadDate = (unformattedDate) => {
        const date = new Date(unformattedDate);
        const options = { day: '2-digit', month: 'short', year: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false };
        const formattedDate = date.toLocaleDateString('en-GB', options).replace(',', ' |').replace(' ', ' ');
        return formattedDate
    }

    return (
        <div className="ProjectsContainer">
            <ProjectNavbar />
            {
                loaderToggle && <Loader />
            }
            <div className="ProjectsSubContainer">
                <BreadCrumb project_name={data.projectName} current_location={editDesc ? "Transcript" : "Upload"} />
                <div className="ProjectDetailsTitle">
                    <p style={{ color: "var(--primaryColor)" }}>{editDesc ? "Edit Transcript" : "Upload"}</p>
                    {
                        (editDesc && editDescBox) &&
                        <div className="ProjectDetailsEditButton">
                            <button onClick={discardEdit} style={{ border: "1px solid var(--highlightColor)", color: "var(--highlightColor)" }}>Discard</button>
                            <button onClick={saveEdit} style={{ background: "var(--secondaryColor)", color: "white" }} >Save & exit</button>
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
                                    <input value={file.fileName} onChange={(el) => setFile({ ...file, fileName: el.target.value})} autoComplete="off" id="fileName" style={{ width: "100%", border: "1px solid #c2c2c2", borderRadius: "8px", padding: "7px 15px", fontSize: "17px" }} type='text' placeholder='Type here'></input>
                                </div>
                                <div>
                                    <p style={{ color: "var(--textColor)" }}>Description</p>
                                    <textarea value={file.fileDesc} onChange={(el) => setFile({ ...file, fileDesc: el.target.value})} autoComplete="off" id="fileDesc" rows="9" cols="50" style={{ resize: "none", width: "100%", border: "1px solid #c2c2c2", borderRadius: "8px", padding: "7px 15px", fontSize: "17px" }} placeholder='Type here'></textarea>
                                </div>
                            </div>
                            <div className="modal-footer" style={{ borderTop: "none", columnGap: "15px" }}>
                                <button onClick={createFile} style={{ background: "#211935", border: "none", borderRadius: "7px", color: "white", padding: "10px 30px", fontWeight: "600" }} type="button" data-bs-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    editDesc ?
                        <div className="FileDescEditContainer">
                            <div className="FDECHead">
                                <button onClick={editButtonToggle}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 6.19L2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19Z" fill="white" />
                                    </svg>
                                    Edit Mode
                                </button>
                                <svg style={{ border: "1px solid var(--primaryColor)", borderRadius: "53%", padding: "3px" }} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.6631 19.6006H20.5769L20.1919 19.2293C21.5394 17.6618 22.3506 15.6268 22.3506 13.4131C22.3506 8.47684 18.3494 4.47559 13.4131 4.47559C8.4769 4.47559 4.47565 8.47684 4.47565 13.4131C4.47565 18.3493 8.4769 22.3506 13.4131 22.3506C15.6269 22.3506 17.6619 21.5393 19.2294 20.1918L19.6006 20.5768V21.6631L26.4756 28.5243L28.5244 26.4756L21.6631 19.6006ZM13.4131 19.6006C9.9894 19.6006 7.22565 16.8368 7.22565 13.4131C7.22565 9.98934 9.9894 7.22559 13.4131 7.22559C16.8369 7.22559 19.6006 9.98934 19.6006 13.4131C19.6006 16.8368 16.8369 19.6006 13.4131 19.6006Z" fill="#7E22CE" />
                                </svg>
                            </div>
                            <div className="FDECBody">
                                <input autoComplete="off" id="fileNameEdit" value={file.fileName} readOnly onChange={(el) => setFile({ ...file, fileName: el.target.value})} style={{ border: "none", fontSize: "20px", fontWeight: "600", color: "var(--primaryColor)", outline: "none" }} type="text" placeholder="File Name" />
                                <textarea autoComplete="off" id="fileDescEdit" readOnly value={file.fileDesc} onChange={(el) => setFile({ ...file, fileDesc: el.target.value})} rows="13" cols="50" style={{ resize: "none", border: "none", fontSize: "18px", fontWeight: "400", color: "rgb(97 97 97)", outline: "none" }} type="text" placeholder="File Name" />
                            </div>
                        </div> :
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
                                data.files?.length <= 0 ?
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
                                                    {
                                                        data.files?.map(file => (
                                                            <tr key={file.fileID}>
                                                                <td>{file.fileName}</td>
                                                                <td>{getUploadDate(file.uploadDate)}</td>
                                                                <td>Done</td>
                                                                <td>
                                                                    <button onClick={() => editFile(file.fileID)}>Edit</button>
                                                                    <button onClick={() => deleteFile(file.fileID)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </>
                            }
                        </div>
                }
            </div>
        </div>
    )
};
