import './Display.css'
import botplaceholder from '../../../../assets/botplaceholder.png'

export default function Display({editToggle, properties, editProperties }) {

    const convertImage = (target) => {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const maxWidth = 300;
                const scaleSize = maxWidth / img.width;
                canvas.width = maxWidth;
                canvas.height = img.height * scaleSize;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const base64String = canvas.toDataURL('image/jpeg', 0.7); 
                document.getElementById('botImage').src = base64String;
                editProperties('chatbot_image', base64String);
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    };
    
    return (
        <div className='DisplayContainer'>
            <div className='DCUpperProperties'>
                <div className='GCFields primarycolor'>
                    <p>Primary Color</p>
                    <div style={{ display: "flex", columnGap: "15px" }}>
                        <input value={properties.primary_color} onChange={(e) => editProperties('primary_color',e.target.value)} readOnly={!editToggle} type="text" style={{ width: "100%" }} />
                        <div className='ColorPicker' style={{ background: properties.primary_color }} />
                    </div>
                    <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
                </div>
                <div className='GCFields fontcolor'>
                    <p>Font Color</p>
                    <div style={{ display: "flex", columnGap: "15px" }}>
                        <input value={properties.font_color} onChange={(e) => editProperties('font_color',e.target.value)} readOnly={!editToggle} type="text" style={{ width: "100%" }} />
                        <div className='ColorPicker' style={{ background: properties.font_color }} />
                    </div>
                    <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
                </div>
                <div className='GCFields fontsize'>
                    <p>Font Size (in px)</p>
                    <input readOnly={!editToggle} type="number" value={properties.font_size} onChange={(e) => editProperties('font_size',e.target.value)} />
                    <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
                </div>
                <div className='GCFields chatheight'>
                    <p>Chat Height (in % of total screen)</p>
                    <input readOnly={!editToggle} type="text" value={properties.chat_height} onChange={(e) => editProperties('chat_height',e.target.value)} />
                    <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
                </div>
                <div className='GCFields showsources' style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                        <p style={{ paddingBottom: '0px' }}>Show Sources</p>
                        <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
                    </div>
                    <label style={{pointerEvents: editToggle ? "auto" : "none" }} className="switch">
                        <input readOnly={true} type="checkbox" checked={properties.show_sources} onChange={(e) => editProperties('show_sources',e.target.checked)} />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <hr style={{ margin: "2rem 0", opacity: "0.5" }} />
            <div className='DCLowerProperties'>
                <p style={{ paddingBottom: "15px", fontSize: "20px", color: "var(--primaryColor)", fontWeight: "600" }}>Chat Icon</p>
                <div className='DCLPContainer'>
                    <div className='GCFields'>
                        <p>Chat Icon Size</p>
                        <select name="chaticonsize" style={{pointerEvents: editToggle ? "auto" : "none" }} value={properties.chat_icon_size} onChange={(e) => editProperties('chat_icon_size',e.target.value)} >
                            <option value="Small (48x48 px)">Small (48x48 px)</option>
                            <option value="Medium (52x52 px)">Medium (52x52 px)</option>
                            <option value="Large (72x72 px)">Large (72x72 px)</option>
                        </select>
                    </div>
                    <div className='GCFields'>
                        <p>Position on Screen</p>
                        <select name="positiononscreen" style={{pointerEvents: editToggle ? "auto" : "none" }} value={properties.position_screen} onChange={(e) => editProperties('position_screen',e.target.value)} >
                            <option value="Bottom Right">Bottom Right</option>
                            <option value="Bottom Left">Bottom Left</option>
                            <option value="Top Right">Top Right</option>
                            <option value="Top Left">Top Left</option>
                        </select>
                    </div>
                    <div className='GCFields'>
                        <p>Distance from Bottom (in px)</p>
                        <input readOnly={!editToggle} type="number" value={properties.distance_bottom} onChange={(e) => editProperties('distance_bottom',e.target.value)} />
                    </div>
                    <div className='GCFields'>
                        <p>Horizontal Distance (in px)</p>
                        <input readOnly={!editToggle} type="number" value={properties.horizontal_distance} onChange={(e) => editProperties('horizontal_distance',e.target.value)} />
                    </div>
                </div>
                <div className='BotIcon'>
                    <p style={{ paddingTop: "30px", paddingBottom: "15px", fontSize: "20px", color: "var(--textColor)", fontWeight: "600" }}>Bot Icon</p>
                    <div className='BotIconContainer'>
                        <img id='botImage' style={{ width: "6rem", aspectRatio: '1', borderRadius: "50%" }} src={properties.chatbot_image == '' ? botplaceholder : properties.chatbot_image} alt="boticon" />
                        <div>
                            <input onChange={(el) => convertImage(el.target)} type="file" id="chatbot-btn" style={{display: "none"}}/>
                            <label style={{pointerEvents: editToggle ? "auto" : "none" }} htmlFor="chatbot-btn" className='BotIconUploadButton'>
                                Upload Image
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0417 23.3333V11.4479L12.25 15.2396L10.2084 13.125L17.5 5.83334L24.7917 13.125L22.75 15.2396L18.9584 11.4479V23.3333H16.0417ZM8.75004 29.1667C7.94796 29.1667 7.26108 28.8808 6.68942 28.3092C6.11775 27.7375 5.8324 27.0511 5.83338 26.25V21.875H8.75004V26.25H26.25V21.875H29.1667V26.25C29.1667 27.0521 28.8809 27.739 28.3092 28.3106C27.7375 28.8823 27.0512 29.1677 26.25 29.1667H8.75004Z" fill="white" />
                                </svg>
                            </label>
                            <p style={{fontSize: "13px"}}>{`Recommended Size: 48x48px`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
