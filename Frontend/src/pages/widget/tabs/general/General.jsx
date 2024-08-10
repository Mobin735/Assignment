import './General.css'

export default function General({ editToggle, properties, editProperties }) {

    return (
        <div className="GeneralContainer">
            <div className='GCFields'>
                <p>Chatbot Name</p>
                <input readOnly={!editToggle} type="text" value={properties.chatbot_name} onChange={(e) => editProperties('chatbot_name',e.target.value)}/>
                <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
            </div>
            <div className='GCFields'>
                <p>Welcome Message</p>
                <input readOnly={!editToggle} type="text" value={properties.welcome_message} onChange={(e) => editProperties('welcome_message',e.target.value)}/>
                <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
            </div>
            <div className='GCFields'>
                <p>Input Placeholder</p>
                <input readOnly={!editToggle} type="text" value={properties.input_holder} onChange={(e) => editProperties('input_holder',e.target.value)}/>
                <small>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</small>
            </div>
        </div>
    )
};
