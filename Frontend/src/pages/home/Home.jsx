import { useState } from 'react';
import Navbar from '../../components/medium/Navbar';
import IntroSvg from '../../assets/IntroImage.svg';
import './Home.css';

export default function Home(params) {
    const [projects, setProjects] = useState(1); //use length

    const getName = (name) => {
        const nameParts = name.split(' ');
        let initials = '';
        for (let i = 0; i < Math.min(2, nameParts.length); i++) {
            initials += nameParts[i].charAt(0).toUpperCase();
        }
        return initials;
    };

    const getBackgroundColor = () => {
        const colors = ["#7E22CE","#F8A01D","#6366F1"]
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    return (
        <>
            <Navbar />
            <div className='HomeContainer'>
                <button className='BackToHome'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0613 8.18399L21.1252 13.6415V23.1132H18.6996V15.8366H11.423V23.1132H8.99746V13.6415L15.0613 8.18399ZM15.0613 4.92163L2.93359 15.8366H6.57191V25.5388H13.8486V18.2621H16.2741V25.5388H23.5507V15.8366H27.1891L15.0613 4.92163Z" fill="#3C3C3C" />
                    </svg>
                    <p style={{ color: "var(--textColor)" }}>Back to Home</p>
                </button>
                <div class="modal fade" style={{background: '#dddddd73'}} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content" style={{borderRadius: "20px", border: "none"}}>
                            <div class="modal-header" style={{borderBottom: "none"}}>
                                <p style={{ color: "var(--textColor)", fontSize: "23px", fontWeight: "700"}} class="modal-title" id="exampleModalLongTitle">Create Project</p>
                            </div>
                            <div class="modal-body" style={{display: "flex", flexDirection: "column", rowGap: "7px", padding: "0px 1rem"}}>
                                <p style={{ color: "var(--textColor)"}}>Enter Project Name:</p>
                                <input style={{width:"100%", border: "1px solid #c2c2c2", borderRadius: "8px", padding: "7px 15px", fontSize: "17px"}} type='text' placeholder='Type here'></input>
                                <p style={{ color: "var(--highlightColor)", fontSize: "13px"}}>Project Name Can't be empty</p>
                            </div>
                            <div class="modal-footer" style={{borderTop: "none"}}>
                                <button className='CancleProjectCreate' style={{ background: "none", border: "none", color: "var(--highlightColor)", fontWeight: "600"}} type="button" data-dismiss="modal">Cancle</button>
                                <button style={{ background: "var(--primaryColor)", border: "none", borderRadius: "7px", color: "white", padding: "3px 15px", fontWeight: "600" }} type="button">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    projects == 0 ?
                        (
                            <div className='IntroContainer'>
                                <p style={{ color: "var(--primaryColor)", fontSize: "40px", fontWeight: "700" }}>Create a New Project</p>
                                <img src={IntroSvg} />
                                <p style={{ color: "var(--textColor)", fontSize: "20px", fontWeight: "400", textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
                                <button className='CreateNewProjectButton' type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                    <svg width="37" height="37" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z" fill="#F8F8F8" />
                                    </svg>
                                    <p>Create New Project</p>
                                </button>
                            </div>
                        ) :
                        (
                            <div className='ProejctsContainer' style={{marginTop: "10px"}}>
                                <div className='ProjectsNavBar'>
                                    <p style={{fontSize: "3rem",fontWeight: "700", color: "var(--primaryColor)"}}>Projects</p>
                                    <button className='CreateNewProjectButton' style={{padding:"10px 15px", height: 'fit-content'}} type="button" data-toggle="modal" data-target="#exampleModalCenter">
                                        <svg width="30" height="30" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z" fill="#F8F8F8" />
                                        </svg>
                                        <p>Create New Project</p>
                                    </button>
                                </div>
                                <div className='Projects'>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                    <div className='Project'>
                                        <p className='ProjectName' style={{background: getBackgroundColor()}}>SP</p>
                                        <div className='ProjectInfo'>
                                            <div className='ProjectDetails'>
                                                <p style={{ color: "var(--primaryColor)", fontWeight: "600", lineHeight: "15px", fontSize: "15px"}}>{getName("Sample Project")}</p>
                                                <p style={{fontSize: "12px", color: "var(--textcolor)"}}>4 Episodes</p>
                                            </div>
                                            <p style={{fontSize: "12px", color: "#898989"}}>Last edited a week ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
};
